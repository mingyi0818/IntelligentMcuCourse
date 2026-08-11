# 10-smart-fan 智能温控风扇

## 工程简介
本工程为综合应用项目，实现智能温控风扇系统。集成DS18B20单总线温度传感器测温、TIM3 PWM调速、SSD1306 OLED显示、按键阈值调节、简化版PID控制算法。当温度超过设定阈值时自动启动风扇，PID算法根据温差动态调节PWM占空比实现平滑控温。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| DS18B20温度传感器 | 1 | 单总线测温 |
| 4.7kΩ电阻 | 1 | DS18B20数据线上拉 |
| 直流风扇+驱动电路 | 1 | PWM调速(NPN三极管/MOS驱动) |
| 0.96寸OLED(SSD1306) | 1 | I2C显示 |
| 轻触按键 | 1 | 调节温度阈值 |
| LED | 1 | 风扇运行指示 |
| 220Ω电阻 | 1 | LED限流 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 引脚 | 连接 | 说明 |
|------|------|------|
| PA1 | DS18B20 DATA | 单总线数据 |
| PA6 (TIM3_CH1) | 风扇驱动PWM | PWM调速输出 |
| PB6 (I2C1_SCL) | OLED SCL | I2C时钟 |
| PB7 (I2C1_SDA) | OLED SDA | I2C数据 |
| PE4 | 按键 -> GND | 阈值调节 |
| PE0 | LED -> 220Ω -> GND | 运行指示 |
| 3V3/GND | 各模块供电 | 共地 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. TIM3 Channel1: `PWM Generation CH1`（PA6），Prescaler=83，ARR=999
3. I2C1: `I2C`，400kHz Fast Mode（PB6/PB7）
4. PA1配置为`GPIO_Output`，User Label填`DS18B20_DQ`（单总线软件驱动）
5. PE0: `GPIO_Output`，User Label填`LED`
6. PE4: `GPIO_Input`，Pull-up，User Label填`BUTTON`
7. USART1: Asynchronous, 115200（调试输出）
8. 生成代码
9. build_flags添加 `-u _printf_float` 支持浮点printf

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 串口助手115200查看调试输出

## 运行现象
- OLED显示当前温度与阈值
- 按键循环切换阈值档位（28/30/32/34°C）
- 温度超过阈值时风扇启动，温差越大转速越高
- 串口输出温度、阈值、PWM占空比

## 扩展方向
- 完整PID参数自整定
- 增加蓝牙/WiFi远程监控与控制
- 数据记录到SPI Flash供历史曲线分析
- 多点温度监测
