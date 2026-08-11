# 05-adc-potentiometer ADC电位器采集

## 工程简介
本工程演示STM32F407的ADC采集功能。使用ADC1通道0（PA0）采集10kΩ电位器分压值，12位分辨率（0~4095对应0~3.3V），并将原始值与换算后的电压值通过USART1打印输出。是学习模拟信号采集与电压换算的基础工程。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| 10kΩ电位器 | 1 | 模拟输入源 |
| USB转TTL模块 | 1 | 串口查看数据 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| STM32引脚 | 连接 | 说明 |
|-----------|------|------|
| PA0 (ADC1_IN0) | 电位器中间引脚 | 模拟输入 |
| 3V3 | 电位器一端 | 参考电压 |
| GND | 电位器另一端 | 接地 |
| PA9 (USART1_TX) | USB转TTL模块RX | 串口输出 |
| PA10 (USART1_RX) | USB转TTL模块TX | 串口接收 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Analog -> ADC1：
   - IN0勾选（PA0自动映射）
   - Parameter Settings: Resolution `12 bits`，Continuous Conversion `Disable`，Scan Conversion `Disable`
   - 建议配置ADC时钟分频使采样时间合理
3. Connectivity -> USART1：Asynchronous，115200波特率
4. 生成代码
5. build_flags添加 `-u _printf_float` 支持浮点printf

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 串口助手115200打开对应COM口

## 运行现象
旋转电位器，串口每500ms输出：`ADC: 原始值, Voltage: 电压V`，电压随旋钮在0.00~3.30V间变化。

## 扩展方向
- 使用DMA实现连续多通道ADC采集
- 增加滑动平均滤波提高稳定性
- 将电压值映射为PWM占空比控制LED亮度
