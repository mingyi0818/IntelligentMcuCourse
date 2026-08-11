# 09-freertos-multitask FreeRTOS多任务

## 工程简介
本工程演示基于FreeRTOS与CMSIS-RTOS v2抽象层创建多任务并行执行。包含3个任务：LED闪烁任务（500ms周期）、按键检测任务（消抖计数）、串口打印任务（1s输出统计），展示实时操作系统任务调度与`osDelay`非阻塞延时的优势。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| LED | 1 | 任务运行指示 |
| 220Ω电阻 | 1 | LED限流 |
| 轻触按键 | 1 | 触发计数 |
| USB转TTL模块 | 1 | 查看串口 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 引脚 | 连接 | 说明 |
|------|------|------|
| PE0 | LED -> 220Ω -> GND | LED闪烁任务控制 |
| PE4 | 按键 -> GND | 按键检测任务读取 |
| PA9 (USART1_TX) | USB转TTL RX | 串口打印任务输出 |
| PA10 (USART1_RX) | USB转TTL TX | 串口接收 |

## CubeMX配置步骤
1. 选择STM32F407VET6，配置HSE与168MHz时钟树
2. Middleware -> FREERTOS：
   - Interface: `CMSIS-RTOS v2`
   - 勾选`USE FreeRTOS`
3. PE0配置为`GPIO_Output`，User Label填`LED`
4. PE4配置为`GPIO_Input`，Pull-up，User Label填`BUTTON`
5. USART1: Asynchronous, 115200
6. 在FreeRTOS Tasks页可预先创建任务，也可在代码中用`osThreadNew`动态创建
7. TIME BASE Source建议改用非SysTick定时器（如TIM1）避免HAL与RTOS冲突
8. 生成代码
9. build_flags添加`configUSE_PREEMPTION=1`等FreeRTOS配置宏

## 运行方法
1. 将main.c用户代码复制到CubeMX工程
2. 编译：`pio run`
3. ST-Link烧录：`pio run -t upload`
4. 串口助手115200打开COM口

## 运行现象
- LED以500ms周期闪烁（不受其他任务影响）
- 按下按键时计数递增
- 串口每秒输出按键按下次数

## 扩展方向
- 增加任务优先级测试抢占调度
- 使用消息队列(Queue)实现任务间通信
- 使用互斥量(Mutex)保护共享资源
