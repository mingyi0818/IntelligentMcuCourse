/*
 * Project: 07-uart UART Communication
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: UART mode 1, baud rate 9600, receive char echo + count, with printf redirect
 * Pin: P3.0 RXD, P3.1 TXD
 */
#include <reg52.h>
#include <stdio.h>

/* Global variable: received character count */
unsigned int rx_count = 0;

/*
 * UART initialization: mode 1, baud rate 9600
 * T1 mode 2 (8-bit auto-reload) as baud rate generator
 * At 11.0592MHz T1 reload value=0xFD -> 9600bps
 */
void UART_Init(void)
{
    SCON = 0x50;        /* Mode 1, 8-bit UART, receive enabled (REN=1) */
    TMOD = 0x20;        /* T1 mode 2 */
    TH1 = 0xFD;         /* 9600 baud rate reload value */
    TL1 = 0xFD;
    TR1 = 1;            /* Start T1 */
    ES = 1;             /* Enable UART interrupt */
    EA = 1;             /* Enable global interrupt */
    TI = 1;             /* Set TI to enable printf output */
}

/*
 * UART send one character
 * Low-level function for printf redirection
 */
void UART_SendChar(unsigned char c)
{
    SBUF = c;           /* Write to send buffer */
    while (!TI);        /* Wait for transmission complete */
    TI = 0;             /* Clear transmission flag */
}

/*
 * putchar function redirect: make printf output to UART
 * Keil C51 compiler requires this function to be implemented
 * Return: the character sent
 */
char putchar(char c)
{
    UART_SendChar(c);
    return c;
}

/*
 * UART interrupt service routine
 * Handle receive: echo received character and count
 * Interrupt number 4 is UART interrupt
 */
void UART_ISR(void) interrupt 4
{
    unsigned char rx_data;

    if (RI)                     /* Receive interrupt flag */
    {
        RI = 0;                 /* Clear receive flag */
        rx_data = SBUF;         /* Read received data */
        rx_count++;             /* Receive count increment by 1 */

        /* Echo received character */
        UART_SendChar(rx_data);

        /* If carriage return received, output current count */
        if (rx_data == '\r')
        {
            printf("\nTotal received: %u chars\r\n", rx_count);
        }
    }
}

/*
 * Main function: initialize UART then loop output prompt message
 */
void main(void)
{
    UART_Init();                /* Initialize UART */
    printf("UART Echo Demo Ready\r\n");
    printf("Baudrate: 9600, Type anything...\r\n");

    while (1)
    {
        /* Main loop idle, receive handling done by interrupt */
        /* Embodies interrupt-driven UART communication model */
    }
}
