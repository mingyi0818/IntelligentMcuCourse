/*
 * Project: 05-7seg-display 7-Segment Display
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: 4-digit common-cathode 7-segment dynamic display of 0-9999 counter, with segment code table and digit selection
 * Pin: Segment P0.0-P0.7, Digit select P2.0-P2.3
 */
#include <reg52.h>
#include <stdio.h>

/* 7-segment segment port on P0, digit select port on P2 low 4 bits */
#define SEG_PORT P0
#define DIG_PORT P2

/* Common-cathode 7-segment code table: 0-9
 * Segment mapping: dp g f e d c b a (bit7-bit0)
 * 0=0x3F, 1=0x06, 2=0x5B, ..., 9=0x6F
 */
unsigned char code SegCode[] = {
    0x3F, 0x06, 0x5B, 0x4F, 0x66,  /* 0-4 */
    0x6D, 0x7D, 0x07, 0x7F, 0x6F   /* 5-9 */
};

/* Digit select code: common-cathode 7-segment common pin active low
 * Digit 1=P2.0=0, digit 2=P2.1=0, and so on
 * P2 high 4 bits stay 1 to avoid affecting other peripherals
 */
unsigned char code DigSel[] = {
    0xFE,  /* 1111 1110, digit 1 */
    0xFD,  /* 1111 1101, digit 2 */
    0xFB,  /* 1111 1011, digit 3 */
    0xF7   /* 1111 0111, digit 4 */
};

/* Display buffer: digit values of 4 digits */
unsigned char disp_buf[4] = {0, 0, 0, 0};

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
 * 7-segment dynamic scan display function
 * Parameter: num - integer 0-9999 to display
 * Principle: split num by digit into disp_buf, then refresh each digit quickly
 * Uses visual persistence to achieve 4-digit simultaneous display effect
 */
void Display(unsigned int num)
{
    unsigned char i;

    /* Data split: ones, tens, hundreds, thousands */
    disp_buf[0] = num % 10;          /* Ones */
    disp_buf[1] = (num / 10) % 10;   /* Tens */
    disp_buf[2] = (num / 100) % 10;  /* Hundreds */
    disp_buf[3] = (num / 1000) % 10; /* Thousands */

    /* Dynamic scan: display each digit, holding ~5ms per digit */
    for (i = 0; i < 4; i++)
    {
        SEG_PORT = 0x00;             /* Blank first to prevent ghosting */
        DIG_PORT = DigSel[i];        /* Select digit i */
        SEG_PORT = SegCode[disp_buf[i]]; /* Output segment code */
        DelayMs(5);                  /* Display 5ms */
        SEG_PORT = 0x00;             /* Blank */
    }
}

/*
 * Main function: 0-9999 loop counter
 * Each number displays ~200ms (40 scans), resets after reaching 9999
 */
void main(void)
{
    unsigned int counter = 0;
    unsigned char scan_cnt;

    while (1)
    {
        /* Scan current value multiple times to ensure stable display */
        for (scan_cnt = 0; scan_cnt < 40; scan_cnt++)
        {
            Display(counter);
        }
        counter++;                  /* Counter increment by 1 */
        if (counter > 9999)         /* Reset after reaching 9999 */
        {
            counter = 0;
        }
    }
}
