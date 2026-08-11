/*
 * Project: 08-lcd1602 LCD1602 Display
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: LCD1602 displays "Hello MCU!" and run time, with complete driver functions
 * Pin: RS-P2.5, RW-P2.6, E-P2.7, D0-D7-P0.0-P0.7
 */
#include <reg52.h>
#include <stdio.h>

/* LCD1602 control pin definitions */
#define LCD_DATA P0      /* 8-bit data bus on P0 port */
sbit LCD_RS = P2^5;      /* Register select: 0=command, 1=data */
sbit LCD_RW = P2^6;      /* Read/Write select: 0=write, 1=read */
sbit LCD_EN = P2^7;      /* Enable signal, falling edge triggers */

/* Global variable: run seconds */
unsigned int run_sec = 0;

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
 * LCD1602 write command function
 * Parameter: cmd - command byte to write
 * Principle: RS=0, RW=0, data to P0, EN generates falling edge
 */
void LCD_WriteCmd(unsigned char cmd)
{
    LCD_RS = 0;          /* Select command register */
    LCD_RW = 0;          /* Write operation */
    LCD_DATA = cmd;      /* Send command to data bus */
    LCD_EN = 1;          /* EN high level */
    DelayMs(1);          /* Hold briefly */
    LCD_EN = 0;          /* Falling edge, write command */
    DelayMs(1);          /* Wait for execution */
}

/*
 * LCD1602 write data function
 * Parameter: dat - data byte to write (character ASCII code)
 */
void LCD_WriteData(unsigned char dat)
{
    LCD_RS = 1;          /* Select data register */
    LCD_RW = 0;          /* Write operation */
    LCD_DATA = dat;      /* Send data to bus */
    LCD_EN = 1;          /* EN high level */
    DelayMs(1);
    LCD_EN = 0;          /* Falling edge write */
    DelayMs(1);
}

/*
 * LCD1602 initialization function
 * Config: two-line display, 5x8 dot matrix, 8-bit data, display on cursor off
 */
void LCD_Init(void)
{
    DelayMs(15);         /* Wait for LCD power-on stabilization */
    LCD_WriteCmd(0x38);  /* Function set: 8-bit, two lines, 5x8 dot matrix */
    LCD_WriteCmd(0x0C);  /* Display switch: display on, cursor off, no blink */
    LCD_WriteCmd(0x06);  /* Input mode: address auto-increment after write, screen static */
    LCD_WriteCmd(0x01);  /* Clear screen */
    DelayMs(2);          /* Clear screen requires longer execution time */
}

/*
 * LCD1602 set cursor function
 * Parameter: x - column (0-15), y - row (0 or 1)
 * Row 1 start address 0x00, row 2 start address 0x40
 */
void LCD_SetCursor(unsigned char x, unsigned char y)
{
    unsigned char addr;
    if (y == 0)
    {
        addr = 0x00 + x;   /* Row 1 */
    }
    else
    {
        addr = 0x40 + x;   /* Row 2 */
    }
    LCD_WriteCmd(addr | 0x80); /* Set DDRAM address (MSB set to 1) */
}

/*
 * LCD1602 display string function
 * Parameter: x - start column, y - row, str - string pointer
 */
void LCD_ShowString(unsigned char x, unsigned char y, char *str)
{
    LCD_SetCursor(x, y);
    while (*str != '\0')
    {
        LCD_WriteData(*str);
        str++;
    }
}

/*
 * Timer T0 initialization: mode 1, 50ms timing
 * Used to accumulate run seconds
 */
void Timer0_Init(void)
{
    TMOD |= 0x01;       /* T0 mode 1 */
    TH0 = 0x4B;         /* 50ms reload value */
    TL0 = 0xFD;
    ET0 = 1;            /* Enable T0 interrupt */
    TR0 = 1;            /* Start T0 */
    EA = 1;             /* Enable global interrupt */
}

/* T0 interrupt count: 20 times 50ms = 1 second */
unsigned char t0_count = 0;

/*
 * T0 interrupt service routine: accumulate run seconds
 */
void Timer0_ISR(void) interrupt 1
{
    TH0 = 0x4B;
    TL0 = 0xFD;
    t0_count++;
    if (t0_count >= 20)
    {
        t0_count = 0;
        run_sec++;      /* Run seconds increment by 1 */
    }
}

/*
 * Main function: initialize LCD and timer, refresh display in a loop
 * Row 1 displays "Hello MCU!"
 * Row 2 displays run time
 */
void main(void)
{
    char time_buf[16];

    LCD_Init();             /* Initialize LCD */
    Timer0_Init();          /* Initialize timer */

    LCD_ShowString(0, 0, "Hello MCU!");  /* Row 1 display title */

    while (1)
    {
        /* Format run time string */
        sprintf(time_buf, "Time: %u s", run_sec);
        LCD_ShowString(0, 1, time_buf);  /* Row 2 display time */
        DelayMs(200);       /* Refresh every 200ms to avoid flicker */
    }
}
