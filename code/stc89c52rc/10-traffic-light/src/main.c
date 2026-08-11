/*
 * Project: 10-traffic-light Smart Traffic Light
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: Traffic light system, main road + side road red/green/yellow LED switching + 7-segment countdown + pedestrian button, state machine implementation
 * Pin:
 *   Main road LED: P2.0(red) P2.1(yellow) P2.2(green)
 *   Side road LED: P2.3(red) P2.4(yellow) P2.5(green)
 *   7-segment segment: P0, digit select: P2.6(unit) P2.7(ten)
 *   Pedestrian button: P3.2(INT0)
 */
#include <reg52.h>
#include <stdio.h>

/* ===== Main road LED pins ===== */
sbit MAIN_RED   = P2^0;
sbit MAIN_YELLOW= P2^1;
sbit MAIN_GREEN = P2^2;

/* ===== Side road LED pins ===== */
sbit SIDE_RED   = P2^3;
sbit SIDE_YELLOW= P2^4;
sbit SIDE_GREEN = P2^5;

/* ===== 7-segment digit select ===== */
sbit DIG_TEN  = P2^6;   /* Tens digit */
sbit DIG_UNIT = P2^7;   /* Units digit */

/* ===== Pedestrian button (external interrupt 0) ===== */
sbit PED_KEY = P3^2;

/* Common-anode 7-segment code table 0-9 (low level lights segment) */
unsigned char code SegCode[] = {
    0xC0, 0xF9, 0xA4, 0xB0, 0x99,  /* 0-4 */
    0x92, 0x82, 0xF8, 0x80, 0x90   /* 5-9 */
};

/* ===== State machine definitions ===== */
#define STATE_MAIN_GREEN    0   /* Main road green, side road red */
#define STATE_MAIN_YELLOW   1   /* Main road yellow, side road red */
#define STATE_SIDE_GREEN    2   /* Main road red, side road green */
#define STATE_SIDE_YELLOW   3   /* Main road red, side road yellow */

/* Duration of each state (seconds) */
unsigned char code state_time[] = {10, 3, 8, 3};

/* Current state, remaining seconds */
unsigned char cur_state = STATE_MAIN_GREEN;
unsigned char remain_sec = 10;
unsigned char t0_50ms_cnt = 0;   /* 50ms count, 20 times = 1 second */

/* Pedestrian request flag (button triggered) */
bit ped_request = 0;

/*
 * Delay function
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
 * Set LED state: light corresponding LED based on current state
 * Common anode: 0=on, 1=off
 */
void SetLEDs(void)
{
    /* Turn all off first */
    MAIN_RED = 1; MAIN_YELLOW = 1; MAIN_GREEN = 1;
    SIDE_RED = 1; SIDE_YELLOW = 1; SIDE_GREEN = 1;

    switch (cur_state)
    {
        case STATE_MAIN_GREEN:
            MAIN_GREEN = 0;   /* Main green */
            SIDE_RED = 0;     /* Side red */
            break;
        case STATE_MAIN_YELLOW:
            MAIN_YELLOW = 0;  /* Main yellow */
            SIDE_RED = 0;     /* Side red */
            break;
        case STATE_SIDE_GREEN:
            MAIN_RED = 0;     /* Main red */
            SIDE_GREEN = 0;   /* Side green */
            break;
        case STATE_SIDE_YELLOW:
            MAIN_RED = 0;     /* Main red */
            SIDE_YELLOW = 0;  /* Side yellow */
            break;
    }
}

/*
 * 7-segment display countdown (dynamic scan)
 * Called frequently in main loop, uses visual persistence to display 2-digit number
 */
void DisplayCountdown(void)
{
    unsigned char ten, unit;

    ten  = remain_sec / 10;   /* Tens digit */
    unit = remain_sec % 10;   /* Units digit */

    /* Display tens digit */
    DIG_TEN = 0;              /* Select tens (common anode, active low) */
    DIG_UNIT = 1;
    P0 = SegCode[ten];
    DelayMs(2);
    DIG_TEN = 1;              /* Blank */

    /* Display units digit */
    DIG_UNIT = 0;             /* Select units */
    DIG_TEN = 1;
    P0 = SegCode[unit];
    DelayMs(2);
    DIG_UNIT = 1;             /* Blank */
}

/*
 * Timer T0 initialization: mode 1, 50ms timing
 */
void Timer0_Init(void)
{
    TMOD |= 0x01;
    TH0 = 0x4B;
    TL0 = 0xFD;
    ET0 = 1;
    TR0 = 1;
    EA = 1;
}

/*
 * External interrupt 0 initialization: pedestrian button (P3.2), falling edge trigger
 */
void INT0_Init(void)
{
    IT0 = 1;    /* Falling edge trigger */
    EX0 = 1;    /* Enable INT0 interrupt */
    EA = 1;
}

/*
 * T0 interrupt service routine: 50ms timing, accumulate 1 second
 * Decrease countdown every second, switch state when time reaches 0
 */
void Timer0_ISR(void) interrupt 1
{
    TH0 = 0x4B;
    TL0 = 0xFD;
    t0_50ms_cnt++;
    if (t0_50ms_cnt >= 20)    /* 1 second reached */
    {
        t0_50ms_cnt = 0;
        if (remain_sec > 0)
        {
            remain_sec--;     /* Countdown decrement by 1 */
        }
        if (remain_sec == 0)  /* Current state time up, switch state */
        {
            /* State machine transition */
            cur_state++;
            if (cur_state > STATE_SIDE_YELLOW)
            {
                cur_state = STATE_MAIN_GREEN;
            }
            remain_sec = state_time[cur_state];
            SetLEDs();        /* Update LEDs */

            /* If pedestrian requested and now entering side green phase, clear request */
            if (cur_state == STATE_SIDE_GREEN)
            {
                ped_request = 0;
            }
        }
    }
}

/*
 * External interrupt 0 service routine: pedestrian button trigger
 * Only responds during main road green, requests faster switch to side road green
 */
void INT0_ISR(void) interrupt 0
{
    DelayMs(10);              /* Debounce */
    if (PED_KEY == 0)         /* Confirm button pressed */
    {
        if (cur_state == STATE_MAIN_GREEN && remain_sec > 3)
        {
            /* Shorten main road green remaining time to 3 seconds, speed up switch */
            remain_sec = 3;
            ped_request = 1;
        }
    }
}

/*
 * Main function: initialize then loop display 7-segment
 * Time management done by T0 interrupt, button handled by INT0
 */
void main(void)
{
    /* Initialize */
    cur_state = STATE_MAIN_GREEN;
    remain_sec = state_time[cur_state];
    SetLEDs();

    Timer0_Init();
    INT0_Init();

    /* Main loop: continuously refresh 7-segment display */
    while (1)
    {
        DisplayCountdown();
    }
}
