/*
 * Project: 03-button Button Control
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: 4 independent buttons control 4 LEDs on/off, with 10ms software debounce
 * Pin: Buttons K1-K4 -> P3.0-P3.3, LEDs -> P2.0-P2.3
 */
#include <reg52.h>
#include <stdio.h>

/* Define 4 button pins: P3.0-P3.3, low level when pressed */
sbit KEY1 = P3^0;
sbit KEY2 = P3^1;
sbit KEY3 = P3^2;
sbit KEY4 = P3^3;

/* Define 4 LED pins: P2.0-P2.3, low level turns on */
sbit LED1 = P2^0;
sbit LED2 = P2^1;
sbit LED3 = P2^2;
sbit LED4 = P2^3;

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
 * Button scan function: detect button press and debounce
 * Parameter: key - pointer to button pin
 * Return: 1 for valid press, 0 for invalid
 * Debounce principle: detect low level, delay 10ms then detect again
 *          if still low, confirm press, avoiding false trigger by jitter
 */
unsigned char KeyScan(sbit key)
{
    if (key == 0)            /* Button pressed detected (low level) */
    {
        DelayMs(10);         /* Delay 10ms for debounce */
        if (key == 0)        /* Detect again, confirm press */
        {
            while (!key);    /* Wait for button release, avoid repeat trigger on long press */
            return 1;        /* Return valid press flag */
        }
    }
    return 0;                /* Invalid or jitter */
}

/*
 * Main function: scan 4 buttons in a loop, toggle corresponding LED on press
 */
void main(void)
{
    /* Initially turn off all LEDs (common anode, high level off) */
    LED1 = 1;
    LED2 = 1;
    LED3 = 1;
    LED4 = 1;

    while (1)
    {
        if (KeyScan(KEY1))   /* K1 pressed */
        {
            LED1 = !LED1;    /* Toggle LED1 state */
        }
        if (KeyScan(KEY2))   /* K2 pressed */
        {
            LED2 = !LED2;    /* Toggle LED2 state */
        }
        if (KeyScan(KEY3))   /* K3 pressed */
        {
            LED3 = !LED3;    /* Toggle LED3 state */
        }
        if (KeyScan(KEY4))   /* K4 pressed */
        {
            LED4 = !LED4;    /* Toggle LED4 state */
        }
    }
}
