# 课件 PPT 目录

本目录用于存放《单片机原理及应用》各章节配套 PPT 课件。当前为占位目录，实际 PPT 文件由授课教师后续补充。

## 命名规范

为保证课件与章节对应、便于学生检索，所有 PPT 文件统一采用以下命名规范：

### 1. 章节课件

按章节编号 + 英文短标题命名，编号与 `chapters/` 目录下 HTML 文件保持一致：

| 文件名 | 对应章节 |
|--------|----------|
| `ch01-mcu-overview.pptx` | 第 1 章 单片机概述 |
| `ch02-computer-fundamentals.pptx` | 第 2 章 计算机基础与数制 |
| `ch03-hardware-fundamentals.pptx` | 第 3 章 单片机硬件基础 |
| `ch04-mcs51-architecture.pptx` | 第 4 章 MCS-51 单片机体系结构 |
| `ch05-stc-dev-environment.pptx` | 第 5 章 STC 开发环境搭建 |
| `ch06-c51-programming.pptx` | 第 6 章 C51 程序设计基础 |
| `ch07-gpio-led-key.pptx` | 第 7 章 并行 I/O 端口与 LED/按键 |
| `ch08-interrupt-system.pptx` | 第 8 章 中断系统 |
| `ch09-timer-counter.pptx` | 第 9 章 定时器/计数器 |
| `ch10-serial-communication.pptx` | 第 10 章 串行通信 |
| `ch11-display-interface.pptx` | 第 11 章 显示与接口技术 |
| `ch12-stc-comprehensive-lab.pptx` | 第 12 章 STC89C52RC 综合实验 |
| `ch13-stm32-overview.pptx` | 第 13 章 STM32 与 Cortex-M4 概述 |
| `ch14-stm32-dev-environment.pptx` | 第 14 章 STM32 开发环境搭建 |
| `ch15-hal-library.pptx` | 第 15 章 STM32 HAL 库与工程结构 |
| `ch16-gpio-exti.pptx` | 第 16 章 GPIO 与外部中断 |
| `ch17-timer-pwm.pptx` | 第 17 章 定时器与 PWM |
| `ch18-usart.pptx` | 第 18 章 串口通信 USART |
| `ch19-adc-dac.pptx` | 第 19 章 ADC 与 DAC |
| `ch20-spi-i2c.pptx` | 第 20 章 SPI 与 I2C 总线 |
| `ch21-dma-rtc.pptx` | 第 21 章 DMA 与 RTC |
| `ch22-freertos.pptx` | 第 22 章 FreeRTOS 基础 |
| `ch23-stm32-comprehensive-lab.pptx` | 第 23 章 STM32 综合实验 |
| `ch24-msp430-introduction.pptx` | 第 24 章 MSP430 低功耗单片机 |
| `ch25-traffic-light-stc.pptx` | 第 25 章 智能交通灯系统（STC89C52RC） |
| `ch26-smart-clock-stm32.pptx` | 第 26 章 STM32 智能电子钟 |
| `ch27-temperature-fan-stm32.pptx` | 第 27 章 智能温控风扇（STM32F407） |
| `ch28-password-lock-stc.pptx` | 第 28 章 电子密码锁（STC89C52RC） |

### 2. 实验课件

实验课件命名为 `lab01.pptx` ~ `lab10.pptx`，对应 `lab/` 目录下的 10 个实验：

- `lab01.pptx` — LED 闪烁与流水灯
- `lab02.pptx` — 按键控制与外部中断
- `lab03.pptx` — 矩阵键盘扫描
- `lab04.pptx` — 数码管动态显示
- `lab05.pptx` — 定时器中断（秒表）
- `lab06.pptx` — 串口通信（与 PC 收发）
- `lab07.pptx` — LCD1602 显示
- `lab08.pptx` — ADC 采集与 DAC 输出
- `lab09.pptx` — PWM 呼吸灯
- `lab10.pptx` — I2C 读写 EEPROM

### 3. 综合项目课件

综合项目课件采用 `project-<项目名>.pptx` 命名：

- `project-traffic-light.pptx` — 智能交通灯系统
- `project-smart-clock.pptx` — STM32 智能电子钟
- `project-temperature-fan.pptx` — 智能温控风扇
- `project-password-lock.pptx` — 电子密码锁

## 制作工具建议

| 工具 | 特点 | 适用场景 |
|------|------|----------|
| **Microsoft PowerPoint** | 功能完整、模板丰富 | 主流选择，通用性强 |
| **Keynote** | 苹果平台、动画优雅 | macOS 用户首选 |
| **Marp** | Markdown → PPT，版本可控 | 偏好纯文本、需协作的开发者 |
| **reveal.js** | HTML 演示框架，可嵌入网页 | 需在线展示、嵌入代码示例 |

> 推荐使用 **Marp** 配合 VS Code 编辑，可将课件 Markdown 源码一并提交到本目录，便于版本管理与协作。

## 课件模板

统一的课件模板（含封面、章节页、内容页、代码页、结尾页）可在 [`resources.html`](../resources.html) 资源下载页获取：

- `template/mcu-course-template.pptx` — PowerPoint 模板
- `template/mcu-course-template.marp.md` — Marp Markdown 模板

## 补充说明

- 本目录仅作占位与命名规范说明，**当前不含实际 PPT 文件**
- 授课教师补充课件时，请严格遵循上述命名规范，并同步更新 `resources.html` 中的下载链接
- 课件内容应与对应章节 HTML 教程保持一致，如内容更新，请同步修订两处
- 鼓励在课件中插入 Mermaid 图截图、代码运行截图与硬件实物照片，提升教学效果
