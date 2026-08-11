# 03-timer-pwm 定时器PWM

## 工程简介
本工程演示使用STM32F407的TIM3通道1（PA6）输出PWM波形，实现LED呼吸灯效果。通过不断修改CCR（捕获/比较寄存器）值使占空比在0~100%之间渐变，LED亮度随之呼吸变化。是学习定时器PWM输出与占空比调节的经典工程。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| LED | 1 | 呼吸灯指示 |
| 220Ω电阻 | 1 | 限流电阻 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 引脚 | 连接 | 说明 |
|------|------|------|
| PA6 | LED正极 -> 220Ω -> GND | TIM3_CH1 PWM输出 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Timers -> TIM3，Clock Source选`Internal Clock`
3. Channel1选`PWM Generation CH1`（PA6自动映射）
4. 参数配置（Parameter Settings）：
   - Prescaler: `83`（84MHz/(83+1)=1MHz计数频率）
   - Counter Period(ARR): `999`（1MHz/(999+1)=1kHz PWM频率）
   - Pulse(CCR): `0`（初始占空比0）
   - Mode: `PWM mode 1`，CH Polarity: `High`
5. 生成代码

## 运行方法
1. 将main.c用户代码复制到CubeMX生成的工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`

## 运行现象
LED亮度由暗渐亮再渐暗，形成连续呼吸效果，周期约4秒。

## 扩展方向
- 修改ARR调整PWM频率
- 使用多通道PWM实现RGB灯混色
- 改为非阻塞方式（中断回调）更新CCR
