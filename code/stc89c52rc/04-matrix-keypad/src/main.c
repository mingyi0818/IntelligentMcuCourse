/*
 * Project: 04-matrix-keypad Matrix Keypad
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: 4x4 matrix keypad scanning (row-column scanning), output key value via UART
 * Pin: Rows P1.0-P1.3, Columns P1.4-P1.7, UART P3.0/P3.1
 */
#include <reg52.h>
#include <stdio.h>

#define KEY_PORT P1   /* Matrix keypad connected to P1 port */

/*
 * UART initialization function
 * Config: mode 1, baud rate 9600, use T1 as baud rate generator
 * At 11.0592MHz, T1 reload value=0xFD -> baud rate 9600
 */
void UART_Init(void)
{
    SCON = 0x50;        /* UART mode 1, 8-bit UART, receive enabled */
    TMOD |= 0x20;       /* T1 mode 2, 8-bit auto-reload */
    TH1 = 0xFD;         /* Baud rate 9600 reload value */
    TL1 = 0xFD;
    TR1 = 1;            /* Start T1 */
    TI = 1;             /* Set TI=1 to enable printf output */
}

/*
 * UART send one character
 */
void UART_SendChar(unsigned char c)
{
    SBUF = c;           /* Write to send buffer to start transmission */
    while (!TI);        /* Wait for transmission complete */
    TI = 0;             /* Clear transmission complete flag */
}

/*
 * UART send string
 */
void UART_SendString(char *str)
{
    while (*str != '\0')
    {
        UART_SendChar(*str++);
    }
}

/*
 * Millisecond delay function at 11.0592MHz
 */
void DelayMs(unsigned int ms)
{
    unsigned int i, j;
    for (i = 0; i < ms; i++)
    {
        for (j = 0; j < 114; j++)
        {
            /* Empty loop */
        }
    }
}

/*
 * Matrix keypad scan function: row-column scanning method
 * Return: key number 1-16, 0 means no key pressed
 * Principle: first set all rows to 0 and all columns to 1, detect if any column is 0
 *            if so, determine column number; then set each row to 0 to determine row number
 */
unsigned char MatrixKeyScan(void)
{
    unsigned char key_val = 0;
    unsigned char temp;

    /* Step 1: detect if any key is pressed */
    KEY_PORT = 0x0F;     /* Rows 0000, columns 1111 */
    if (KEY_PORT != 0x0F)/* If any column becomes 0, a key is pressed */
    {
        DelayMs(10);     /* Debounce */
        if (KEY_PORT != 0x0F)
        {
            /* Step 2: determine column number */
            KEY_PORT = 0x0F;  /* 0000 1111 */
            temp = KEY_PORT;
            switch (temp)
            {
                case 0x07: key_val = 1; break;  /* Column 0: 0000 0111 */
                case 0x0B: key_val = 2; break;  /* Column 1: 0000 1011 */
                case 0x0D: key_val = 3; break;  /* Column 2: 0000 1101 */
                case 0x0E: key_val = 4; break;  /* Column 3: 0000 1110 */
            }

            /* Step 3: determine row number */
            KEY_PORT = 0xF0;  /* 1111 0000, rows output 1 */
            temp = KEY_PORT;
            switch (temp)
            {
                case 0x70: key_val += 0;  break; /* Row 0: 0111 0000 */
                case 0xB0: key_val += 4;  break; /* Row 1: 1011 0000 */
                case 0xD0: key_val += 8;  break; /* Row 2: 1101 0000 */
                case 0xE0: key_val += 12; break; /* Row 3: 1110 0000 */
            }

            /* Wait for key release */
            while (KEY_PORT != 0x0F);
        }
    }
    return key_val;
}

/*
 * Main function: initialize UART then scan keypad in a loop, output key value via UART
 */
void main(void)
{
    unsigned char key;

    UART_Init();               /* Initialize UART 9600 */
    UART_SendString("Matrix Keypad Ready\r\n");

    while (1)
    {
        key = MatrixKeyScan(); /* Scan matrix keypad */
        if (key != 0)          /* A key is pressed */
        {
            /* Convert key value 1-16 to character '0'-'9','A'-'F' for display */
            if (key <= 9)
            {
                UART_SendChar('0' + key - 1);  /* 1-9 -> '0'-'8' */
            }
            else if (key == 10)
            {
                UART_SendChar('9');
            }
            else
            {
                UART_SendChar('A' + key - 11); /* 11-16 -> 'A'-'F' */
            }
            UART_SendString("\r\n");
        }
    }
}
