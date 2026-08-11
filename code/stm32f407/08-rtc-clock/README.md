# 08-rtc-clock RTC时钟

## 工程简介
本工程演示STM32F407的RTC（实时时钟）外设，配置日历（年月日时分秒）并每秒通过USART1打印当前时间。RTC依靠内部32kHz LSE晶振或LSI驱动，VBAT引脚接后备电池可在主电源断电时保持走时。涵盖`HAL_RTC_GetTime`/`HAL_RTC_GetDate`的使用与时间格式转换。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| CR1220纽扣电池 | 1 | VBAT后备供电（可选） |
| USB转TTL模块 | 1 | 查看串口时间输出 |
| 杜邦线 | 若干 | 连接 |

## 引脚连接表
| STM32引脚 | 连接 | 说明 |
|-----------|------|------|
| PA9 (USART1_TX) | USB转TTL模块RX | 串口输出 |
| PA10 (USART1_RX) | USB转TTL模块TX | 串口接收 |
| VBAT | 3V3或纽扣电池正极 | RTC后备供电 |
| GND | 共地 | 接地 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. RCC配置：Low Speed Clock(LSE)选Crystal/Ceramic Resonator
3. RTC -> Activate Clock Source：勾选LSE
4. RTC -> Activate Calendar：勾选
5. Parameter Settings：
   - Data Format: `BIN`（二进制格式）
   - Hours/Minutes/Seconds设初始时间，Year/Month/Date/WeekDay设初始日期
6. USART1: Asynchronous, 115200
7. 生成代码
8. build_flags添加 `-u _printf_float`

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 串口助手115200打开COM口

## 运行现象
串口每秒输出一行：`2026-08-10 12:00:00`，时间持续递增。断电重启后如VBAT有电则继续走时。

## 扩展方向
- 增加闹钟(Alarm A/B)中断功能
- 使用Tamper引脚实现防篡改记录
- 将时间显示到OLED屏幕
