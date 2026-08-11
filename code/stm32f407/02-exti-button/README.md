# 02-exti-button 外部中断按键

## 工程简介
本工程演示STM32F407的外部中断(EXTI)功能。PE4接按键，配置为下降沿触发的外部中断；每次按下按键产生中断，在`HAL_GPIO_EXTI_Callback`回调中翻转PE0上的LED状态。相比轮询检测，外部中断响应更快且不占用CPU轮询时间。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| LED | 1 | 状态指示 |
| 220Ω电阻 | 1 | LED限流 |
| 轻触按键 | 1 | 触发中断 |
| 10kΩ电阻 | 1 | 按键上拉（若开发板已带上拉可省略） |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 引脚 | 连接 | 说明 |
|------|------|------|
| PE0 | LED正极 -> 220Ω -> GND | GPIO输出，指示中断状态 |
| PE4 | 按键 -> GND | GPIO输入，EXTI4下降沿触发 |

## CubeMX配置步骤
1. 选择芯片STM32F407VET6，配置HSE与168MHz时钟树
2. PE0配置为`GPIO_Output`，User Label填`LED`
3. PE4配置为`GPIO_EXTI4`：
   - GPIO mode: `External Interrupt Mode with Falling edge trigger detection`
   - GPIO Pull-up/Pull-down: `Pull-up`（按键默认高电平）
   - User Label填`BUTTON`
4. NVIC设置：勾选`EXTI line 4 interrupt`，使能中断，优先级默认
5. 生成代码

## 运行方法
1. 将本工程main.c用户代码复制到CubeMX生成的main.c
2. 编译：`pio run`
3. ST-Link连接SWD，烧录：`pio run -t upload`

## 运行现象
每按下一次按键，LED状态翻转一次（亮变灭、灭变亮）。

## 扩展方向
- 增加软件消抖（在中断中延时后再读取引脚状态）
- 改为双沿触发，统计按键按下与释放次数
- 扩展多按键控制不同LED
