# 06-spi-flash SPI Flash读写

## 工程简介
本工程演示使用STM32F407的SPI1外设读写W25Q64 SPI Flash芯片。实现扇区擦除、页编程写入字符串"Hello"、回读校验完整流程，涵盖SPI通信时序、Flash指令集（写使能、状态等待、擦除、编程、读取）等知识点。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| W25Q64 Flash模块 | 1 | 8MB SPI Flash |
| USB转TTL模块 | 1 | 查看串口输出 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| STM32引脚 | W25Q64 | 说明 |
|-----------|--------|------|
| PA5 (SPI1_SCK) | CLK | SPI时钟 |
| PA6 (SPI1_MISO) | DO | 主入从出 |
| PA7 (SPI1_MOSI) | DI | 主出从入 |
| PB0 (GPIO_Output) | CS | 片选（软件控制） |
| 3V3 | VCC | 供电 |
| GND | GND | 接地 |
| PA9 (USART1_TX) | USB转TTL RX | 串口输出 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Connectivity -> SPI1：
   - Mode: `Full-Duplex Master`
   - Parameter Settings: Prescaler `4`(84MHz/4=21MHz)，CPOL `High`，CPHA `2 Edge`，MSB First
3. PB0配置为`GPIO_Output`，User Label填`FLASH_CS`，默认High
4. USART1: Asynchronous, 115200
5. 生成代码
6. build_flags添加 `-u _printf_float`

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 串口助手115200打开COM口

## 运行现象
串口输出擦除、写入、读回过程信息，最后显示`Read back: Hello`并校验成功。

## 扩展方向
- 读取W25Q64 JEDEC ID实现芯片识别
- 实现文件系统（如LittleFS/FatFS）管理Flash数据
- 增加CRC校验保证数据完整性
