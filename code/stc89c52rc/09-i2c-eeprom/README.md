# 09-i2c-eeprom I2C EEPROM

## 工程简介
本工程演示软件模拟I2C总线协议读写AT24C02 EEPROM的方法。完整实现I2C起始、停止、发送、接收、应答等时序函数，将数字0-9写入AT24C02的0x00-0x09地址，再读回通过串口校验数据正确性，是学习I2C协议与EEPROM存储的核心实验。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STC89C52RC最小系统板 | 1 | 11.0592MHz晶振 |
| AT24C02 EEPROM | 1 | 256字节I2C存储 |
| 4.7kΩ电阻 | 2 | SCL/SDA上拉电阻 |
| USB转TTL模块 | 1 | 串口通信 |
| 面包板+杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 单片机引脚 | 连接元件 | 说明 |
|-----------|---------|------|
| P2.1 | AT24C02 SCL | I2C时钟线(经4.7kΩ上拉到VCC) |
| P2.2 | AT24C02 SDA | I2C数据线(经4.7kΩ上拉到VCC) |
| VCC | AT24C02 VCC | 电源+5V |
| GND | AT24C02 GND/A0/A1/A2 | 地址引脚全接地(地址=0) |
| P3.0 | USB-TTL RXD | 串口接收 |
| P3.1 | USB-TTL TXD | 串口发送 |

## I2C协议说明
- 器件地址：1010 A2A1A0 R/W，A2A1A0接地=000
- 写地址：0xA0，读地址：0xA1
- 起始信号：SCL高时SDA下降沿
- 停止信号：SCL高时SDA上升沿
- 应答：每字节后接收方拉低SDA表示ACK

## 编译烧录方法
1. 安装PlatformIO Core：`pip install platformio`
2. 进入工程目录：`cd 09-i2c-eeprom`
3. 编译工程：`pio run`
4. 修改`platformio.ini`中的`upload_port`为实际COM口
5. 烧录：`pio run -t upload`
6. 打开串口助手，波特率9600，8N1

## 运行现象
- 串口输出"I2C EEPROM Test Start"
- 显示写入0-9的进度
- 逐一显示读取校验结果：Addr 0: Wrote 0, Read 0 [OK]
- 最终显示"Verify done: 10/10 OK"

## 扩展方向
- 实现多字节页写(最多8字节/页)
- 增加上电读取保护标志，实现掉电数据保存
- 扩展为EEPROM存储配置参数的应用场景
