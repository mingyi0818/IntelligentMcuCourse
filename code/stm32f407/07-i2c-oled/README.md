# 07-i2c-oled I2C OLED显示

## 工程简介
本工程演示使用STM32F407的I2C1外设驱动SSD1306 OLED显示屏（128×64）。通过`HAL_I2C_Master_Transmit`发送SSD1306初始化指令序列与显示数据，在屏幕上显示计数。涵盖I2C通信协议、SSD1306指令集、字模数据组织等知识。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| 0.96寸OLED模块(SSD1306) | 1 | 128×64 I2C接口 |
| 杜邦线 | 4 | 连接I2C与供电 |

## 引脚连接表
| STM32引脚 | OLED | 说明 |
|-----------|------|------|
| PB6 (I2C1_SCL) | SCL | I2C时钟 |
| PB7 (I2C1_SDA) | SDA | I2C数据 |
| 3V3 | VCC | 供电 |
| GND | GND | 接地 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Connectivity -> I2C1：
   - Mode: `I2C`
   - Parameter Settings: Speed Mode `Fast Mode 400kHz`，其余默认
3. 确认PB6(SCL)/PB7(SDA)自动映射
4. 生成代码
5. build_flags添加 `-u _printf_float`

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`

## 运行现象
OLED屏幕左上角显示递增数字计数，每秒加1。

## 扩展方向
- 增加完整ASCII字模实现英文字符串显示
- 使用DMA传输I2C数据提高效率
- 实现图形绘制（画线、画圆、位图）
