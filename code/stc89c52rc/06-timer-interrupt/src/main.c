/*
 * Project: 06-timer-interrupt Timer Interrupt
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: T0 mode 1 generates 50ms interrupt, 20 times accumulate to 1 second, second counter outputs via UART
 * Pin: UART P3.0/P3.1
 */
#include <reg52.h>
#include <stdio.h>

/* Global variable: 50ms interrupt count, 20 times = 1 second */
unsigned char count_50ms = 0;
/* Global variable: second counter */
unsigned int second = 0;

/*
 * UART initialization: mode 1, baud rate 9600, T1 as baud rate generator
 * Note: T1 uses mode 2 (8-bit auto-reload), T0 uses mode 1 (16-bit timer)
 */
void UART_Init(void)
{
    SCON = 0x50;        /* UART mode 1, 8-bit UART, receive enabled */
    TMOD = 0x21;        /* T1 mode 2 (auto-reload), T0 mode 1 (16-bit timer) */
    TH1 = 0xFD;         /* Baud rate 9600 reload value */
    TL1 = 0xFD;
    TR1 = 1;            /* Start T1 */
    TI = 1;             /* Set TI to enable printf */
}

/*
 * Timer T0 initialization: mode 1, 50ms timing
 * Machine cycle = 12/11.0592MHz ~= 1.085us
 * 50ms needs 50000/1.085 ~= 46083 machine cycles
 * Reload value = 65536 - 46083 = 19453 = 0x4BFD
 * So TH0=0x4B, TL0=0xFD
 */
void Timer0_Init(void)
{
    TH0 = 0x4B;         /* Timer high 8-bit reload value */
    TL0 = 0xFD;         /* Timer low 8-bit reload value */
    ET0 = 1;            /* Enable T0 interrupt */
    TR0 = 1;            /* Start T0 */
    EA = 1;             /* Enable global interrupt */
}

/*
 * T0 interrupt service routine: triggers every 50ms
 * Every 20 interrupts accumulate to 1 second, second counter increments and outputs via UART
 * Note: timer reload value must be restored in ISR
 */
void Timer0_ISR(void) interrupt 1
{
    TH0 = 0x4B;         /* Reload value */
    TL0 = 0xFD;
    count_50ms++;       /* 50ms count increment by 1 */
    if (count_50ms >= 20) /* 20x50ms=1 second */
    {
        count_50ms = 0;
        second++;       /* Second counter increment by 1 */
        /* Output current seconds via UART */
        printf("Second: %u\r\n", second);
    }
}

/*
 * Main function: initialize then empty loop, all work done by interrupt
 * Embodies "interrupt-driven" programming, CPU is idle most of the time
 */
void main(void)
{
    UART_Init();        /* Initialize UART */
    Timer0_Init();      /* Initialize T0 timer */
    printf("Timer Interrupt Demo Start\r\n");

    while (1)
    {
        /* Main loop idle, waiting for interrupt trigger */
        /* Other tasks can be handled here in real applications */
    }
}
