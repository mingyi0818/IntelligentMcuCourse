# 04-usart-printf USART printf重定向

## 工程简介
本工程演示STM32F407的USART1串口通信与printf重定向。将标准C库的`printf`输出重定向到USART1，每秒输出计数值，是调试与日志输出的基础工具。重定向通过实现`fputc`/`__io_putchar`函数完成。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| USB转TTL模块 | 1 | 如CH340/CP2102，连接串口 |
| 杜邦线 | 3 | TX/RX/GND |

## 引脚连接表
| STM32引脚 | 连接 | 说明 |
|-----------|------|------|
| PA9 (USART1_TX) | USB转TTL模块RX | 串口发送 |
| PA10 (USART1_RX) | USB转TTL模块TX | 串口接收 |
| GND | USB转TTL模块GND | 共地 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Connectivity -> USART1：
   - Mode: `Asynchronous`
   - Parameter Settings: Baud Rate `115200`，Word Length `8`，Parity `None`，Stop Bits `1`
3. 确认PA9(TX)/PA10(RX)自动映射
4. 生成代码
5. 在platformio.ini的build_flags添加 `-u _printf_float` 以支持浮点printf

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 打开串口助手（如PuTTY、MobaXterm）选择对应COM口，波特率115200

## 运行现象
串口助手每秒接收一行：`[秒数] Hello STM32F407! count = 数字`。

## 扩展方向
- 实现scanf输入重定向接收命令
- 增加DMA方式实现高效串口收发
- 封装带时间戳的日志输出函数
