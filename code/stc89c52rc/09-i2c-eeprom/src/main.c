/*
 * Project: 09-i2c-eeprom I2C EEPROM
 * Platform: STC89C52RC
 * Crystal: 11.0592 MHz
 * Function: Software-simulated I2C read/write AT24C02, write 0-9 to address 0x00-0x09, read back and verify via UART
 * Pin: SCL-P2.1, SDA-P2.2
 */
#include <reg52.h>
#include <stdio.h>

/* I2C bus pin definitions */
sbit SCL = P2^1;        /* I2C clock line */
sbit SDA = P2^2;        /* I2C data line */

/* AT24C02 device address: 1010 A2A1A0 R/W
 * Address pins grounded (A2A1A0=000), write address=0xA0, read address=0xA1
 */
#define AT24C02_ADDR_W 0xA0
#define AT24C02_ADDR_R 0xA1

/*
 * Delay function: I2C timing delay (~5us)
 * Used to meet I2C protocol timing requirements
 */
void I2C_Delay(void)
{
    unsigned char i;
    for (i = 0; i < 5; i++)
    {
        /* Empty loop, ~5us */
    }
}

/*
 * Millisecond delay function
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
 * I2C start signal: SDA goes high to low while SCL is high
 */
void I2C_Start(void)
{
    SDA = 1;             /* SDA high */
    SCL = 1;             /* SCL high */
    I2C_Delay();
    SDA = 0;             /* SDA falling edge while SCL high = start signal */
    I2C_Delay();
    SCL = 0;             /* Pull SCL low, prepare for transfer */
    I2C_Delay();
}

/*
 * I2C stop signal: SDA goes low to high while SCL is high
 */
void I2C_Stop(void)
{
    SDA = 0;             /* SDA low */
    SCL = 1;             /* SCL high */
    I2C_Delay();
    SDA = 1;             /* SDA rising edge while SCL high = stop signal */
    I2C_Delay();
}

/*
 * I2C send one byte
 * Parameter: dat - byte to send (MSB first)
 * Return: 0=ACK acknowledge, 1=NACK no acknowledge
 */
unsigned char I2C_SendByte(unsigned char dat)
{
    unsigned char i;
    unsigned char ack;

    for (i = 0; i < 8; i++)
    {
        SDA = (dat & 0x80) ? 1 : 0;  /* Take MSB */
        dat <<= 1;
        SCL = 1;         /* SCL rising edge, slave samples data */
        I2C_Delay();
        SCL = 0;         /* Pull SCL low */
        I2C_Delay();
    }

    /* Read ACK acknowledge */
    SDA = 1;             /* Release SDA, prepare to receive acknowledge */
    SCL = 1;             /* SCL rising edge, read slave acknowledge */
    I2C_Delay();
    ack = SDA;           /* 0=ACK, 1=NACK */
    SCL = 0;
    I2C_Delay();

    return ack;
}

/*
 * I2C receive one byte
 * Parameter: ack - 1=send ACK (continue read), 0=send NACK (read done)
 * Return: received byte
 */
unsigned char I2C_RecvByte(unsigned char ack)
{
    unsigned char i;
    unsigned char dat = 0;

    SDA = 1;             /* Release SDA, prepare to receive */
    for (i = 0; i < 8; i++)
    {
        dat <<= 1;
        SCL = 1;         /* SCL rising edge, read data */
        I2C_Delay();
        if (SDA) dat |= 0x01;  /* Read SDA bit */
        SCL = 0;
        I2C_Delay();
    }

    /* Send ACK or NACK */
    SDA = ack ? 0 : 1;   /* ack=1 send ACK (low), ack=0 send NACK (high) */
    SCL = 1;
    I2C_Delay();
    SCL = 0;
    I2C_Delay();

    return dat;
}

/*
 * AT24C02 write one byte
 * Parameter: addr - storage address (0-255), dat - data to write
 */
void AT24C02_WriteByte(unsigned char addr, unsigned char dat)
{
    I2C_Start();
    I2C_SendByte(AT24C02_ADDR_W); /* Send device address + write */
    I2C_SendByte(addr);           /* Send storage address */
    I2C_SendByte(dat);            /* Send data */
    I2C_Stop();
    DelayMs(5);          /* AT24C02 page write needs ~5ms */
}

/*
 * AT24C02 read one byte
 * Parameter: addr - storage address
 * Return: read data
 */
unsigned char AT24C02_ReadByte(unsigned char addr)
{
    unsigned char dat;

    /* 1. dummy write: set read address */
    I2C_Start();
    I2C_SendByte(AT24C02_ADDR_W);
    I2C_SendByte(addr);

    /* 2. restart then switch to read mode */
    I2C_Start();
    I2C_SendByte(AT24C02_ADDR_R);
    dat = I2C_RecvByte(0);  /* Read 1 byte, send NACK */
    I2C_Stop();

    return dat;
}

/*
 * UART initialization: 9600 baud rate
 */
void UART_Init(void)
{
    SCON = 0x50;
    TMOD = 0x20;
    TH1 = 0xFD;
    TL1 = 0xFD;
    TR1 = 1;
    TI = 1;
}

/*
 * Main function: write 0-9 to EEPROM, read back verify and output via UART
 */
void main(void)
{
    unsigned char i;
    unsigned char write_val, read_val;
    unsigned char ok_count = 0;

    UART_Init();
    printf("I2C EEPROM Test Start\r\n");

    /* === Write phase: write 0-9 to address 0x00-0x09 === */
    printf("Writing 0-9 to AT24C02...\r\n");
    for (i = 0; i < 10; i++)
    {
        AT24C02_WriteByte(i, i);   /* Write value i to address i */
        DelayMs(2);
    }
    printf("Write complete.\r\n");

    /* === Read verify phase === */
    printf("Reading back & verifying...\r\n");
    for (i = 0; i < 10; i++)
    {
        read_val = AT24C02_ReadByte(i);  /* Read address i */
        printf("Addr %bu: Wrote %bu, Read %bu", i, i, read_val);
        if (read_val == i)
        {
            printf(" [OK]\r\n");
            ok_count++;
        }
        else
        {
            printf(" [FAIL]\r\n");
        }
        DelayMs(2);
    }

    printf("Verify done: %bu/10 OK\r\n", ok_count);

    while (1)
    {
        /* Test complete, loop wait */
    }
}
