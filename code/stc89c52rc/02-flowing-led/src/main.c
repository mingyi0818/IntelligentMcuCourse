/*
 * Project: 02-flowing-led Flowing LED
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: 8 LEDs on P2 port shift left and right in a loop, creating flowing light effect
 * Pin: P2.0-P2.7 each connect LED + 220ohm current-limit resistor to VCC
 */
#include <reg52.h>
#include <stdio.h>
#include <intrins.h>   /* Contains _crol_ and _cror_ circular shift functions */

/*
 * Millisecond delay function at 11.0592MHz
 * Parameter: ms - number of milliseconds to delay
 */
void DelayMs(unsigned int ms)
{
    unsigned int i, j;
    for (i = 0; i < ms; i++)
    {
        for (j = 0; j < 114; j++)
        {
            /* Empty loop consuming time */
        }
    }
}

/*
 * Main function: implement flowing LED loop
 * First shift left 7 times (P2.0->P2.7 light up one by one), then shift right 7 times (P2.7->P2.0)
 * Uses _crol_ and _cror_ to implement circular shift of 8-bit data
 */
void main(void)
{
    unsigned char led_data;   /* Current LED display data */
    unsigned char i;

    while (1)
    {
        /* ===== Left shift flow: from P2.0 to P2.7 ===== */
        led_data = 0xFE;      /* 1111 1110, lowest bit LED on */
        for (i = 0; i < 8; i++)
        {
            P2 = led_data;
            DelayMs(200);     /* Each LED on for 200ms */
            led_data = _crol_(led_data, 1);  /* Circular shift left by 1 bit */
        }

        /* ===== Right shift flow: from P2.7 to P2.0 ===== */
        led_data = 0x7F;      /* 0111 1111, highest bit LED on */
        for (i = 0; i < 8; i++)
        {
            P2 = led_data;
            DelayMs(200);
            led_data = _cror_(led_data, 1);  /* Circular shift right by 1 bit */
        }
    }
}
