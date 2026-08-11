/*
 * Project: 01-led-blink LED Blink
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: Toggle LED on P2.0 every 1 second for stable blinking
 * Pin: LED + 220ohm current-limit resistor -> P2.0
 */
#include <reg52.h>
#include <stdio.h>

/* LED control pin: P2.0 */
sbit LED = P2^0;

/*
 * Millisecond delay function based on 11.0592MHz crystal
 * Parameter: ms - number of milliseconds to delay
 * Principle: Loop executing empty instructions to consume time
 * At 11.0592MHz, one machine cycle ~= 1.085us
 * Inner loop consumes approximately the instruction cycles needed for 1ms
 */
void DelayMs(unsigned int ms)
{
    unsigned int i, j;
    for (i = 0; i < ms; i++)
    {
        for (j = 0; j < 114; j++)  /* 114 inner iterations consume ~1ms */
        {
            /* Empty loop, only consumes time */
        }
    }
}

/*
 * Main function: initialize then toggle LED state in a loop
 * On for 500ms, off for 500ms, total 1 second per complete cycle
 */
void main(void)
{
    /* Main loop, never exits */
    while (1)
    {
        LED = 0;          /* Low level turns LED on (common anode) */
        DelayMs(500);     /* Delay 500ms keeping LED on */
        LED = 1;          /* High level turns LED off */
        DelayMs(500);     /* Delay 500ms keeping LED off */
    }
}
