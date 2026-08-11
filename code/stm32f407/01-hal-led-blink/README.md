# 01-hal-led-blink HAL LED闪烁

## 工程简介
本工程演示STM32F407 HAL库最基础的GPIO输出操作。通过`HAL_GPIO_TogglePin`翻转PE0引脚电平，配合`HAL_Delay`实现LED以500ms周期闪烁，是学习HAL库与GPIO输出的入门工程。

## 硬件清单
| 元件 | 数量 | 说明 |
|------|------|------|
| STM32F407VET6开发板 | 1 | 主控芯片 |
| LED | 1 | 任意颜色 |
| 220Ω电阻 | 1 | 限流电阻 |
| 杜邦线 | 若干 | 连接电路 |

## 引脚连接表
| 引脚 | 连接 | 说明 |
|------|------|------|
| PE0 | LED正极 -> 220Ω -> GND | GPIO输出，驱动LED |

## CubeMX配置步骤
1. 打开STM32CubeMX，选择芯片STM32F407VET6
2. 配置RCC：High Speed Clock(HSE)选Crystal/Ceramic Resonator
3. 配置时钟树：HCLK输入168MHz，回车让CubeMX自动分频
4. 引脚配置：点击PE0，选`GPIO_Output`，User Label填`LED`
5. GPIO详细参数：Output Push Pull、No pull、High speed
6. Project Manager设置工程名、Toolchain选STM32CubeIDE
7. Code Generator勾选"Generate peripheral initialization as pair of .c/.h files"
8. 点击GENERATE CODE生成工程

## 运行方法
1. 将本工程main.c的用户代码部分复制到CubeMX生成的main.c对应位置
2. 用PlatformIO编译：`pio run`
3. ST-Link连接开发板SWD接口
4. 烧录：`pio run -t upload`

## 运行现象
LED以约1秒为周期（亮500ms、灭500ms）持续闪烁。

## 扩展方向
- 修改BLINK_DELAY宏改变闪烁速度
- 增加多LED跑马灯效果
- 使用SysTick定时器替代HAL_Delay实现非阻塞闪烁
