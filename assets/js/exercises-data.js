/* 自动生成的练习题数据
   共 1079 道题
   涵盖 45 章内容
   四种题型：单选、多选、判断、简答
*/

/* 章节信息表：供 exercises.html 篇/章筛选下拉框使用 */
var CHAPTERS_INFO = [
  {num:"0.1", part:"0", partName:"第 0 篇 前导课程", name:"模拟电路常识"},
  {num:"0.2", part:"0", partName:"第 0 篇 前导课程", name:"电源电路常识"},
  {num:"0.3", part:"0", partName:"第 0 篇 前导课程", name:"数字电路常识"},
  {num:"0.4", part:"0", partName:"第 0 篇 前导课程", name:"ANSI C 语言基础"},
  {num:"0.5", part:"0", partName:"第 0 篇 前导课程", name:"C51 概览"},
  {num:"1", part:"1", partName:"第 1 篇 基础理论", name:"单片机概述"},
  {num:"2", part:"1", partName:"第 1 篇 基础理论", name:"计算机基础与数制"},
  {num:"3", part:"1", partName:"第 1 篇 基础理论", name:"单片机硬件基础"},
  {num:"4", part:"2", partName:"第 2 篇 STC89C52RC", name:"MCS-51 体系结构"},
  {num:"5", part:"2", partName:"第 2 篇 STC89C52RC", name:"STC 开发环境"},
  {num:"6", part:"2", partName:"第 2 篇 STC89C52RC", name:"C51 程序设计"},
  {num:"7", part:"2", partName:"第 2 篇 STC89C52RC", name:"GPIO/LED/按键"},
  {num:"8", part:"2", partName:"第 2 篇 STC89C52RC", name:"中断系统"},
  {num:"9", part:"2", partName:"第 2 篇 STC89C52RC", name:"定时器/计数器"},
  {num:"10", part:"2", partName:"第 2 篇 STC89C52RC", name:"串行通信"},
  {num:"11", part:"2", partName:"第 2 篇 STC89C52RC", name:"显示与接口"},
  {num:"12", part:"2", partName:"第 2 篇 STC89C52RC", name:"STC 综合实验"},
  {num:"13", part:"3", partName:"第 3 篇 STM32F407", name:"STM32 概述"},
  {num:"14", part:"3", partName:"第 3 篇 STM32F407", name:"STM32 开发环境"},
  {num:"15", part:"3", partName:"第 3 篇 STM32F407", name:"HAL 库与工程"},
  {num:"16", part:"3", partName:"第 3 篇 STM32F407", name:"GPIO 与外部中断"},
  {num:"17", part:"3", partName:"第 3 篇 STM32F407", name:"定时器与 PWM"},
  {num:"18", part:"3", partName:"第 3 篇 STM32F407", name:"USART"},
  {num:"19", part:"3", partName:"第 3 篇 STM32F407", name:"ADC 与 DAC"},
  {num:"20", part:"3", partName:"第 3 篇 STM32F407", name:"SPI 与 I2C"},
  {num:"21", part:"3", partName:"第 3 篇 STM32F407", name:"DMA 与 RTC"},
  {num:"22", part:"3", partName:"第 3 篇 STM32F407", name:"FreeRTOS"},
  {num:"23", part:"3", partName:"第 3 篇 STM32F407", name:"STM32 综合实验"},
  {num:"24", part:"4", partName:"第 4 篇 附加内容", name:"概述与学习方法"},
  {num:"25", part:"4", partName:"第 4 篇 附加内容", name:"Altium Designer PCB 设计"},
  {num:"26", part:"4", partName:"第 4 篇 附加内容", name:"嘉立创 EDA PCB 设计"},
  {num:"27", part:"4", partName:"第 4 篇 附加内容", name:"ESP32+Arduino 开发"},
  {num:"28", part:"4", partName:"第 4 篇 附加内容", name:"开源鸿蒙 OpenHarmony"},
  {num:"29", part:"4", partName:"第 4 篇 附加内容", name:"MSP430 低功耗单片机"},
  {num:"30", part:"5", partName:"第 5 篇 综合项目", name:"智能交通灯"},
  {num:"31", part:"5", partName:"第 5 篇 综合项目", name:"STM32 智能电子钟"},
  {num:"32", part:"5", partName:"第 5 篇 综合项目", name:"智能温控风扇"},
  {num:"33", part:"5", partName:"第 5 篇 综合项目", name:"电子密码锁"},
  {num:"34", part:"5", partName:"第 5 篇 综合项目", name:"空气质量监测站"},
  {num:"35", part:"5", partName:"第 5 篇 综合项目", name:"RFID 智能门禁"},
  {num:"36", part:"5", partName:"第 5 篇 综合项目", name:"智能健康监测"},
  {num:"37", part:"5", partName:"第 5 篇 综合项目", name:"智慧农业灌溉"},
  {num:"38", part:"5", partName:"第 5 篇 综合项目", name:"智能停车管理"},
  {num:"39", part:"5", partName:"第 5 篇 综合项目", name:"工业数据采集网关"},
  {num:"40", part:"5", partName:"第 5 篇 综合项目", name:"OpenHarmony 智能照明"},
  {num:"41", part:"5", partName:"第 5 篇 综合项目", name:"OpenHarmony 分布式环境监测"},
  {num:"42", part:"5", partName:"第 5 篇 综合项目", name:"OpenHarmony 智慧农业大棚"},
  {num:"43", part:"5", partName:"第 5 篇 综合项目", name:"智能快递柜"},
  {num:"44", part:"5", partName:"第 5 篇 综合项目", name:"智能电能监测"},
  {num:"45", part:"5", partName:"第 5 篇 综合项目", name:"四旋翼无人机"}
];

var EXERCISES_DATA = [
  {
    "id": 1,
    "ch": "0.1",
    "type": "single",
    "q": "理想运算放大器的开环电压放大倍数约为？",
    "options": [
      "0",
      "1",
      "无穷大",
      "100"
    ],
    "answer": "C",
    "explain": "理想运放的开环增益无穷大，输入阻抗无穷大，输出阻抗为零。"
  },
  {
    "id": 2,
    "ch": "0.1",
    "type": "single",
    "q": "硅二极管的正向导通压降约为？",
    "options": [
      "0.3V",
      "0.7V",
      "1.2V",
      "2.0V"
    ],
    "answer": "B",
    "explain": "硅二极管正向压降约 0.6-0.7V，锗二极管约 0.2-0.3V。"
  },
  {
    "id": 3,
    "ch": "0.1",
    "type": "single",
    "q": "NPN 三极管工作在放大区的条件是？",
    "options": [
      "发射结正偏、集电结反偏",
      "两个 PN 结都正偏",
      "两个 PN 结都反偏",
      "发射结反偏、集电结正偏"
    ],
    "answer": "A",
    "explain": "放大区要求发射结正偏、集电结反偏。"
  },
  {
    "id": 4,
    "ch": "0.1",
    "type": "single",
    "q": "共射极放大电路的输出信号与输入信号相位关系是？",
    "options": [
      "同相",
      "反相",
      "相差 90°",
      "无固定关系"
    ],
    "answer": "B",
    "explain": "共射极放大器输出与输入反相，共基极和共集电极同相。"
  },
  {
    "id": 5,
    "ch": "0.1",
    "type": "single",
    "q": "稳压二极管正常工作时处于？",
    "options": [
      "正向导通区",
      "反向击穿区",
      "截止区",
      "死区"
    ],
    "answer": "B",
    "explain": "稳压二极管利用反向击穿特性稳压。"
  },
  {
    "id": 6,
    "ch": "0.1",
    "type": "single",
    "q": "滤波电容的作用是？",
    "options": [
      "升高电压",
      "降低纹波",
      "限制电流",
      "稳定频率"
    ],
    "answer": "B",
    "explain": "滤波电容并联在负载两端，滤除纹波使输出更平滑。"
  },
  {
    "id": 7,
    "ch": "0.1",
    "type": "single",
    "q": "三极管的三种基本组态是？",
    "options": [
      "共射、共基、共集",
      "共射、共栅、共漏",
      "共源、共漏、共栅",
      "甲类、乙类、甲乙类"
    ],
    "answer": "A",
    "explain": "三极管有共射、共基、共集三种基本组态。"
  },
  {
    "id": 8,
    "ch": "0.1",
    "type": "single",
    "q": "射极跟随器的电压放大倍数约为？",
    "options": [
      "100",
      "50",
      "1",
      "0"
    ],
    "answer": "C",
    "explain": "共集电极放大器电压增益约为 1，故称射极跟随器。"
  },
  {
    "id": 9,
    "ch": "0.1",
    "type": "single",
    "q": "理想二极管在反向电压作用下表现为？",
    "options": [
      "短路",
      "开路",
      "恒压源",
      "恒流源"
    ],
    "answer": "B",
    "explain": "理想二极管反向截止，相当于开路。"
  },
  {
    "id": 10,
    "ch": "0.1",
    "type": "single",
    "q": "集成运放的同相输入端与反相输入端电位关系是？",
    "options": [
      "同相端更高",
      "反相端更高",
      "电位相等（虚短）",
      "不固定"
    ],
    "answer": "C",
    "explain": "理想运放工作在线性区时两输入端电位近似相等，称为虚短。"
  },
  {
    "id": 11,
    "ch": "0.1",
    "type": "multiple",
    "q": "以下属于模拟集成电路的有？",
    "options": [
      "运算放大器",
      "与非门",
      "78L05 三端稳压器",
      "NE555 定时器"
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explain": "与非门是数字集成电路，其余均为模拟集成电路。"
  },
  {
    "id": 12,
    "ch": "0.1",
    "type": "multiple",
    "q": "电源滤波电路常用的元件有？",
    "options": [
      "电容",
      "电感",
      "二极管",
      "电阻"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "电容与电感是滤波元件，二极管用于整流，电阻一般不用于滤波。"
  },
  {
    "id": 13,
    "ch": "0.1",
    "type": "multiple",
    "q": "三极管在电路中的工作状态包括？",
    "options": [
      "放大区",
      "饱和区",
      "截止区",
      "雪崩区"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "三极管有放大、饱和、截止三个工作区，雪崩不属于工作状态。"
  },
  {
    "id": 14,
    "ch": "0.1",
    "type": "multiple",
    "q": "NPN 三极管处于饱和状态的特征是？",
    "options": [
      "发射结正偏",
      "集电结正偏",
      "UCE≈0.3V",
      "IC 受 IB 控制"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "饱和时两个 PN 结都正偏，UCE 很小，IC 不再受 IB 控制。"
  },
  {
    "id": 15,
    "ch": "0.1",
    "type": "judge",
    "q": "硅二极管的死区电压约为 0.5V。",
    "answer": true,
    "explain": "硅二极管死区电压约 0.5V，锗约 0.1V。"
  },
  {
    "id": 16,
    "ch": "0.1",
    "type": "judge",
    "q": "共集电极放大电路又称为射极跟随器。",
    "answer": true,
    "explain": "共集电极放大器输出从发射极取出，电压跟随输入，故称射极跟随器。"
  },
  {
    "id": 17,
    "ch": "0.1",
    "type": "judge",
    "q": "稳压二极管在正向偏置时也能起稳压作用。",
    "answer": false,
    "explain": "稳压二极管利用反向击穿特性稳压，正向特性与普通二极管相同。"
  },
  {
    "id": 18,
    "ch": "0.1",
    "type": "judge",
    "q": "运算放大器的虚断是指输入端电流近似为零。",
    "answer": true,
    "explain": "理想运放输入阻抗无穷大，输入电流近似为零，称为虚断。"
  },
  {
    "id": 19,
    "ch": "0.1",
    "type": "judge",
    "q": "电感滤波适用于大电流负载。",
    "answer": true,
    "explain": "电感滤波在大电流时滤波效果更好，适用于大电流场合。"
  },
  {
    "id": 20,
    "ch": "0.1",
    "type": "short",
    "q": "简述运算放大器虚短和虚断的含义。",
    "answer": "虚短：理想运放工作在线性区时，两输入端电位近似相等，即 V+ ≈ V-。虚断：理想运放输入阻抗无穷大，流入输入端的电流近似为零，即 I+ ≈ I- ≈ 0。",
    "explain": "虚短和虚断是分析理想运放线性电路的两个基本假设。"
  },
  {
    "id": 21,
    "ch": "0.1",
    "type": "short",
    "q": "说明三极管共射、共基、共集三种组态的特点。",
    "answer": "共射：电压电流都放大，反相，应用最广。共基：只有电压放大，同相，高频特性好。共集（射极跟随器）：只有电流放大，电压放大倍数约 1，同相，输入阻抗高输出阻抗低。",
    "explain": "三种组态各有特点，适用场合不同。"
  },
  {
    "id": 22,
    "ch": "0.1",
    "type": "short",
    "q": "电源滤波电路中电容和电感的作用原理是什么？",
    "answer": "电容滤波：并联在负载两端，利用电容充放电使输出电压平滑，减小纹波。电感滤波：串联在电路中，利用电感阻碍电流变化的特性，抑制电流脉动。两者常组合使用构成 LC 滤波或 π 型滤波。",
    "explain": "滤波原理基于储能元件的充放电和平滑作用。"
  },
  {
    "id": 23,
    "ch": "0.1",
    "type": "short",
    "q": "什么是二极管的单向导电性？",
    "answer": "二极管加正向电压时导通（正向电阻小），加反向电压时截止（反向电阻大），电流只能从阳极流向阴极，这种特性称为单向导电性。",
    "explain": "单向导电性是二极管最基本特性，也是整流电路的工作基础。"
  },
  {
    "id": 24,
    "ch": "0.2",
    "type": "single",
    "q": "LM7805 的输出电压是？",
    "options": [
      "3.3V",
      "5V",
      "12V",
      "可调"
    ],
    "answer": "B",
    "explain": "LM78xx 系列后两位数字表示输出电压，7805 为 +5V。"
  },
  {
    "id": 25,
    "ch": "0.2",
    "type": "single",
    "q": "AMS1117-3.3 是一款什么芯片？",
    "options": [
      "降压芯片",
      "升压芯片",
      "LDO 线性稳压器",
      "DC-DC 开关电源"
    ],
    "answer": "C",
    "explain": "AMS1117 是低压差线性稳压器（LDO），1117-3.3 输出 3.3V。"
  },
  {
    "id": 26,
    "ch": "0.2",
    "type": "single",
    "q": "LM2596 是什么类型的电源芯片？",
    "options": [
      "LDO",
      "开关降压",
      "线性升压",
      "电荷泵"
    ],
    "answer": "B",
    "explain": "LM2596 是开关降压型 DC-DC 芯片，效率高于线性稳压器。"
  },
  {
    "id": 27,
    "ch": "0.2",
    "type": "single",
    "q": "线性稳压器 7805 正常工作时输入输出压差至少需要？",
    "options": [
      "0.1V",
      "0.7V",
      "2V",
      "5V"
    ],
    "answer": "C",
    "explain": "7805 属于传统线性稳压器，压差至少 2V 才能正常稳压。"
  },
  {
    "id": 28,
    "ch": "0.2",
    "type": "single",
    "q": "DC-DC 开关电源相比线性稳压器的主要优点是？",
    "options": [
      "纹波小",
      "效率高",
      "电路简单",
      "噪声低"
    ],
    "answer": "B",
    "explain": "开关电源效率通常 85% 以上，线性稳压器效率约等于 Vout/Vin。"
  },
  {
    "id": 29,
    "ch": "0.2",
    "type": "single",
    "q": "电源滤波电容取值经验，每 1A 电流通常配？",
    "options": [
      "100μF",
      "1000μF",
      "10μF",
      "1μF"
    ],
    "answer": "B",
    "explain": "经验值约 1000μF/A，用于滤除低频纹波。"
  },
  {
    "id": 30,
    "ch": "0.2",
    "type": "single",
    "q": "0.1μF 去耦电容的作用是？",
    "options": [
      "滤除低频纹波",
      "滤除高频噪声",
      "储能",
      "限流"
    ],
    "answer": "B",
    "explain": "0.1μF 陶瓷电容用于滤除高频噪声，靠近芯片电源引脚放置。"
  },
  {
    "id": 31,
    "ch": "0.2",
    "type": "single",
    "q": "桥式整流需要多少只二极管？",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": "C",
    "explain": "桥式整流使用 4 只二极管组成桥式结构。"
  },
  {
    "id": 32,
    "ch": "0.2",
    "type": "single",
    "q": "电源电路中二极管 1N4007 的作用常是？",
    "options": [
      "整流",
      "稳压",
      "检波",
      "开关"
    ],
    "answer": "A",
    "explain": "1N4007 是整流二极管，常用于工频整流电路。"
  },
  {
    "id": 33,
    "ch": "0.2",
    "type": "single",
    "q": "单片机系统中 VCC 与 GND 之间并联 0.1μF 电容的作用是？",
    "options": [
      "限流",
      "去耦",
      "分压",
      "储能"
    ],
    "answer": "B",
    "explain": "0.1μF 去耦电容就近放置在芯片电源引脚，滤除高频噪声。"
  },
  {
    "id": 34,
    "ch": "0.2",
    "type": "multiple",
    "q": "STM32 单片机常用的供电电压是？",
    "options": [
      "5V",
      "3.3V",
      "1.8V",
      "12V"
    ],
    "answer": [
      "B"
    ],
    "explain": "STM32 大多数型号供电电压 2.0-3.6V，典型 3.3V。"
  },
  {
    "id": 35,
    "ch": "0.2",
    "type": "multiple",
    "q": "线性稳压器 LM7805 组成 5V 电源时需要的外围元件包括？",
    "options": [
      "输入滤波电容",
      "输出滤波电容",
      "电感",
      "散热片（大电流时）"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "线性稳压器外围只需输入输出电容，电感是开关电源的元件，大电流时需要散热片。"
  },
  {
    "id": 36,
    "ch": "0.2",
    "type": "multiple",
    "q": "DC-DC 开关电源的基本元件包括？",
    "options": [
      "电感",
      "开关管",
      "二极管",
      "电容"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "Buck/Boost 电路需要电感、开关管、续流二极管和输出电容。"
  },
  {
    "id": 37,
    "ch": "0.2",
    "type": "multiple",
    "q": "PCB 电源走线设计原则包括？",
    "options": [
      "电源线尽量粗",
      "走短路径",
      "避免形成环路",
      "电源地分开铺铜"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "电源线粗、走短路径、避免环路都是好的设计；电源地通常统一铺铜，不分开。"
  },
  {
    "id": 38,
    "ch": "0.2",
    "type": "judge",
    "q": "LDO 的特点是输入输出压差小、噪声低。",
    "answer": true,
    "explain": "LDO 低压差线性稳压器压差可低至 0.5V 以下，输出纹波小。"
  },
  {
    "id": 39,
    "ch": "0.2",
    "type": "judge",
    "q": "开关电源的纹波通常比线性稳压器小。",
    "answer": false,
    "explain": "开关电源由于开关动作产生较大纹波，线性稳压器纹波小。"
  },
  {
    "id": 40,
    "ch": "0.2",
    "type": "judge",
    "q": "AMS1117-3.3 可以将 5V 降到 3.3V。",
    "answer": true,
    "explain": "AMS1117 是 LDO，输入 5V 输出 3.3V，压差 1.7V 在允许范围内。"
  },
  {
    "id": 41,
    "ch": "0.2",
    "type": "judge",
    "q": "电源去耦电容应尽量远离芯片引脚。",
    "answer": false,
    "explain": "去耦电容应尽量靠近芯片电源引脚，缩短高频回路。"
  },
  {
    "id": 42,
    "ch": "0.2",
    "type": "judge",
    "q": "7805 输入 24V 输出 5V 1A 时效率约 21%。",
    "answer": true,
    "explain": "效率 = 5/24 ≈ 21%，损耗大需加散热片。"
  },
  {
    "id": 43,
    "ch": "0.2",
    "type": "short",
    "q": "简述线性稳压器与开关电源的区别。",
    "answer": "线性稳压器：通过调整管线性区工作压降稳压，纹波小噪声低，但效率低（≈Vout/Vin），发热大。开关电源：通过开关管高频开关+电感储能稳压，效率高（>85%），但纹波噪声大，电路复杂。线性适合小电流低噪声，开关适合大电流高效率。",
    "explain": "两者各有优缺点，按需求选择。"
  },
  {
    "id": 44,
    "ch": "0.2",
    "type": "short",
    "q": "什么是 LDO？其特点是什么？",
    "answer": "LDO（Low Dropout Regulator）低压差线性稳压器，特点是输入输出压差小（可低至 0.5V 以下），纹波小，噪声低，外围元件少（只需输入输出电容），适合对噪声敏感的模拟电路和 RF 电路供电。缺点是效率仍受压差限制，大电流发热较大。",
    "explain": "LDO 是低压差线性稳压器，压差小是核心优点。"
  },
  {
    "id": 45,
    "ch": "0.2",
    "type": "short",
    "q": "为什么单片机电源引脚旁要并联 0.1μF 和 10μF 两个电容？",
    "answer": "0.1μF 陶瓷电容用于滤除高频噪声（响应快），10μF 电解电容用于储能和滤除低频纹波（容量大）。两者并联可覆盖较宽频段，保证单片机稳定工作。这是电源去耦的标准做法。",
    "explain": "大小电容并联覆盖不同频段。"
  },
  {
    "id": 46,
    "ch": "0.3",
    "type": "single",
    "q": "二进制数 1011 对应的十进制是？",
    "options": [
      "9",
      "10",
      "11",
      "13"
    ],
    "answer": "C",
    "explain": "8+2+1=11。"
  },
  {
    "id": 47,
    "ch": "0.3",
    "type": "single",
    "q": "十六进制数 0xFF 对应的十进制是？",
    "options": [
      "128",
      "255",
      "256",
      "15"
    ],
    "answer": "B",
    "explain": "0xFF = 15×16+15 = 255。"
  },
  {
    "id": 48,
    "ch": "0.3",
    "type": "single",
    "q": "10 进制数 25 对应的 8 位二进制是？",
    "options": [
      "00011001",
      "00011010",
      "00011011",
      "00011101"
    ],
    "answer": "A",
    "explain": "25=16+8+1=00011001。"
  },
  {
    "id": 49,
    "ch": "0.3",
    "type": "single",
    "q": "基本逻辑门中，输出为输入取反的是？",
    "options": [
      "与门",
      "或门",
      "非门",
      "异或门"
    ],
    "answer": "C",
    "explain": "非门输出为输入取反。"
  },
  {
    "id": 50,
    "ch": "0.3",
    "type": "single",
    "q": "NAND 门的逻辑表达式是？",
    "options": [
      "Y=A·B",
      "Y=A+B",
      "Y=(A·B)'",
      "Y=A⊕B"
    ],
    "answer": "C",
    "explain": "NAND 是 AND 的非，Y=(A·B)'。"
  },
  {
    "id": 51,
    "ch": "0.3",
    "type": "single",
    "q": "JK 触发器在 J=1、K=1 时的功能是？",
    "options": [
      "保持",
      "置 1",
      "置 0",
      "翻转"
    ],
    "answer": "D",
    "explain": "JK 触发器 J=K=1 时每来一个时钟翻转一次。"
  },
  {
    "id": 52,
    "ch": "0.3",
    "type": "single",
    "q": "D 触发器的次态 Qn+1 等于？",
    "options": [
      "D",
      "Qn",
      "D'",
      "0"
    ],
    "answer": "A",
    "explain": "D 触发器次态跟随 D 输入。"
  },
  {
    "id": 53,
    "ch": "0.3",
    "type": "single",
    "q": "三态门的第三态是？",
    "options": [
      "低电平",
      "高电平",
      "高阻态",
      "不确定"
    ],
    "answer": "C",
    "explain": "三态门有 0、1、高阻三态。"
  },
  {
    "id": 54,
    "ch": "0.3",
    "type": "single",
    "q": "组合逻辑电路的特点是？",
    "options": [
      "有记忆功能",
      "输出仅取决于当前输入",
      "包含触发器",
      "受时钟控制"
    ],
    "answer": "B",
    "explain": "组合逻辑输出仅由当前输入决定，无记忆。"
  },
  {
    "id": 55,
    "ch": "0.3",
    "type": "single",
    "q": "时序逻辑电路的特点是？",
    "options": [
      "无记忆功能",
      "包含存储元件",
      "不含触发器",
      "不受时钟控制"
    ],
    "answer": "B",
    "explain": "时序电路含存储元件，有记忆功能。"
  },
  {
    "id": 56,
    "ch": "0.3",
    "type": "multiple",
    "q": "以下属于组合逻辑电路的有？",
    "options": [
      "编码器",
      "计数器",
      "译码器",
      "寄存器"
    ],
    "answer": [
      "A",
      "C"
    ],
    "explain": "编码器、译码器是组合电路，计数器、寄存器是时序电路。"
  },
  {
    "id": 57,
    "ch": "0.3",
    "type": "multiple",
    "q": "以下属于时序逻辑电路的有？",
    "options": [
      "计数器",
      "移位寄存器",
      "加法器",
      "触发器"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "计数器、寄存器、触发器是时序电路，加法器是组合电路。"
  },
  {
    "id": 58,
    "ch": "0.3",
    "type": "multiple",
    "q": "逻辑函数化简常用的方法有？",
    "options": [
      "代数法",
      "卡诺图",
      "波形图",
      "真值表"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "代数法和卡诺图法是化简逻辑函数的两种常用方法。"
  },
  {
    "id": 59,
    "ch": "0.3",
    "type": "multiple",
    "q": "三态门的三种输出状态是？",
    "options": [
      "高电平",
      "低电平",
      "高阻态",
      "负电平"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "三态门输出有 0、1、高阻三种状态。"
  },
  {
    "id": 60,
    "ch": "0.3",
    "type": "judge",
    "q": "异或门的逻辑功能是两输入相同时输出 0，不同时输出 1。",
    "answer": true,
    "explain": "异或 Y=A⊕B，相同为 0 不同为 1。"
  },
  {
    "id": 61,
    "ch": "0.3",
    "type": "judge",
    "q": "十进制数 10 的 BCD 码是 1010。",
    "answer": false,
    "explain": "BCD 码用 4 位二进制表示 1 位十进制，10 的 BCD 是 0001 0000。"
  },
  {
    "id": 62,
    "ch": "0.3",
    "type": "judge",
    "q": "D 触发器是上升沿触发。",
    "answer": true,
    "explain": "D 触发器在时钟上升沿采样 D 输入，更新输出。"
  },
  {
    "id": 63,
    "ch": "0.3",
    "type": "judge",
    "q": "卡诺图化简适用于变量较多的逻辑函数。",
    "answer": false,
    "explain": "卡诺图适用于 4 变量以下，变量多时使用奎因-麦克拉斯基法。"
  },
  {
    "id": 64,
    "ch": "0.3",
    "type": "judge",
    "q": "译码器是把二进制码翻译成特定信号的组合电路。",
    "answer": true,
    "explain": "译码器将二进制编码转换为对应的输出信号。"
  },
  {
    "id": 65,
    "ch": "0.3",
    "type": "short",
    "q": "什么是组合逻辑电路和时序逻辑电路？",
    "answer": "组合逻辑电路：输出仅由当前输入决定，无记忆功能，不含存储元件（如加法器、译码器）。时序逻辑电路：输出由当前输入和电路原状态共同决定，有记忆功能，含触发器等存储元件（如计数器、寄存器）。",
    "explain": "区别关键在于是否有存储元件和记忆功能。"
  },
  {
    "id": 66,
    "ch": "0.3",
    "type": "short",
    "q": "什么是触发器？简述 D 触发器的工作原理。",
    "answer": "触发器是具有记忆功能的基本时序逻辑单元，能存储 1 位二进制信息。D 触发器在时钟有效沿（通常是上升沿）到来时，将 D 输入端的值锁存到 Q 输出，并保持到下一个时钟沿。次态方程 Qn+1=D。常用于数据锁存、寄存器、计数器等。",
    "explain": "D 触发器是最常用的触发器之一。"
  },
  {
    "id": 67,
    "ch": "0.3",
    "type": "short",
    "q": "把二进制 11010110 转换为十六进制和十进制。",
    "answer": "十六进制：0xD6（每 4 位一组：1101=D，0110=6）。十进制：128+64+16+4+2=214。",
    "explain": "二进制转十六进制按 4 位分组，转十进制按权展开。"
  },
  {
    "id": 68,
    "ch": "0.4",
    "type": "single",
    "q": "C 语言中 char 类型占多少字节？",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "answer": "A",
    "explain": "char 占 1 字节。"
  },
  {
    "id": 69,
    "ch": "0.4",
    "type": "single",
    "q": "int a[10] 数组中下标范围是？",
    "options": [
      "1~10",
      "0~10",
      "0~9",
      "1~9"
    ],
    "answer": "C",
    "explain": "C 数组下标从 0 开始，长度 10 范围是 0~9。"
  },
  {
    "id": 70,
    "ch": "0.4",
    "type": "single",
    "q": "以下运算符优先级最高的是？",
    "options": [
      "+",
      "*",
      "()",
      "="
    ],
    "answer": "C",
    "explain": "括号优先级最高。"
  },
  {
    "id": 71,
    "ch": "0.4",
    "type": "single",
    "q": "0x0F & 0x33 的结果是？",
    "options": [
      "0x03",
      "0x3F",
      "0x3C",
      "0x30"
    ],
    "answer": "A",
    "explain": "0x0F=0000 1111，0x33=0011 0011，按位与=0000 0011=0x03。"
  },
  {
    "id": 72,
    "ch": "0.4",
    "type": "single",
    "q": "表达式 5 >> 2 的结果是？",
    "options": [
      "1",
      "2",
      "10",
      "20"
    ],
    "answer": "A",
    "explain": "5=101，右移 2 位 = 1。"
  },
  {
    "id": 73,
    "ch": "0.4",
    "type": "single",
    "q": "static 局部变量的特点是？",
    "options": [
      "每次调用都初始化",
      "只初始化一次",
      "作用域为全局",
      "存储在栈"
    ],
    "answer": "B",
    "explain": "static 局部变量只初始化一次，存储在静态区，但作用域仍是局部。"
  },
  {
    "id": 74,
    "ch": "0.4",
    "type": "single",
    "q": "volatile 关键字的作用是？",
    "options": [
      "优化编译",
      "防止编译器优化对该变量的访问",
      "声明静态变量",
      "声明常量"
    ],
    "answer": "B",
    "explain": "volatile 告诉编译器不要优化对该变量的访问，每次都从内存读取。"
  },
  {
    "id": 75,
    "ch": "0.4",
    "type": "single",
    "q": "sizeof(int) 在 32 位系统中通常是？",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "answer": "C",
    "explain": "32 位系统中 int 通常 4 字节。"
  },
  {
    "id": 76,
    "ch": "0.4",
    "type": "single",
    "q": "宏定义 #define PI 3.14 中 PI 是？",
    "options": [
      "变量",
      "常量",
      "文本替换",
      "函数"
    ],
    "answer": "C",
    "explain": "宏定义是文本替换，不分配内存。"
  },
  {
    "id": 77,
    "ch": "0.4",
    "type": "single",
    "q": "函数返回值类型为 void 表示？",
    "options": [
      "返回 0",
      "返回任意值",
      "不返回值",
      "返回空字符"
    ],
    "answer": "C",
    "explain": "void 表示函数不返回值。"
  },
  {
    "id": 78,
    "ch": "0.4",
    "type": "multiple",
    "q": "C 语言基本数据类型包括？",
    "options": [
      "int",
      "float",
      "struct",
      "char"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "struct 是构造类型，其余是基本类型。"
  },
  {
    "id": 79,
    "ch": "0.4",
    "type": "multiple",
    "q": "以下属于位运算符的是？",
    "options": [
      "&",
      "|",
      "&&",
      "~"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "& | ~ ^ << >> 是位运算，&& 是逻辑与。"
  },
  {
    "id": 80,
    "ch": "0.4",
    "type": "multiple",
    "q": "存储类型说明符包括？",
    "options": [
      "auto",
      "static",
      "register",
      "volatile"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "auto/static/register/extern 是存储类型，volatile 是类型限定符。"
  },
  {
    "id": 81,
    "ch": "0.4",
    "type": "multiple",
    "q": "以下能定义指针的语句是？",
    "options": [
      "int *p",
      "char *s",
      "int p",
      "void *q"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "带 * 的才是指针定义。"
  },
  {
    "id": 82,
    "ch": "0.4",
    "type": "judge",
    "q": "数组名是指向数组第一个元素的指针。",
    "answer": true,
    "explain": "数组名是常量指针，指向首元素。"
  },
  {
    "id": 83,
    "ch": "0.4",
    "type": "judge",
    "q": "指针变量占用的字节数与所指向类型有关。",
    "answer": false,
    "explain": "指针变量字节数由系统地址总线决定（32 位系统 4 字节），与指向类型无关。"
  },
  {
    "id": 84,
    "ch": "0.4",
    "type": "judge",
    "q": "static 全局变量只能在本文件中使用。",
    "answer": true,
    "explain": "static 全局变量限制作用域为本文件。"
  },
  {
    "id": 85,
    "ch": "0.4",
    "type": "judge",
    "q": "宏定义在编译阶段进行文本替换。",
    "answer": true,
    "explain": "宏定义在预处理阶段进行文本替换。"
  },
  {
    "id": 86,
    "ch": "0.4",
    "type": "judge",
    "q": "const 修饰的变量可以通过指针间接修改。",
    "answer": true,
    "explain": "通过强制类型转换可以修改，但这是未定义行为。"
  },
  {
    "id": 87,
    "ch": "0.4",
    "type": "short",
    "q": "简述 volatile 关键字的含义及其在单片机编程中的应用。",
    "answer": "volatile 告诉编译器该变量可能被程序之外的因素（如中断、硬件）修改，禁止编译器将其缓存到寄存器，每次访问都从内存读取。在单片机编程中，volatile 用于修饰：1) 外设寄存器（如 GPIO、USART）；2) 中断服务函数中修改的全局变量；3) 多线程共享的变量。否则编译器优化可能导致程序读取到过期的寄存器缓存值。",
    "explain": "volatile 是嵌入式编程必备关键字。"
  },
  {
    "id": 88,
    "ch": "0.4",
    "type": "short",
    "q": "说明 static 关键字在 C 语言中的三种用法。",
    "answer": "1) 修饰局部变量：变量存储在静态区，只初始化一次，函数退出后不销毁，但作用域仍是局部。2) 修饰全局变量：限制作用域为当前文件，其他文件不能用 extern 引用。3) 修饰函数：限制函数只能在本文件中调用，防止命名冲突。",
    "explain": "static 的核心作用是延长生命周期或限制作用域。"
  },
  {
    "id": 89,
    "ch": "0.4",
    "type": "short",
    "q": "写一段代码：定义一个函数将 4 字节合并为一个 32 位整数。",
    "answer": "```c\nuint32_t merge_bytes(uint8_t b0, uint8_t b1, uint8_t b2, uint8_t b3) {\n    return ((uint32_t)b3 << 24) | ((uint32_t)b2 << 16) | ((uint32_t)b1 << 8) | b0;\n}\n```\n注意：移位前要将 8 位变量转换为 32 位，避免移位时溢出。",
    "explain": "位运算合并字节是单片机通信协议解析的常见操作。"
  },
  {
    "id": 90,
    "ch": "0.5",
    "type": "single",
    "q": "Keil C51 中 char 类型默认是？",
    "options": [
      "有符号",
      "无符号",
      "可配置",
      "16 位"
    ],
    "answer": "B",
    "explain": "C51 中 char 默认 unsigned char，与 ANSI C 不同。"
  },
  {
    "id": 91,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 sfr 关键字用于？",
    "options": [
      "定义函数",
      "定义特殊功能寄存器",
      "定义变量",
      "定义宏"
    ],
    "answer": "B",
    "explain": "sfr 用于定义 SFR 地址。"
  },
  {
    "id": 92,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 sbit 关键字用于？",
    "options": [
      "定义位变量",
      "定义字符串",
      "定义静态变量",
      "定义结构体"
    ],
    "answer": "A",
    "explain": "sbit 用于定义可位寻址的变量。"
  },
  {
    "id": 93,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 bit 类型变量占用？",
    "options": [
      "1 字节",
      "1 位",
      "2 字节",
      "4 字节"
    ],
    "answer": "B",
    "explain": "bit 类型变量占 1 位，存储在位寻址区。"
  },
  {
    "id": 94,
    "ch": "0.5",
    "type": "single",
    "q": "MCS-51 的存储区 code 表示？",
    "options": [
      "内部 RAM",
      "外部 RAM",
      "程序存储器",
      "特殊功能寄存器"
    ],
    "answer": "C",
    "explain": "code 表示程序存储器（ROM）。"
  },
  {
    "id": 95,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 interrupt 1 表示？",
    "options": [
      "外部中断 0",
      "定时器 0",
      "外部中断 1",
      "定时器 1"
    ],
    "answer": "B",
    "explain": "中断号：0=外部中断0，1=定时器0，2=外部中断1，3=定时器1，4=串口。"
  },
  {
    "id": 96,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 using 1 表示？",
    "options": [
      "使用 1 号中断",
      "使用第 1 组工作寄存器",
      "使用第 1 个定时器",
      "使用第 1 个串口"
    ],
    "answer": "B",
    "explain": "using n 指定中断函数使用第 n 组工作寄存器。"
  },
  {
    "id": 97,
    "ch": "0.5",
    "type": "single",
    "q": "Keil C51 中 unsigned int 占多少字节？",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "answer": "B",
    "explain": "C51 中 int 占 2 字节（8051 是 8 位机）。"
  },
  {
    "id": 98,
    "ch": "0.5",
    "type": "single",
    "q": "以下哪种是 C51 特有的数据类型？",
    "options": [
      "int",
      "float",
      "sfr",
      "double"
    ],
    "answer": "C",
    "explain": "sfr 是 C51 特有，用于访问特殊功能寄存器。"
  },
  {
    "id": 99,
    "ch": "0.5",
    "type": "single",
    "q": "C51 中 #pragma NOAREGS 的作用是？",
    "options": [
      "禁止使用绝对寄存器",
      "禁止优化",
      "禁止中断",
      "禁止宏定义"
    ],
    "answer": "A",
    "explain": "禁止编译器使用绝对寄存器地址，提高代码可重入性。"
  },
  {
    "id": 100,
    "ch": "0.5",
    "type": "multiple",
    "q": "MCS-51 的存储区关键字有？",
    "options": [
      "data",
      "idata",
      "xdata",
      "pdata"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "data/idata/xdata/pdata/code 是 C51 存储区关键字。"
  },
  {
    "id": 101,
    "ch": "0.5",
    "type": "multiple",
    "q": "C51 中定义中断函数的关键字有？",
    "options": [
      "interrupt",
      "using",
      "void",
      "static"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "interrupt 指定中断号，using 指定寄存器组。"
  },
  {
    "id": 102,
    "ch": "0.5",
    "type": "multiple",
    "q": "C51 中以下属于位操作的是？",
    "options": [
      "sbit",
      "bit",
      "bool",
      "sfr"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "sbit 定义位变量，bit 是位类型。bool 是 C99 类型，sfr 是字节寄存器。"
  },
  {
    "id": 103,
    "ch": "0.5",
    "type": "multiple",
    "q": "Keil C51 编译器输出的文件包括？",
    "options": [
      ".hex",
      ".bin",
      ".obj",
      ".elf"
    ],
    "answer": [
      "A",
      "C"
    ],
    "explain": "C51 主要输出 HEX 和 OBJ 文件，bin 需转换，elf 不常用。"
  },
  {
    "id": 104,
    "ch": "0.5",
    "type": "judge",
    "q": "C51 中 int 和 long 都占 2 字节。",
    "answer": false,
    "explain": "int 占 2 字节，long 占 4 字节。"
  },
  {
    "id": 105,
    "ch": "0.5",
    "type": "judge",
    "q": "sfr16 用于定义 16 位特殊功能寄存器。",
    "answer": true,
    "explain": "如定时器 2 的 T2MOD 等 16 位寄存器可用 sfr16 定义。"
  },
  {
    "id": 106,
    "ch": "0.5",
    "type": "judge",
    "q": "C51 中 bit 类型变量可以存储在任意位置。",
    "answer": false,
    "explain": "bit 类型只能存储在位寻址区（20H-2FH）。"
  },
  {
    "id": 107,
    "ch": "0.5",
    "type": "judge",
    "q": "interrupt 和 using 关键字只能用于函数声明。",
    "answer": true,
    "explain": "这两个关键字修饰中断服务函数，不能用于普通变量。"
  },
  {
    "id": 108,
    "ch": "0.5",
    "type": "judge",
    "q": "C51 编译器支持 C99 标准。",
    "answer": false,
    "explain": "Keil C51 主要支持 C89，部分 C99 扩展。"
  },
  {
    "id": 109,
    "ch": "0.5",
    "type": "short",
    "q": "简述 sfr、sbit、bit 三个 C51 特有数据类型的用途。",
    "answer": "sfr：定义 8 位特殊功能寄存器，如 sfr P1 = 0x90。sbit：定义可位寻址的位变量，常用于访问 SFR 的某一位，如 sbit LED = P1^0。bit：定义 1 位变量，存储在位寻址区（20H-2FH），取值 0 或 1。三者都是 C51 特有，用于直接操作 8051 硬件。",
    "explain": "sfr/sbit/bit 是 C51 与硬件交互的核心。"
  },
  {
    "id": 110,
    "ch": "0.5",
    "type": "short",
    "q": "C51 中 data、idata、xdata、pdata、code 五种存储区有什么区别？",
    "answer": "data：内部 RAM 0x00-0x7F，直接寻址，访问最快。idata：内部 RAM 0x00-0xFF，间接寻址，包含 128 字节 SFR 区。xdata：外部 RAM，使用 DPTR 间接寻址，访问慢。pdata：外部 RAM 的前 256 字节，使用 @R0/R1 间接寻址。code：程序存储器（ROM），只能读不能写，用于常量、表格。",
    "explain": "不同存储区对应不同物理位置和寻址方式。"
  },
  {
    "id": 111,
    "ch": "0.5",
    "type": "short",
    "q": "写一个 C51 中断服务函数示例：定时器 0 中断，每 1ms 中断一次（假设晶振 12MHz）。",
    "answer": "```c\n#include <reg52.h>\n#define FOSC 12000000UL\n#define T_1MS (65536 - FOSC/12/1000)  // 1000Hz\n\nvoid Timer0_Init(void) {\n    TMOD &= 0xF0;\n    TMOD |= 0x01;            // 16 位定时器模式\n    TH0 = T_1MS >> 8;\n    TL0 = T_1MS & 0xFF;\n    ET0 = 1;                 // 开定时器 0 中断\n    EA = 1;                  // 开总中断\n    TR0 = 1;                 // 启动定时器 0\n}\n\nvoid Timer0_ISR(void) interrupt 1 {\n    TH0 = T_1MS >> 8;        // 重装初值\n    TL0 = T_1MS & 0xFF;\n    // 用户代码\n}\n```\n12MHz 晶振，机器周期 1μs，1ms 需 1000 个机器周期。",
    "explain": "中断函数使用 interrupt 关键字声明中断号。"
  },
  {
    "id": 112,
    "ch": "1",
    "type": "single",
    "q": "单片机又称为？",
    "options": [
      "CPU",
      "MCU",
      "GPU",
      "FPGA"
    ],
    "answer": "B",
    "explain": "MCU = Microcontroller Unit。"
  },
  {
    "id": 113,
    "ch": "1",
    "type": "single",
    "q": "MCS-51 系列单片机是几位机？",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "B",
    "explain": "MCS-51 是 8 位单片机。"
  },
  {
    "id": 114,
    "ch": "1",
    "type": "single",
    "q": "STM32F407 是几位单片机？",
    "options": [
      "8",
      "16",
      "32",
      "64"
    ],
    "answer": "C",
    "explain": "STM32F4 基于 Cortex-M4 内核，32 位。"
  },
  {
    "id": 115,
    "ch": "1",
    "type": "single",
    "q": "以下不属于单片机内部资源的是？",
    "options": [
      "CPU 内核",
      "RAM",
      "硬盘",
      "定时器"
    ],
    "answer": "C",
    "explain": "单片机内部不含硬盘，存储用 Flash。"
  },
  {
    "id": 116,
    "ch": "1",
    "type": "single",
    "q": "单片机中 RAM 的作用是？",
    "options": [
      "存储程序",
      "存储数据",
      "存储固件",
      "存储配置"
    ],
    "answer": "B",
    "explain": "RAM 用于存储运行时变量和数据。"
  },
  {
    "id": 117,
    "ch": "1",
    "type": "single",
    "q": "单片机中 Flash 的作用是？",
    "options": [
      "存储程序",
      "存储变量",
      "存储寄存器",
      "存储堆栈"
    ],
    "answer": "A",
    "explain": "Flash 存储程序代码和常量。"
  },
  {
    "id": 118,
    "ch": "1",
    "type": "single",
    "q": "哈佛架构的特点是？",
    "options": [
      "程序与数据共用存储空间",
      "程序与数据分开存储",
      "没有缓存",
      "只有 RAM"
    ],
    "answer": "B",
    "explain": "哈佛架构程序和数据存储器独立。"
  },
  {
    "id": 119,
    "ch": "1",
    "type": "single",
    "q": "MCS-51 的程序计数器 PC 是多少位？",
    "options": [
      "8",
      "16",
      "32",
      "24"
    ],
    "answer": "B",
    "explain": "PC 16 位，可寻址 64KB。"
  },
  {
    "id": 120,
    "ch": "1",
    "type": "single",
    "q": "单片机的 GPIO 是指？",
    "options": [
      "通用输入输出",
      "图形处理",
      "通用协议",
      "全局中断"
    ],
    "answer": "A",
    "explain": "GPIO = General Purpose Input/Output。"
  },
  {
    "id": 121,
    "ch": "1",
    "type": "single",
    "q": "MCS-51 的时钟周期与机器周期的关系（12T 模式）是？",
    "options": [
      "1:1",
      "6:1",
      "12:1",
      "24:1"
    ],
    "answer": "C",
    "explain": "传统 12T 模式，12 个时钟周期 = 1 机器周期。"
  },
  {
    "id": 122,
    "ch": "1",
    "type": "multiple",
    "q": "单片机内部通常包含？",
    "options": [
      "CPU",
      "RAM",
      "Flash",
      "定时器"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "单片机是集成 CPU、存储、外设的 SoC。"
  },
  {
    "id": 123,
    "ch": "1",
    "type": "multiple",
    "q": "STM32F407 内部包含的外设有？",
    "options": [
      "ADC",
      "USART",
      "SPI",
      "I2C"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "STM32F407 集成 ADC、USART、SPI、I2C 等多种外设。"
  },
  {
    "id": 124,
    "ch": "1",
    "type": "multiple",
    "q": "以下属于 32 位单片机的有？",
    "options": [
      "STM32F103",
      "STM32F407",
      "AT89C52",
      "ESP32"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "AT89C52 是 8 位，其余都是 32 位。"
  },
  {
    "id": 125,
    "ch": "1",
    "type": "multiple",
    "q": "单片机开发常用的编程语言有？",
    "options": [
      "C 语言",
      "汇编",
      "Python",
      "Java"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "C 是单片机开发主流语言，汇编用于性能关键或底层代码。"
  },
  {
    "id": 126,
    "ch": "1",
    "type": "judge",
    "q": "MCS-51 是冯·诺依曼架构。",
    "answer": false,
    "explain": "MCS-51 是哈佛架构，程序和数据存储器独立。"
  },
  {
    "id": 127,
    "ch": "1",
    "type": "judge",
    "q": "STM32F407 内核是 Cortex-M4。",
    "answer": true,
    "explain": "STM32F4 系列基于 Cortex-M4 内核。"
  },
  {
    "id": 128,
    "ch": "1",
    "type": "judge",
    "q": "单片机的 RAM 断电后数据不丢失。",
    "answer": false,
    "explain": "RAM 是易失性存储器，断电数据丢失。"
  },
  {
    "id": 129,
    "ch": "1",
    "type": "judge",
    "q": "单片机的 Flash 可以多次擦写。",
    "answer": true,
    "explain": "Flash 是电可擦除可编程存储器，支持多次擦写。"
  },
  {
    "id": 130,
    "ch": "1",
    "type": "judge",
    "q": "ESP32 是国产单片机。",
    "answer": true,
    "explain": "ESP32 由乐鑫科技（Espressif）设计，是中国公司。"
  },
  {
    "id": 131,
    "ch": "1",
    "type": "short",
    "q": "简述单片机与通用 CPU 的区别。",
    "answer": "单片机将 CPU、存储器（RAM/ROM）、外设（GPIO、定时器、串口、ADC 等）集成在一块芯片上，构成完整的微型计算机系统。通用 CPU 只含运算器和控制器，需要外接存储器和外设芯片才能工作。单片机集成度高、成本低、功耗小、控制功能强，适合嵌入式控制应用；通用 CPU 性能高、扩展性强，适合通用计算机。",
    "explain": "单片机强调集成和控制，CPU 强调计算性能。"
  },
  {
    "id": 132,
    "ch": "1",
    "type": "short",
    "q": "比较 MCS-51、STM32、ESP32 三种单片机的特点。",
    "answer": "MCS-51：8 位，经典架构，资源少（4K ROM、128B RAM），成本低，学习入门首选。STM32（F407）：32 位 Cortex-M4，资源丰富（1M Flash、192K RAM），主频 168MHz，带 FPU/DSP，外设齐全，工业应用广泛。ESP32：32 位 Xtensa 双核，主频 240MHz，内置 Wi-Fi/BLE，适合物联网，功耗低。三者分别代表 8 位入门、32 位工业、32 位物联网三大方向。",
    "explain": "三种单片机各有定位。"
  },
  {
    "id": 133,
    "ch": "1",
    "type": "short",
    "q": "什么是单片机的时钟周期、机器周期、指令周期？",
    "answer": "时钟周期：单片机时钟信号的周期，是基本时间单位。机器周期：完成一个基本操作所需的时间，传统 MCS-51（12T 模式）12 个时钟周期 = 1 机器周期，STC 1T 模式 1 个时钟周期 = 1 机器周期。指令周期：执行一条指令所需的时间，可能为 1~4 个机器周期。三者关系：指令周期 ≥ 机器周期 ≥ 时钟周期。",
    "explain": "三个周期是衡量单片机速度的基本时间单位。"
  },
  {
    "id": 134,
    "ch": "2",
    "type": "single",
    "q": "二进制 11111111 表示的十进制是？",
    "options": [
      "128",
      "255",
      "256",
      "127"
    ],
    "answer": "B",
    "explain": "8 个 1 = 255。"
  },
  {
    "id": 135,
    "ch": "2",
    "type": "single",
    "q": "十六进制 0xAB 对应的二进制是？",
    "options": [
      "10101011",
      "10101010",
      "11101011",
      "10101111"
    ],
    "answer": "A",
    "explain": "A=1010, B=1011，组合为 10101011。"
  },
  {
    "id": 136,
    "ch": "2",
    "type": "single",
    "q": "负数在计算机中通常用什么表示？",
    "options": [
      "原码",
      "反码",
      "补码",
      "BCD 码"
    ],
    "answer": "C",
    "explain": "计算机中负数用补码表示。"
  },
  {
    "id": 137,
    "ch": "2",
    "type": "single",
    "q": "8 位有符号数 -1 的补码是？",
    "options": [
      "11111111",
      "10000001",
      "10000000",
      "00000001"
    ],
    "answer": "A",
    "explain": "-1 原码 10000001，反码 11111110，补码 11111111。"
  },
  {
    "id": 138,
    "ch": "2",
    "type": "single",
    "q": "8 位无符号数最大值是？",
    "options": [
      "127",
      "128",
      "255",
      "256"
    ],
    "answer": "C",
    "explain": "8 位无符号范围 0~255。"
  },
  {
    "id": 139,
    "ch": "2",
    "type": "single",
    "q": "8 位有符号数范围是？",
    "options": [
      "-127~128",
      "-128~127",
      "0~255",
      "-256~255"
    ],
    "answer": "B",
    "explain": "8 位有符号范围 -128~127。"
  },
  {
    "id": 140,
    "ch": "2",
    "type": "single",
    "q": "ASCII 码 '0' 对应的十六进制是？",
    "options": [
      "0x00",
      "0x30",
      "0x0A",
      "0x48"
    ],
    "answer": "B",
    "explain": "字符 '0' 的 ASCII 是 48 = 0x30。"
  },
  {
    "id": 141,
    "ch": "2",
    "type": "single",
    "q": "BCD 码 59 的二进制表示是？",
    "options": [
      "111011",
      "01011001",
      "00111011",
      "111101"
    ],
    "answer": "B",
    "explain": "BCD 用 4 位二进制表示 1 位十进制：5=0101, 9=1001，组合 01011001。"
  },
  {
    "id": 142,
    "ch": "2",
    "type": "single",
    "q": "1 个字节（Byte）等于多少位（bit）？",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "B",
    "explain": "1 Byte = 8 bit。"
  },
  {
    "id": 143,
    "ch": "2",
    "type": "single",
    "q": "1 KB 等于多少字节？",
    "options": [
      "100",
      "1000",
      "1024",
      "10240"
    ],
    "answer": "C",
    "explain": "1 KB = 1024 B。"
  },
  {
    "id": 144,
    "ch": "2",
    "type": "multiple",
    "q": "以下属于进制的是？",
    "options": [
      "二进制",
      "八进制",
      "十进制",
      "十六进制"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "计算机常用进制包括二、八、十、十六。"
  },
  {
    "id": 145,
    "ch": "2",
    "type": "multiple",
    "q": "以下等式正确的有？",
    "options": [
      "1B=8bit",
      "1KB=1024B",
      "1MB=1024KB",
      "1GB=1024B"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "1GB=1024MB，不是 1024B。"
  },
  {
    "id": 146,
    "ch": "2",
    "type": "multiple",
    "q": "计算机中常用的编码有？",
    "options": [
      "ASCII",
      "BCD",
      "UTF-8",
      "Gray"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "ASCII/BCD/UTF-8 是编码，Gray 是格雷码不是字符编码。"
  },
  {
    "id": 147,
    "ch": "2",
    "type": "multiple",
    "q": "以下数制转换正确的有？",
    "options": [
      "10D=1010B",
      "255D=0xFF",
      "16D=0x10",
      "100D=01100100B"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "16D=0x10，注意 0x10 = 16，但 0x10 表示十六进制 10 = 1×16+0=16，正确。但选项 C 写的是 16D=0x10，0x10=16D，正确。重新审视：A 1010B=10 正确；B 0xFF=255 正确；C 0x10=16 正确；D 01100100B=64+32+4=100 正确。所以全对。"
  },
  {
    "id": 148,
    "ch": "2",
    "type": "judge",
    "q": "BCD 码就是二进制数。",
    "answer": false,
    "explain": "BCD 码用 4 位二进制表示 1 位十进制，不等于纯二进制。"
  },
  {
    "id": 149,
    "ch": "2",
    "type": "judge",
    "q": "ASCII 码中大写字母比小写字母的值小 32。",
    "answer": true,
    "explain": "'A'=65，'a'=97，差 32。"
  },
  {
    "id": 150,
    "ch": "2",
    "type": "judge",
    "q": "补码的符号位 0 表示正数，1 表示负数。",
    "answer": true,
    "explain": "补码最高位是符号位。"
  },
  {
    "id": 151,
    "ch": "2",
    "type": "judge",
    "q": "8 位二进制 11111111 表示 -1（有符号）。",
    "answer": true,
    "explain": "11111111 是 -1 的补码。"
  },
  {
    "id": 152,
    "ch": "2",
    "type": "judge",
    "q": "1KB 等于 1000 字节。",
    "answer": false,
    "explain": "1KB=1024 字节。"
  },
  {
    "id": 153,
    "ch": "2",
    "type": "short",
    "q": "把十进制数 156 转换为二进制、十六进制。",
    "answer": "二进制：156=128+16+8+4=10011100。十六进制：1001 1100=0x9C。",
    "explain": "可以用除基取余法或权展开法。"
  },
  {
    "id": 154,
    "ch": "2",
    "type": "short",
    "q": "什么是原码、反码、补码？以 -5 为例（8 位）。",
    "answer": "原码：最高位为符号位，其余为绝对值。-5 原码 = 10000101。反码：正数同原码，负数符号位不变其余取反。-5 反码 = 11111010。补码：正数同原码，负数反码+1。-5 补码 = 11111011。计算机中负数用补码表示，便于加减法统一处理。",
    "explain": "补码将减法转换为加法，简化硬件。"
  },
  {
    "id": 155,
    "ch": "2",
    "type": "short",
    "q": "什么是溢出？如何判断 8 位有符号数运算溢出？",
    "answer": "溢出：运算结果超出数据表示范围。8 位有符号数范围 -128~127。判断方法：1) 加法时，若两正数相加结果为负，或两负数相加结果为正，则溢出。2) 减法时，正数减负数结果为负，或负数减正数结果为正，则溢出。3) 硬件判断：最高位进位与次高位进位异或为 1 则溢出（OV 标志位）。例：100+50=150 超过 127，溢出。",
    "explain": "溢出是数值运算的常见错误。"
  },
  {
    "id": 156,
    "ch": "3",
    "type": "single",
    "q": "以下属于无源器件的是？",
    "options": [
      "二极管",
      "电容",
      "三极管",
      "集成电路"
    ],
    "answer": "B",
    "explain": "电容是无源器件，不依赖电源工作。"
  },
  {
    "id": 157,
    "ch": "3",
    "type": "single",
    "q": "上拉电阻的作用是？",
    "options": [
      "限流",
      "在引脚悬空时提供高电平",
      "分压",
      "滤波"
    ],
    "answer": "B",
    "explain": "上拉电阻在引脚悬空时将其拉到高电平。"
  },
  {
    "id": 158,
    "ch": "3",
    "type": "single",
    "q": "LED 正向导通时阳极接？",
    "options": [
      "地",
      "高电平",
      "负电源",
      "任意"
    ],
    "answer": "B",
    "explain": "LED 阳极接正，阴极接负才正向导通。"
  },
  {
    "id": 159,
    "ch": "3",
    "type": "single",
    "q": "单片机引脚驱动 LED 时通常需要？",
    "options": [
      "直接连接",
      "串联限流电阻",
      "并联电容",
      "串联电感"
    ],
    "answer": "B",
    "explain": "LED 需要限流电阻防止过流。"
  },
  {
    "id": 160,
    "ch": "3",
    "type": "single",
    "q": "按键消抖常用的方法有？",
    "options": [
      "硬件滤波",
      "软件延时",
      "两者都可以",
      "不用消抖"
    ],
    "answer": "C",
    "explain": "硬件 RC 滤波或软件延时 10-20ms 均可消抖。"
  },
  {
    "id": 161,
    "ch": "3",
    "type": "single",
    "q": "晶振电路中两个 22pF 电容的作用是？",
    "options": [
      "滤波",
      "负载电容",
      "去耦",
      "限流"
    ],
    "answer": "B",
    "explain": "晶振需要负载电容才能稳定振荡。"
  },
  {
    "id": 162,
    "ch": "3",
    "type": "single",
    "q": "NPN 三极管做开关时，负载应接在？",
    "options": [
      "发射极与地之间",
      "集电极与电源之间",
      "基极与地之间",
      "任意位置"
    ],
    "answer": "B",
    "explain": "NPN 开关用法：负载接在集电极和电源之间，发射极接地。"
  },
  {
    "id": 163,
    "ch": "3",
    "type": "single",
    "q": "I2C 总线的两根线是？",
    "options": [
      "SCL 和 SDA",
      "MOSI 和 MISO",
      "TX 和 RX",
      "CS 和 CLK"
    ],
    "answer": "A",
    "explain": "I2C 时钟线 SCL + 数据线 SDA。"
  },
  {
    "id": 164,
    "ch": "3",
    "type": "single",
    "q": "SPI 总线最少需要几根线？",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "B",
    "explain": "SPI 最少 3 线：SCLK、MOSI、MISO（CS 可省略，但通常需要）。"
  },
  {
    "id": 165,
    "ch": "3",
    "type": "single",
    "q": "TTL 电平高电平的电压范围约为？",
    "options": [
      "0~0.8V",
      "2.0~5.0V",
      "5V",
      "12V"
    ],
    "answer": "B",
    "explain": "TTL 高电平 ≥ 2.0V，低电平 ≤ 0.8V。"
  },
  {
    "id": 166,
    "ch": "3",
    "type": "multiple",
    "q": "单片机系统常用的复位电路包括？",
    "options": [
      "上电复位",
      "按键复位",
      "看门狗复位",
      "软件复位"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "上电、按键、看门狗都是硬件复位方式。"
  },
  {
    "id": 167,
    "ch": "3",
    "type": "multiple",
    "q": "LED 限流电阻的计算需要知道？",
    "options": [
      "电源电压",
      "LED 正向压降",
      "LED 工作电流",
      "环境温度"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "R=(Vcc-Vf)/If，温度影响较小。"
  },
  {
    "id": 168,
    "ch": "3",
    "type": "multiple",
    "q": "以下属于串行通信的有？",
    "options": [
      "UART",
      "SPI",
      "I2C",
      "并行总线"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "UART、SPI、I2C 都是串行通信。"
  },
  {
    "id": 169,
    "ch": "3",
    "type": "multiple",
    "q": "I2C 总线的特点包括？",
    "options": [
      "两线制",
      "多主多从",
      "半双工",
      "同步通信"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "I2C 是两线、多主、半双工、同步通信。"
  },
  {
    "id": 170,
    "ch": "3",
    "type": "judge",
    "q": "单片机晶振频率越高，系统功耗越大。",
    "answer": true,
    "explain": "高频运行功耗大。"
  },
  {
    "id": 171,
    "ch": "3",
    "type": "judge",
    "q": "去耦电容应尽量靠近芯片电源引脚。",
    "answer": true,
    "explain": "去耦电容就近放置减小高频回路。"
  },
  {
    "id": 172,
    "ch": "3",
    "type": "judge",
    "q": "I2C 总线是全双工通信。",
    "answer": false,
    "explain": "I2C 是半双工，单线数据传输不能同时收发。"
  },
  {
    "id": 173,
    "ch": "3",
    "type": "judge",
    "q": "SPI 总线速度通常比 I2C 快。",
    "answer": true,
    "explain": "SPI 可达几十 MHz，I2C 通常 100kHz~5MHz。"
  },
  {
    "id": 174,
    "ch": "3",
    "type": "judge",
    "q": "TTL 电平和 RS-232 电平相同。",
    "answer": false,
    "explain": "TTL 0~5V，RS-232 ±3~±15V，不兼容。"
  },
  {
    "id": 175,
    "ch": "3",
    "type": "short",
    "q": "简述单片机最小系统的组成。",
    "answer": "单片机最小系统是单片机能正常工作所需的最少电路，包括：1) 电源电路：为单片机提供 VCC/GND，通常 3.3V 或 5V；2) 时钟电路：晶振+负载电容，提供工作时钟；3) 复位电路：上电复位+按键复位，确保单片机从已知状态启动；4) 单片机芯片本身；5) 程序下载接口：用于烧录程序（如 SWD、JTAG、串口）。缺少任何一项单片机都无法正常工作。",
    "explain": "最小系统是单片机工作的必要条件。"
  },
  {
    "id": 176,
    "ch": "3",
    "type": "short",
    "q": "什么是上拉电阻和下拉电阻？它们的作用是什么？",
    "answer": "上拉电阻：一端接 VCC，另一端接引脚，当引脚悬空时将其拉到高电平。下拉电阻：一端接 GND，另一端接引脚，悬空时拉到低电平。作用：1) 确定引脚默认电平，防止悬空导致状态不确定；2) 开漏输出时提供高电平驱动能力；3) 在 I2C 等开漏总线中提供上拉。取值通常 4.7kΩ~10kΩ。",
    "explain": "上下拉电阻确保引脚有确定电平。"
  },
  {
    "id": 177,
    "ch": "3",
    "type": "short",
    "q": "比较 UART、SPI、I2C 三种串行通信的特点。",
    "answer": "UART：异步，全双工，两线（TX/RX），速度低（9600~115200bps），适合长距离。SPI：同步，全双工，4 线（SCLK/MOSI/MISO/CS），速度快（几十 MHz），主从模式，适合短距离高速。I2C：同步，半双工，2 线（SCL/SDA），速度中（100k~5MHz），多主多从，带地址，适合板内多设备互联。",
    "explain": "三种总线各有应用场景。"
  },
  {
    "id": 178,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的 CPU 是几位？",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "B",
    "explain": "MCS-51 是 8 位单片机。"
  },
  {
    "id": 179,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 内部 RAM 的容量是？",
    "options": [
      "128B",
      "256B",
      "4KB",
      "64KB"
    ],
    "answer": "B",
    "explain": "52 子系列 256B，51 子系列 128B。"
  },
  {
    "id": 180,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的程序计数器 PC 是几位？",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "answer": "B",
    "explain": "PC 16 位，寻址 64KB。"
  },
  {
    "id": 181,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的 SFR 区位于内部 RAM 的哪个地址范围？",
    "options": [
      "00H-7FH",
      "80H-FFH",
      "0000H-FFFFH",
      "2000H-FFFFH"
    ],
    "answer": "B",
    "explain": "SFR 区在 80H-FFH。"
  },
  {
    "id": 182,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的累加器是？",
    "options": [
      "A",
      "B",
      "DPTR",
      "PC"
    ],
    "answer": "A",
    "explain": "ACC（A）是累加器。"
  },
  {
    "id": 183,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的数据指针 DPTR 是几位？",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "answer": "B",
    "explain": "DPTR 16 位，访问外部存储器。"
  },
  {
    "id": 184,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 复位后 PC 的值是？",
    "options": [
      "0000H",
      "0080H",
      "FFFFH",
      "2000H"
    ],
    "answer": "A",
    "explain": "复位后 PC=0000H，从程序起始执行。"
  },
  {
    "id": 185,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的 P0 口作为通用 I/O 使用时需要？",
    "options": [
      "内部上拉",
      "外部上拉电阻",
      "外部下拉",
      "不需要任何处理"
    ],
    "answer": "B",
    "explain": "P0 是开漏输出，作 I/O 需外接上拉。"
  },
  {
    "id": 186,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的 SP 复位值为？",
    "options": [
      "00H",
      "07H",
      "80H",
      "FFH"
    ],
    "answer": "B",
    "explain": "SP 复位值 07H。"
  },
  {
    "id": 187,
    "ch": "4",
    "type": "single",
    "q": "MCS-51 的 PSW 中 CY 位表示？",
    "options": [
      "进位标志",
      "溢出标志",
      "奇偶标志",
      "辅助进位"
    ],
    "answer": "A",
    "explain": "CY 是进位标志。"
  },
  {
    "id": 188,
    "ch": "4",
    "type": "multiple",
    "q": "MCS-51 内部的特殊功能寄存器包括？",
    "options": [
      "ACC",
      "B",
      "PSW",
      "DPTR"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "ACC、B、PSW、DPTR 都是 SFR。"
  },
  {
    "id": 189,
    "ch": "4",
    "type": "multiple",
    "q": "MCS-51 的并行 I/O 口有？",
    "options": [
      "P0",
      "P1",
      "P2",
      "P3"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "MCS-51 有 P0、P1、P2、P3 共 4 个 8 位 I/O 口。"
  },
  {
    "id": 190,
    "ch": "4",
    "type": "multiple",
    "q": "MCS-51 内部包含的功能部件有？",
    "options": [
      "CPU",
      "定时器",
      "串口",
      "中断系统"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "MCS-51 集成 CPU、定时器、串口、中断。"
  },
  {
    "id": 191,
    "ch": "4",
    "type": "multiple",
    "q": "MCS-51 的 PSW 寄存器包含的位有？",
    "options": [
      "CY",
      "AC",
      "OV",
      "P"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "PSW 含 CY、AC、F0、RS1、RS0、OV、F1、P。"
  },
  {
    "id": 192,
    "ch": "4",
    "type": "judge",
    "q": "MCS-51 的 P1 口是准双向口。",
    "answer": true,
    "explain": "P1/P2/P3 是准双向口，P0 是开漏。"
  },
  {
    "id": 193,
    "ch": "4",
    "type": "judge",
    "q": "MCS-51 复位后 SP=00H。",
    "answer": false,
    "explain": "复位后 SP=07H。"
  },
  {
    "id": 194,
    "ch": "4",
    "type": "judge",
    "q": "MCS-51 的 SFR 支持位寻址。",
    "answer": true,
    "explain": "SFR 区地址末位为 0 或 8 的寄存器支持位寻址。"
  },
  {
    "id": 195,
    "ch": "4",
    "type": "judge",
    "q": "MCS-51 的 PC 是特殊功能寄存器。",
    "answer": false,
    "explain": "PC 不在 SFR 区，没有地址，不能直接读写。"
  },
  {
    "id": 196,
    "ch": "4",
    "type": "judge",
    "q": "MCS-51 的 DPTR 由 DPH 和 DPL 组成。",
    "answer": true,
    "explain": "DPTR 高 8 位 DPH，低 8 位 DPL。"
  },
  {
    "id": 197,
    "ch": "4",
    "type": "short",
    "q": "MCS-51 内部 RAM 分为哪几个区？",
    "answer": "MCS-52 子系列内部 RAM 256 字节分为：1) 工作寄存器区 00H-1FH（4 组 R0-R7）；2) 位寻址区 20H-2FH（16 字节，128 位）；3) 通用 RAM 区 30H-7FH（80 字节，51）或 30H-FFH（52 含 SFR 区 80H-FFH）。",
    "explain": "三个区各有用途。"
  },
  {
    "id": 198,
    "ch": "4",
    "type": "short",
    "q": "MCS-51 的四个 I/O 口 P0/P1/P2/P3 在功能上有何区别？",
    "answer": "P0：开漏输出，无内部上拉，作 I/O 需外接上拉电阻；作外部总线时作数据/低 8 位地址复用。P1：准双向口，通用 I/O。P2：准双向口，作外部总线时输出高 8 位地址。P3：准双向口，兼有第二功能（RXD、TXD、INT0、INT1、T0、T1、WR、RD）。",
    "explain": "四个口功能各异，P0 最特殊。"
  },
  {
    "id": 199,
    "ch": "4",
    "type": "short",
    "q": "简述 MCS-51 的时钟周期、机器周期、指令周期的关系。",
    "answer": "时钟周期：晶振频率的倒数，是基本时间单位。机器周期：传统 12T 模式下，12 个时钟周期 = 1 机器周期。指令周期：执行一条指令所需时间，MCS-51 指令周期为 1~4 个机器周期。例：12MHz 晶振，时钟周期 1/12μs，机器周期 1μs，单周期指令 1μs。",
    "explain": "三者是衡量程序执行速度的基准。"
  },
        {
    "id": 200,
    "ch": "5",
    "type": "single",
    "q": "STC-ISP软件的主要功能是？",
    "options": [
      "程序下载与烧录",
      "C代码编译",
      "电路仿真",
      "PCB自动布线"
    ],
    "answer": "A",
    "explain": "STC-ISP用于将编译好的HEX文件通过串口下载烧录到STC系列单片机。"
  },
  {
    "id": 201,
    "ch": "5",
    "type": "single",
    "q": "Keil C51开发环境中，C源文件扩展名是？",
    "options": [
      ".c",
      ".asm",
      ".hex",
      ".uv"
    ],
    "answer": "A",
    "explain": "C语言源文件扩展名为.c，汇编为.asm，编译输出为.hex。"
  },
  {
    "id": 202,
    "ch": "5",
    "type": "single",
    "q": "STC89C52RC单片机下载程序通常使用哪种接口？",
    "options": [
      "USB转TTL串口",
      "USB直连",
      "JTAG",
      "SWD"
    ],
    "answer": "A",
    "explain": "STC89C52RC通过UART串口下载，常用USB转TTL模块（如CH340）连接。"
  },
  {
    "id": 203,
    "ch": "5",
    "type": "single",
    "q": "Keil中编译后生成可烧录文件的扩展名是？",
    "options": [
      ".hex",
      ".bin",
      ".elf",
      ".obj"
    ],
    "answer": "A",
    "explain": "Keil C51编译链接后生成HEX文件用于烧录，需在Output选项中勾选Create HEX File。"
  },
  {
    "id": 204,
    "ch": "5",
    "type": "single",
    "q": "PlatformIO开发STC单片机需要的平台框架是？",
    "options": [
      "Intel MCS-51",
      "ST STM32",
      "Espressif",
      "TI MSP430"
    ],
    "answer": "A",
    "explain": "PlatformIO通过Intel MCS-51框架支持8051内核单片机开发。"
  },
  {
    "id": 205,
    "ch": "5",
    "type": "single",
    "q": "STC-ISP下载前需要先进行的操作是？",
    "options": [
      "上电复位单片机",
      "关闭串口",
      "拔掉USB线",
      "删除hex文件"
    ],
    "answer": "A",
    "explain": "STC冷启动方式：先点击下载，再给单片机上电，通过检测上电信号触发下载。"
  },
  {
    "id": 206,
    "ch": "5",
    "type": "single",
    "q": "Keil中针对STC89C52RC应选择的目标芯片是？",
    "options": [
      "8052",
      "8051",
      "8031",
      "8032"
    ],
    "answer": "A",
    "explain": "STC89C52RC兼容MCS-51指令集，在Keil中选择标准8052即可。"
  },
  {
    "id": 207,
    "ch": "5",
    "type": "single",
    "q": "STC89C52RC的程序存储器（Flash）容量是？",
    "options": [
      "8KB",
      "4KB",
      "16KB",
      "32KB"
    ],
    "answer": "A",
    "explain": "STC89C52RC内部有8KB Flash程序存储器。"
  },
  {
    "id": 208,
    "ch": "5",
    "type": "single",
    "q": "Keil C51中定义特殊功能寄存器的关键字是？",
    "options": [
      "sfr",
      "register",
      "volatile",
      "port"
    ],
    "answer": "A",
    "explain": "C51用sfr关键字定义特殊功能寄存器，如sfr P1=0x90。"
  },
  {
    "id": 209,
    "ch": "5",
    "type": "single",
    "q": "STC-ISP中设置下载波特率时，常用值是？",
    "options": [
      "115200",
      "9600",
      "4800",
      "1200"
    ],
    "answer": "A",
    "explain": "STC下载波特率常用115200提高下载速度；通信波特率常用9600。"
  },
  {
    "id": 210,
    "ch": "5",
    "type": "multiple",
    "q": "STC89C52RC开发所需的软件工具包括？",
    "options": [
      "Keil C51",
      "STC-ISP",
      "Proteus仿真",
      "AutoCAD"
    ],
    "answer": ["A", "B"],
    "explain": "Keil C51用于编程编译，STC-ISP用于下载烧录，Proteus可选用于仿真。"
  },
  {
    "id": 211,
    "ch": "5",
    "type": "multiple",
    "q": "Keil C51工程创建步骤包括？",
    "options": [
      "选择目标器件",
      "添加源文件",
      "设置编译选项",
      "焊接PCB板"
    ],
    "answer": ["A", "B", "C"],
    "explain": "创建工程需选器件、添加源文件、设置编译选项；焊接PCB不属于软件步骤。"
  },
  {
    "id": 212,
    "ch": "5",
    "type": "multiple",
    "q": "PlatformIO支持STC开发的特性包括？",
    "options": [
      "跨平台",
      "命令行和IDE",
      "库管理",
      "内置硬件仿真器"
    ],
    "answer": ["A", "B", "C"],
    "explain": "PlatformIO跨平台、支持CLI和IDE、有库管理器；不内置硬件仿真器。"
  },
  {
    "id": 213,
    "ch": "5",
    "type": "multiple",
    "q": "STC-ISP下载失败常见原因有？",
    "options": [
      "串口号选错",
      "未上电复位",
      "USB线断开",
      "电脑内存不足"
    ],
    "answer": ["A", "B", "C"],
    "explain": "串口号错误、未冷启动上电、USB线断开均导致下载失败；内存不足通常不影响。"
  },
  {
    "id": 214,
    "ch": "5",
    "type": "multiple",
    "q": "Keil C51中常用的调试功能有？",
    "options": [
      "断点设置",
      "单步执行",
      "变量观察",
      "示波器波形"
    ],
    "answer": ["A", "B", "C"],
    "explain": "断点、单步、变量观察是软件调试功能；示波器是外部仪器。"
  },
  {
    "id": 215,
    "ch": "5",
    "type": "judge",
    "q": "STC89C52RC使用USB转TTL模块下载程序时，TXD接单片机的RXD，RXD接TXD。",
    "answer": true,
    "explain": "串口通信需交叉连接：模块TXD→单片机RXD，模块RXD→单片机TXD。"
  },
  {
    "id": 216,
    "ch": "5",
    "type": "judge",
    "q": "PlatformIO只能开发STM32，不支持8051单片机。",
    "answer": false,
    "explain": "PlatformIO通过Intel MCS-51框架支持8051/STC单片机开发。"
  },
  {
    "id": 217,
    "ch": "5",
    "type": "judge",
    "q": "STC-ISP下载程序前必须先给单片机供电，再点击下载按钮。",
    "answer": false,
    "explain": "STC采用冷启动检测：需先点击下载，再给单片机上电触发下载。"
  },
  {
    "id": 218,
    "ch": "5",
    "type": "judge",
    "q": "Keil C51编译时默认会生成HEX文件。",
    "answer": false,
    "explain": "需在工程Options的Output页中勾选Create HEX File才会生成.hex文件。"
  },
  {
    "id": 219,
    "ch": "5",
    "type": "short",
    "q": "简述STC89C52RC单片机程序开发与下载的完整流程。",
    "answer": "1)在Keil C51中创建工程、选择8052器件；2)编写C源文件并添加到工程；3)在Output选项中勾选Create HEX File；4)编译生成.hex文件；5)打开STC-ISP，选择正确型号和串口号；6)点击下载，然后给单片机上电冷启动；7)下载完成后程序自动运行。",
    "explain": "完整流程涵盖编程、编译、下载、运行四个阶段。"
  },
  {
    "id": 220,
    "ch": "5",
    "type": "short",
    "q": "简述PlatformIO相比Keil C51的优势。",
    "answer": "PlatformIO优势：1)跨平台(Windows/Linux/macOS)；2)集成在VS Code中，代码补全和调试体验更好；3)内置包/库管理器；4)支持多种框架和数百种开发板；5)支持命令行CI/CD集成；6)开源免费。但Keil C51对8051优化和兼容性更好。",
    "explain": "PlatformIO更现代化，Keil更专业于51。"
  },
  {
    "id": 221,
    "ch": "5",
    "type": "short",
    "q": "STC-ISP下载失败时如何排查问题？",
    "answer": "排查步骤：1)检查串口号是否正确(设备管理器中确认)；2)检查USB转TTL模块驱动是否安装(如CH340驱动)；3)确认TXD/RXD接线是否交叉连接；4)确认是否采用冷启动方式(先点下载再上电)；5)检查晶振是否起振(用示波器测XTAL引脚)；6)尝试降低下载波特率；7)检查芯片型号是否选对。",
    "explain": "系统化排查从软件到硬件逐层检查。"
  },
  {
    "id": 222,
    "ch": "6",
    "type": "single",
    "q": "C51中 unsigned char 类型占用的字节数是？",
    "options": [
      "1字节",
      "2字节",
      "4字节",
      "8字节"
    ],
    "answer": "A",
    "explain": "unsigned char占1字节(0~255)，是8051最常用的数据类型。"
  },
  {
    "id": 223,
    "ch": "6",
    "type": "single",
    "q": "C51中定义可位寻址变量的关键字是？",
    "options": [
      "bit",
      "sbit",
      "bool",
      "flag"
    ],
    "answer": "B",
    "explain": "sbit用于定义特殊功能寄存器的某一位，bit用于定义普通位变量。"
  },
  {
    "id": 224,
    "ch": "6",
    "type": "single",
    "q": "C51中 unsigned int 类型占用的字节数是？",
    "options": [
      "2字节",
      "1字节",
      "4字节",
      "8字节"
    ],
    "answer": "A",
    "explain": "C51中int为16位即2字节，与PC上C语言int为4字节不同。"
  },
  {
    "id": 225,
    "ch": "6",
    "type": "single",
    "q": "C51中 sfr P1 = 0x90 的作用是？",
    "options": [
      "定义P1口地址",
      "定义变量P1",
      "定义中断",
      "定义常量"
    ],
    "answer": "A",
    "explain": "sfr关键字将P1映射到特殊功能寄存器地址0x90。"
  },
  {
    "id": 226,
    "ch": "6",
    "type": "single",
    "q": "C51中定义中断服务函数使用的关键字是？",
    "options": [
      "interrupt",
      "isr",
      "irq",
      "vector"
    ],
    "answer": "A",
    "explain": "C51用interrupt关键字声明中断函数，如void timer0_isr() interrupt 1。"
  },
  {
    "id": 227,
    "ch": "6",
    "type": "single",
    "q": "C51中 code 关键字的作用是？",
    "options": [
      "将变量存储在程序存储器",
      "定义代码段",
      "编译指令",
      "调试标记"
    ],
    "answer": "A",
    "explain": "code关键字将数据存储在Flash程序存储器而非RAM，节省RAM空间。"
  },
  {
    "id": 228,
    "ch": "6",
    "type": "single",
    "q": "8051中 P1 = 0xFF 的作用是？",
    "options": [
      "P1口全部输出高电平",
      "P1口全部输出低电平",
      "P1口输入",
      "P1口清零"
    ],
    "answer": "A",
    "explain": "向端口写0xFF使所有引脚输出高电平。"
  },
  {
    "id": 229,
    "ch": "6",
    "type": "single",
    "q": "C51中 P1 ^= 0x01 的作用是？",
    "options": [
      "翻转P1.0位",
      "P1口取反",
      "P1口清零",
      "P1口置1"
    ],
    "answer": "A",
    "explain": "^=是异或赋值，0x01对应P1.0，异或使该位翻转。"
  },
  {
    "id": 230,
    "ch": "6",
    "type": "single",
    "q": "C51中 _nop_() 函数的作用是？",
    "options": [
      "延时一个机器周期",
      "空操作不延时",
      "返回0",
      "复位CPU"
    ],
    "answer": "A",
    "explain": "_nop_()来自intrins.h，执行一个空操作，占用一个机器周期。"
  },
  {
    "id": 231,
    "ch": "6",
    "type": "single",
    "q": "C51中定义指针指向xdata区变量的写法是？",
    "options": [
      "int xdata *p",
      "xdata int *p",
      "int *xdata p",
      "int *p xdata"
    ],
    "answer": "A",
    "explain": "存储区修饰符放在*之前：int xdata *p表示p指向xdata区的int变量。"
  },
  {
    "id": 232,
    "ch": "6",
    "type": "multiple",
    "q": "C51中常用的存储器修饰符有？",
    "options": [
      "data",
      "idata",
      "xdata",
      "code"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "data(直接寻址00-7FH)、idata(间接寻址00-FFH)、xdata(外部RAM)、code(程序存储器)。"
  },
  {
    "id": 233,
    "ch": "6",
    "type": "multiple",
    "q": "C51支持的基本数据类型有？",
    "options": [
      "unsigned char",
      "unsigned int",
      "float",
      "bit"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "C51支持char/int/float/bit等多种类型，其中bit和sbit是51特有。"
  },
  {
    "id": 234,
    "ch": "6",
    "type": "multiple",
    "q": "C51中while循环和for循环的共同特点是？",
    "options": [
      "都可用于循环控制",
      "都支持break退出",
      "都支持continue",
      "都自带延时功能"
    ],
    "answer": ["A", "B", "C"],
    "explain": "while和for都是循环结构，支持break和continue；延时需手动实现。"
  },
  {
    "id": 235,
    "ch": "6",
    "type": "multiple",
    "q": "C51中数组可以存储在哪些区域？",
    "options": [
      "data区",
      "idata区",
      "xdata区",
      "code区"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "数组可存储在任何存储区，code区存储常量数组节省RAM。"
  },
  {
    "id": 236,
    "ch": "6",
    "type": "multiple",
    "q": "C51中使用指针操作的注意事项有？",
    "options": [
      "注意存储区类型",
      "注意指针大小",
      "避免野指针",
      "指针必须全局"
    ],
    "answer": ["A", "B", "C"],
    "explain": "指针需匹配存储区类型，通用指针占3字节，需避免未初始化使用；不必全局。"
  },
  {
    "id": 237,
    "ch": "6",
    "type": "judge",
    "q": "C51中 int 类型与标准C中 int 类型的字节数相同。",
    "answer": false,
    "explain": "C51中int为2字节(16位)，标准C中int通常为4字节(32位)。"
  },
  {
    "id": 238,
    "ch": "6",
    "type": "judge",
    "q": "C51中使用 code 关键字定义的数组存储在RAM中。",
    "answer": false,
    "explain": "code关键字将数据存储在Flash程序存储器中，不占用RAM。"
  },
  {
    "id": 239,
    "ch": "6",
    "type": "judge",
    "q": "C51中 sfr 定义的寄存器可以按位操作。",
    "answer": false,
    "explain": "sfr定义整个寄存器，需用sbit定义可位寻址的位才能按位操作。"
  },
  {
    "id": 240,
    "ch": "6",
    "type": "judge",
    "q": "C51中断函数中调用其他函数时需要使用 using 关键字指定寄存器组。",
    "answer": true,
    "explain": "using关键字指定中断函数使用的寄存器组，避免与主程序寄存器冲突。"
  },
  {
    "id": 241,
    "ch": "6",
    "type": "short",
    "q": "简述C51中 data、idata、xdata、code 四种存储区的区别。",
    "answer": "data：直接寻址内部RAM 00H-7FH，访问速度最快；idata：间接寻址内部RAM 00H-FFH，52子系列可用高128字节；xdata：外部RAM 0000H-FFFFH，访问速度慢但容量大；code：程序存储器，只读，存储常量和表格。",
    "explain": "四种存储区各有用途，按速度和容量权衡选择。"
  },
  {
    "id": 242,
    "ch": "6",
    "type": "short",
    "q": "简述C51中断服务函数的编写格式和注意事项。",
    "answer": "格式：void 函数名() interrupt n [using m]，其中n为中断号(0=外部中断0,1=定时器0,2=外部中断1,3=定时器1,4=串口)，m为寄存器组号(0-3)。注意事项：1)不能有参数和返回值；2)尽量短小，避免调用耗时函数；3)需在对应IE寄存器中使能中断；4)中断标志需手动清除(部分)；5)using可避免寄存器压栈开销。",
    "explain": "中断函数格式严格，编写需注意效率。"
  },
  {
    "id": 243,
    "ch": "6",
    "type": "short",
    "q": "C51中如何实现精确延时？举例说明。",
    "answer": "方法：1)使用_nop_()函数(intrins.h)，每个_nop_()延时1个机器周期；2)用for循环嵌套，需根据晶振频率和机器周期计算；3)使用定时器中断实现精确定时。例如12MHz晶振，1机器周期=1us，void delay_us(unsigned char us){while(us--)_nop_();}可延时约us微秒。更精确延时用定时器。",
    "explain": "精确延时有多种方法，定时器最精确。"
  },
  {
    "id": 244,
    "ch": "7",
    "type": "single",
    "q": "MCS-51中作为通用I/O需外接上拉电阻的端口是？",
    "options": [
      "P0",
      "P1",
      "P2",
      "P3"
    ],
    "answer": "A",
    "explain": "P0是开漏输出，无内部上拉，作通用I/O需外接上拉电阻。"
  },
  {
    "id": 245,
    "ch": "7",
    "type": "single",
    "q": "LED共阳极接法，点亮LED需要IO输出？",
    "options": [
      "低电平",
      "高电平",
      "高阻态",
      "脉冲"
    ],
    "answer": "A",
    "explain": "共阳极LED正极接VCC，IO输出低电平时电流流过LED点亮。"
  },
  {
    "id": 246,
    "ch": "7",
    "type": "single",
    "q": "按键消抖通常采用的延时时间是？",
    "options": [
      "5-20ms",
      "1ms",
      "100ms",
      "1s"
    ],
    "answer": "A",
    "explain": "机械按键抖动时间约5-20ms，延时10-20ms后再次检测可消除抖动。"
  },
  {
    "id": 247,
    "ch": "7",
    "type": "single",
    "q": "4x4矩阵键盘扫描需要的I/O引脚数是？",
    "options": [
      "8根",
      "4根",
      "16根",
      "2根"
    ],
    "answer": "A",
    "explain": "4x4矩阵键盘用4行4列共8根I/O线，可识别16个按键。"
  },
  {
    "id": 248,
    "ch": "7",
    "type": "single",
    "q": "MCS-51的P1口是哪种类型的I/O口？",
    "options": [
      "准双向口",
      "开漏输出口",
      "推挽输出口",
      "高阻输入口"
    ],
    "answer": "A",
    "explain": "P1/P2/P3是准双向口，P0是开漏输出。"
  },
  {
    "id": 249,
    "ch": "7",
    "type": "single",
    "q": "LED流水灯中，P1口输出0xFE表示？",
    "options": [
      "第1个LED亮其余灭",
      "第1个LED灭其余亮",
      "全部LED亮",
      "全部LED灭"
    ],
    "answer": "A",
    "explain": "0xFE=11111110B，最低位为0，若LED共阳极则第1个LED亮。"
  },
  {
    "id": 250,
    "ch": "7",
    "type": "single",
    "q": "矩阵键盘行列扫描法中，先输出行扫描码后应？",
    "options": [
      "读取列状态",
      "延时等待",
      "发送数据",
      "清除中断"
    ],
    "answer": "A",
    "explain": "行列扫描法：行输出扫描码，读取列状态判断哪个按键按下。"
  },
  {
    "id": 251,
    "ch": "7",
    "type": "single",
    "q": "按键释放检测的作用是？",
    "options": [
      "防止重复触发",
      "加速响应",
      "节省电能",
      "消除噪声"
    ],
    "answer": "A",
    "explain": "检测按键释放确保一次按下只触发一次，防止重复响应。"
  },
  {
    "id": 252,
    "ch": "7",
    "type": "single",
    "q": "P0口作外部总线使用时，复用的是？",
    "options": [
      "低8位地址和数据",
      "高8位地址和数据",
      "控制和数据",
      "地址和控制"
    ],
    "answer": "A",
    "explain": "P0作外部总线时分时复用低8位地址(A0-A7)和数据(D0-D7)，由ALE锁存。"
  },
  {
    "id": 253,
    "ch": "7",
    "type": "single",
    "q": "LED限流电阻的计算公式是？",
    "options": [
      "R=(Vcc-Vf)/If",
      "R=Vcc*If",
      "R=Vf/If",
      "R=(Vcc+Vf)/If"
    ],
    "answer": "A",
    "explain": "限流电阻=(电源电压-LED正向压降)/工作电流。"
  },
  {
    "id": 254,
    "ch": "7",
    "type": "multiple",
    "q": "MCS-51的准双向口特点包括？",
    "options": [
      "输出前先写1再读取",
      "有内部上拉",
      "可直接驱动LED",
      "支持开漏"
    ],
    "answer": ["A", "B", "C"],
    "explain": "准双向口读输入前需先写1，有弱上拉，可驱动LED；不支持开漏。"
  },
  {
    "id": 255,
    "ch": "7",
    "type": "multiple",
    "q": "按键消抖的方法有？",
    "options": [
      "软件延时消抖",
      "硬件RC滤波",
      "施密特触发器",
      "加大电源功率"
    ],
    "answer": ["A", "B", "C"],
    "explain": "软件延时、RC滤波、施密特触发器均可消抖；加大电源无关。"
  },
  {
    "id": 256,
    "ch": "7",
    "type": "multiple",
    "q": "矩阵键盘的扫描方式有？",
    "options": [
      "行列扫描法",
      "线反转法",
      "中断扫描法",
      "ADC采样法"
    ],
    "answer": ["A", "B", "C"],
    "explain": "行列扫描和线反转是常用方法；中断扫描用按键触发中断；ADC法用于模拟键盘。"
  },
  {
    "id": 257,
    "ch": "7",
    "type": "multiple",
    "q": "LED数码管动态显示的特点有？",
    "options": [
      "利用视觉暂留",
      "逐位扫描显示",
      "节省I/O引脚",
      "亮度更高"
    ],
    "answer": ["A", "B", "C"],
    "explain": "动态显示利用人眼视觉暂留逐位扫描，节省引脚；亮度实际上比静态低。"
  },
  {
    "id": 258,
    "ch": "7",
    "type": "multiple",
    "q": "P0口作通用I/O时需要外接上拉的原因是？",
    "options": [
      "P0是开漏输出",
      "无内部上拉电阻",
      "驱动能力不足",
      "输入阻抗太高"
    ],
    "answer": ["A", "B"],
    "explain": "P0是开漏输出且无内部上拉，作I/O时需外接上拉电阻；驱动能力足够。"
  },
  {
    "id": 259,
    "ch": "7",
    "type": "judge",
    "q": "MCS-51的P3口引脚P3.0还具有RXD的第二功能。",
    "answer": true,
    "explain": "P3口各引脚均有第二功能，P3.0=RXD，P3.1=TXD等。"
  },
  {
    "id": 260,
    "ch": "7",
    "type": "judge",
    "q": "LED共阴极接法中IO输出高电平可以点亮LED。",
    "answer": true,
    "explain": "共阴极LED负极接地，IO输出高电平驱动电流点亮LED。"
  },
  {
    "id": 261,
    "ch": "7",
    "type": "judge",
    "q": "矩阵键盘扫描时不需要按键消抖处理。",
    "answer": false,
    "explain": "矩阵键盘同样存在抖动，扫描后需软件消抖确认。"
  },
  {
    "id": 262,
    "ch": "7",
    "type": "judge",
    "q": "准双向口读取引脚状态前必须先向该口写1。",
    "answer": true,
    "explain": "准双向口读输入前写1使内部FET截止，确保读到正确外部信号。"
  },
  {
    "id": 263,
    "ch": "7",
    "type": "short",
    "q": "简述LED共阳极和共阴极接法的区别及驱动方式。",
    "answer": "共阳极：所有LED正极接VCC，IO输出低电平点亮LED，灌电流驱动；共阴极：所有LED负极接GND，IO输出高电平点亮LED，拉电流驱动。共阳极常用因为单片机灌电流能力通常大于拉电流。限流电阻R=(Vcc-Vf)/If。",
    "explain": "两种接法驱动电平相反，需根据硬件选择。"
  },
  {
    "id": 264,
    "ch": "7",
    "type": "short",
    "q": "简述矩阵键盘行列扫描法的工作原理。",
    "answer": "原理：4x4矩阵键盘有4行4列。扫描步骤：1)4行依次输出低电平(其余为高)，如0xFE,0xFD,0xFB,0xF7；2)每次输出后读取4列状态；3)若某列也为低，则对应行列交叉的按键被按下；4)软件延时10-20ms消抖后再次确认；5)根据行列号计算键值。优点：8个IO控制16个按键，节省引脚。",
    "explain": "行列扫描是矩阵键盘最常用的检测方法。"
  },
  {
    "id": 265,
    "ch": "7",
    "type": "short",
    "q": "简述按键消抖的原理和实现方法。",
    "answer": "原理：机械按键在按下和释放时触点会产生5-20ms的弹性抖动，导致电平在0和1间快速跳变。消抖方法：1)软件延时法——检测到按下后延时10-20ms再次检测，两次一致才确认；2)硬件RC滤波——并联电容滤除高频抖动；3)施密特触发器——利用回差电压消除抖动。软件消抖最常用，不增加硬件成本。",
    "explain": "消抖确保按键每次只触发一次。"
  },
  {
    "id": 266,
    "ch": "8",
    "type": "single",
    "q": "MCS-51有几个中断源？",
    "options": [
      "5个",
      "3个",
      "2个",
      "6个"
    ],
    "answer": "A",
    "explain": "MCS-51有5个中断源：INT0、INT1、T0、T1、串口中断。"
  },
  {
    "id": 267,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中定时器0的中断号是？",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": "A",
    "explain": "中断号：0=INT0，1=T0，2=INT1，3=T1，4=串口。"
  },
  {
    "id": 268,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中断允许寄存器是？",
    "options": [
      "IE",
      "IP",
      "TCON",
      "SCON"
    ],
    "answer": "A",
    "explain": "IE(中断允许寄存器)控制各中断源的使能，EA为总中断允许位。"
  },
  {
    "id": 269,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中EA=1的作用是？",
    "options": [
      "开总中断",
      "关总中断",
      "开定时器",
      "开串口"
    ],
    "answer": "A",
    "explain": "EA是IE寄存器的最高位，EA=1开总中断，EA=0关所有中断。"
  },
  {
    "id": 270,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中断优先级寄存器是？",
    "options": [
      "IP",
      "IE",
      "PSW",
      "PCON"
    ],
    "answer": "A",
    "explain": "IP寄存器设置各中断源的优先级，1为高优先级，0为低优先级。"
  },
  {
    "id": 271,
    "ch": "8",
    "type": "single",
    "q": "MCS-51默认中断优先级最高的是？",
    "options": [
      "INT0(外部中断0)",
      "T0(定时器0)",
      "串口中断",
      "T1(定时器1)"
    ],
    "answer": "A",
    "explain": "同优先级时查询顺序：INT0>T0>INT1>T1>串口，INT0默认最高。"
  },
  {
    "id": 272,
    "ch": "8",
    "type": "single",
    "q": "外部中断0的引脚是？",
    "options": [
      "P3.2",
      "P3.3",
      "P3.4",
      "P3.5"
    ],
    "answer": "A",
    "explain": "INT0对应P3.2，INT1对应P3.3，T0对应P3.4，T1对应P3.5。"
  },
  {
    "id": 273,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中IT0=1表示外部中断0触发方式为？",
    "options": [
      "下降沿触发",
      "低电平触发",
      "上升沿触发",
      "高电平触发"
    ],
    "answer": "A",
    "explain": "IT0=1为边沿触发(下降沿)，IT0=0为电平触发(低电平)。"
  },
  {
    "id": 274,
    "ch": "8",
    "type": "single",
    "q": "中断服务函数返回时使用的指令是？",
    "options": [
      "RETI",
      "RET",
      "RETURN",
      "JMP"
    ],
    "answer": "A",
    "explain": "中断返回用RETI指令，恢复PC并清除中断优先级状态；普通子程序用RET。"
  },
  {
    "id": 275,
    "ch": "8",
    "type": "single",
    "q": "MCS-51中断响应的最短时间为？",
    "options": [
      "3个机器周期",
      "1个机器周期",
      "6个机器周期",
      "12个机器周期"
    ],
    "answer": "A",
    "explain": "中断响应需3-8个机器周期，最短3个机器周期(无同级或高级中断时)。"
  },
  {
    "id": 276,
    "ch": "8",
    "type": "multiple",
    "q": "MCS-51的5个中断源包括？",
    "options": [
      "外部中断0",
      "定时器0中断",
      "外部中断1",
      "串口中断"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "5个中断源：INT0、T0、INT1、T1、串口，选项均正确。"
  },
  {
    "id": 277,
    "ch": "8",
    "type": "multiple",
    "q": "IE寄存器中控制中断使能的位有？",
    "options": [
      "EA(总允许)",
      "EX0(外部中断0)",
      "ET0(定时器0)",
      "ES(串口)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "IE含EA、ET1、EX1、ET0、EX0、ES等中断允许控制位。"
  },
  {
    "id": 278,
    "ch": "8",
    "type": "multiple",
    "q": "设置外部中断0下降沿触发的步骤包括？",
    "options": [
      "IT0=1",
      "EX0=1",
      "EA=1",
      "TR0=1"
    ],
    "answer": ["A", "B", "C"],
    "explain": "需设置触发方式IT0=1，使能EX0=1，开总中断EA=1；TR0是定时器启动位。"
  },
  {
    "id": 279,
    "ch": "8",
    "type": "multiple",
    "q": "MCS-51中断优先级规则有？",
    "options": [
      "高优先级可打断低优先级",
      "同级不能互相打断",
      "低优先级可打断高优先级",
      "同优先级按查询顺序"
    ],
    "answer": ["A", "B", "D"],
    "explain": "高可打断低，同级不互相打断，同优先级按INT0>T0>INT1>T1>串口顺序。"
  },
  {
    "id": 280,
    "ch": "8",
    "type": "multiple",
    "q": "中断服务函数编写注意事项有？",
    "options": [
      "不能有参数",
      "不能有返回值",
      "尽量短小",
      "需手动清除部分标志位"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "中断函数无形参无返回值，应短小高效，部分中断标志(TI/RI)需手动清除。"
  },
  {
    "id": 281,
    "ch": "8",
    "type": "judge",
    "q": "MCS-51的中断嵌套只允许高优先级中断打断低优先级中断。",
    "answer": true,
    "explain": "MCS-51支持两级中断优先级，高优先级可打断低优先级，同级不可嵌套。"
  },
  {
    "id": 282,
    "ch": "8",
    "type": "judge",
    "q": "中断服务函数中可以调用printf函数进行调试输出。",
    "answer": false,
    "explain": "中断函数应短小高效，避免调用printf等耗时函数，影响实时性。"
  },
  {
    "id": 283,
    "ch": "8",
    "type": "judge",
    "q": "串口中断的TI和RI标志位需要软件手动清除。",
    "answer": true,
    "explain": "TI和RI不会被硬件自动清除，需在中断服务函数中软件清零。"
  },
  {
    "id": 284,
    "ch": "8",
    "type": "judge",
    "q": "MCS-51复位后所有中断都处于使能状态。",
    "answer": false,
    "explain": "复位后IE=00H，所有中断均被禁止，需软件使能。"
  },
  {
    "id": 285,
    "ch": "8",
    "type": "short",
    "q": "简述MCS-51中断系统的结构和各中断源。",
    "answer": "MCS-51有5个中断源：1)外部中断0(INT0,P3.2)；2)定时器0中断(T0)；3)外部中断1(INT1,P3.3)；4)定时器1中断(T1)；5)串口中断(RI/TI)。中断管理寄存器：IE控制使能，IP控制优先级，TCON控制外部中断触发方式和定时器，SCON控制串口中断标志。支持两级优先级，可实现嵌套。",
    "explain": "5个中断源各有用途，通过IE和IP管理。"
  },
  {
    "id": 286,
    "ch": "8",
    "type": "short",
    "q": "简述外部中断的两种触发方式及选择原则。",
    "answer": "电平触发(IT0/IT1=0)：低电平有效，中断期间需保持低电平，中断返回前必须撤除低电平否则会重复触发，适合电平信号检测。边沿触发(IT0/IT1=1)：下降沿有效，硬件自动锁存中断请求，不会重复触发，适合脉冲信号。实际应用中边沿触发更常用，因为不易造成中断重复响应。",
    "explain": "边沿触发更常用，适合按键等场景。"
  },
  {
    "id": 287,
    "ch": "8",
    "type": "short",
    "q": "编写外部中断0初始化和中断服务函数的C51代码框架。",
    "answer": "初始化：IT0=1; //下降沿触发; EX0=1; //使能外部中断0; EA=1; //开总中断。中断函数：void int0_isr() interrupt 0 { //中断处理代码; //边沿触发无需手动清标志; }。注意：中断号0对应INT0，函数不能有参数和返回值。",
    "explain": "中断编程三步：设触发方式、使能中断、开总中断。"
  },
  {
    "id": 288,
    "ch": "9",
    "type": "single",
    "q": "MCS-51有几个定时器/计数器？",
    "options": [
      "2个",
      "1个",
      "3个",
      "4个"
    ],
    "answer": "A",
    "explain": "MCS-51有T0和T1两个16位定时器/计数器。"
  },
  {
    "id": 289,
    "ch": "9",
    "type": "single",
    "q": "定时器模式1是几位定时器？",
    "options": [
      "16位",
      "13位",
      "8位自动重装",
      "8位"
    ],
    "answer": "A",
    "explain": "模式1为16位定时器(TH+TL)，模式0为13位，模式2为8位自动重装。"
  },
  {
    "id": 290,
    "ch": "9",
    "type": "single",
    "q": "MCS-51中 TMOD 寄存器的作用是？",
    "options": [
      "设置定时器工作模式",
      "启动定时器",
      "设置波特率",
      "设置中断优先级"
    ],
    "answer": "A",
    "explain": "TMOD控制T0和T1的工作方式(C/T选择、M1/M0模式、GATE门控)。"
  },
  {
    "id": 291,
    "ch": "9",
    "type": "single",
    "q": "TMOD中GATE=1时定时器启动需要？",
    "options": [
      "TRx=1且INTx高电平",
      "仅TRx=1",
      "仅INTx高电平",
      "EA=1"
    ],
    "answer": "A",
    "explain": "GATE=1时需TRx置1且外部中断引脚INTx为高电平才启动，用于脉冲宽度测量。"
  },
  {
    "id": 292,
    "ch": "9",
    "type": "single",
    "q": "12MHz晶振下，定时器模式1最大定时时间是？",
    "options": [
      "65.536ms",
      "8.192ms",
      "256us",
      "1ms"
    ],
    "answer": "A",
    "explain": "模式1为16位，最大计数值65536，12MHz/12=1MHz，65536/1MHz=65.536ms。"
  },
  {
    "id": 293,
    "ch": "9",
    "type": "single",
    "q": "TMOD中C/T=1时定时器工作在？",
    "options": [
      "计数器模式",
      "定时器模式",
      "串口模式",
      "中断模式"
    ],
    "answer": "A",
    "explain": "C/T=0为定时器(内部时钟)，C/T=1为计数器(外部脉冲)。"
  },
  {
    "id": 294,
    "ch": "9",
    "type": "single",
    "q": "定时器模式2(8位自动重装)常用于？",
    "options": [
      "波特率发生",
      "长延时",
      "PWM输出",
      "频率计"
    ],
    "answer": "A",
    "explain": "模式2自动重装特性适合做串口波特率发生器。"
  },
  {
    "id": 295,
    "ch": "9",
    "type": "single",
    "q": "12MHz晶振下，定时器模式2定时256us，初值为？",
    "options": [
      "0x00",
      "0xFF",
      "0x80",
      "0x56"
    ],
    "answer": "A",
    "explain": "模式2定时256us需计256个数，初值=256-256=0x00。"
  },
  {
    "id": 296,
    "ch": "9",
    "type": "single",
    "q": "定时器0的启动控制位是？",
    "options": [
      "TR0",
      "TF0",
      "ET0",
      "PT0"
    ],
    "answer": "A",
    "explain": "TCON中TR0控制T0启停，TF0是溢出标志，ET0是中断允许，PT0是优先级。"
  },
  {
    "id": 297,
    "ch": "9",
    "type": "single",
    "q": "定时器中断标志位TF0在何时被硬件置1？",
    "options": [
      "定时器溢出时",
      "定时器启动时",
      "定时器停止时",
      "中断响应时"
    ],
    "answer": "A",
    "explain": "T0溢出时硬件自动置TF0=1，若中断使能则触发中断，中断响应后硬件自动清零。"
  },
  {
    "id": 298,
    "ch": "9",
    "type": "multiple",
    "q": "定时器/计数器的工作模式有？",
    "options": [
      "模式0(13位)",
      "模式1(16位)",
      "模式2(8位自动重装)",
      "模式3(双8位)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "M0/M1组合选择4种工作模式，T1不支持模式3。"
  },
  {
    "id": 299,
    "ch": "9",
    "type": "multiple",
    "q": "定时器初值计算需要已知的参数有？",
    "options": [
      "晶振频率",
      "机器周期",
      "所需定时时间",
      "工作模式"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "初值=最大计数值-定时时间/机器周期，需知道以上所有参数。"
  },
  {
    "id": 300,
    "ch": "9",
    "type": "multiple",
    "q": "定时器模式1用于长延时的方法包括？",
    "options": [
      "软件计数溢出次数",
      "中断中重装初值",
      "多级定时器串联",
      "使用_nop_()"
    ],
    "answer": ["A", "B", "C"],
    "explain": "长延时需多次溢出计数，中断中重装初值，或串联定时器；_nop_()不适合长延时。"
  },
  {
    "id": 301,
    "ch": "9",
    "type": "multiple",
    "q": "TMOD寄存器的位定义包括？",
    "options": [
      "GATE",
      "C/T",
      "M1",
      "M0"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "TMOD高低4位分别控制T1和T0，每4位含GATE、C/T、M1、M0。"
  },
  {
    "id": 302,
    "ch": "9",
    "type": "multiple",
    "q": "定时器/计数器的应用场景有？",
    "options": [
      "定时中断",
      "脉冲计数",
      "波特率发生",
      "PWM输出"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "定时器可定时、计数外部脉冲、产生波特率、通过软件模拟PWM。"
  },
  {
    "id": 303,
    "ch": "9",
    "type": "judge",
    "q": "MCS-51定时器在模式1下溢出后需要手动重装初值。",
    "answer": true,
    "explain": "模式1无自动重装功能，溢出后需在中断中手动重写TH和TL初值。"
  },
  {
    "id": 304,
    "ch": "9",
    "type": "judge",
    "q": "定时器模式2的TL是运行寄存器，TH是重装值寄存器。",
    "answer": true,
    "explain": "模式2中TL计数溢出后，硬件自动将TH的值装入TL继续计数。"
  },
  {
    "id": 305,
    "ch": "9",
    "type": "judge",
    "q": "12MHz晶振下，机器周期为1us。",
    "answer": true,
    "explain": "12T模式下机器周期=12/12MHz=1us。"
  },
  {
    "id": 306,
    "ch": "9",
    "type": "judge",
    "q": "定时器作为计数器时，计数脉冲来自内部时钟。",
    "answer": false,
    "explain": "计数器模式下计数脉冲来自外部引脚T0(P3.4)或T1(P3.5)，非内部时钟。"
  },
  {
    "id": 307,
    "ch": "9",
    "type": "short",
    "q": "简述MCS-51定时器的4种工作模式。",
    "answer": "模式0：13位定时器(TH 8位+TL低5位)，最大计8192；模式1：16位定时器(TH+TL各8位)，最大计65536，最常用；模式2：8位自动重装(TL计数，TH存重装值)，溢出后自动重装，适合波特率发生；模式3：T0拆分为两个独立8位定时器，T1停止。",
    "explain": "四种模式各有用途，模式1和2最常用。"
  },
  {
    "id": 308,
    "ch": "9",
    "type": "short",
    "q": "12MHz晶振下用定时器0模式1产生10ms定时，计算初值并写出初始化代码。",
    "answer": "计算：机器周期=12/12MHz=1us；计数值=10ms/1us=10000；初值=65536-10000=55536=0xD8F0；TH0=0xD8，TL0=0xF0。初始化：TMOD=0x01(T0模式1定时)；TH0=0xD8; TL0=0xF0; ET0=1; EA=1; TR0=1;",
    "explain": "初值计算是定时器编程核心。"
  },
  {
    "id": 309,
    "ch": "9",
    "type": "short",
    "q": "简述定时器实现PWM输出的原理。",
    "answer": "原理：利用定时器中断在固定周期内改变高低电平时间占空比。方法：1)设定时器周期为PWM周期(如2kHz=500us)；2)在中断中比较计数值与占空比阈值；3)计数值<阈值时输出高电平，否则输出低电平；4)改变阈值即可改变占空比。也可用定时器输出比较模式自动产生PWM。MCS-51无硬件PWM，需软件实现。",
    "explain": "软件PWM通过定时器中断模拟。"
  },
  {
    "id": 310,
    "ch": "10",
    "type": "single",
    "q": "MCS-51串口的发送缓冲器和接收缓冲器是？",
    "options": [
      "SBUF(共用地址)",
      "两个独立地址",
      "ACC",
      "DPTR"
    ],
    "answer": "A",
    "explain": "SBUF物理上是两个寄存器(发送和接收)，共用一个地址99H，由读写方向区分。"
  },
  {
    "id": 311,
    "ch": "10",
    "type": "single",
    "q": "MCS-51串口控制寄存器是？",
    "options": [
      "SCON",
      "PCON",
      "TCON",
      "TMOD"
    ],
    "answer": "A",
    "explain": "SCON控制串口工作方式、串口中断标志(TI/RI)等。"
  },
  {
    "id": 312,
    "ch": "10",
    "type": "single",
    "q": "串口方式1是？",
    "options": [
      "8位UART",
      "9位UART",
      "同步移位寄存器",
      "8位固定波特率"
    ],
    "answer": "A",
    "explain": "方式1为8位UART(1起始+8数据+1停止)，波特率可变，最常用。"
  },
  {
    "id": 313,
    "ch": "10",
    "type": "single",
    "q": "MCS-51中TI标志位表示？",
    "options": [
      "发送完成",
      "接收完成",
      "发送中",
      "接收中"
    ],
    "answer": "A",
    "explain": "TI=1表示一帧数据发送完毕，需软件清零；RI=1表示接收完毕。"
  },
  {
    "id": 314,
    "ch": "10",
    "type": "single",
    "q": "串口方式1的波特率由哪个定时器产生？",
    "options": [
      "定时器1",
      "定时器0",
      "定时器2",
      "内部固定"
    ],
    "answer": "A",
    "explain": "方式1和3的波特率由定时器1的溢出率决定。"
  },
  {
    "id": 315,
    "ch": "10",
    "type": "single",
    "q": "12MHz晶振下，方式1波特率9600时定时器1模式2的初值为？",
    "options": [
      "0xFD",
      "0xFF",
      "0xFA",
      "0xF3"
    ],
    "answer": "A",
    "explain": "波特率=(2^SMOD/32)x(T1溢出率)，12MHz下TH1≈253=0xFD，有约8.5%误差。"
  },
  {
    "id": 316,
    "ch": "10",
    "type": "single",
    "q": "MCS-51串口接收允许位是？",
    "options": [
      "REN",
      "TI",
      "RI",
      "SM0"
    ],
    "answer": "A",
    "explain": "SCON中REN=1允许接收，REN=0禁止接收。"
  },
  {
    "id": 317,
    "ch": "10",
    "type": "single",
    "q": "SCON中SM0=0,SM1=1表示串口工作在？",
    "options": [
      "方式1",
      "方式0",
      "方式2",
      "方式3"
    ],
    "answer": "A",
    "explain": "SM0/SM1：00=方式0，01=方式1，10=方式2，11=方式3。"
  },
  {
    "id": 318,
    "ch": "10",
    "type": "single",
    "q": "串口发送数据时，写入SBUF后应？",
    "options": [
      "等待TI置1",
      "等待RI置1",
      "直接读SBUF",
      "关闭串口"
    ],
    "answer": "A",
    "explain": "写SBUF启动发送，发送完成后硬件置TI=1，查询或中断方式等待TI。"
  },
  {
    "id": 319,
    "ch": "10",
    "type": "single",
    "q": "PCON中SMOD=1的作用是？",
    "options": [
      "波特率加倍",
      "波特率减半",
      "进入空闲模式",
      "进入掉电模式"
    ],
    "answer": "A",
    "explain": "SMOD=1时波特率加倍，用于提高波特率或减少定时器误差。"
  },
  {
    "id": 320,
    "ch": "10",
    "type": "multiple",
    "q": "MCS-51串口的工作方式有？",
    "options": [
      "方式0(同步移位)",
      "方式1(8位UART)",
      "方式2(9位固定波特率)",
      "方式3(9位可变波特率)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "4种方式由SCON中SM0/SM1选择。"
  },
  {
    "id": 321,
    "ch": "10",
    "type": "multiple",
    "q": "串口通信中常用的校验方式有？",
    "options": [
      "奇校验",
      "偶校验",
      "无校验",
      "CRC校验"
    ],
    "answer": ["A", "B", "C"],
    "explain": "奇偶校验和无校验最常用；CRC通常用于数据块而非单字节。"
  },
  {
    "id": 322,
    "ch": "10",
    "type": "multiple",
    "q": "MCS-51串口方式1的数据帧包含？",
    "options": [
      "1位起始位",
      "8位数据位",
      "1位停止位",
      "1位校验位"
    ],
    "answer": ["A", "B", "C"],
    "explain": "方式1帧格式：1起始+8数据+1停止，共10位，无校验位。"
  },
  {
    "id": 323,
    "ch": "10",
    "type": "multiple",
    "q": "串口通信初始化步骤包括？",
    "options": [
      "设置SCON工作方式",
      "设置TMOD和T1初值",
      "设置中断允许",
      "启动T1"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "初始化需设SCON、TMOD、TH1/TL1、IE、TR1。"
  },
  {
    "id": 324,
    "ch": "10",
    "type": "multiple",
    "q": "串口通信中常见的问题有？",
    "options": [
      "波特率不匹配",
      "电平不匹配",
      "TX/RX接反",
      "晶振频率影响"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "波特率不匹配导致乱码，TTL/RS232电平不匹配需转换，TX/RX需交叉，12MHz晶振有波特率误差。"
  },
  {
    "id": 325,
    "ch": "10",
    "type": "judge",
    "q": "MCS-51的SBUF发送缓冲器和接收缓冲器物理上是同一个寄存器。",
    "answer": false,
    "explain": "SBUF物理上是两个独立寄存器，共用地址99H，由读/写操作区分访问。"
  },
  {
    "id": 326,
    "ch": "10",
    "type": "judge",
    "q": "串口方式1的波特率是固定的，不可改变。",
    "answer": false,
    "explain": "方式1波特率由定时器1溢出率决定，可变可调。"
  },
  {
    "id": 327,
    "ch": "10",
    "type": "judge",
    "q": "串口接收中断标志RI需要软件手动清零。",
    "answer": true,
    "explain": "RI不会硬件自动清除，需在中断或查询处理中手动清零。"
  },
  {
    "id": 328,
    "ch": "10",
    "type": "judge",
    "q": "使用11.0592MHz晶振可以获得更精确的标准波特率。",
    "answer": true,
    "explain": "11.0592MHz能被标准波特率整除，误差为0，常用于串口通信。"
  },
  {
    "id": 329,
    "ch": "10",
    "type": "short",
    "q": "简述MCS-51串口4种工作方式的特点和用途。",
    "answer": "方式0：同步移位寄存器，8位数据，波特率固定为fosc/12，用于扩展I/O；方式1：8位UART，波特率可变(T1)，最常用的异步通信方式；方式2：9位UART，波特率固定为fosc/64或fosc/32，用于多机通信；方式3：9位UART，波特率可变(T1)，功能最全。常用方式1。",
    "explain": "四种方式各有特点，方式1最常用。"
  },
  {
    "id": 330,
    "ch": "10",
    "type": "short",
    "q": "计算11.0592MHz晶振下方式1波特率9600时定时器1模式2的初值。",
    "answer": "公式：波特率=(2^SMOD/32)xfosc/(12x(256-TH1))。SMOD=0：9600=(1/32)x11059200/(12x(256-TH1))。TH1=256-11059200/(32x12x9600)=256-3=253=0xFD。验证：波特率=11059200/(384x3)=9600，误差0%。",
    "explain": "11.0592MHz的优势是标准波特率误差为零。"
  },
  {
    "id": 331,
    "ch": "10",
    "type": "short",
    "q": "编写MCS-51串口方式1接收中断服务函数的C51代码框架。",
    "answer": "void uart_isr() interrupt 4 { if(RI) { RI=0; //手动清接收标志; recv_buf = SBUF; //读取接收数据; //处理接收数据; } if(TI) { TI=0; //手动清发送标志; //可在此处理发送完成; } }。注意：串口中断号=4，需判断RI/TI确定中断来源。",
    "explain": "串口中断需判断RI/TI区分收发。"
  },
  {
    "id": 332,
    "ch": "11",
    "type": "single",
    "q": "8段LED数码管显示字符'0'的共阴极段码是？",
    "options": [
      "0x3F",
      "0xC0",
      "0x06",
      "0xBF"
    ],
    "answer": "A",
    "explain": "共阴极'0'段码=0x3F(abcdef亮，dp灭)，共阳极取反=0xC0。"
  },
  {
    "id": 333,
    "ch": "11",
    "type": "single",
    "q": "4位数码管动态扫描需要的I/O引脚数(含段选+位选)是？",
    "options": [
      "12根",
      "8根",
      "16根",
      "4根"
    ],
    "answer": "A",
    "explain": "8根段选+4根位选=12根I/O线。"
  },
  {
    "id": 334,
    "ch": "11",
    "type": "single",
    "q": "LCD1602显示容量是？",
    "options": [
      "16字符x2行",
      "16字符x1行",
      "20字符x2行",
      "8字符x2行"
    ],
    "answer": "A",
    "explain": "LCD1602可显示16x2个字符，每字符5x8点阵。"
  },
  {
    "id": 335,
    "ch": "11",
    "type": "single",
    "q": "LCD1602的标准控制引脚RS的作用是？",
    "options": [
      "选择数据/指令",
      "使能信号",
      "读写选择",
      "复位"
    ],
    "answer": "A",
    "explain": "RS=0写指令，RS=1写数据；RW=0写，RW=1读；E为使能。"
  },
  {
    "id": 336,
    "ch": "11",
    "type": "single",
    "q": "I2C总线通信需要几根线？",
    "options": [
      "2根(SDA+SCL)",
      "3根",
      "4根",
      "1根"
    ],
    "answer": "A",
    "explain": "I2C只需SDA(数据)和SCL(时钟)两根线，支持多设备挂载。"
  },
  {
    "id": 337,
    "ch": "11",
    "type": "single",
    "q": "I2C总线起始信号的条件是？",
    "options": [
      "SCL高电平时SDA下降沿",
      "SCL低电平时SDA变化",
      "SCL高电平时SDA上升沿",
      "SCL下降沿时SDA变化"
    ],
    "answer": "A",
    "explain": "起始条件：SCL为高时SDA产生下降沿；停止条件：SCL为高时SDA产生上升沿。"
  },
  {
    "id": 338,
    "ch": "11",
    "type": "single",
    "q": "SPI总线通信需要的信号线数(标准4线制)是？",
    "options": [
      "4根",
      "2根",
      "3根",
      "1根"
    ],
    "answer": "A",
    "explain": "标准SPI含MOSI、MISO、SCK、CS(片选)共4根线。"
  },
  {
    "id": 339,
    "ch": "11",
    "type": "single",
    "q": "AT24C02是哪种接口的EEPROM？",
    "options": [
      "I2C接口",
      "SPI接口",
      "1-Wire",
      "并行"
    ],
    "answer": "A",
    "explain": "AT24C02是I2C接口EEPROM，容量256字节，地址0x50-0x57。"
  },
  {
    "id": 340,
    "ch": "11",
    "type": "single",
    "q": "I2C器件地址7位中，AT24C02的固定高位是？",
    "options": [
      "1010",
      "0011",
      "0110",
      "1100"
    ],
    "answer": "A",
    "explain": "AT24C02器件地址高4位固定为1010，低3位由A0-A2引脚设置。"
  },
  {
    "id": 341,
    "ch": "11",
    "type": "single",
    "q": "LCD1602初始化时需要发送的指令0x38表示？",
    "options": [
      "8位接口双行显示",
      "4位接口单行",
      "清屏",
      "光标归位"
    ],
    "answer": "A",
    "explain": "0x38=00111000B，功能设置：8位数据接口，双行显示，5x8点阵。"
  },
  {
    "id": 342,
    "ch": "11",
    "type": "multiple",
    "q": "数码管静态显示和动态显示的特点有？",
    "options": [
      "静态显示每个数码管独立驱动",
      "动态显示利用视觉暂留",
      "静态显示亮度高但引脚多",
      "动态显示省引脚"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "静态显示每位独立驱动引脚多亮度高，动态显示利用视觉暂留扫描省引脚。"
  },
  {
    "id": 343,
    "ch": "11",
    "type": "multiple",
    "q": "LCD1602常用的控制指令有？",
    "options": [
      "0x01清屏",
      "0x0C开显示关光标",
      "0x38功能设置",
      "0x80设置DDRAM地址"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "0x01清屏、0x0C显示开光标关、0x38功能设置、0x80设置首行地址。"
  },
  {
    "id": 344,
    "ch": "11",
    "type": "multiple",
    "q": "I2C总线的特点有？",
    "options": [
      "两线制",
      "支持多主设备",
      "7位/10位地址",
      "同步半双工"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "I2C两线制、多主支持、地址可配置、同步半双工通信。"
  },
  {
    "id": 345,
    "ch": "11",
    "type": "multiple",
    "q": "SPI总线的特点有？",
    "options": [
      "全双工",
      "同步通信",
      "主从模式",
      "需要片选信号"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "SPI全双工同步、主从结构、需CS片选。"
  },
  {
    "id": 346,
    "ch": "11",
    "type": "multiple",
    "q": "AT24C02 EEPROM的读写操作包括？",
    "options": [
      "字节写",
      "页写",
      "随机读",
      "顺序读"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "AT24C02支持字节写、页写(8字节/页)、随机读和顺序读。"
  },
  {
    "id": 347,
    "ch": "11",
    "type": "judge",
    "q": "数码管动态扫描的刷新率应大于50Hz以避免闪烁。",
    "answer": true,
    "explain": "人眼视觉暂留约20ms，刷新率>50Hz(周期<20ms)看不到闪烁。"
  },
  {
    "id": 348,
    "ch": "11",
    "type": "judge",
    "q": "I2C总线上SDA和SCL都需要接上拉电阻。",
    "answer": true,
    "explain": "I2C总线开漏输出，SDA和SCL都需外接上拉电阻(通常4.7K)。"
  },
  {
    "id": 349,
    "ch": "11",
    "type": "judge",
    "q": "SPI通信中CS片选信号低电平有效表示选中从设备。",
    "answer": true,
    "explain": "多数SPI器件CS低电平有效，选中后才能通信。"
  },
  {
    "id": 350,
    "ch": "11",
    "type": "judge",
    "q": "LCD1602可以在3.3V下正常工作。",
    "answer": false,
    "explain": "LCD1602标准工作电压5V，3.3V下对比度不足可能无法正常显示。"
  },
  {
    "id": 351,
    "ch": "11",
    "type": "short",
    "q": "简述数码管动态扫描显示的原理。",
    "answer": "原理：多位数码管共用段选线，位选线独立控制。显示时依次选通一位数码管位选，同时输出该位的段码数据，延时1-2ms后切换到下一位。快速循环扫描(>50Hz)，利用人眼视觉暂留效应，看起来所有位同时显示。优点：节省I/O引脚(8段+N位=8+N根)；缺点：亮度低于静态显示。",
    "explain": "动态扫描用时间换空间，节省引脚。"
  },
  {
    "id": 352,
    "ch": "11",
    "type": "short",
    "q": "简述I2C总线的数据传输时序。",
    "answer": "时序：1)起始信号——SCL高电平时SDA产生下降沿；2)发送7位器件地址+1位读写位(0写1读)，第9个时钟从机拉低SDA应答ACK；3)数据传输——每8位数据后跟1个ACK/NACK；4)停止信号——SCL高电平时SDA产生上升沿。数据在SCL高电平期间稳定，SCL低电平期间SDA可变化。",
    "explain": "I2C时序严格，起始/停止/ACK是关键。"
  },
  {
    "id": 353,
    "ch": "11",
    "type": "short",
    "q": "简述AT24C02 EEPROM的页写操作流程。",
    "answer": "页写流程：1)主机发送起始信号；2)发送器件地址+写位(0)，等待ACK；3)发送字节地址(要写入的起始地址)，等待ACK；4)连续发送数据字节(最多8字节，页大小)，每字节等待ACK；5)发送停止信号，触发内部写入周期(约5ms)；6)写入期间器件不响应。注意：页写地址不能跨页边界，否则回卷覆盖。",
    "explain": "页写效率高但受页大小限制。"
  },
  {
    "id": 354,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的内部RAM容量是？",
    "options": [
      "512字节",
      "256字节",
      "128字节",
      "1024字节"
    ],
    "answer": "A",
    "explain": "STC89C52RC内部RAM 512字节(低128+高128+256扩展)。"
  },
  {
    "id": 355,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的内部数据存储器分为？",
    "options": [
      "低128字节+高128字节+SFR",
      "256字节连续",
      "128字节",
      "1KB连续"
    ],
    "answer": "A",
    "explain": "低128字节(00-7FH)通用RAM，高128字节(80-FFH)间接寻址RAM，SFR区(80-FFH)直接寻址。"
  },
  {
    "id": 356,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC可用作扩展外部RAM/ROM的总线是？",
    "options": [
      "P0+P2+ALE+PSEN",
      "P1+P3",
      "P0+P1",
      "串口"
    ],
    "answer": "A",
    "explain": "P0复用低8位地址/数据，P2输出高8位地址，ALE锁存地址，PSEN读外部ROM。"
  },
  {
    "id": 357,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC最高可用的晶振频率约为？",
    "options": [
      "35MHz",
      "12MHz",
      "24MHz",
      "48MHz"
    ],
    "answer": "A",
    "explain": "STC89C52RC支持0-35MHz晶振，常用12MHz或11.0592MHz。"
  },
  {
    "id": 358,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的看门狗定时器是？",
    "options": [
      "内置WDT",
      "无WDT",
      "外置芯片",
      "软件实现"
    ],
    "answer": "A",
    "explain": "STC89C52RC内置看门狗定时器，通过WDT_CONTR寄存器控制。"
  },
  {
    "id": 359,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的EEPROM(内部Data Flash)容量约为？",
    "options": [
      "8KB+",
      "无EEPROM",
      "256字节",
      "1KB"
    ],
    "answer": "A",
    "explain": "STC89C52RC集成约8KB+的Data Flash可作为EEPROM使用，通过IAP读写。"
  },
  {
    "id": 360,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC复位后执行的第一条指令地址是？",
    "options": [
      "0000H",
      "0080H",
      "FFFFH",
      "0023H"
    ],
    "answer": "A",
    "explain": "复位后PC=0000H，从程序存储器起始地址执行。"
  },
  {
    "id": 361,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的中断向量表中定时器0中断入口地址是？",
    "options": [
      "000BH",
      "0003H",
      "001BH",
      "0023H"
    ],
    "answer": "A",
    "explain": "INT0=0003H，T0=000BH，INT1=0013H，T1=001BH，串口=0023H。"
  },
  {
    "id": 362,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC进入掉电模式后唤醒方式是？",
    "options": [
      "外部中断",
      "定时器中断",
      "软件复位",
      "串口中断"
    ],
    "answer": "A",
    "explain": "掉电模式只能通过外部中断(INT0/INT1)唤醒。"
  },
  {
    "id": 363,
    "ch": "12",
    "type": "single",
    "q": "STC89C52RC的P4口(如有)在哪个地址？",
    "options": [
      "0xE8",
      "0x80",
      "0x90",
      "0xA0"
    ],
    "answer": "A",
    "explain": "STC扩展P4口地址通常在0xE8。"
  },
  {
    "id": 364,
    "ch": "12",
    "type": "multiple",
    "q": "STC89C52RC相比标准8052的增强特性有？",
    "options": [
      "内置看门狗",
      "内置EEPROM/Data Flash",
      "双DPTR指针",
      "更高晶振频率"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STC89C52RC增强：WDT、IAP Data Flash、双DPTR、35MHz晶振等。"
  },
  {
    "id": 365,
    "ch": "12",
    "type": "multiple",
    "q": "STC89C52RC综合实验中常用的外设有？",
    "options": [
      "LED",
      "数码管",
      "按键",
      "LCD1602"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "综合实验通常集成LED、数码管、按键、LCD等外设。"
  },
  {
    "id": 366,
    "ch": "12",
    "type": "multiple",
    "q": "STC89C52RC开发中常用的调试手段有？",
    "options": [
      "串口printf调试",
      "LED状态指示",
      "仿真器单步",
      "逻辑分析仪"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "串口打印、LED指示、仿真器、逻辑分析仪均为常用调试手段。"
  },
  {
    "id": 367,
    "ch": "12",
    "type": "multiple",
    "q": "STC89C52RC项目开发流程包括？",
    "options": [
      "需求分析",
      "硬件设计",
      "软件编程",
      "系统测试"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "完整开发流程涵盖需求、硬件、软件、测试。"
  },
  {
    "id": 368,
    "ch": "12",
    "type": "multiple",
    "q": "STC89C52RC低功耗模式有？",
    "options": [
      "空闲模式",
      "掉电模式",
      "睡眠模式",
      "待机模式"
    ],
    "answer": ["A", "B"],
    "explain": "STC89C52RC支持空闲(IDLE)和掉电(Power Down)两种低功耗模式。"
  },
  {
    "id": 369,
    "ch": "12",
    "type": "judge",
    "q": "STC89C52RC兼容MCS-51指令集。",
    "answer": true,
    "explain": "STC89C52RC是增强型8051单片机，完全兼容MCS-51指令集。"
  },
  {
    "id": 370,
    "ch": "12",
    "type": "judge",
    "q": "STC89C52RC的P0口作为通用I/O时不需要外接上拉电阻。",
    "answer": false,
    "explain": "P0口是开漏输出，作通用I/O仍需外接上拉电阻。"
  },
  {
    "id": 371,
    "ch": "12",
    "type": "judge",
    "q": "STC89C52RC的看门狗定时器溢出会触发系统复位。",
    "answer": true,
    "explain": "WDT溢出约21400个时钟周期后触发系统复位，防止程序跑飞。"
  },
  {
    "id": 372,
    "ch": "12",
    "type": "judge",
    "q": "STC89C52RC的IAP Data Flash可以在运行时写入数据。",
    "answer": true,
    "explain": "IAP(在应用编程)允许程序运行时读写内部Data Flash，实现参数存储。"
  },
  {
    "id": 373,
    "ch": "12",
    "type": "short",
    "q": "设计一个基于STC89C52RC的数字钟，简述系统方案。",
    "answer": "方案：1)硬件——STC89C52RC最小系统+12MHz晶振+LCD1602+独立按键(3个:设置/加/减)+蜂鸣器；2)软件——定时器0模式1产生50ms中断，20次为1秒，累加分时；按键设置调时；LCD显示时分秒；3)功能——正常走时、按键调时、整点报时。扩展：温度显示(DS18B20)、闹钟功能。",
    "explain": "数字钟是STC综合应用经典项目。"
  },
  {
    "id": 374,
    "ch": "12",
    "type": "short",
    "q": "简述STC89C52RC的IAP读写Data Flash的流程。",
    "answer": "写流程：1)关闭中断；2)设置WDT_CONTR使能IAP；3)设置IAP_ADDRH/IAP_ADDRL为目标地址；4)设置IAP_CMD=2(写)；5)IAP_TRIGGER=0x46触发写操作；6)等待完成；7)关闭IAP。读流程类似，IAP_CMD=1。注意：写前需先擦除(CMD=3，按扇区擦除)，Data Flash按扇区管理。",
    "explain": "IAP读写需遵循命令触发流程。"
  },
  {
    "id": 375,
    "ch": "12",
    "type": "short",
    "q": "在STC89C52RC项目中如何提高系统可靠性？",
    "answer": "措施：1)启用看门狗定时器(WDT)，防止程序死循环；2)使用IAP Data Flash存储关键参数，防掉电丢失；3)按键消抖，防误触发；4)串口通信加校验和/CRC，防数据错误；5)电源去耦滤波，防纹波干扰；6)I/O口加保护电路(限流/TVS)；7)软件采用状态机架构，逻辑清晰；8)增加异常处理和恢复机制。",
    "explain": "软硬件协同提高可靠性。"
  },
  {
    "id": 376,
    "ch": "13",
    "type": "single",
    "q": "STM32F407采用的CPU内核是？",
    "options": [
      "Cortex-M4F",
      "Cortex-M3",
      "Cortex-A7",
      "Cortex-M0"
    ],
    "answer": "A",
    "explain": "STM32F407基于Cortex-M4F内核，带硬件浮点单元(FPU)和DSP指令。"
  },
  {
    "id": 377,
    "ch": "13",
    "type": "single",
    "q": "Cortex-M4相比Cortex-M3增加的主要特性是？",
    "options": [
      "DSP指令和FPU",
      "更多中断",
      "更大Flash",
      "更高主频"
    ],
    "answer": "A",
    "explain": "Cortex-M4增加了DSP指令集和可选硬件浮点单元(FPU)。"
  },
  {
    "id": 378,
    "ch": "13",
    "type": "single",
    "q": "STM32F407的最高工作主频是？",
    "options": [
      "168MHz",
      "72MHz",
      "120MHz",
      "180MHz"
    ],
    "answer": "A",
    "explain": "STM32F407最高主频168MHz，提供210 DMIPS算力。"
  },
  {
    "id": 379,
    "ch": "13",
    "type": "single",
    "q": "Cortex-M4的浮点运算单元(FPU)支持的数据类型是？",
    "options": [
      "单精度浮点(float)",
      "双精度浮点",
      "半精度",
      "定点"
    ],
    "answer": "A",
    "explain": "Cortex-M4F内置单精度FPU，符合IEEE 754标准。"
  },
  {
    "id": 380,
    "ch": "13",
    "type": "single",
    "q": "STM32F4系列的数据总线宽度是？",
    "options": [
      "32位",
      "16位",
      "8位",
      "64位"
    ],
    "answer": "A",
    "explain": "STM32基于32位ARM Cortex-M内核，数据总线32位。"
  },
  {
    "id": 381,
    "ch": "13",
    "type": "single",
    "q": "Cortex-M4的流水线级数是？",
    "options": [
      "3级",
      "5级",
      "8级",
      "2级"
    ],
    "answer": "A",
    "explain": "Cortex-M4采用3级流水线+分支预测。"
  },
  {
    "id": 382,
    "ch": "13",
    "type": "single",
    "q": "STM32F407内部SRAM容量是？",
    "options": [
      "192KB",
      "64KB",
      "20KB",
      "512KB"
    ],
    "answer": "A",
    "explain": "STM32F407有192KB SRAM(128KB主+64KB在CCM RAM区)。"
  },
  {
    "id": 383,
    "ch": "13",
    "type": "single",
    "q": "STM32F407的Flash程序存储器容量是？",
    "options": [
      "1MB",
      "512KB",
      "256KB",
      "2MB"
    ],
    "answer": "A",
    "explain": "STM32F407ZG/VG有1MB Flash。"
  },
  {
    "id": 384,
    "ch": "13",
    "type": "single",
    "q": "Cortex-M4的Thumb-2指令集特点是？",
    "options": [
      "16位和32位混合",
      "纯32位",
      "纯16位",
      "纯64位"
    ],
    "answer": "A",
    "explain": "Thumb-2是16/32位混合指令集，兼顾代码密度和性能。"
  },
  {
    "id": 385,
    "ch": "13",
    "type": "single",
    "q": "STM32的中断控制器是？",
    "options": [
      "NVIC",
      "GIC",
      "8259",
      "PIC"
    ],
    "answer": "A",
    "explain": "Cortex-M系列内置NVIC(嵌套向量中断控制器)，支持240个中断和16级优先级。"
  },
  {
    "id": 386,
    "ch": "13",
    "type": "multiple",
    "q": "Cortex-M4内核的特点包括？",
    "options": [
      "哈佛架构",
      "32位RISC",
      "支持DSP指令",
      "集成NVIC"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "M4采用哈佛架构、32位RISC、支持DSP、集成NVIC。"
  },
  {
    "id": 387,
    "ch": "13",
    "type": "multiple",
    "q": "STM32F407的主要外设包括？",
    "options": [
      "ADC",
      "定时器",
      "USART",
      "DMA"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STM32F407集成ADC、定时器、USART、DMA等丰富外设。"
  },
  {
    "id": 388,
    "ch": "13",
    "type": "multiple",
    "q": "STM32系列的主要分类有？",
    "options": [
      "主流型(STM32F1)",
      "高性能型(STM32F4)",
      "超低功耗型(STM32L)",
      "无线型(STM32WB)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STM32分主流、高性能、超低功耗、无线等系列。"
  },
  {
    "id": 389,
    "ch": "13",
    "type": "multiple",
    "q": "Cortex-M4的DSP指令可用于？",
    "options": [
      "FFT运算",
      "数字滤波",
      "矩阵运算",
      "PID控制"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DSP指令加速FFT、滤波、矩阵、PID等数学运算。"
  },
  {
    "id": 390,
    "ch": "13",
    "type": "multiple",
    "q": "STM32F407相比STM32F103的优势有？",
    "options": [
      "更高主频",
      "带FPU",
      "更多SRAM",
      "支持DSP指令"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "F407主频168MHz>F103的72MHz，有FPU、192KB SRAM、DSP指令。"
  },
  {
    "id": 391,
    "ch": "13",
    "type": "judge",
    "q": "STM32F407的CCM RAM区只能由CPU访问，DMA不能访问。",
    "answer": true,
    "explain": "CCM(Core Coupled Memory)RAM紧耦合CPU，DMA无法访问该区域。"
  },
  {
    "id": 392,
    "ch": "13",
    "type": "judge",
    "q": "Cortex-M4的浮点运算单元可以处理双精度浮点数。",
    "answer": false,
    "explain": "M4F的FPU只支持单精度(float)运算，双精度需软件模拟。"
  },
  {
    "id": 393,
    "ch": "13",
    "type": "judge",
    "q": "STM32的中断向量表可以重定位到其他地址。",
    "answer": true,
    "explain": "通过设置SCB->VTOR寄存器可将中断向量表重定位到RAM或Flash其他位置。"
  },
  {
    "id": 394,
    "ch": "13",
    "type": "judge",
    "q": "Thumb-2指令集是纯16位指令集。",
    "answer": false,
    "explain": "Thumb-2是16位和32位混合指令集，兼顾代码密度和性能。"
  },
  {
    "id": 395,
    "ch": "13",
    "type": "short",
    "q": "简述Cortex-M4内核的主要特性和应用领域。",
    "answer": "特性：1)32位RISC哈佛架构；2)3级流水线+分支预测；3)Thumb-2指令集(16/32位混合)；4)集成NVIC嵌套向量中断控制器；5)可选FPU单精度浮点单元；6)DSP指令集扩展；7)MPU内存保护单元；8)支持位带操作。应用：电机控制、数字电源、音频处理、传感器融合、IoT网关等需要实时性和信号处理的领域。",
    "explain": "M4在M3基础上增加DSP和FPU，适合信号处理。"
  },
  {
    "id": 396,
    "ch": "13",
    "type": "short",
    "q": "比较STM32F103和STM32F407的主要区别。",
    "answer": "区别：1)内核——F103为Cortex-M3(72MHz)，F407为Cortex-M4F(168MHz)；2)FPU——F103无FPU，F407有单精度FPU；3)DSP——F103无DSP指令，F407有；4)SRAM——F103约20-64KB，F407有192KB(含64KB CCM)；5)Flash——F103最大1MB，F407最大1MB；6)外设——F407更多高级定时器、ADC更高速、带USB OTG/以太网MAC；7)总线——F407有更宽的总线矩阵和多DMA流。",
    "explain": "F407是F103的高性能升级版。"
  },
  {
    "id": 397,
    "ch": "13",
    "type": "short",
    "q": "简述STM32的存储器映射结构。",
    "answer": "STM32采用统一32位地址空间(4GB)，分为：1)0x00000000-0x1FFFFFFF: Code区(Flash镜像+系统存储)；2)0x20000000-0x3FFFFFFF: SRAM区(位带区+位带别名)；3)0x40000000-0x5FFFFFFF: 外设区(APB/AHB外设寄存器+位带别名)；4)0x60000000-0x9FFFFFFF: FSMC外部存储器；5)0xA0000000+: 系统级寄存器(NVIC/SCB等)。可重定位向量表到Code或SRAM区。",
    "explain": "统一地址空间简化编程。"
  },
  {
    "id": 398,
    "ch": "14",
    "type": "single",
    "q": "STM32CubeMX的主要功能是？",
    "options": [
      "图形化配置外设并生成代码",
      "编译程序",
      "烧录固件",
      "PCB设计"
    ],
    "answer": "A",
    "explain": "CubeMX用于图形化配置时钟/外设/中间件并生成初始化代码框架。"
  },
  {
    "id": 399,
    "ch": "14",
    "type": "single",
    "q": "STM32 HAL库的全称是？",
    "options": [
      "Hardware Abstraction Layer",
      "High-level API Library",
      "Hardware Access Layer",
      "Host Application Layer"
    ],
    "answer": "A",
    "explain": "HAL=硬件抽象层，提供统一API屏蔽硬件差异。"
  },
  {
    "id": 400,
    "ch": "14",
    "type": "single",
    "q": "STM32开发中常用的IDE有？",
    "options": [
      "STM32CubeIDE",
      "Keil MDK",
      "IAR EWARM",
      "以上都是"
    ],
    "answer": "D",
    "explain": "STM32开发支持CubeIDE、Keil MDK、IAR等多种IDE。"
  },
  {
    "id": 401,
    "ch": "14",
    "type": "single",
    "q": "STM32程序烧录常用的调试器是？",
    "options": [
      "ST-Link",
      "J-Link",
      "DAP-Link",
      "以上均可"
    ],
    "answer": "D",
    "explain": "ST-Link、J-Link、CMSIS-DAP均可用于STM32烧录和调试。"
  },
  {
    "id": 402,
    "ch": "14",
    "type": "single",
    "q": "HAL库中GPIO初始化使用的函数是？",
    "options": [
      "HAL_GPIO_Init()",
      "GPIO_Init()",
      "gpio_init()",
      "HAL_GPIO_Write()"
    ],
    "answer": "A",
    "explain": "HAL_GPIO_Init()配合GPIO_InitTypeDef结构体初始化GPIO。"
  },
  {
    "id": 403,
    "ch": "14",
    "type": "single",
    "q": "STM32CubeMX生成的工程默认使用的时钟源是？",
    "options": [
      "HSE外部晶振",
      "HSI内部RC",
      "LSE",
      "LSI"
    ],
    "answer": "A",
    "explain": "CubeMX默认配置HSE外部晶振为主时钟源，可通过PLL倍频达到高主频。"
  },
  {
    "id": 404,
    "ch": "14",
    "type": "single",
    "q": "STM32 HAL库中延时函数HAL_Delay()的参数单位是？",
    "options": [
      "毫秒(ms)",
      "微秒(us)",
      "秒(s)",
      "纳秒(ns)"
    ],
    "answer": "A",
    "explain": "HAL_Delay()基于SysTick定时器，参数单位为毫秒。"
  },
  {
    "id": 405,
    "ch": "14",
    "type": "single",
    "q": "STM32系统启动文件startup_*.s中定义的堆栈在？",
    "options": [
      "SRAM",
      "Flash",
      "CCM",
      "外部RAM"
    ],
    "answer": "A",
    "explain": "启动文件中定义的Stack_Size和Heap_Size分配在SRAM中。"
  },
  {
    "id": 406,
    "ch": "14",
    "type": "single",
    "q": "HAL库中串口发送数据的函数是？",
    "options": [
      "HAL_UART_Transmit()",
      "UART_Send()",
      "HAL_UART_Write()",
      "printf()"
    ],
    "answer": "A",
    "explain": "HAL_UART_Transmit()用于阻塞式发送，_IT中断发送，_DMA为DMA发送。"
  },
  {
    "id": 407,
    "ch": "14",
    "type": "single",
    "q": "STM32的System Configuration模块(SYSCFG)用于？",
    "options": [
      "外部中断线映射等系统配置",
      "时钟配置",
      "Flash编程",
      "电源管理"
    ],
    "answer": "A",
    "explain": "SYSCFG用于EXTI线映射、内存重映射、以太网PHY接口选择等系统级配置。"
  },
  {
    "id": 408,
    "ch": "14",
    "type": "multiple",
    "q": "STM32CubeMX可以配置的内容包括？",
    "options": [
      "时钟树",
      "GPIO引脚",
      "外设参数",
      "中间件(FreeRTOS/FATFS)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "CubeMX可配置时钟、GPIO、外设、中间件等，一键生成代码。"
  },
  {
    "id": 409,
    "ch": "14",
    "type": "multiple",
    "q": "STM32 HAL库的特点有？",
    "options": [
      "统一API跨芯片",
      "支持中断/DMA/阻塞三种模式",
      "自动初始化外设",
      "完全替代寄存器操作"
    ],
    "answer": ["A", "B", "C"],
    "explain": "HAL统一API、支持三种操作模式、CubeMX自动初始化；不完全替代寄存器(性能敏感场景仍需寄存器)。"
  },
  {
    "id": 410,
    "ch": "14",
    "type": "multiple",
    "q": "STM32开发中常用的调试方式有？",
    "options": [
      "SWD单步调试",
      "printf串口打印",
      "逻辑分析仪",
      "示波器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "SWD调试、printf、逻辑分析仪、示波器均为常用手段。"
  },
  {
    "id": 411,
    "ch": "14",
    "type": "multiple",
    "q": "STM32的启动模式有？",
    "options": [
      "从Flash启动",
      "从系统存储器启动(ISP)",
      "从SRAM启动",
      "从待机唤醒"
    ],
    "answer": ["A", "B", "C"],
    "explain": "BOOT0/BOOT1选择Flash/系统存储器/SRAM三种启动模式。"
  },
  {
    "id": 412,
    "ch": "14",
    "type": "multiple",
    "q": "STM32工程中常用的文件类型有？",
    "options": [
      ".c源文件",
      ".h头文件",
      ".s启动文件",
      ".ld链接脚本"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "工程含.c/.h/.s启动文件、链接脚本等。"
  },
  {
    "id": 413,
    "ch": "14",
    "type": "judge",
    "q": "STM32 HAL库完全替代了寄存器操作，不再需要直接操作寄存器。",
    "answer": false,
    "explain": "HAL库简化开发，但性能/时序敏感场景仍需直接寄存器操作。"
  },
  {
    "id": 414,
    "ch": "14",
    "type": "judge",
    "q": "STM32CubeIDE基于Eclipse开发，免费使用。",
    "answer": true,
    "explain": "STM32CubeIDE是ST基于Eclipse+CDT的免费IDE，集成CubeMX。"
  },
  {
    "id": 415,
    "ch": "14",
    "type": "judge",
    "q": "HAL_Delay()函数可以在中断服务函数中安全使用。",
    "answer": false,
    "explain": "HAL_Delay基于SysTick轮询，在中断中调用会阻塞中断导致问题。"
  },
  {
    "id": 416,
    "ch": "14",
    "type": "judge",
    "q": "STM32的SWD调试接口只需要2根线(SWCLK+SWDIO)即可调试。",
    "answer": true,
    "explain": "SWD只需SWCLK和SWDIO两根信号线(加GND/VREF)，比JTAG省线。"
  },
  {
    "id": 417,
    "ch": "14",
    "type": "short",
    "q": "简述使用STM32CubeMX+HAL库创建工程的基本流程。",
    "answer": "流程：1)打开CubeMX选择芯片型号(如STM32F407ZGT6)；2)在Pinout视图配置外设引脚(GPIO/UART/Timer等)；3)在Clock Configuration配置时钟树(HSE/PLL/分频倍频)；4)在Configuration标签设置外设参数(波特率/模式等)；5)选择中间件(FreeRTOS/FATFS等)；6)Project Manager设置工程名/IDE/堆栈大小；7)点击GENERATE CODE生成工程；8)在IDE中打开，在用户代码区编写应用逻辑(USER CODE BEGIN/END之间)。",
    "explain": "CubeMX+HAL是STM32标准开发流程。"
  },
  {
    "id": 418,
    "ch": "14",
    "type": "short",
    "q": "简述STM32的时钟树结构和配置方法。",
    "answer": "时钟源：HSI(内部16MHz RC)、HSE(外部晶振4-26MHz)、LSE(32.768kHz)、LSI(32kHz RC)。时钟树：HSE->PLL倍频->SYSCLK(最高168MHz)->AHB分频->HCLK->APB1(42MHz)/APB2(84MHz)。配置方法：在CubeMX Clock Configuration页面设置输入频率、PLL参数(M/N/P/Q分频倍频)，自动计算各总线频率。注意APB1<=42MHz, APB2<=84MHz, USB需48MHz。",
    "explain": "时钟树是STM32配置核心。"
  },
  {
    "id": 419,
    "ch": "14",
    "type": "short",
    "q": "简述STM32三种启动模式的区别和用途。",
    "answer": "1)从Flash启动(BOOT0=0)：从用户Flash地址0x08000000执行程序，正常工作模式；2)从系统存储器启动(BOOT0=1,BOOT1=0)：从ST出厂的Bootloader(0x1FFF0000)启动，通过USART1/USB进行ISP串口下载，用于空芯片烧录；3)从SRAM启动(BOOT0=1,BOOT1=1)：从SRAM 0x20000000执行代码，用于调试和临时运行，断电丢失。",
    "explain": "BOOT引脚选择不同启动源。"
  },
  {
    "id": 420,
    "ch": "15",
    "type": "single",
    "q": "HAL_GPIO_WritePin()函数的参数不包括？",
    "options": [
      "GPIO端口",
      "引脚号",
      "引脚状态",
      "时钟频率"
    ],
    "answer": "D",
    "explain": "HAL_GPIO_WritePin(GPIOx, GPIO_PIN, GPIO_PIN_SET/RESET)，无需时钟频率参数。"
  },
  {
    "id": 421,
    "ch": "15",
    "type": "single",
    "q": "HAL_GPIO_TogglePin()的作用是？",
    "options": [
      "翻转引脚电平",
      "读取引脚状态",
      "设置引脚高电平",
      "初始化引脚"
    ],
    "answer": "A",
    "explain": "TogglePin翻转指定引脚电平，常用于LED闪烁。"
  },
  {
    "id": 422,
    "ch": "15",
    "type": "single",
    "q": "HAL库中读取GPIO输入电平的函数是？",
    "options": [
      "HAL_GPIO_ReadPin()",
      "HAL_GPIO_GetPin()",
      "GPIO_Read()",
      "HAL_GPIO_Input()"
    ],
    "answer": "A",
    "explain": "HAL_GPIO_ReadPin(GPIOx, GPIO_PIN)返回GPIO_PIN_SET或GPIO_PIN_RESET。"
  },
  {
    "id": 423,
    "ch": "15",
    "type": "single",
    "q": "HAL_UART_Receive_IT()的特点是？",
    "options": [
      "中断方式接收",
      "阻塞等待接收",
      "DMA方式接收",
      "轮询接收"
    ],
    "answer": "A",
    "explain": "_IT后缀表示中断方式，非阻塞，接收完成后触发回调HAL_UART_RxCpltCallback。"
  },
  {
    "id": 424,
    "ch": "15",
    "type": "single",
    "q": "CMSIS的全称是？",
    "options": [
      "Cortex Microcontroller Software Interface Standard",
      "Cortex Microcontroller System Interface",
      "Common Microcontroller Software Interface",
      "Cortex Microcontroller Standard Interface"
    ],
    "answer": "A",
    "explain": "CMSIS是ARM定义的Cortex微控制器软件接口标准，提供内核访问层。"
  },
  {
    "id": 425,
    "ch": "15",
    "type": "single",
    "q": "HAL_GPIO_Init()中GPIO_MODE_IT_RISING表示？",
    "options": [
      "上升沿外部中断",
      "推挽输出",
      "复用功能",
      "模拟输入"
    ],
    "answer": "A",
    "explain": "IT_RISING=上升沿触发外部中断，IT_FALLING=下降沿，EVT=事件。"
  },
  {
    "id": 426,
    "ch": "15",
    "type": "single",
    "q": "HAL库初始化GPIO前必须先？",
    "options": [
      "使能GPIO时钟",
      "配置中断",
      "设置波特率",
      "初始化串口"
    ],
    "answer": "A",
    "explain": "STM32外设默认时钟关闭，使用前必须通过__HAL_RCC_GPIOx_CLK_ENABLE()使能时钟。"
  },
  {
    "id": 427,
    "ch": "15",
    "type": "single",
    "q": "HAL_Delay()函数底层依赖的定时器是？",
    "options": [
      "SysTick",
      "TIM1",
      "TIM2",
      "RTC"
    ],
    "answer": "A",
    "explain": "HAL_Delay基于SysTick定时器中断递减计数，1ms精度。"
  },
  {
    "id": 428,
    "ch": "15",
    "type": "single",
    "q": "HAL库中回调函数HAL_UART_RxCpltCallback的调用时机是？",
    "options": [
      "接收完成时",
      "发送完成时",
      "错误时",
      "空闲时"
    ],
    "answer": "A",
    "explain": "HAL_UART_Receive_IT()完成指定长度接收后调用HAL_UART_RxCpltCallback回调。"
  },
  {
    "id": 429,
    "ch": "15",
    "type": "single",
    "q": "HAL_StatusTypeDef的返回值HAL_OK表示？",
    "options": [
      "操作成功",
      "操作失败",
      "忙",
      "错误"
    ],
    "answer": "A",
    "explain": "HAL函数返回HAL_OK(成功)/HAL_ERROR(错误)/HAL_BUSY(忙)/HAL_TIMEOUT(超时)。"
  },
  {
    "id": 430,
    "ch": "15",
    "type": "multiple",
    "q": "HAL库提供的外设驱动包括？",
    "options": [
      "HAL_GPIO",
      "HAL_UART",
      "HAL_TIM",
      "HAL_ADC"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "HAL提供GPIO/UART/TIM/ADC等全系列外设驱动。"
  },
  {
    "id": 431,
    "ch": "15",
    "type": "multiple",
    "q": "HAL库中UART的三种收发方式是？",
    "options": [
      "阻塞(Polling)",
      "中断(Interrupt)",
      "DMA",
      "回调"
    ],
    "answer": ["A", "B", "C"],
    "explain": "阻塞_Transmit/中断_Transmit_IT/DMA_Transmit_DMA三种方式。"
  },
  {
    "id": 432,
    "ch": "15",
    "type": "multiple",
    "q": "CMSIS提供的功能包括？",
    "options": [
      "内核寄存器访问",
      "中断控制(NVIC)",
      "系统时钟配置",
      "DSP指令封装"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "CMSIS提供内核寄存器、NVIC、时钟、DSP、RTOS接口等标准化访问。"
  },
  {
    "id": 433,
    "ch": "15",
    "type": "multiple",
    "q": "HAL库GPIO_InitTypeDef的字段有？",
    "options": [
      "Pin",
      "Mode",
      "Pull",
      "Speed"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "GPIO_InitTypeDef含Pin/Mode/Pull/Speed/Alternate等字段。"
  },
  {
    "id": 434,
    "ch": "15",
    "type": "multiple",
    "q": "使用HAL库开发STM32需要的文件包括？",
    "options": [
      "stm32f4xx_hal.h",
      "stm32f4xx_hal_conf.h",
      "startup_stm32f407xx.s",
      "system_stm32f4xx.c"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "工程需HAL主头文件、配置文件、启动文件、系统初始化文件。"
  },
  {
    "id": 435,
    "ch": "15",
    "type": "judge",
    "q": "HAL库函数比直接寄存器操作代码执行效率更高。",
    "answer": false,
    "explain": "HAL库封装增加了函数调用开销，执行效率略低于直接寄存器操作。"
  },
  {
    "id": 436,
    "ch": "15",
    "type": "judge",
    "q": "HAL_GPIO_Init()可以同时初始化同一端口的多个引脚。",
    "answer": true,
    "explain": "GPIO_InitTypeDef.Pin可设为多个引脚的或值(如GPIO_PIN_0|GPIO_PIN_1)同时初始化。"
  },
  {
    "id": 437,
    "ch": "15",
    "type": "judge",
    "q": "HAL_UART_Transmit()是阻塞式发送，发送完成前函数不返回。",
    "answer": true,
    "explain": "HAL_UART_Transmit()阻塞等待发送完成，超时由参数指定。"
  },
  {
    "id": 438,
    "ch": "15",
    "type": "judge",
    "q": "HAL库的回调函数名是固定的，用户通过重写实现自定义逻辑。",
    "answer": true,
    "explain": "HAL库使用__weak声明弱定义回调函数，用户重写同名函数覆盖。"
  },
  {
    "id": 439,
    "ch": "15",
    "type": "short",
    "q": "简述HAL库中GPIO初始化的完整步骤和代码。",
    "answer": "步骤：1)使能GPIO时钟——__HAL_RCC_GPIOx_CLK_ENABLE()；2)定义GPIO_InitTypeDef结构体；3)设置Pin(引脚号)、Mode(模式:输入/输出/复用/模拟)、Pull(上拉/下拉/无)、Speed(速度等级)；4)调用HAL_GPIO_Init(&GPIOx, &init)初始化。示例：GPIO_InitTypeDef gi; gi.Pin=GPIO_PIN_5; gi.Mode=GPIO_MODE_OUTPUT_PP; gi.Pull=GPIO_NOPULL; gi.Speed=GPIO_SPEED_FREQ_HIGH; HAL_GPIO_Init(GPIOA, &gi);",
    "explain": "GPIO初始化三步：使能时钟、设结构体、调用Init。"
  },
  {
    "id": 440,
    "ch": "15",
    "type": "short",
    "q": "比较HAL库UART的三种收发方式。",
    "answer": "1)阻塞式(HAL_UART_Transmit/Receive)：函数等待完成才返回，简单但CPU占用高，适合少量数据；2)中断式(HAL_UART_Transmit_IT/Receive_IT)：非阻塞，启动后立即返回，完成触发回调HAL_UART_RxCpltCallback，适合中等数据量；3)DMA式(HAL_UART_Transmit_DMA/Receive_DMA)：完全由DMA搬运数据，CPU几乎不参与，适合大量数据传输，效率最高。",
    "explain": "三种方式按效率从低到高：阻塞<中断<DMA。"
  },
  {
    "id": 441,
    "ch": "15",
    "type": "short",
    "q": "简述HAL库回调函数机制及其使用方法。",
    "answer": "机制：HAL库用__weak关键字声明弱定义回调函数(如HAL_UART_RxCpltCallback)，弱定义版本为空函数。用户在应用代码中定义同名函数覆盖弱定义，HAL库在中断/完成时自动调用。使用方法：1)在用户代码中定义void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)；2)判断huart->Instance==USART1确定来源；3)编写处理逻辑(如重新启动接收HAL_UART_Receive_IT)。常见回调：HAL_GPIO_EXTI_Callback(外部中断)、HAL_TIM_PeriodElapsedCallback(定时器溢出)、HAL_UART_RxCpltCallback(接收完成)。",
    "explain": "弱定义回调实现灵活扩展。"
  },
  {
    "id": 442,
    "ch": "16",
    "type": "single",
    "q": "STM32的GPIO输出模式GPIO_MODE_OUTPUT_PP表示？",
    "options": [
      "推挽输出",
      "开漏输出",
      "复用推挽",
      "复用开漏"
    ],
    "answer": "A",
    "explain": "OUTPUT_PP=推挽输出，OUTPUT_OD=开漏输出，AF_PP=复用推挽，AF_OD=复用开漏。"
  },
  {
    "id": 443,
    "ch": "16",
    "type": "single",
    "q": "STM32GPIO开漏输出模式需要？",
    "options": [
      "外接上拉电阻",
      "外接下拉电阻",
      "内部上拉",
      "不需要电阻"
    ],
    "answer": "A",
    "explain": "开漏输出无内部上拉驱动高电平，需外接上拉电阻才能输出高电平。"
  },
  {
    "id": 444,
    "ch": "16",
    "type": "single",
    "q": "STM32的外部中断EXTI线0对应哪个GPIO引脚？",
    "options": [
      "PA0/PB0/PC0等端口的第0脚",
      "仅PA0",
      "仅PB0",
      "所有引脚"
    ],
    "answer": "A",
    "explain": "EXTI线0映射到所有端口的第0脚(如PA0/PB0/PC0...)，通过SYSCFG选择。"
  },
  {
    "id": 445,
    "ch": "16",
    "type": "single",
    "q": "STM32的EXTI外部中断触发方式GPIO_MODE_IT_FALLING表示？",
    "options": [
      "下降沿触发",
      "上升沿触发",
      "双边沿触发",
      "高电平触发"
    ],
    "answer": "A",
    "explain": "IT_FALLING=下降沿中断，IT_RISING=上升沿，IT_RISING_FALLING=双边沿。"
  },
  {
    "id": 446,
    "ch": "16",
    "type": "single",
    "q": "STM32F4的NVIC支持多少级抢占优先级？",
    "options": [
      "最多16级",
      "4级",
      "8级",
      "2级"
    ],
    "answer": "A",
    "explain": "NVIC支持4位优先级，可配置为0-16级抢占优先级(通过HAL_NVIC_SetPriorityGrouping设置分组)。"
  },
  {
    "id": 447,
    "ch": "16",
    "type": "single",
    "q": "STM32中HAL_NVIC_SetPriority()的作用是？",
    "options": [
      "设置中断优先级",
      "使能中断",
      "清除中断标志",
      "触发中断"
    ],
    "answer": "A",
    "explain": "HAL_NVIC_SetPriority(IRQn, 抢占优先级, 子优先级)设置指定中断的优先级。"
  },
  {
    "id": 448,
    "ch": "16",
    "type": "single",
    "q": "STM32外部中断回调函数名是？",
    "options": [
      "HAL_GPIO_EXTI_Callback()",
      "HAL_EXTI_Callback()",
      "GPIO_IRQHandler()",
      "HAL_GPIO_IRQ()"
    ],
    "answer": "A",
    "explain": "外部中断回调函数为HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)。"
  },
  {
    "id": 449,
    "ch": "16",
    "type": "single",
    "q": "STM32的GPIO复用功能(AF)模式用于？",
    "options": [
      "外设功能引脚",
      "普通I/O",
      "模拟输入",
      "调试"
    ],
    "answer": "A",
    "explain": "复用模式将引脚连接到片上外设(USART/SPI/I2C/Timer等)。"
  },
  {
    "id": 450,
    "ch": "16",
    "type": "single",
    "q": "STM32的GPIO速度参数GPIO_SPEED_FREQ_HIGH对应频率约为？",
    "options": [
      "50MHz",
      "2MHz",
      "10MHz",
      "100MHz"
    ],
    "answer": "A",
    "explain": "LOW=2MHz, MEDIUM=12.5MHz, HIGH=50MHz, VERY_HIGH=100MHz(F4)。"
  },
  {
    "id": 451,
    "ch": "16",
    "type": "single",
    "q": "STM32F4一个GPIO端口有几位？",
    "options": [
      "16位",
      "8位",
      "32位",
      "12位"
    ],
    "answer": "A",
    "explain": "每个GPIO端口有16个引脚(PIN0-PIN15)，对应16位寄存器。"
  },
  {
    "id": 452,
    "ch": "16",
    "type": "multiple",
    "q": "STM32 GPIO的工作模式有？",
    "options": [
      "输入",
      "通用输出",
      "复用功能",
      "模拟"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "GPIO四大模式：输入、输出、复用(AF)、模拟(ADC/DAC)。"
  },
  {
    "id": 453,
    "ch": "16",
    "type": "multiple",
    "q": "STM32 GPIO输出类型有？",
    "options": [
      "推挽",
      "开漏",
      "复用推挽",
      "复用开漏"
    ],
    "answer": ["A", "B"],
    "explain": "输出类型分推挽(PP)和开漏(OD)，复用模式下也分AF_PP和AF_OD。"
  },
  {
    "id": 454,
    "ch": "16",
    "type": "multiple",
    "q": "STM32外部中断EXTI的特点有？",
    "options": [
      "支持23条中断线",
      "每条线映射到多端口同编号引脚",
      "支持上升/下降/双边沿",
      "可产生中断或事件"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "EXTI支持23线、多端口映射、多种触发沿、中断/事件两种输出。"
  },
  {
    "id": 455,
    "ch": "16",
    "type": "multiple",
    "q": "NVIC优先级分组(NVIC_PriorityGroup)的配置有？",
    "options": [
      "Group0: 0位抢占+4位子优先级",
      "Group4: 4位抢占+0位子优先级",
      "Group2: 2位抢占+2位子优先级",
      "Group1: 1位抢占+3位子优先级"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "4位优先级可分0-4位抢占，对应Group0-4。"
  },
  {
    "id": 456,
    "ch": "16",
    "type": "multiple",
    "q": "STM32 GPIO常用的上下拉配置有？",
    "options": [
      "GPIO_NOPULL",
      "GPIO_PULLUP",
      "GPIO_PULLDOWN",
      "GPIO_PULLBOTH"
    ],
    "answer": ["A", "B", "C"],
    "explain": "GPIO支持无上下拉、上拉、下拉三种配置，无双向上下拉。"
  },
  {
    "id": 457,
    "ch": "16",
    "type": "judge",
    "q": "STM32的EXTI线0只能映射到PA0一个引脚。",
    "answer": false,
    "explain": "EXTI0可映射到PA0/PB0/PC0/PD0等同编号引脚，通过SYSCFG_EXTICR1选择。"
  },
  {
    "id": 458,
    "ch": "16",
    "type": "judge",
    "q": "STM32复位后所有GPIO默认为浮空输入模式。",
    "answer": true,
    "explain": "STM32复位后GPIO默认配置为浮空输入模式，所有时钟关闭。"
  },
  {
    "id": 459,
    "ch": "16",
    "type": "judge",
    "q": "NVIC优先级数字越大，优先级越高。",
    "answer": false,
    "explain": "STM32中优先级数字越小优先级越高(0最高)。"
  },
  {
    "id": 460,
    "ch": "16",
    "type": "judge",
    "q": "STM32的EXTI可配置为事件模式，不产生中断但可唤醒WFE。",
    "answer": true,
    "explain": "EXTI可配置为中断(EVT)或事件模式，事件模式通过WFE等待，不进入ISR。"
  },
  {
    "id": 461,
    "ch": "16",
    "type": "short",
    "q": "简述STM32 GPIO的8种工作模式。",
    "answer": "8种模式：1)浮空输入(INPUT)；2)上拉输入(INPUT_PULLUP)；3)下拉输入(INPUT_PULLDOWN)；4)模拟输入(ANALOG, ADC/DAC)；5)开漏输出(OUTPUT_OD)；6)推挽输出(OUTPUT_PP)；7)复用开漏(AF_OD)；8)复用推挽(AF_PP)。输入模式用于读取外部信号，输出用于驱动外设，复用用于片上外设功能引脚，模拟用于ADC/DAC。",
    "explain": "8种模式覆盖所有应用场景。"
  },
  {
    "id": 462,
    "ch": "16",
    "type": "short",
    "q": "简述STM32外部中断EXTI的配置步骤。",
    "answer": "步骤：1)使能GPIO时钟和SYSCFG时钟(__HAL_RCC_SYSCFG_CLK_ENABLE)；2)配置GPIO为输入模式(上拉/下拉/浮空)；3)调用HAL_GPIO_Init()初始化GPIO；4)使能SYSCFG并配置EXTI线映射(SYSCFG_EXTICR)；5)配置EXTI触发沿(上升/下降/双边沿)；6)设置NVIC优先级(HAL_NVIC_SetPriority)；7)使能NVIC中断(HAL_NVIC_EnableIRQ)；8)重写HAL_GPIO_EXTI_Callback回调函数处理中断；9)在回调中清除中断标志(__HAL_GPIO_EXTI_CLEAR_IT)。",
    "explain": "EXTI配置需GPIO+SYSCFG+NVIC三步。"
  },
  {
    "id": 463,
    "ch": "16",
    "type": "short",
    "q": "解释STM32 NVIC优先级分组的概念和配置方法。",
    "answer": "STM32使用4位优先级，分为抢占优先级(Preemption)和子优先级(Subpriority)。分组：Group0=0位抢占+4位子(16级子优先级)；Group1=1+3(2级抢占8级子)；Group2=2+2(4+4)；Group3=3+1(8+2)；Group4=4+0(16级抢占)。抢占优先级高的中断可打断低的(嵌套)；同抢占不同子优先级不能嵌套，同时发生时子优先级高的先响应。配置：HAL_NVIC_SetPriorityGrouping(NVIC_PRIORITYGROUP_2)设分组；HAL_NVIC_SetPriority(IRQn, pre, sub)设各中断优先级。常用Group2(2位抢占+2位子)。",
    "explain": "优先级分组决定嵌套和响应顺序。"
  },
  {
    "id": 464,
    "ch": "17",
    "type": "single",
    "q": "STM32F4的定时器中属于高级定时器的是？",
    "options": [
      "TIM1和TIM8",
      "TIM2和TIM5",
      "TIM3和TIM4",
      "TIM6和TIM7"
    ],
    "answer": "A",
    "explain": "TIM1/TIM8为高级定时器，TIM2-5为通用定时器，TIM6/7为基本定时器。"
  },
  {
    "id": 465,
    "ch": "17",
    "type": "single",
    "q": "STM32定时器输出PWM使用的工作模式是？",
    "options": [
      "输出比较模式",
      "输入捕获模式",
      "编码器模式",
      "从模式"
    ],
    "answer": "A",
    "explain": "PWM通过输出比较(OC)模式产生，配置CCR寄存器控制占空比。"
  },
  {
    "id": 466,
    "ch": "17",
    "type": "single",
    "q": "STM32产生PWM的计数模式通常使用？",
    "options": [
      "向上计数模式",
      "向下计数",
      "中心对齐",
      "以上均可"
    ],
    "answer": "D",
    "explain": "向上/向下/中心对齐计数均可产生PWM，向上计数最常用。"
  },
  {
    "id": 467,
    "ch": "17",
    "type": "single",
    "q": "PWM的占空比由哪个寄存器控制？",
    "options": [
      "CCR(捕获/比较寄存器)",
      "ARR(自动重装)",
      "PSC(预分频)",
      "CR1"
    ],
    "answer": "A",
    "explain": "占空比=CCR/ARR(向上计数)，ARR决定周期，CCR决定占空比。"
  },
  {
    "id": 468,
    "ch": "17",
    "type": "single",
    "q": "STM32定时器的输入捕获功能用于？",
    "options": [
      "测量外部信号频率/脉宽",
      "输出PWM",
      "产生中断",
      "驱动LED"
    ],
    "answer": "A",
    "explain": "输入捕获在检测到边沿时记录计数器值，用于测量频率、周期、脉宽。"
  },
  {
    "id": 469,
    "ch": "17",
    "type": "single",
    "q": "STM32定时器的ARR(自动重装载寄存器)决定？",
    "options": [
      "定时器周期",
      "占空比",
      "分频系数",
      "中断优先级"
    ],
    "answer": "A",
    "explain": "ARR决定计数上限(周期)，PSC决定时钟分频，CCR决定比较值(占空比)。"
  },
  {
    "id": 470,
    "ch": "17",
    "type": "single",
    "q": "STM32F4高级定时器的互补输出通道有？",
    "options": [
      "CH1/CH1N等3对互补",
      "仅CH1-4",
      "CH1-8",
      "无互补"
    ],
    "answer": "A",
    "explain": "高级定时器支持CH1/CH1N、CH2/CH2N、CH3/CH3N三对互补输出，用于电机驱动。"
  },
  {
    "id": 471,
    "ch": "17",
    "type": "single",
    "q": "PWM频率计算公式是？",
    "options": [
      "f = TIM_CLK/((PSC+1)*(ARR+1))",
      "f=PSC*ARR",
      "f=TIM_CLK/ARR",
      "f=TIM_CLK*PSC"
    ],
    "answer": "A",
    "explain": "PWM频率=定时器时钟/((预分频+1)*(自动重装值+1))。"
  },
  {
    "id": 472,
    "ch": "17",
    "type": "single",
    "q": "STM32定时器中PSC(预分频器)的作用是？",
    "options": [
      "降低计数时钟频率",
      "设置PWM占空比",
      "设置中断优先级",
      "控制输出极性"
    ],
    "answer": "A",
    "explain": "PSC预分频将定时器输入时钟分频后作为计数时钟。"
  },
  {
    "id": 473,
    "ch": "17",
    "type": "single",
    "q": "STM32高级定时器TIM1的刹车输入(BKIN)用于？",
    "options": [
      "电机驱动故障保护",
      "PWM输出",
      "频率测量",
      "编码器接口"
    ],
    "answer": "A",
    "explain": "BKIN刹车输入检测到有效电平时关闭PWM输出，保护功率器件。"
  },
  {
    "id": 474,
    "ch": "17",
    "type": "multiple",
    "q": "STM32定时器的类型有？",
    "options": [
      "高级定时器(TIM1/8)",
      "通用定时器(TIM2-5)",
      "基本定时器(TIM6/7)",
      "专用定时器(TIM9-14)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STM32F4含高级/通用/基本/专用多类定时器。"
  },
  {
    "id": 475,
    "ch": "17",
    "type": "multiple",
    "q": "STM32通用定时器的工作模式有？",
    "options": [
      "输入捕获",
      "输出比较",
      "PWM生成",
      "编码器接口"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "通用定时器支持捕获/比较/PWM/编码器等多种模式。"
  },
  {
    "id": 476,
    "ch": "17",
    "type": "multiple",
    "q": "PWM输出的关键参数有？",
    "options": [
      "频率",
      "占空比",
      "分辨率",
      "极性"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "PWM由频率(ARR/PSC)、占空比(CCR)、分辨率(ARR位数)、极性(OC极性)决定。"
  },
  {
    "id": 477,
    "ch": "17",
    "type": "multiple",
    "q": "STM32定时器输入捕获可测量的信号参数有？",
    "options": [
      "频率",
      "占空比",
      "脉冲宽度",
      "相位差"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "输入捕获可测频率、占空比、脉宽，双通道可测相位差。"
  },
  {
    "id": 478,
    "ch": "17",
    "type": "multiple",
    "q": "高级定时器相比通用定时器的增强特性有？",
    "options": [
      "互补输出",
      "死区时间插入",
      "刹车输入保护",
      "重复计数器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "高级定时器支持互补输出、死区、刹车、重复计数器，适合电机控制。"
  },
  {
    "id": 479,
    "ch": "17",
    "type": "judge",
    "q": "STM32基本定时器TIM6/TIM7不能产生PWM输出。",
    "answer": true,
    "explain": "基本定时器只有定时中断功能，无捕获/比较通道，不能产生PWM。"
  },
  {
    "id": 480,
    "ch": "17",
    "type": "judge",
    "q": "PWM的分辨率由ARR的值决定，ARR越大分辨率越高。",
    "answer": true,
    "explain": "分辨率=1/(ARR+1)，ARR越大占空比调节越精细。"
  },
  {
    "id": 481,
    "ch": "17",
    "type": "judge",
    "q": "STM32定时器的输入捕获只能捕获上升沿。",
    "answer": false,
    "explain": "输入捕获可配置为上升沿/下降沿/双边沿捕获。"
  },
  {
    "id": 482,
    "ch": "17",
    "type": "judge",
    "q": "高级定时器的死区时间是为了防止上下桥臂同时导通。",
    "answer": true,
    "explain": "死区时间在互补PWM切换间插入延时，防止功率管直通短路。"
  },
  {
    "id": 483,
    "ch": "17",
    "type": "short",
    "q": "简述STM32定时器产生PWM的原理和配置步骤。",
    "answer": "原理：定时器在向上计数模式下，计数值从0递增到ARR；当计数值<CCR时输出一种电平，>=CCR时输出相反电平，从而产生方波。频率=TIM_CLK/((PSC+1)*(ARR+1))，占空比=CCR/(ARR+1)。配置步骤：1)使能定时器时钟；2)配置定时器基础参数(PSC/ARR/计数模式)；3)配置输出比较通道(OC模式为PWM1/PWM2, CCR值, 极性)；4)使能定时器主输出(高级定时器需MOE=1)；5)启动PWM输出HAL_TIM_PWM_Start()。",
    "explain": "PWM原理是计数器与比较寄存器配合。"
  },
  {
    "id": 484,
    "ch": "17",
    "type": "short",
    "q": "计算STM32F407用TIM1产生20kHz PWM的PSC和ARR值(84MHz时钟)。",
    "answer": "TIM1挂载APB2(84MHz)。频率=TIM_CLK/((PSC+1)*(ARR+1))=20000。设PSC=0(不分频)，则ARR+1=84000000/20000=4200，ARR=4199。或PSC=83(84分频=1MHz)，ARR+1=1000000/20000=50，ARR=49(分辨率较低)。推荐PSC=0,ARR=4199，占空比调节范围0-4199，分辨率约0.024%。设CCR=2100得到50%占空比。",
    "explain": "PSC和ARR需平衡频率和分辨率。"
  },
  {
    "id": 485,
    "ch": "17",
    "type": "short",
    "q": "简述STM32定时器输入捕获测量信号频率的原理。",
    "answer": "原理：1)配置定时器输入捕获为上升沿触发；2)两次上升沿之间计数差即为信号周期；3)频率=定时器时钟/计数值差。实现：使用两个捕获通道或DMA方式。方法一：配置CH1上升沿捕获，在中断中读取CCR值，两次捕获差值x时钟周期=信号周期。方法二：配置从模式为复位模式(上升沿复位计数器)，每次捕获自动重置，CCR直接为周期值。注意：高频信号需用预分频避免溢出，低频信号需增大ARR或使用预分频输入。",
    "explain": "输入捕获通过测量周期计算频率。"
  },
  {
    "id": 486,
    "ch": "18",
    "type": "single",
    "q": "HAL库中阻塞式串口发送函数是？",
    "options": [
      "HAL_UART_Transmit()",
      "HAL_UART_Transmit_IT()",
      "HAL_UART_Transmit_DMA()",
      "HAL_UART_Send()"
    ],
    "answer": "A",
    "explain": "HAL_UART_Transmit()阻塞发送，_IT中断，_DMA为DMA方式。"
  },
  {
    "id": 487,
    "ch": "18",
    "type": "single",
    "q": "STM32中printf重定向需要重写的函数是？",
    "options": [
      "fputc()",
      "printf()",
      "main()",
      "HAL_UART_Transmit()"
    ],
    "answer": "A",
    "explain": "重定向printf需重写fputc()函数，通过UART发送字符。"
  },
  {
    "id": 488,
    "ch": "18",
    "type": "single",
    "q": "STM32 HAL库串口初始化结构体UART_InitTypeDef的字段不包括？",
    "options": [
      "波特率",
      "数据位",
      "停止位",
      "GPIO速度"
    ],
    "answer": "D",
    "explain": "UART_InitTypeDef含BaudRate/WordLength/StopBits/Parity/Mode/HwFlowCtl，无GPIO速度。"
  },
  {
    "id": 489,
    "ch": "18",
    "type": "single",
    "q": "STM32 USART的波特率9600表示每秒传输？",
    "options": [
      "约9600位",
      "9600字节",
      "9600帧",
      "9600Hz"
    ],
    "answer": "A",
    "explain": "波特率9600表示每秒传输9600位(bit)，实际有效字节需扣除起止位。"
  },
  {
    "id": 490,
    "ch": "18",
    "type": "single",
    "q": "STM32串口空闲中断(IDLE)的用途是？",
    "options": [
      "接收变长数据",
      "发送完成",
      "波特率错误",
      "奇偶校验错误"
    ],
    "answer": "A",
    "explain": "空闲中断在接收完一帧后总线空闲时触发，用于判断变长数据帧结束。"
  },
  {
    "id": 491,
    "ch": "18",
    "type": "single",
    "q": "STM32 USART的DMA接收方式中，数据直接从？",
    "options": [
      "USART->DR到内存",
      "内存到USART->DR",
      "USART到Flash",
      "内存到内存"
    ],
    "answer": "A",
    "explain": "DMA接收将USART数据寄存器(DR)数据直接搬运到内存缓冲区，不需CPU干预。"
  },
  {
    "id": 492,
    "ch": "18",
    "type": "single",
    "q": "STM32F4的USART1挂载在哪个总线？",
    "options": [
      "APB2(最高84MHz)",
      "APB1(42MHz)",
      "AHB(168MHz)",
      "无固定总线"
    ],
    "answer": "A",
    "explain": "USART1/6在APB2(84MHz)，USART2/3/4/5在APB1(42MHz)，影响最大波特率。"
  },
  {
    "id": 493,
    "ch": "18",
    "type": "single",
    "q": "HAL_UART_Receive_IT()接收完成后调用的回调函数是？",
    "options": [
      "HAL_UART_RxCpltCallback()",
      "HAL_UART_RxCallback()",
      "HAL_UART_IRQHandler()",
      "HAL_UART_ErrorCallback()"
    ],
    "answer": "A",
    "explain": "_IT接收完成触发HAL_UART_RxCpltCallback，DMA完成同样调用此回调。"
  },
  {
    "id": 494,
    "ch": "18",
    "type": "single",
    "q": "STM32串口通信中奇偶校验设置为EVEN表示？",
    "options": [
      "偶校验",
      "奇校验",
      "无校验",
      "硬件校验"
    ],
    "answer": "A",
    "explain": "EVEN=偶校验，ODD=奇校验，NONE=无校验。"
  },
  {
    "id": 495,
    "ch": "18",
    "type": "single",
    "q": "STM32 USART初始化中数据位9位时，奇偶校验位占用？",
    "options": [
      "数据位第9位",
      "额外1位",
      "停止位",
      "无影响"
    ],
    "answer": "A",
    "explain": "M=1(9位数据)且使能奇偶校验时，校验位占用第9位，实际数据7位。"
  },
  {
    "id": 496,
    "ch": "18",
    "type": "multiple",
    "q": "STM32 USART的三种收发方式有？",
    "options": [
      "阻塞式",
      "中断式",
      "DMA式",
      "查询式"
    ],
    "answer": ["A", "B", "C"],
    "explain": "HAL提供阻塞/中断/DMA三种收发方式，查询式即阻塞式。"
  },
  {
    "id": 497,
    "ch": "18",
    "type": "multiple",
    "q": "STM32 printf重定向的步骤包括？",
    "options": [
      "重写fputc函数",
      "在fputc中调用HAL_UART_Transmit",
      "在工程中勾选Use MicroLIB",
      "包含stdio.h"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "重定向printf需重写fputc+HAL发送+MicroLIB+包含头文件。"
  },
  {
    "id": 498,
    "ch": "18",
    "type": "multiple",
    "q": "STM32串口接收变长数据的常用方法有？",
    "options": [
      "空闲中断(IDLE)",
      "固定帧头帧尾+超时",
      "DMA+空闲中断",
      "硬件CRC校验"
    ],
    "answer": ["A", "B", "C"],
    "explain": "空闲中断、帧头帧尾、DMA+IDLE是变长数据接收常用方法。"
  },
  {
    "id": 499,
    "ch": "18",
    "type": "multiple",
    "q": "USART初始化参数包括？",
    "options": [
      "波特率",
      "数据位",
      "停止位",
      "校验位"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "UART_InitTypeDef含BaudRate/WordLength/StopBits/Parity等参数。"
  },
  {
    "id": 500,
    "ch": "18",
    "type": "multiple",
    "q": "STM32串口通信中常见错误有？",
    "options": [
      "波特率不匹配",
      "TX/RX接反",
      "电平不匹配(3.3V/5V)",
      "DMA配置错误"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "以上均为串口通信常见问题。"
  },
  {
    "id": 501,
    "ch": "18",
    "type": "judge",
    "q": "STM32串口使用DMA接收时CPU完全不参与数据搬运。",
    "answer": true,
    "explain": "DMA直接在外设和内存间搬运数据，CPU不参与。"
  },
  {
    "id": 502,
    "ch": "18",
    "type": "judge",
    "q": "HAL_UART_Transmit()发送时如果超时未发送完成会返回HAL_TIMEOUT。",
    "answer": true,
    "explain": "HAL函数有超时参数，超时返回HAL_TIMEOUT。"
  },
  {
    "id": 503,
    "ch": "18",
    "type": "judge",
    "q": "STM32的USART和UART功能完全相同。",
    "answer": false,
    "explain": "USART支持同步模式(含时钟SCLK)，UART仅异步模式，功能不完全相同。"
  },
  {
    "id": 504,
    "ch": "18",
    "type": "judge",
    "q": "使用printf重定向时必须勾选Use MicroLIB选项。",
    "answer": false,
    "explain": "MicroLIB是可选的，不勾选时需避免半主机模式(添加#pragma import(__use_no_semihosting)等)。"
  },
  {
    "id": 505,
    "ch": "18",
    "type": "short",
    "q": "编写STM32 printf重定向的完整代码。",
    "answer": "代码：#include <stdio.h>; #ifdef __GNUC__; #define PUTCHAR_PROTOTYPE int __io_putchar(int ch); #else; #define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f); #endif; PUTCHAR_PROTOTYPE { HAL_UART_Transmit(&huart1, (uint8_t*)&ch, 1, HAL_MAX_DELAY); return ch; }。在Keil中还需在Options->Target勾选Use MicroLIB。",
    "explain": "printf重定向核心是重写fputc。"
  },
  {
    "id": 506,
    "ch": "18",
    "type": "short",
    "q": "简述STM32使用DMA+空闲中断接收变长数据的方案。",
    "answer": "方案：1)初始化UART和DMA(DMA_RX通道，外设到内存，循环模式)；2)启动HAL_UART_Receive_DMA(&huart, rx_buf, BUF_SIZE)；3)使能UART空闲中断__HAL_UART_ENABLE_IT(&huart, UART_IT_IDLE)；4)在UART中断中检测IDLE标志：if(__HAL_UART_GET_FLAG(&huart, UART_FLAG_IDLE)){清除标志; 计算接收长度=BUF_SIZE-__HAL_DMA_GET_COUNTER(hdma_rx); 处理数据; 重启DMA接收;}。优点：接收任意长度数据，CPU不参与搬运，效率高。",
    "explain": "DMA+IDLE是变长数据接收最佳方案。"
  },
  {
    "id": 507,
    "ch": "18",
    "type": "short",
    "q": "简述STM32串口波特率误差对通信的影响及允许范围。",
    "answer": "影响：波特率误差导致采样点偏移，累积后采样到错误数据位。允许范围：误差应小于+-2.5%(8数据位+1停止位时)，即每帧10位的采样误差不超过半个位周期。常见误差来源：1)晶振频率偏差(12MHz晶振在9600波特率误差约0.16%)；2)整除误差(12MHz/9600不为整数)；3)波特率寄存器四舍五入。解决：使用11.0592MHz晶振(标准波特率误差为0)或使用内部HSI校准。",
    "explain": "波特率误差需控制在2.5%以内。"
  },
  {
    "id": 508,
    "ch": "19",
    "type": "single",
    "q": "STM32F4的ADC分辨率是？",
    "options": [
      "12位",
      "8位",
      "10位",
      "16位"
    ],
    "answer": "A",
    "explain": "STM32F4 ADC为12位，可配置6/8/10/12位分辨率。"
  },
  {
    "id": 509,
    "ch": "19",
    "type": "single",
    "q": "STM32F4 ADC的转换时间最短约为？",
    "options": [
      "3us(2.4MSPS)",
      "10us",
      "1ms",
      "100ns"
    ],
    "answer": "A",
    "explain": "12位分辨率下最短转换时间约3us(ADCCLK=36MHz, 12+采样周期)。"
  },
  {
    "id": 510,
    "ch": "19",
    "type": "single",
    "q": "STM32F4有几个ADC？",
    "options": [
      "3个(ADC1/2/3)",
      "1个",
      "2个",
      "4个"
    ],
    "answer": "A",
    "explain": "STM32F407有3个独立ADC，可独立或双重/三重模式使用。"
  },
  {
    "id": 511,
    "ch": "19",
    "type": "single",
    "q": "STM32 ADC的转换模式中单次转换是指？",
    "options": [
      "触发一次转换一次",
      "连续转换",
      "扫描多通道",
      "DMA传输"
    ],
    "answer": "A",
    "explain": "单次转换：每次触发转换一次后停止；连续转换：自动重复转换。"
  },
  {
    "id": 512,
    "ch": "19",
    "type": "single",
    "q": "HAL库启动ADC转换的函数是？",
    "options": [
      "HAL_ADC_Start()",
      "HAL_ADC_Read()",
      "HAL_ADC_Get()",
      "HAL_ADC_Convert()"
    ],
    "answer": "A",
    "explain": "HAL_ADC_Start()启动转换，HAL_ADC_PollForConversion()等待完成，HAL_ADC_GetValue()读取结果。"
  },
  {
    "id": 513,
    "ch": "19",
    "type": "single",
    "q": "STM32 ADC的参考电压(VREF+)通常是？",
    "options": [
      "3.3V",
      "5V",
      "1.2V",
      "2.5V"
    ],
    "answer": "A",
    "explain": "STM32F4 ADC参考电压VREF+通常接VDDA=3.3V，转换值=输入电压/3.3x4095。"
  },
  {
    "id": 514,
    "ch": "19",
    "type": "single",
    "q": "STM32F4 DAC的分辨率是？",
    "options": [
      "12位",
      "8位",
      "10位",
      "16位"
    ],
    "answer": "A",
    "explain": "STM32F4有2路12位DAC，可输出模拟电压。"
  },
  {
    "id": 515,
    "ch": "19",
    "type": "single",
    "q": "ADC转换值0对应输入电压是？",
    "options": [
      "0V",
      "3.3V",
      "1.65V",
      "VREF/2"
    ],
    "answer": "A",
    "explain": "ADC线性转换：0V->0，VREF+(3.3V)->4095(12位)。"
  },
  {
    "id": 516,
    "ch": "19",
    "type": "single",
    "q": "STM32 ADC的扫描模式(Scan Mode)用于？",
    "options": [
      "多通道自动扫描",
      "单通道重复",
      "提高精度",
      "降低功耗"
    ],
    "answer": "A",
    "explain": "扫描模式自动按序列转换多个通道，配合DMA可自动存储结果。"
  },
  {
    "id": 517,
    "ch": "19",
    "type": "single",
    "q": "STM32 ADC的采样时间(Sampling Time)影响？",
    "options": [
      "转换精度和速度",
      "参考电压",
      "通道数",
      "分辨率"
    ],
    "answer": "A",
    "explain": "采样时间越长，源阻抗允许越大，精度越高但速度越慢。"
  },
  {
    "id": 518,
    "ch": "19",
    "type": "multiple",
    "q": "STM32F4 ADC的特点有？",
    "options": [
      "12位分辨率",
      "3个独立ADC",
      "支持双重/三重模式",
      "最高2.4MSPS"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "F4 ADC为12位/3个/支持多重模式/2.4MSPS。"
  },
  {
    "id": 519,
    "ch": "19",
    "type": "multiple",
    "q": "STM32 ADC的工作模式有？",
    "options": [
      "单次转换",
      "连续转换",
      "扫描模式",
      "间断模式"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ADC支持单次/连续/扫描/间断四种模式。"
  },
  {
    "id": 520,
    "ch": "19",
    "type": "multiple",
    "q": "STM32 ADC触发转换的源有？",
    "options": [
      "软件触发",
      "定时器触发",
      "外部中断EXTI",
      "ADC自身"
    ],
    "answer": ["A", "B", "C"],
    "explain": "ADC可由软件/定时器TRGO/外部EXTI线触发，无ADC自身触发。"
  },
  {
    "id": 521,
    "ch": "19",
    "type": "multiple",
    "q": "STM32 DAC的特点有？",
    "options": [
      "12位分辨率",
      "2路独立输出",
      "支持DMA",
      "可产生波形"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DAC为12位/2路/支持DMA/可产生三角波噪声波。"
  },
  {
    "id": 522,
    "ch": "19",
    "type": "multiple",
    "q": "提高ADC采样精度的方法有？",
    "options": [
      "增加采样时间",
      "软件多次采样平均",
      "硬件滤波",
      "校准ADC"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "增加采样时间、软件滤波、硬件RC滤波、ADC校准均可提高精度。"
  },
  {
    "id": 523,
    "ch": "19",
    "type": "judge",
    "q": "STM32 ADC的输入电压不能超过VREF+。",
    "answer": true,
    "explain": "ADC输入电压范围为0~VREF+(通常3.3V)，超过可能损坏芯片。"
  },
  {
    "id": 524,
    "ch": "19",
    "type": "judge",
    "q": "STM32 DAC输出可以直接驱动扬声器。",
    "answer": false,
    "explain": "DAC输出电流能力有限(约数mA)，驱动扬声器需外接功放。"
  },
  {
    "id": 525,
    "ch": "19",
    "type": "judge",
    "q": "STM32 ADC使用DMA传输可以自动采集多通道数据到内存。",
    "answer": true,
    "explain": "ADC扫描模式+DMA可自动将多通道转换结果存入内存数组。"
  },
  {
    "id": 526,
    "ch": "19",
    "type": "judge",
    "q": "ADC采样时间设置为3个ADC时钟周期时仍然能保证12位精度。",
    "answer": false,
    "explain": "12位精度需足够采样时间(通常>=15个周期)，3周期精度不足。"
  },
  {
    "id": 527,
    "ch": "19",
    "type": "short",
    "q": "简述STM32 ADC的配置步骤和单通道采样代码。",
    "answer": "步骤：1)使能GPIO和ADC时钟；2)配置GPIO为模拟模式(GPIO_MODE_ANALOG)；3)配置ADC通道(通道号、序列、采样时间)；4)配置ADC参数(分辨率、对齐、扫描模式、连续模式、触发源)；5)HAL_ADC_Init()初始化；6)HAL_ADC_ConfigChannel()配置通道；7)HAL_ADC_Start()启动；8)HAL_ADC_PollForConversion()等待完成；9)HAL_ADC_GetValue()读取结果。计算电压=ADC值x3.3/4095。",
    "explain": "ADC配置需GPIO+ADC参数+通道设置。"
  },
  {
    "id": 528,
    "ch": "19",
    "type": "short",
    "q": "简述STM32 ADC多通道DMA采集的方案。",
    "answer": "方案：1)配置ADC为扫描模式(ScanMode=ENABLE)、连续转换(ContinuousMode=ENABLE)；2)设置通道序列(如CH0,CH1,CH2)；3)配置DMA(外设到内存、循环模式、数据宽度16位)；4)启动HAL_ADC_Start_DMA(&hadc, buffer, 3)；5)DMA自动将3个通道转换结果循环写入buffer数组。注意：buffer[0]=CH0, buffer[1]=CH1, buffer[2]=CH2(按序列顺序)；DMA循环模式自动覆盖旧数据。",
    "explain": "ADC+DMA实现多通道自动采集。"
  },
  {
    "id": 529,
    "ch": "19",
    "type": "short",
    "q": "简述STM32 DAC产生正弦波的方案。",
    "answer": "方案：1)预计算正弦表——用Python生成一个完整周期的正弦波采样值数组(如256点)，值范围0~4095(12位DAC)；2)配置DAC输出通道(如DAC_OUT1=PA4)；3)配置定时器产生固定频率触发(TIMER触发DAC)；4)配置DAC为DMA模式(正弦表数据->DAC_DHR12R1)；5)启动HAL_DAC_Start_DMA()和定时器。输出频率=触发频率/点数。优点：不占用CPU，频率可调。",
    "explain": "DAC+DMA+定时器产生正弦波。"
  },
  {
    "id": 530,
    "ch": "20",
    "type": "single",
    "q": "HAL库中SPI发送和接收数据的函数是？",
    "options": [
      "HAL_SPI_TransmitReceive()",
      "HAL_SPI_Write()",
      "HAL_SPI_Read()",
      "HAL_SPI_Transfer()"
    ],
    "answer": "A",
    "explain": "HAL_SPI_TransmitReceive()同时发送和接收，SPI全双工。"
  },
  {
    "id": 531,
    "ch": "20",
    "type": "single",
    "q": "SPI总线的CPOL=1,CPHA=1表示？",
    "options": [
      "模式3(空闲高电平,第二边沿采样)",
      "模式0",
      "模式1",
      "模式2"
    ],
    "answer": "A",
    "explain": "CPOL=1空闲高电平，CPHA=1第二边沿(下降沿)采样=模式3。"
  },
  {
    "id": 532,
    "ch": "20",
    "type": "single",
    "q": "HAL_I2C_Master_Transmit()的参数中Device Address的格式是？",
    "options": [
      "7位地址左移1位(含读写位)",
      "7位地址",
      "8位地址",
      "16位地址"
    ],
    "answer": "A",
    "explain": "HAL库I2C地址需左移1位(如0x50<<1=0xA0)，最低位为读写位由库自动设。"
  },
  {
    "id": 533,
    "ch": "20",
    "type": "single",
    "q": "SPI总线标准4线制中用于主设备输出从设备输入的是？",
    "options": [
      "MOSI",
      "MISO",
      "SCK",
      "CS"
    ],
    "answer": "A",
    "explain": "MOSI=Master Out Slave In(主出从入)，MISO=主入从出。"
  },
  {
    "id": 534,
    "ch": "20",
    "type": "single",
    "q": "I2C总线标准速率是？",
    "options": [
      "100kHz(标准)",
      "1MHz",
      "10MHz",
      "100MHz"
    ],
    "answer": "A",
    "explain": "标准模式100kHz，快速模式400kHz，快速模式+1MHz，高速模式3.4MHz。"
  },
  {
    "id": 535,
    "ch": "20",
    "type": "single",
    "q": "HAL库I2C读取AT24C02某地址数据的函数是？",
    "options": [
      "HAL_I2C_Mem_Read()",
      "HAL_I2C_Master_Receive()",
      "HAL_I2C_Read()",
      "HAL_I2C_Mem_Write()"
    ],
    "answer": "A",
    "explain": "HAL_I2C_Mem_Read()用于读取带内部地址的器件(如EEPROM)，自动发送器件地址+内存地址。"
  },
  {
    "id": 536,
    "ch": "20",
    "type": "single",
    "q": "SPI总线的片选信号CS通常是？",
    "options": [
      "低电平有效",
      "高电平有效",
      "边沿触发",
      "无有效电平"
    ],
    "answer": "A",
    "explain": "多数SPI器件CS低电平有效，选中从设备。"
  },
  {
    "id": 537,
    "ch": "20",
    "type": "single",
    "q": "I2C总线的应答信号ACK是？",
    "options": [
      "接收方拉低SDA",
      "发送方拉低SDA",
      "主机拉低SCL",
      "从机拉低SCL"
    ],
    "answer": "A",
    "explain": "ACK由接收方在第9个时钟拉低SDA表示应答，NACK为高电平。"
  },
  {
    "id": 538,
    "ch": "20",
    "type": "single",
    "q": "STM32 SPI的数据帧大小可配置为？",
    "options": [
      "8位或16位",
      "仅8位",
      "仅16位",
      "32位"
    ],
    "answer": "A",
    "explain": "STM32F4 SPI支持8位或16位数据帧。"
  },
  {
    "id": 539,
    "ch": "20",
    "type": "single",
    "q": "I2C总线上起始信号后第一个字节是？",
    "options": [
      "器件地址+读写位",
      "寄存器地址",
      "数据",
      "校验"
    ],
    "answer": "A",
    "explain": "I2C起始后发送7位器件地址+1位读写方向。"
  },
  {
    "id": 540,
    "ch": "20",
    "type": "multiple",
    "q": "SPI总线的四种工作模式(CPOL/CPHA组合)有？",
    "options": [
      "模式0(0,0)",
      "模式1(0,1)",
      "模式2(1,0)",
      "模式3(1,1)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "CPOL和CPHA组合产生4种SPI模式。"
  },
  {
    "id": 541,
    "ch": "20",
    "type": "multiple",
    "q": "I2C总线的特点有？",
    "options": [
      "两线制(SDA+SCL)",
      "支持多主设备",
      "7位/10位地址",
      "开漏输出需上拉"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "I2C两线、多主、地址灵活、开漏需上拉。"
  },
  {
    "id": 542,
    "ch": "20",
    "type": "multiple",
    "q": "SPI总线的特点有？",
    "options": [
      "全双工",
      "同步通信",
      "主从模式",
      "需要CS片选"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "SPI全双工同步、主从结构、需片选。"
  },
  {
    "id": 543,
    "ch": "20",
    "type": "multiple",
    "q": "HAL库I2C的通信函数有？",
    "options": [
      "HAL_I2C_Master_Transmit()",
      "HAL_I2C_Master_Receive()",
      "HAL_I2C_Mem_Write()",
      "HAL_I2C_Mem_Read()"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "HAL I2C提供主收发、Mem读写(带内部地址)等函数。"
  },
  {
    "id": 544,
    "ch": "20",
    "type": "multiple",
    "q": "SPI和I2C总线的区别有？",
    "options": [
      "SPI全双工I2C半双工",
      "SPI需CS I2C用地址",
      "SPI速度通常更快",
      "I2C引脚更少"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "SPI全双工需CS速度快；I2C半双工用地址引脚少。"
  },
  {
    "id": 545,
    "ch": "20",
    "type": "judge",
    "q": "I2C总线上SDA和SCL线都需要接上拉电阻。",
    "answer": true,
    "explain": "I2C开漏输出，SDA和SCL都需外接上拉(通常4.7K)。"
  },
  {
    "id": 546,
    "ch": "20",
    "type": "judge",
    "q": "SPI总线可以在同一总线上挂载多个从设备。",
    "answer": true,
    "explain": "SPI通过多个CS信号选择不同从设备，共享SCK/MOSI/MISO。"
  },
  {
    "id": 547,
    "ch": "20",
    "type": "judge",
    "q": "HAL_I2C_Mem_Read()适合读取EEPROM这种带内部寄存器地址的器件。",
    "answer": true,
    "explain": "Mem_Read自动发送器件地址+内部地址+读取，适合EEPROM/Sensor。"
  },
  {
    "id": 548,
    "ch": "20",
    "type": "judge",
    "q": "I2C总线的起始信号和停止信号都在SCL为高电平时产生。",
    "answer": true,
    "explain": "起始: SCL高时SDA下降沿；停止: SCL高时SDA上升沿。"
  },
  {
    "id": 549,
    "ch": "20",
    "type": "short",
    "q": "比较SPI和I2C总线的主要区别。",
    "answer": "区别：1)引脚——SPI需4线(MOSI/MISO/SCK/CS)或多CS扩展，I2C仅2线(SDA/SCL)；2)通信——SPI全双工，I2C半双工；3)速度——SPI可达数十MHz，I2C标准100kHz/快速400kHz/高速3.4MHz；4)寻址——SPI用CS硬件片选，I2C用7/10位地址软件寻址；5)拓扑——SPI主从星型，I2C多主多从总线；6)复杂度——SPI简单无应答机制，I2C有ACK/NACK应答；7)适用场景——SPI高速大数据量(Flash/LCD)，I2C低速多器件挂载(Sensor/EEPROM)。",
    "explain": "SPI重速度I2C重灵活性。"
  },
  {
    "id": 550,
    "ch": "20",
    "type": "short",
    "q": "简述使用HAL库I2C读取AT24C02 EEPROM指定地址数据的步骤。",
    "answer": "步骤：1)初始化I2C(I2C_InitTypeDef: ClockSpeed=100000, OwnAddress, 7位地址模式)；2)HAL_I2C_Init()；3)调用HAL_I2C_Mem_Read(&hi2c, DevAddress=0xA0(0x50<<1), MemAddress=目标地址, MemAddSize=I2C_MEMADD_SIZE_8BIT, pData=缓冲区, Size=读取字节数, Timeout=1000)；4)函数内部自动完成：起始->器件地址+写->内存地址->重启->器件地址+读->读取数据->停止。",
    "explain": "HAL_I2C_Mem_Read封装了EEPROM读取流程。"
  },
  {
    "id": 551,
    "ch": "20",
    "type": "short",
    "q": "简述SPI四种工作模式的区别及选择原则。",
    "answer": "四种模式由CPOL(时钟极性)和CPHA(时钟相位)组合：模式0(CPOL=0,CPHA=0): 空闲低电平,第一边沿(上升沿)采样；模式1(0,1): 空闲低,第二边沿(下降沿)采样；模式2(1,0): 空闲高,第一边沿(下降沿)采样；模式3(1,1): 空闲高,第二边沿(上升沿)采样。选择原则：必须与从设备数据手册一致。常见器件：W25Q64 Flash用模式0或3，LCD OLED常用模式0或3。配置时在CubeMX或SPI_InitTypeDef中设CLKPolarity和CLKPhase。",
    "explain": "SPI模式必须与从设备匹配。"
  },
  {
    "id": 552,
    "ch": "21",
    "type": "single",
    "q": "DMA的全称是？",
    "options": [
      "Direct Memory Access",
      "Data Memory Access",
      "Direct Memory Allocation",
      "Data Management Access"
    ],
    "answer": "A",
    "explain": "DMA=直接存储器访问，不需CPU干预搬运数据。"
  },
  {
    "id": 553,
    "ch": "21",
    "type": "single",
    "q": "STM32F4有几个DMA控制器？",
    "options": [
      "2个(DMA1和DMA2)",
      "1个",
      "3个",
      "4个"
    ],
    "answer": "A",
    "explain": "STM32F407有DMA1(8流)和DMA2(8流)两个DMA控制器。"
  },
  {
    "id": 554,
    "ch": "21",
    "type": "single",
    "q": "STM32 DMA数据传输方向不包括？",
    "options": [
      "外设到内存",
      "内存到外设",
      "内存到内存",
      "外设到外设"
    ],
    "answer": "D",
    "explain": "DMA支持外设到内存、内存到外设和内存到内存，不支持外设到外设直接传输。"
  },
  {
    "id": 555,
    "ch": "21",
    "type": "single",
    "q": "STM32 RTC使用的时钟源通常是？",
    "options": [
      "LSE(32.768kHz晶振)",
      "HSE",
      "HSI",
      "MSI"
    ],
    "answer": "A",
    "explain": "RTC通常用LSE 32.768kHz外部晶振，精度高，低功耗模式下持续运行。"
  },
  {
    "id": 556,
    "ch": "21",
    "type": "single",
    "q": "STM32 RTC的备份寄存器(BKP)在什么条件下会丢失数据？",
    "options": [
      "VBAT断电",
      "复位",
      "掉电模式",
      "空闲模式"
    ],
    "answer": "A",
    "explain": "RTC和BKP由VBAT域供电，主电源断开时VBAT保持，VBAT也断电才丢失。"
  },
  {
    "id": 557,
    "ch": "21",
    "type": "single",
    "q": "HAL库启动DMA传输的函数是？",
    "options": [
      "HAL_DMA_Start()",
      "HAL_DMA_Transmit()",
      "HAL_DMA_Begin()",
      "HAL_DMA_Send()"
    ],
    "answer": "A",
    "explain": "HAL_DMA_Start()启动DMA传输(底层)，外设专用函数如HAL_UART_Transmit_DMA()封装了DMA启动。"
  },
  {
    "id": 558,
    "ch": "21",
    "type": "single",
    "q": "STM32 DMA的传输模式有？",
    "options": [
      "正常模式(单次)和循环模式",
      "仅正常",
      "仅循环",
      "突发模式"
    ],
    "answer": "A",
    "explain": "正常模式传完停止，循环模式自动重复(适合连续ADC/UART采集)。"
  },
  {
    "id": 559,
    "ch": "21",
    "type": "single",
    "q": "STM32F4的DMA流(DMA Stream)每个控制器有？",
    "options": [
      "8个流",
      "4个",
      "16个",
      "2个"
    ],
    "answer": "A",
    "explain": "每个DMA控制器有8个流(Stream0-7)，每个流可选择7个通道请求源。"
  },
  {
    "id": 560,
    "ch": "21",
    "type": "single",
    "q": "RTC的BCD格式时间数据中0x59表示？",
    "options": [
      "59秒",
      "59分钟",
      "95秒",
      "0x59=89秒"
    ],
    "answer": "A",
    "explain": "BCD格式每4位表示一位十进制数，0x59=十进制59。"
  },
  {
    "id": 561,
    "ch": "21",
    "type": "single",
    "q": "STM32 RTC闹钟功能可以触发？",
    "options": [
      "中断唤醒",
      "DMA传输",
      "ADC转换",
      "SPI通信"
    ],
    "answer": "A",
    "explain": "RTC闹钟可触发中断，在低功耗模式下唤醒MCU。"
  },
  {
    "id": 562,
    "ch": "21",
    "type": "multiple",
    "q": "DMA数据传输方向有？",
    "options": [
      "外设到内存(PERIPH_TO_MEMORY)",
      "内存到外设(MEMORY_TO_PERIPH)",
      "内存到内存(MEMORY_TO_MEMORY)",
      "外设到外设"
    ],
    "answer": ["A", "B", "C"],
    "explain": "DMA支持三种方向，不支持外设到外设。"
  },
  {
    "id": 563,
    "ch": "21",
    "type": "multiple",
    "q": "STM32 RTC的特点有？",
    "options": [
      "日历功能(年月日时分秒)",
      "闹钟功能",
      "唤醒功能",
      "备份寄存器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "RTC含日历、闹钟A/B、唤醒、备份寄存器。"
  },
  {
    "id": 564,
    "ch": "21",
    "type": "multiple",
    "q": "DMA的优先级设置有？",
    "options": [
      "Very High",
      "High",
      "Medium",
      "Low"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DMA优先级分4级。"
  },
  {
    "id": 565,
    "ch": "21",
    "type": "multiple",
    "q": "使用DMA的优势有？",
    "options": [
      "减轻CPU负担",
      "提高数据吞吐量",
      "支持大批量传输",
      "降低功耗"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DMA减少CPU干预、提高效率、支持批量、降低功耗。"
  },
  {
    "id": 566,
    "ch": "21",
    "type": "multiple",
    "q": "RTC可用的时钟源有？",
    "options": [
      "LSE(32.768kHz)",
      "LSI(内部RC~32kHz)",
      "HSE分频",
      "MSI"
    ],
    "answer": ["A", "B", "C"],
    "explain": "RTC可选LSE/LSI/HSE分频作为时钟源，LSE精度最高。"
  },
  {
    "id": 567,
    "ch": "21",
    "type": "judge",
    "q": "STM32 DMA内存到内存传输不需要外设请求信号。",
    "answer": true,
    "explain": "内存到内存模式由软件触发，不需外设请求，DMA自动搬运。"
  },
  {
    "id": 568,
    "ch": "21",
    "type": "judge",
    "q": "RTC的LSE晶振在主电源断电后由VBAT供电继续运行。",
    "answer": true,
    "explain": "RTC域由VBAT供电，主电源断开时VBAT保持RTC运行。"
  },
  {
    "id": 569,
    "ch": "21",
    "type": "judge",
    "q": "DMA循环模式下传输完成后会自动重新开始下一轮传输。",
    "answer": true,
    "explain": "循环模式(CIRCULAR)传输完成后自动重置计数器重新传输。"
  },
  {
    "id": 570,
    "ch": "21",
    "type": "judge",
    "q": "RTC只能使用LSE外部晶振作为时钟源。",
    "answer": false,
    "explain": "RTC可选LSE/LSI/HSE分频作为时钟源，LSE精度最高。"
  },
  {
    "id": 571,
    "ch": "21",
    "type": "short",
    "q": "简述DMA的工作原理和优势。",
    "answer": "原理：DMA控制器独立于CPU，可直接控制总线进行外设到内存或内存到内存的数据搬运。当外设(USART/ADC/SPI)有数据时，向DMA发送请求，DMA获得总线控制权后自动搬运数据到指定内存地址，完成后产生中断通知CPU。优势：1)CPU不参与逐字节搬运，大幅减轻负担；2)数据传输速率高，接近总线带宽；3)可并行：CPU执行代码同时DMA搬运数据；4)支持大批量传输(如ADC多通道采集、串口接收)；5)降低系统功耗。",
    "explain": "DMA是数据搬运的高效方案。"
  },
  {
    "id": 572,
    "ch": "21",
    "type": "short",
    "q": "简述STM32 RTC的配置步骤和日历设置。",
    "answer": "步骤：1)使能PWR时钟，允许访问备份域(PWR->CR |= DBP)；2)选择RTC时钟源(LSE)：__HAL_RCC_RTC_CONFIG(RCC_RTCCLKSOURCE_LSE)；3)使能LSE和RTC时钟；4)HAL_RTC_Init()初始化RTC(异步分频127,同步分频255)；5)设置时间HAL_RTC_SetTime(&hrtc, &sTime, RTC_FORMAT_BIN)；6)设置日期HAL_RTC_SetDate(&hrtc, &sDate, RTC_FORMAT_BIN)；7)读取时使用HAL_RTC_GetTime()和HAL_RTC_GetDate()。注意：读取时间后必须立即读日期(锁机制)。",
    "explain": "RTC需先开备份域访问权限。"
  },
  {
    "id": 573,
    "ch": "21",
    "type": "short",
    "q": "简述DMA+ADC实现连续多通道采集的方案。",
    "answer": "方案：1)配置ADC为扫描模式(多通道序列)、连续转换模式；2)配置DMA2(DMA2_Stream0, Channel0对应ADC1)，方向外设到内存，循环模式，数据宽度16位(半字)；3)设置内存缓冲区大小=通道数(如3通道->3元素数组)；4)启动HAL_ADC_Start_DMA(&hadc1, (uint32_t*)adc_buffer, 3)；5)DMA自动将ADC1的3个通道转换结果循环写入buffer[0]=CH0, buffer[1]=CH1, buffer[2]=CH2。CPU只需读取buffer数组即可获得各通道最新ADC值，无需干预转换过程。",
    "explain": "ADC+DMA是连续采集的标准方案。"
  },
  {
    "id": 574,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS中创建任务使用的函数是？",
    "options": [
      "xTaskCreate()",
      "task_create()",
      "osThreadNew()",
      "vTaskStart()"
    ],
    "answer": "A",
    "explain": "xTaskCreate()创建任务并加入就绪列表，参数含任务函数/栈大小/参数/优先级/句柄。"
  },
  {
    "id": 575,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS任务调度的基本原则是？",
    "options": [
      "高优先级先执行",
      "先到先执行",
      "时间片轮转",
      "短任务优先"
    ],
    "answer": "A",
    "explain": "FreeRTOS采用抢占式优先级调度，高优先级任务先执行，同优先级时间片轮转。"
  },
  {
    "id": 576,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS中vTaskDelay()的参数单位是？",
    "options": [
      "Tick(系统节拍)",
      "毫秒",
      "微秒",
      "秒"
    ],
    "answer": "A",
    "explain": "vTaskDelay()参数为Tick数，可用pdMS_TO_TICKS(ms)转换。"
  },
  {
    "id": 577,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS中二值信号量相当于？",
    "options": [
      "互斥的0/1标志",
      "队列",
      "事件标志",
      "定时器"
    ],
    "answer": "A",
    "explain": "二值信号量类似一个只有0/1的标志，用于任务同步或资源保护。"
  },
  {
    "id": 578,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS中互斥量(Mutex)的特点是？",
    "options": [
      "支持优先级继承",
      "不支持嵌套",
      "只能在中断中使用",
      "无等待超时"
    ],
    "answer": "A",
    "explain": "Mutex支持优先级继承防止优先级反转，信号量不支持。"
  },
  {
    "id": 579,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS任务优先级数字越大表示？",
    "options": [
      "优先级越高",
      "优先级越低",
      "无影响",
      "不确定"
    ],
    "answer": "A",
    "explain": "FreeRTOS中数字越大优先级越高(与NVIC相反)。"
  },
  {
    "id": 580,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS队列(xQueue)用于？",
    "options": [
      "任务间数据传递",
      "任务延时",
      "定时器管理",
      "内存分配"
    ],
    "answer": "A",
    "explain": "队列是FreeRTOS任务间通信的主要机制，线程安全FIFO。"
  },
  {
    "id": 581,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS启动调度器使用的函数是？",
    "options": [
      "vTaskStartScheduler()",
      "osKernelStart()",
      "start_rtos()",
      "vTaskInit()"
    ],
    "answer": "A",
    "explain": "vTaskStartScheduler()启动调度器，创建空闲和定时器任务后开始调度。"
  },
  {
    "id": 582,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS中configTICK_RATE_HZ表示？",
    "options": [
      "系统节拍频率",
      "任务数量",
      "优先级数",
      "栈大小"
    ],
    "answer": "A",
    "explain": "configTICK_RATE_HZ设置节拍频率(如1000表示1ms一个tick)。"
  },
  {
    "id": 583,
    "ch": "22",
    "type": "single",
    "q": "FreeRTOS临界区进入和退出使用的函数是？",
    "options": [
      "taskENTER_CRITICAL()/taskEXIT_CRITICAL()",
      "disable()/enable()",
      "lock()/unlock()",
      "pause()/resume()"
    ],
    "answer": "A",
    "explain": "taskENTER_CRITICAL()关中断进入临界区，taskEXIT_CRITICAL()开中断退出。"
  },
  {
    "id": 584,
    "ch": "22",
    "type": "multiple",
    "q": "FreeRTOS任务状态有？",
    "options": [
      "运行(Running)",
      "就绪(Ready)",
      "阻塞(Blocked)",
      "挂起(Suspended)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "FreeRTOS任务有运行/就绪/阻塞/挂起四种状态。"
  },
  {
    "id": 585,
    "ch": "22",
    "type": "multiple",
    "q": "FreeRTOS任务间通信方式有？",
    "options": [
      "队列(Queue)",
      "信号量(Semaphore)",
      "互斥量(Mutex)",
      "事件组(Event Group)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "FreeRTOS提供队列/信号量/互斥量/事件组等多种IPC机制。"
  },
  {
    "id": 586,
    "ch": "22",
    "type": "multiple",
    "q": "FreeRTOS任务删除和延时的函数有？",
    "options": [
      "vTaskDelete()",
      "vTaskDelay()",
      "vTaskDelayUntil()",
      "vTaskSuspend()"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "vTaskDelete删除任务，vTaskDelay相对延时，vTaskDelayUntil绝对延时，vTaskSuspend挂起。"
  },
  {
    "id": 587,
    "ch": "22",
    "type": "multiple",
    "q": "FreeRTOS配置项(config)有？",
    "options": [
      "configTICK_RATE_HZ(节拍频率)",
      "configMAX_PRIORITIES(最大优先级)",
      "configTOTAL_HEAP_SIZE(堆大小)",
      "configUSE_PREEMPTION(抢占调度)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "FreeRTOS通过FreeRTOSConfig.h配置以上参数。"
  },
  {
    "id": 588,
    "ch": "22",
    "type": "multiple",
    "q": "FreeRTOS内存管理方案有？",
    "options": [
      "heap_1(只分配不释放)",
      "heap_2(最佳适配)",
      "heap_3(包装malloc)",
      "heap_4(合并相邻空闲块)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "FreeRTOS提供heap_1到heap_5五种内存管理方案。"
  },
  {
    "id": 589,
    "ch": "22",
    "type": "judge",
    "q": "FreeRTOS中同一优先级的多个任务采用时间片轮转调度。",
    "answer": true,
    "explain": "同优先级任务在时间片到期时轮转执行(需开启抢占式调度)。"
  },
  {
    "id": 590,
    "ch": "22",
    "type": "judge",
    "q": "FreeRTOS互斥量可以在中断服务函数中获取。",
    "answer": false,
    "explain": "Mutex有优先级继承机制，不可以在中断中获取(会阻塞)，中断中用信号量。"
  },
  {
    "id": 591,
    "ch": "22",
    "type": "judge",
    "q": "vTaskDelay(100)表示延时100个系统节拍(Tick)。",
    "answer": true,
    "explain": "vTaskDelay参数为Tick数，100个tick在1000Hz节拍下=100ms。"
  },
  {
    "id": 592,
    "ch": "22",
    "type": "judge",
    "q": "FreeRTOS中任务函数必须是一个无限循环。",
    "answer": true,
    "explain": "任务函数通常为while(1)无限循环，退出循环需调用vTaskDelete(NULL)删除自身。"
  },
  {
    "id": 593,
    "ch": "22",
    "type": "short",
    "q": "简述FreeRTOS任务状态转换。",
    "answer": "四种状态：1)运行(Running)：正在执行，同一时刻只有一个任务运行；2)就绪(Ready)：可运行但未获得CPU，等待调度；3)阻塞(Blocked)：等待事件(延时/信号量/队列)，事件发生转就绪；4)挂起(Suspended)：被vTaskSuspend挂起，需vTaskResume恢复。转换：创建->就绪；就绪->运行(被调度)；运行->就绪(被抢占)；运行->阻塞(vTaskDelay/等待IPC)；阻塞->就绪(事件到达)；运行/就绪/阻塞->挂起(vTaskSuspend)；挂起->就绪(vTaskResume)。",
    "explain": "任务状态机是RTOS核心概念。"
  },
  {
    "id": 594,
    "ch": "22",
    "type": "short",
    "q": "简述FreeRTOS中信号量、互斥量和队列的区别。",
    "answer": "1)信号量(Semaphore)：计数器，用于资源计数和同步。二值信号量(0/1)用于任务同步；计数信号量用于资源池管理。不可用于互斥(无优先级继承)。2)互斥量(Mutex)：特殊的二值信号量，支持优先级继承防止优先级反转，必须由获取它的任务释放。用于资源互斥访问(如共享外设)。3)队列(Queue)：FIFO数据结构，可传递任意类型数据，线程安全。用于任务间数据传递(如传感器数据、命令消息)。队列可同时实现同步(阻塞等待)和数据传递。",
    "explain": "信号量同步，Mutex互斥，队列传递数据。"
  },
  {
    "id": 595,
    "ch": "22",
    "type": "short",
    "q": "编写一个FreeRTOS创建两个任务的示例代码框架。",
    "answer": "void Task1(void *arg) { while(1) { HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5); vTaskDelay(pdMS_TO_TICKS(500)); } } void Task2(void *arg) { while(1) { printf(\"Task2\\n\"); vTaskDelay(pdMS_TO_TICKS(1000)); } } int main(void) { HAL_Init(); SystemClock_Config(); MX_GPIO_Init(); MX_USART1_UART_Init(); xTaskCreate(Task1, \"Task1\", 128, NULL, 1, NULL); xTaskCreate(Task2, \"Task2\", 128, NULL, 2, NULL); vTaskStartScheduler(); while(1); }",
    "explain": "FreeRTOS任务创建三步：定义函数、xTaskCreate、启动调度器。"
  },
  {
    "id": 596,
    "ch": "23",
    "type": "single",
    "q": "STM32综合实验中常用的人机交互外设是？",
    "options": [
      "OLED/LCD显示屏+按键",
      "仅LED",
      "仅蜂鸣器",
      "仅传感器"
    ],
    "answer": "A",
    "explain": "综合实验通常使用显示屏+按键作为人机交互界面。"
  },
  {
    "id": 597,
    "ch": "23",
    "type": "single",
    "q": "STM32项目中传感器数据采集常用接口是？",
    "options": [
      "ADC或I2C/SPI",
      "仅GPIO",
      "仅UART",
      "仅USB"
    ],
    "answer": "A",
    "explain": "模拟传感器用ADC，数字传感器用I2C/SPI总线。"
  },
  {
    "id": 598,
    "ch": "23",
    "type": "single",
    "q": "STM32综合实验中printf调试输出通常通过？",
    "options": [
      "UART串口",
      "USB",
      "SPI",
      "I2C"
    ],
    "answer": "A",
    "explain": "printf重定向到UART串口是最常用的调试输出方式。"
  },
  {
    "id": 599,
    "ch": "23",
    "type": "single",
    "q": "STM32F407驱动WS2812 RGB LED通常使用？",
    "options": [
      "SPI+DMA或定时器PWM",
      "GPIO直接",
      "I2C",
      "UART"
    ],
    "answer": "A",
    "explain": "WS2812需要精确时序(800kHz)，常用SPI DMA或PWM+DMA驱动。"
  },
  {
    "id": 600,
    "ch": "23",
    "type": "single",
    "q": "STM32项目中进行无线通信常用的模块是？",
    "options": [
      "ESP8266/蓝牙模块(USART)",
      "仅以太网",
      "仅USB",
      "仅CAN"
    ],
    "answer": "A",
    "explain": "ESP8266/蓝牙模块通过UART与STM32通信，实现WiFi/蓝牙。"
  },
  {
    "id": 601,
    "ch": "23",
    "type": "single",
    "q": "STM32项目中存储大量数据常用的外存是？",
    "options": [
      "W25Q64 SPI Flash或SD卡",
      "仅内部Flash",
      "仅EEPROM",
      "仅SRAM"
    ],
    "answer": "A",
    "explain": "W25Q64 SPI Flash(8MB)或SD卡用于大容量存储。"
  },
  {
    "id": 602,
    "ch": "23",
    "type": "single",
    "q": "STM32项目中最常用的时间获取外设是？",
    "options": [
      "RTC(实时时钟)",
      "SysTick",
      "定时器",
      "外部时钟"
    ],
    "answer": "A",
    "explain": "RTC提供年月日时分秒日历信息，断电由VBAT保持。"
  },
  {
    "id": 603,
    "ch": "23",
    "type": "single",
    "q": "STM32低功耗项目中常用的休眠模式是？",
    "options": [
      "Stop模式",
      "Run模式",
      "Only-Run",
      "Active"
    ],
    "answer": "A",
    "explain": "Stop模式功耗低且可快速唤醒(微秒级)，适合低功耗应用。"
  },
  {
    "id": 604,
    "ch": "23",
    "type": "single",
    "q": "STM32驱动电机通常使用的定时器是？",
    "options": [
      "高级定时器(TIM1/TIM8)",
      "基本定时器",
      "SysTick",
      "RTC"
    ],
    "answer": "A",
    "explain": "高级定时器支持互补PWM和死区，适合电机驱动。"
  },
  {
    "id": 605,
    "ch": "23",
    "type": "single",
    "q": "STM32项目中看门狗(IWDG)的作用是？",
    "options": [
      "防止程序跑飞",
      "延时",
      "通信",
      "存储数据"
    ],
    "answer": "A",
    "explain": "独立看门狗超时复位MCU，防止死机/跑飞，提高可靠性。"
  },
  {
    "id": 606,
    "ch": "23",
    "type": "multiple",
    "q": "STM32综合实验中常用的显示器件有？",
    "options": [
      "OLED(0.96寸)",
      "LCD1602",
      "TFT彩屏",
      "数码管"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OLED/LCD1602/TFT/数码管均为常用显示器件。"
  },
  {
    "id": 607,
    "ch": "23",
    "type": "multiple",
    "q": "STM32项目中常用的传感器有？",
    "options": [
      "DHT11温湿度",
      "MPU6050陀螺仪",
      "DS18B20温度",
      "BMP280气压"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "以上传感器在STM32项目中常用。"
  },
  {
    "id": 608,
    "ch": "23",
    "type": "multiple",
    "q": "STM32项目开发流程包括？",
    "options": [
      "需求分析",
      "硬件选型",
      "软件架构设计",
      "测试验证"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "完整流程：需求->选型->架构->编码->测试。"
  },
  {
    "id": 609,
    "ch": "23",
    "type": "multiple",
    "q": "STM32调试常用手段有？",
    "options": [
      "SWD单步调试",
      "printf串口打印",
      "逻辑分析仪",
      "示波器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "SWD/printf/逻辑分析仪/示波器均为常用调试手段。"
  },
  {
    "id": 610,
    "ch": "23",
    "type": "multiple",
    "q": "STM32项目中提高可靠性的措施有？",
    "options": [
      "启用看门狗(IWDG/WWDG)",
      "使用RTC备份关键参数",
      "添加CRC校验",
      "异常处理恢复"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "看门狗/RTC备份/CRC校验/异常处理均提高可靠性。"
  },
  {
    "id": 611,
    "ch": "23",
    "type": "judge",
    "q": "STM32项目中可以使用FreeRTOS实现多任务并行处理。",
    "answer": true,
    "explain": "FreeRTOS提供任务调度，实现多任务并发执行。"
  },
  {
    "id": 612,
    "ch": "23",
    "type": "judge",
    "q": "STM32的ADC可以直接测量220V市电电压。",
    "answer": false,
    "explain": "ADC输入范围0-3.3V，测量高压需分压/隔离电路(互感器)。"
  },
  {
    "id": 613,
    "ch": "23",
    "type": "judge",
    "q": "STM32驱动WS2812 LED时必须使用精确的时序控制。",
    "answer": true,
    "explain": "WS2812时序要求严格(0码~0.4us高+0.85us低, 1码~0.8us高+0.45us低)。"
  },
  {
    "id": 614,
    "ch": "23",
    "type": "judge",
    "q": "STM32的Flash可以在运行时随意写入数据不需擦除。",
    "answer": false,
    "explain": "Flash写入前必须先擦除(按页/扇区)，且只能1写0不能0写1。"
  },
  {
    "id": 615,
    "ch": "23",
    "type": "short",
    "q": "设计一个STM32环境监测系统，简述方案。",
    "answer": "方案：1)MCU——STM32F407ZGT6；2)传感器——DHT11(温湿度)、BMP280(气压I2C)、MQ-2(烟雾ADC)、PMS5003(颗粒物UART)；3)显示——0.96寸OLED(I2C)；4)通信——ESP8266 WiFi(UART)上传云平台；5)报警——蜂鸣器+LED；6)软件——FreeRTOS多任务(采集/显示/上传/报警)，队列传递数据。7)电源——5V USB供电，AMS1117-3.3转3.3V。",
    "explain": "环境监测系统综合多种传感器和通信。"
  },
  {
    "id": 616,
    "ch": "23",
    "type": "short",
    "q": "简述STM32项目中FreeRTOS多任务架构设计。",
    "answer": "架构：1)采集任务(优先级3)——定时读取传感器数据存入数据队列；2)处理任务(优先级4)——从队列取数据处理(滤波/计算)存入显示队列；3)显示任务(优先级2)——从显示队列取数据刷新OLED；4)通信任务(优先级1)——定时上传数据到云平台；5)报警任务(优先级5)——监测阈值触发报警。队列用于任务间数据传递，信号量保护共享资源(I2C总线)，互斥量保护printf输出。",
    "explain": "多任务架构需合理分配优先级和IPC。"
  },
  {
    "id": 617,
    "ch": "23",
    "type": "short",
    "q": "简述STM32项目从需求到部署的完整开发流程。",
    "answer": "流程：1)需求分析——明确功能/性能/成本/功耗要求；2)硬件选型——MCU型号/传感器/显示/通信模块/电源方案；3)原理图设计——各模块电路连接；4)PCB设计——布线/电源/地/信号完整性；5)软件架构——裸机或RTOS，模块划分；6)编码——CubeMX配置+HAL驱动+业务逻辑；7)单元测试——各模块功能验证；8)集成测试——系统联调；9)压力测试——长时间运行/边界条件；10)部署——烧录最终固件/现场调试。",
    "explain": "完整流程覆盖从需求到部署。"
  },
  {
    "id": 618,
    "ch": "24",
    "type": "single",
    "q": "嵌入式系统学习的核心要素不包括？",
    "options": [
      "操作系统内核源码",
      "硬件原理",
      "编程语言",
      "调试方法"
    ],
    "answer": "A",
    "explain": "嵌入式学习核心是硬件原理、编程、调试，内核源码非必需。"
  },
  {
    "id": 619,
    "ch": "24",
    "type": "single",
    "q": "学习STM32开发的前置知识最重要的是？",
    "options": [
      "C语言基础",
      "Java编程",
      "数据库设计",
      "网页开发"
    ],
    "answer": "A",
    "explain": "C语言是嵌入式开发基础，指针/结构体/位操作必须掌握。"
  },
  {
    "id": 620,
    "ch": "24",
    "type": "single",
    "q": "PCB设计中信号完整性主要关注？",
    "options": [
      "高频信号反射和串扰",
      "电源电压",
      "外壳美观",
      "螺丝孔位"
    ],
    "answer": "A",
    "explain": "高频信号需考虑阻抗匹配、反射、串扰等信号完整性问题。"
  },
  {
    "id": 621,
    "ch": "24",
    "type": "single",
    "q": "嵌入式项目开发中需求分析阶段主要确定？",
    "options": [
      "功能需求和性能指标",
      "代码风格",
      "变量命名",
      "注释格式"
    ],
    "answer": "A",
    "explain": "需求分析明确功能、性能、成本、功耗等指标。"
  },
  {
    "id": 622,
    "ch": "24",
    "type": "single",
    "q": "ESP32相比STM32F103的主要优势是？",
    "options": [
      "内置WiFi和蓝牙",
      "更高主频",
      "更多SRAM",
      "更低价"
    ],
    "answer": "A",
    "explain": "ESP32内置WiFi+BT，是物联网应用的优选方案。"
  },
  {
    "id": 623,
    "ch": "24",
    "type": "single",
    "q": "OpenHarmony操作系统的特点是？",
    "options": [
      "开源分布式",
      "仅限手机",
      "闭源",
      "仅限PC"
    ],
    "answer": "A",
    "explain": "OpenHarmony是开源分布式操作系统，支持多设备协同。"
  },
  {
    "id": 624,
    "ch": "24",
    "type": "single",
    "q": "MSP430单片机的主要特点是？",
    "options": [
      "超低功耗",
      "高性能",
      "高主频",
      "大容量Flash"
    ],
    "answer": "A",
    "explain": "MSP430以超低功耗著称，适合电池供电的便携设备。"
  },
  {
    "id": 625,
    "ch": "24",
    "type": "single",
    "q": "Altium Designer的主要功能是？",
    "options": [
      "PCB原理图和电路板设计",
      "C代码编译",
      "固件烧录",
      "电路仿真"
    ],
    "answer": "A",
    "explain": "AD用于原理图绘制和PCB布板设计。"
  },
  {
    "id": 626,
    "ch": "24",
    "type": "single",
    "q": "嘉立创EDA相比Altium Designer的优势是？",
    "options": [
      "免费且在线可用",
      "功能更强大",
      "更专业",
      "更快"
    ],
    "answer": "A",
    "explain": "嘉立创EDA免费、在线、集成下单，适合初学者和小项目。"
  },
  {
    "id": 627,
    "ch": "24",
    "type": "single",
    "q": "嵌入式系统学习中实践的重要性体现在？",
    "options": [
      "理论需要硬件验证",
      "可以跳过理论",
      "不需要理论",
      "只需看书"
    ],
    "answer": "A",
    "explain": "嵌入式是实践性学科，理论需通过硬件实验验证。"
  },
  {
    "id": 628,
    "ch": "24",
    "type": "multiple",
    "q": "嵌入式工程师需要掌握的技能有？",
    "options": [
      "C/C++编程",
      "电路原理",
      "示波器/逻辑分析仪使用",
      "RTOS概念"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "编程、电路、仪器使用、RTOS均为嵌入式核心技能。"
  },
  {
    "id": 629,
    "ch": "24",
    "type": "multiple",
    "q": "学习嵌入式开发的有效方法有？",
    "options": [
      "从简单项目入手",
      "阅读数据手册",
      "动手实践调试",
      "只看视频不做实验"
    ],
    "answer": ["A", "B", "C"],
    "explain": "从简到难、读手册、动手实践是有效方法；只看视频不实践效果差。"
  },
  {
    "id": 630,
    "ch": "24",
    "type": "multiple",
    "q": "PCB设计软件常用的有？",
    "options": [
      "Altium Designer",
      "嘉立创EDA",
      "KiCad",
      "Proteus"
    ],
    "answer": ["A", "B", "C"],
    "explain": "AD/嘉立创/KiCad是常用PCB设计软件；Proteus主要用于仿真。"
  },
  {
    "id": 631,
    "ch": "24",
    "type": "multiple",
    "q": "物联网常用的通信技术有？",
    "options": [
      "WiFi",
      "蓝牙BLE",
      "LoRa",
      "Zigbee"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "WiFi/BLE/LoRa/Zigbee均为IoT常用通信技术。"
  },
  {
    "id": 632,
    "ch": "24",
    "type": "multiple",
    "q": "低功耗设计的方法有？",
    "options": [
      "使用低功耗MCU",
      "休眠唤醒机制",
      "降低时钟频率",
      "关闭未用外设时钟"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "低功耗MCU、休眠、降频、关外设均为低功耗设计手段。"
  },
  {
    "id": 633,
    "ch": "24",
    "type": "judge",
    "q": "学习嵌入式开发不需要阅读芯片数据手册。",
    "answer": false,
    "explain": "数据手册是嵌入式开发的重要参考，必须阅读。"
  },
  {
    "id": 634,
    "ch": "24",
    "type": "judge",
    "q": "嘉立创EDA可以免费使用且支持在线设计。",
    "answer": true,
    "explain": "嘉立创EDA免费、支持在线/客户端，集成下单。"
  },
  {
    "id": 635,
    "ch": "24",
    "type": "judge",
    "q": "ESP32可以替代所有STM32的应用场景。",
    "answer": false,
    "explain": "ESP32擅长WiFi/BT物联网，STM32擅长实时控制和信号处理，各有优势。"
  },
  {
    "id": 636,
    "ch": "24",
    "type": "judge",
    "q": "MSP430的低功耗模式可以使CPU在微安级电流下维持运行。",
    "answer": true,
    "explain": "MSP430低功耗模式LPM3约0.7uA，LPM4约0.1uA。"
  },
  {
    "id": 637,
    "ch": "24",
    "type": "short",
    "q": "简述嵌入式系统学习的路线图。",
    "answer": "路线：1)基础——C语言(指针/结构体/位操作)、数字电路、模拟电路基础；2)单片机入门——51单片机(STC89C52RC)学习GPIO/定时器/中断/串口；3)进阶——STM32(HAL库/CubeMX)学习ADC/SPI/I2C/DMA/RTOS；4)扩展——ESP32(WiFi/BT)、PCB设计(AD/嘉立创EDA)；5)综合——项目实践(传感器/显示/通信)；6)深入——RTOS(FreeRTOS)、Linux嵌入式、IoT云平台。关键是动手实践，从简到难。",
    "explain": "嵌入式学习需理论+实践循序渐进。"
  },
  {
    "id": 638,
    "ch": "24",
    "type": "short",
    "q": "简述PCB设计的基本流程。",
    "answer": "流程：1)需求分析——确定电路功能和板尺寸/层数；2)原理图设计——绘制电路原理图、选择元器件、ERC检查；3)器件封装——确认/创建元器件PCB封装；4)PCB布局——放置器件，考虑信号流向/热设计/EMC；5)布线——手动或自动布线，注意电源/地/高速信号；6)DRC检查——设计规则检查(线宽/间距/过孔)；7)覆铜——铺地铜减小干扰；8)输出Gerber文件——发送PCB工厂制板；9)焊接调试——贴片/插件焊接，上电测试。",
    "explain": "PCB设计从原理图到制板有完整流程。"
  },
  {
    "id": 639,
    "ch": "24",
    "type": "short",
    "q": "比较Altium Designer和嘉立创EDA的特点。",
    "answer": "Altium Designer：1)专业级PCB设计软件；2)功能强大(多层/高速/差分/阻抗控制)；3)授权费用高；4)适合企业/复杂项目；5)Windows平台。嘉立创EDA：1)免费使用；2)在线/客户端双模式；3)集成嘉立创下单(板/器件一站式)；4)功能适中(6层以内)；5)跨平台；6)适合初学者/小项目/教育。选择：复杂高速选AD，简单快速/教学选嘉立创EDA。",
    "explain": "AD专业付费，嘉立创EDA免费易用。"
  },
  {
    "id": 640,
    "ch": "25",
    "type": "single",
    "q": "Altium Designer中原理图文件的扩展名是？",
    "options": [
      ".SchDoc",
      ".PcbDoc",
      ".PrjPcb",
      ".SchLib"
    ],
    "answer": "A",
    "explain": ".SchDoc为原理图，.PcbDoc为PCB文件，.PrjPcb为工程文件。"
  },
  {
    "id": 641,
    "ch": "25",
    "type": "single",
    "q": "Altium Designer中PCB布板前必须先完成？",
    "options": [
      "原理图设计和编译",
      "外壳设计",
      "固件编写",
      "购买器件"
    ],
    "answer": "A",
    "explain": "PCB布板前需先绘制原理图并通过ERC编译检查。"
  },
  {
    "id": 642,
    "ch": "25",
    "type": "single",
    "q": "Altium Designer中ERC的含义是？",
    "options": [
      "电气规则检查",
      "电磁兼容",
      "封装检查",
      "设计规则"
    ],
    "answer": "A",
    "explain": "ERC=Electrical Rules Check，检查原理图电气连接错误。"
  },
  {
    "id": 643,
    "ch": "25",
    "type": "single",
    "q": "Altium Designer中DRC的含义是？",
    "options": [
      "设计规则检查",
      "电气规则",
      "封装规则",
      "物理规则"
    ],
    "answer": "A",
    "explain": "DRC=Design Rules Check，检查PCB布线是否符合设计规则(线宽/间距等)。"
  },
  {
    "id": 644,
    "ch": "25",
    "type": "single",
    "q": "PCB设计中过孔(Via)的作用是？",
    "options": [
      "连接不同层的导线",
      "散热",
      "固定器件",
      "标注"
    ],
    "answer": "A",
    "explain": "过孔连接不同铜箔层的导线，分通孔/盲孔/埋孔。"
  },
  {
    "id": 645,
    "ch": "25",
    "type": "single",
    "q": "PCB设计中丝印层(Silkscreen)的作用是？",
    "options": [
      "标注器件位置和参数",
      "导电",
      "阻焊",
      "散热"
    ],
    "answer": "A",
    "explain": "丝印层印白色文字标识器件位号、参数、极性等。"
  },
  {
    "id": 646,
    "ch": "25",
    "type": "single",
    "q": "PCB设计中铺铜(Copper Pour)的主要目的是？",
    "options": [
      "减小地阻抗和EMI",
      "美观",
      "节省铜",
      "增加重量"
    ],
    "answer": "A",
    "explain": "铺铜(通常铺地)减小地回路阻抗、屏蔽干扰、改善EMC。"
  },
  {
    "id": 647,
    "ch": "25",
    "type": "single",
    "q": "PCB设计中差分信号走线的基本要求是？",
    "options": [
      "等长等距",
      "任意走线",
      "尽量宽",
      "尽量短"
    ],
    "answer": "A",
    "explain": "差分对需等长(时延匹配)、等距(阻抗一致)，如USB D+/D-。"
  },
  {
    "id": 648,
    "ch": "25",
    "type": "single",
    "q": "Altium Designer中生成PCB制造文件需要输出？",
    "options": [
      "Gerber文件",
      "hex文件",
      "bin文件",
      "pdf文件"
    ],
    "answer": "A",
    "explain": "PCB工厂需要Gerber文件(光绘)和钻孔文件(NC Drill)。"
  },
  {
    "id": 649,
    "ch": "25",
    "type": "single",
    "q": "PCB设计中元器件封装(Footprint)包含的信息不包括？",
    "options": [
      "元器件价格",
      "焊盘尺寸",
      "外形尺寸",
      "丝印标识"
    ],
    "answer": "A",
    "explain": "封装包含焊盘/外形/丝印/基准点等，不含价格信息。"
  },
  {
    "id": 650,
    "ch": "25",
    "type": "multiple",
    "q": "Altium Designer工程中常见的文件类型有？",
    "options": [
      ".PrjPcb(工程)",
      ".SchDoc(原理图)",
      ".PcbDoc(PCB)",
      ".SchLib(原理图库)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "AD工程含工程/原理图/PCB/库文件。"
  },
  {
    "id": 651,
    "ch": "25",
    "type": "multiple",
    "q": "PCB设计的基本规则包括？",
    "options": [
      "线宽规则",
      "间距规则",
      "过孔规则",
      "丝印规则"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DRC检查线宽/间距/过孔/丝印等规则。"
  },
  {
    "id": 652,
    "ch": "25",
    "type": "multiple",
    "q": "PCB叠层设计中常见的层有？",
    "options": [
      "Top Layer(顶层)",
      "Bottom Layer(底层)",
      "丝印层",
      "阻焊层"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "PCB含信号层/丝印/阻焊/钻孔等多层。"
  },
  {
    "id": 653,
    "ch": "25",
    "type": "multiple",
    "q": "Altium Designer中常用的快捷操作有？",
    "options": [
      "空格旋转器件",
      "Tab编辑属性",
      "Ctrl+R复制粘贴",
      "Shift+S单层显示"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "空格旋转/Tab属性/Ctrl+R智能粘贴/Shift+S单层显示。"
  },
  {
    "id": 654,
    "ch": "25",
    "type": "multiple",
    "q": "PCB设计中的EMC措施有？",
    "options": [
      "铺地铜",
      "去耦电容",
      "差分走线",
      "减少过孔"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "铺铜/去耦/差分/少过孔均改善EMC。"
  },
  {
    "id": 655,
    "ch": "25",
    "type": "judge",
    "q": "Altium Designer中原理图和PCB是关联的，修改原理图可同步到PCB。",
    "answer": true,
    "explain": "通过Update PCB Document同步原理图变更到PCB。"
  },
  {
    "id": 656,
    "ch": "25",
    "type": "judge",
    "q": "PCB设计中电源线应该比信号线更宽。",
    "answer": true,
    "explain": "电源线承载电流大，需更宽线径减小压降和发热。"
  },
  {
    "id": 657,
    "ch": "25",
    "type": "judge",
    "q": "PCB设计完成后可以直接发Gerber文件给工厂制板。",
    "answer": true,
    "explain": "Gerber是PCB工厂通用的光绘文件格式。"
  },
  {
    "id": 658,
    "ch": "25",
    "type": "judge",
    "q": "Altium Designer是免费软件。",
    "answer": false,
    "explain": "AD是商业软件需购买授权，有教育版。"
  },
  {
    "id": 659,
    "ch": "25",
    "type": "short",
    "q": "简述Altium Designer的PCB设计完整流程。",
    "answer": "流程：1)新建工程(.PrjPcb)；2)绘制原理图——放置元器件、连线、网络标号；3)ERC检查——排除电气错误；4)创建/导入封装库——确保每个器件有PCB封装；5)更新PCB——将原理图导入PCB文件；6)器件布局——按信号流向放置，考虑尺寸/热设计；7)布线——先关键信号(电源/高频)，后普通信号；8)DRC检查——规则验证；9)铺铜——GND铺铜；10)丝印调整——添加标注；11)输出Gerber+钻孔文件；12)发厂制板。",
    "explain": "AD设计流程从原理图到Gerber输出。"
  },
  {
    "id": 660,
    "ch": "25",
    "type": "short",
    "q": "简述PCB设计中需要注意的信号完整性问题。",
    "answer": "问题：1)反射——高频信号阻抗不匹配导致反射，需阻抗匹配(终端电阻)；2)串扰——相邻信号线耦合干扰，需3W规则(线间距>=3倍线宽)或差分走线；3)地弹——大电流开关导致地电位波动，需加去耦电容和减小地回路；4)EMI——高频辐射干扰，需铺地铜/屏蔽/减小回路面积；5)时序——高速差分信号需等长匹配(蛇形走线)。措施：合理的叠层设计、阻抗控制、去耦电容、差分走线、地平面。",
    "explain": "高速PCB需关注信号完整性。"
  },
  {
    "id": 661,
    "ch": "25",
    "type": "short",
    "q": "简述PCB电源和地线设计的基本原则。",
    "answer": "原则：1)电源线尽量短而宽，减小压降和发热；2)地线形成闭环或大面积铺铜，减小地阻抗；3)电源入口加去耦电容(10uF电解+0.1uF陶瓷)；4)每个芯片电源脚附近放0.1uF去耦电容；5)模拟地和数字地分开，单点连接(磁珠/0欧电阻)；6)电源层和地层尽量相邻(电容效应)；7)大电流路径加粗或开窗；8)敏感电路(ADC)电源加LC滤波。",
    "explain": "电源和地是PCB设计基础。"
  },
  {
    "id": 662,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA的定位是？",
    "options": [
      "免费易用的PCB设计工具",
      "专业高速PCB设计",
      "电路仿真软件",
      "固件开发IDE"
    ],
    "answer": "A",
    "explain": "嘉立创EDA定位免费易用，适合初学者和小型项目。"
  },
  {
    "id": 663,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA支持的工作模式有？",
    "options": [
      "在线版和客户端版",
      "仅在线",
      "仅客户端",
      "仅移动端"
    ],
    "answer": "A",
    "explain": "嘉立创EDA支持网页在线版和桌面客户端版，数据互通。"
  },
  {
    "id": 664,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA集成的下单服务是？",
    "options": [
      "嘉立创PCB/SMT制造",
      "仅PCB打样",
      "仅器件采购",
      "仅外壳定制"
    ],
    "answer": "A",
    "explain": "嘉立创EDA集成嘉立创工厂，设计完成可直接下单PCB制板和SMT贴片。"
  },
  {
    "id": 665,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA中导入网表到PCB的步骤是？",
    "options": [
      "原理图转PCB",
      "手动绘制",
      "导入Gerber",
      "导入hex"
    ],
    "answer": "A",
    "explain": "在原理图中点击设计->转到PCB，自动导入网表和封装。"
  },
  {
    "id": 666,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA的元件库特点是？",
    "options": [
      "在线海量元件库+立创商城",
      "无元件库",
      "需自建所有封装",
      "仅本地库"
    ],
    "answer": "A",
    "explain": "嘉立创EDA集成立创商城海量元件库，可直接搜索使用。"
  },
  {
    "id": 667,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA支持的PCB层数上限约为？",
    "options": [
      "6层(标准版)",
      "2层",
      "16层",
      "32层"
    ],
    "answer": "A",
    "explain": "嘉立创EDA标准版支持6层PCB设计，专业版更多。"
  },
  {
    "id": 668,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA中DRC检查的作用是？",
    "options": [
      "检查PCB布线规则",
      "编译程序",
      "仿真电路",
      "生成hex"
    ],
    "answer": "A",
    "explain": "DRC检查线宽/间距/短路等PCB设计规则。"
  },
  {
    "id": 669,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA相比AD的优势之一是？",
    "options": [
      "集成供应链下单",
      "更强大",
      "更专业",
      "支持更多层"
    ],
    "answer": "A",
    "explain": "嘉立创EDA最大优势是集成立创商城供应链，设计-采购-制造一站式。"
  },
  {
    "id": 670,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA中铺铜的快捷操作通常在？",
    "options": [
      "放置菜单->铺铜",
      "工具菜单",
      "文件菜单",
      "帮助菜单"
    ],
    "answer": "A",
    "explain": "铺铜在放置菜单中，选择区域后连接网络(通常GND)。"
  },
  {
    "id": 671,
    "ch": "26",
    "type": "single",
    "q": "嘉立创EDA导出制造文件的格式是？",
    "options": [
      "Gerber",
      "hex",
      "pdf",
      "doc"
    ],
    "answer": "A",
    "explain": "嘉立创EDA导出Gerber+钻孔文件用于制板，或直接一键下单。"
  },
  {
    "id": 672,
    "ch": "26",
    "type": "multiple",
    "q": "嘉立创EDA的特点有？",
    "options": [
      "免费使用",
      "在线/客户端双模式",
      "集成供应链",
      "适合教育"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "嘉立创EDA免费/双模式/集成供应链/适合教育。"
  },
  {
    "id": 673,
    "ch": "26",
    "type": "multiple",
    "q": "嘉立创EDA的常用功能有？",
    "options": [
      "原理图设计",
      "PCB布板",
      "器件库搜索",
      "一键下单"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "嘉立创EDA提供原理图/PCB/库搜索/下单全流程。"
  },
  {
    "id": 674,
    "ch": "26",
    "type": "multiple",
    "q": "嘉立创EDA适合的场景有？",
    "options": [
      "教学实验",
      "个人DIY项目",
      "小型产品开发",
      "高速复杂PCB"
    ],
    "answer": ["A", "B", "C"],
    "explain": "嘉立创EDA适合教学/DIY/小项目；高速复杂PCB建议用AD。"
  },
  {
    "id": 675,
    "ch": "26",
    "type": "multiple",
    "q": "嘉立创EDA的元件库来源有？",
    "options": [
      "立创商城商品库",
      "系统基础库",
      "用户分享库",
      "自建元件"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "嘉立创EDA有商城库/基础库/分享库/自建库。"
  },
  {
    "id": 676,
    "ch": "26",
    "type": "multiple",
    "q": "使用嘉立创EDA设计的优势有？",
    "options": [
      "免费",
      "集成采购",
      "快速下单",
      "社区支持"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "免费/集成采购/快速下单/社区支持均为嘉立创EDA优势。"
  },
  {
    "id": 677,
    "ch": "26",
    "type": "judge",
    "q": "嘉立创EDA可以完全替代Altium Designer的所有功能。",
    "answer": false,
    "explain": "嘉立创EDA功能适中，复杂高速PCB仍需AD等专业工具。"
  },
  {
    "id": 678,
    "ch": "26",
    "type": "judge",
    "q": "嘉立创EDA的在线版和客户端版数据可以互通。",
    "answer": true,
    "explain": "嘉立创EDA云端同步，在线版和客户端版数据互通。"
  },
  {
    "id": 679,
    "ch": "26",
    "type": "judge",
    "q": "使用嘉立创EDA设计PCB后可以直接在软件内下单制板。",
    "answer": true,
    "explain": "嘉立创EDA集成下单功能，设计完成可直接发送工厂。"
  },
  {
    "id": 680,
    "ch": "26",
    "type": "judge",
    "q": "嘉立创EDA不支持导出Gerber文件。",
    "answer": false,
    "explain": "嘉立创EDA支持导出标准Gerber文件。"
  },
  {
    "id": 681,
    "ch": "26",
    "type": "short",
    "q": "简述嘉立创EDA的PCB设计流程。",
    "answer": "流程：1)新建工程；2)绘制原理图——从元件库搜索器件放置、连线、设网络标号；3)ERC检查——排除电气错误；4)转为PCB——设计->转到PCB，自动导入网表和封装；5)器件布局——拖动放置器件，考虑尺寸和信号流向；6)布线——自动或手动布线；7)DRC检查——规则验证；8)铺铜——放置铺铜连接GND；9)调整丝印——添加标注/位号；10)导出Gerber或一键下单——直接发送嘉立创工厂。",
    "explain": "嘉立创EDA流程简洁，集成下单。"
  },
  {
    "id": 682,
    "ch": "26",
    "type": "short",
    "q": "比较嘉立创EDA和Altium Designer的主要区别。",
    "answer": "嘉立创EDA：免费/在线+客户端/集成供应链下单/适合6层内/教育/DIY/小项目。Altium Designer：收费/专业/功能强大(高速/差分/阻抗/多层)/适合企业/复杂项目。元件库：嘉立创EDA有立创商城海量库，AD需自建或购买库。学习曲线：嘉立创EDA更简单，AD更陡峭。选择：初学者/教学/小项目选嘉立创EDA；专业/高速/企业级选AD。",
    "explain": "嘉立创EDA易用免费，AD专业强大。"
  },
  {
    "id": 683,
    "ch": "26",
    "type": "short",
    "q": "简述使用嘉立创EDA从设计到制板的完整流程。",
    "answer": "流程：1)注册嘉立创账号；2)在EDA中创建工程，绘制原理图和PCB；3)DRC检查通过；4)导出Gerber或直接点一键下单；5)在嘉立创官网选择板厚/铜厚/颜色/表面工艺等参数；6)确认报价并付款；7)工厂生产(通常24-48小时);8)收货焊接调试。SMT贴片可同时下单——上传BOM和坐标文件，工厂自动贴片。",
    "explain": "嘉立创提供设计到制造一站式服务。"
  },
  {
    "id": 684,
    "ch": "27",
    "type": "single",
    "q": "ESP32的内核架构是？",
    "options": [
      "双核Xtensa LX6",
      "Cortex-M4",
      "8051",
      "RISC-V"
    ],
    "answer": "A",
    "explain": "ESP32采用双核Xtensa LX6(240MHz)，集成WiFi+BT。"
  },
  {
    "id": 685,
    "ch": "27",
    "type": "single",
    "q": "ESP32内置的无线通信模块是？",
    "options": [
      "WiFi+蓝牙BLE",
      "仅WiFi",
      "仅蓝牙",
      "LoRa"
    ],
    "answer": "A",
    "explain": "ESP32集成802.11b/g/n WiFi和蓝牙4.2/BLE。"
  },
  {
    "id": 686,
    "ch": "27",
    "type": "single",
    "q": "ESP32在Arduino IDE中开发需要安装？",
    "options": [
      "ESP32板卡支持包",
      "STM32包",
      "8051包",
      "MSP430包"
    ],
    "answer": "A",
    "explain": "在Arduino IDE首选项中添加ESP32板卡管理器URL后安装。"
  },
  {
    "id": 687,
    "ch": "27",
    "type": "single",
    "q": "ESP32的Arduino编程中WiFi连接使用的库是？",
    "options": [
      "WiFi.h",
      "ESP8266WiFi.h",
      "Ethernet.h",
      "SPI.h"
    ],
    "answer": "A",
    "explain": "ESP32使用WiFi.h库连接WiFi(不同于ESP8266的ESP8266WiFi.h)。"
  },
  {
    "id": 688,
    "ch": "27",
    "type": "single",
    "q": "ESP32的GPIO引脚支持的功能不包括？",
    "options": [
      "直接驱动220V交流",
      "ADC输入",
      "PWM输出",
      "I2C/SPI"
    ],
    "answer": "A",
    "explain": "ESP32 GPIO支持ADC/PWM/I2C/SPI/触摸等，不能直接驱动高压交流。"
  },
  {
    "id": 689,
    "ch": "27",
    "type": "single",
    "q": "ESP32的ADC分辨率是？",
    "options": [
      "12位",
      "8位",
      "10位",
      "16位"
    ],
    "answer": "A",
    "explain": "ESP32 ADC为12位(0-4095)，但线性度一般。"
  },
  {
    "id": 690,
    "ch": "27",
    "type": "single",
    "q": "ESP32的Flash容量常见为？",
    "options": [
      "4MB",
      "512KB",
      "64KB",
      "16MB"
    ],
    "answer": "A",
    "explain": "ESP32常见Flash 4MB(部分型号16MB)。"
  },
  {
    "id": 691,
    "ch": "27",
    "type": "single",
    "q": "ESP32的SRAM容量是？",
    "options": [
      "520KB",
      "128KB",
      "20KB",
      "1MB"
    ],
    "answer": "A",
    "explain": "ESP32有520KB SRAM(320KB+128KB+72KB)。"
  },
  {
    "id": 692,
    "ch": "27",
    "type": "single",
    "q": "Arduino IDE中ESP32上传程序使用？",
    "options": [
      "USB串口",
      "JTAG",
      "SWD",
      "网络"
    ],
    "answer": "A",
    "explain": "ESP32通过USB转串口(CH340/CP2102)上传程序。"
  },
  {
    "id": 693,
    "ch": "27",
    "type": "single",
    "q": "ESP32的Deep Sleep模式唤醒源不包括？",
    "options": [
      "SWD调试器",
      "RTC定时器",
      "GPIO触摸",
      "外部中断"
    ],
    "answer": "A",
    "explain": "Deep Sleep可由RTC/EXT0/EXT1/触摸唤醒，SWD不能唤醒。"
  },
  {
    "id": 694,
    "ch": "27",
    "type": "multiple",
    "q": "ESP32的主要特性有？",
    "options": [
      "双核240MHz",
      "内置WiFi",
      "内置蓝牙BLE",
      "丰富的GPIO和外设"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ESP32双核/WiFi/BLE/丰富外设集于一身。"
  },
  {
    "id": 695,
    "ch": "27",
    "type": "multiple",
    "q": "ESP32在Arduino中支持的库有？",
    "options": [
      "WiFi.h",
      "WebServer.h",
      "MQTT库",
      "BluetoothSerial.h"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ESP32支持WiFi/WebServer/MQTT/BT等丰富库。"
  },
  {
    "id": 696,
    "ch": "27",
    "type": "multiple",
    "q": "ESP32的GPIO特点有？",
    "options": [
      "支持ADC",
      "支持PWM",
      "支持I2C/SPI复用",
      "支持电容触摸"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ESP32 GPIO功能丰富(ADC/PWM/I2C/SPI/触摸)。"
  },
  {
    "id": 697,
    "ch": "27",
    "type": "multiple",
    "q": "ESP32低功耗模式有？",
    "options": [
      "Active模式",
      "Modem Sleep",
      "Light Sleep",
      "Deep Sleep"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ESP32支持Active/Modem/Light/Deep Sleep四种模式。"
  },
  {
    "id": 698,
    "ch": "27",
    "type": "multiple",
    "q": "ESP32物联网应用常用的协议有？",
    "options": [
      "MQTT",
      "HTTP",
      "WebSocket",
      "CoAP"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "MQTT/HTTP/WebSocket/CoAP均为IoT常用协议。"
  },
  {
    "id": 699,
    "ch": "27",
    "type": "judge",
    "q": "ESP32可以在Arduino IDE中进行开发。",
    "answer": true,
    "explain": "安装ESP32板卡支持包后可在Arduino IDE中开发ESP32。"
  },
  {
    "id": 700,
    "ch": "27",
    "type": "judge",
    "q": "ESP32的Deep Sleep模式功耗约为10uA。",
    "answer": true,
    "explain": "ESP32 Deep Sleep约10-150uA(取决于唤醒源)。"
  },
  {
    "id": 701,
    "ch": "27",
    "type": "judge",
    "q": "ESP32的所有GPIO都可以作为ADC输入。",
    "answer": false,
    "explain": "ESP32 ADC仅支持特定引脚(ADC1: GPIO32-39, ADC2: GPIO0/2/4/12-15/25-27)。"
  },
  {
    "id": 702,
    "ch": "27",
    "type": "judge",
    "q": "ESP32的WiFi和蓝牙可以同时工作。",
    "answer": true,
    "explain": "ESP32支持WiFi和BT/BLE同时工作(时分复用)。"
  },
  {
    "id": 703,
    "ch": "27",
    "type": "short",
    "q": "简述ESP32在Arduino IDE中的开发环境搭建步骤。",
    "answer": "步骤：1)安装Arduino IDE；2)打开首选项，在附加板卡管理器URL中添加ESP32包URL(https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json)；3)工具->板卡->板卡管理器，搜索ESP32并安装；4)选择板卡(如DOIT ESP32 DEVKIT V1)；5)选择正确端口(COMx)；6)编写代码并上传。注意：需安装USB驱动(CH340/CP2102)。",
    "explain": "ESP32 Arduino开发环境搭建关键在板卡包安装。"
  },
  {
    "id": 704,
    "ch": "27",
    "type": "short",
    "q": "编写ESP32连接WiFi并启动Web服务器的Arduino代码框架。",
    "answer": "#include <WiFi.h>; #include <WebServer.h>; const char* ssid=\"your_SSID\"; const char* password=\"your_PASS\"; WebServer server(80); void handleRoot() { server.send(200, \"text/html\", \"<h1>Hello ESP32</h1>\"); } void setup() { Serial.begin(115200); WiFi.begin(ssid, password); while(WiFi.status()!=WL_CONNECTED) delay(500); Serial.println(WiFi.localIP()); server.on(\"/\", handleRoot); server.begin(); } void loop() { server.handleClient(); }",
    "explain": "ESP32 Web服务器需WiFi+WebServer库。"
  },
  {
    "id": 705,
    "ch": "27",
    "type": "short",
    "q": "简述ESP32的低功耗模式及Deep Sleep的使用方法。",
    "answer": "ESP32低功耗模式：1)Modem Sleep——关闭WiFi/BT射频，CPU运行，约3mA；2)Light Sleep——CPU暂停但RAM保持，可快速唤醒，约0.8mA；3)Deep Sleep——CPU和大部分外设关闭，仅RTC/ULP运行，约10-150uA。Deep Sleep使用：esp_deep_sleep_start()进入；配置唤醒源：esp_sleep_enable_timer_wakeup(us)定时唤醒；esp_sleep_enable_ext0_wakeup(GPIO_NUM_0, 0)外部中断唤醒；esp_sleep_enable_touchpad_wakeup()触摸唤醒。唤醒后从setup()重新执行。",
    "explain": "Deep Sleep是ESP32低功耗核心。"
  },
  {
    "id": 706,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony是由哪个组织开源的？",
    "options": [
      "开放原子开源基金会",
      "华为",
      "谷歌",
      "Linux基金会"
    ],
    "answer": "A",
    "explain": "OpenHarmony由华为捐赠给开放原子开源基金会开源。"
  },
  {
    "id": 707,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony支持的设备类型不包括？",
    "options": [
      "大型服务器",
      "手机",
      "平板",
      "IoT设备"
    ],
    "answer": "A",
    "explain": "OpenHarmony支持手机/平板/手表/车机/IoT等，不适合大型服务器。"
  },
  {
    "id": 708,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony的分布式特性主要体现在？",
    "options": [
      "多设备协同",
      "单设备运行",
      "仅手机互联",
      "仅局域网"
    ],
    "answer": "A",
    "explain": "分布式能力实现跨设备协同(如跨屏显示/共享外设)。"
  },
  {
    "id": 709,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony应用开发主要使用的语言是？",
    "options": [
      "ArkTS(JavaScript扩展)",
      "C语言",
      "Java",
      "Python"
    ],
    "answer": "A",
    "explain": "OpenHarmony主要使用ArkTS(基于TypeScript扩展)开发应用。"
  },
  {
    "id": 710,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony的UI开发框架是？",
    "options": [
      "ArkUI(声明式UI)",
      "Qt",
      "GTK",
      "Android XML"
    ],
    "answer": "A",
    "explain": "ArkUI是OpenHarmony的声明式UI框架。"
  },
  {
    "id": 711,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony支持系统能力的最小设备RAM约为？",
    "options": [
      "128KB",
      "1GB",
      "4GB",
      "16GB"
    ],
    "answer": "A",
    "explain": "OpenHarmony Mini系统支持128KB RAM的设备。"
  },
  {
    "id": 712,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony的系统分级不包括？",
    "options": [
      "Server级",
      "Mini(轻量)",
      "Small(小型)",
      "Standard(标准)"
    ],
    "answer": "A",
    "explain": "OpenHarmony分Mini/Small/Standard三级，无Server级。"
  },
  {
    "id": 713,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony的Ability是？",
    "options": [
      "应用能力抽象",
      "硬件接口",
      "网络协议",
      "数据库"
    ],
    "answer": "A",
    "explain": "Ability是OpenHarmony应用的基本能力单元(Page/Service等)。"
  },
  {
    "id": 714,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony设备开发(轻量系统)常用的开发板MCU是？",
    "options": [
      "STM32F407/Hi3861",
      "ESP32",
      "8051",
      "树莓派"
    ],
    "answer": "A",
    "explain": "OpenHarmony轻量系统支持STM32F407/Hi3861等开发板。"
  },
  {
    "id": 715,
    "ch": "28",
    "type": "single",
    "q": "OpenHarmony的HDF是？",
    "options": [
      "硬件驱动框架",
      "应用框架",
      "网络框架",
      "UI框架"
    ],
    "answer": "A",
    "explain": "HDF=Hardware Driver Foundation，统一的硬件驱动框架。"
  },
  {
    "id": 716,
    "ch": "28",
    "type": "multiple",
    "q": "OpenHarmony的系统分级有？",
    "options": [
      "Mini(轻量系统)",
      "Small(小型系统)",
      "Standard(标准系统)",
      "Large(大型系统)"
    ],
    "answer": ["A", "B", "C"],
    "explain": "OpenHarmony分Mini/Small/Standard三级。"
  },
  {
    "id": 717,
    "ch": "28",
    "type": "multiple",
    "q": "OpenHarmony的主要特性有？",
    "options": [
      "分布式架构",
      "一次开发多端部署",
      "开源",
      "支持多语言开发"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "分布式/多端部署/开源/多语言是核心特性。"
  },
  {
    "id": 718,
    "ch": "28",
    "type": "multiple",
    "q": "OpenHarmony应用开发的能力(Ability)类型有？",
    "options": [
      "Page Ability",
      "Service Ability",
      "Data Ability",
      "Form Ability"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "Ability分Page/Service/Data/Form等类型。"
  },
  {
    "id": 719,
    "ch": "28",
    "type": "multiple",
    "q": "OpenHarmony设备开发支持的芯片有？",
    "options": [
      "Hi3861(WLAN模组)",
      "STM32F407",
      "Hi3516(摄像头)",
      "RK3568"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony支持多种芯片平台的设备开发。"
  },
  {
    "id": 720,
    "ch": "28",
    "type": "multiple",
    "q": "OpenHarmony的分布式能力包括？",
    "options": [
      "分布式数据同步",
      "分布式任务调度",
      "跨设备UI",
      "分布式文件系统"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "分布式数据/任务/UI/文件是核心能力。"
  },
  {
    "id": 721,
    "ch": "28",
    "type": "judge",
    "q": "OpenHarmony是华为完全闭源的操作系统。",
    "answer": false,
    "explain": "OpenHarmony是开源项目，由开放原子开源基金会管理。"
  },
  {
    "id": 722,
    "ch": "28",
    "type": "judge",
    "q": "OpenHarmony可以运行在STM32F407上。",
    "answer": true,
    "explain": "OpenHarmony轻量系统(Mini)支持STM32F407等MCU。"
  },
  {
    "id": 723,
    "ch": "28",
    "type": "judge",
    "q": "OpenHarmony和HarmonyOS是完全相同的系统。",
    "answer": false,
    "explain": "HarmonyOS基于OpenHarmony，增加了华为商业服务和生态。"
  },
  {
    "id": 724,
    "ch": "28",
    "type": "judge",
    "q": "OpenHarmony支持一次开发多端部署。",
    "answer": true,
    "explain": "OpenHarmony的ArkUI框架支持自适应多设备部署。"
  },
  {
    "id": 725,
    "ch": "28",
    "type": "short",
    "q": "简述OpenHarmony的系统架构和分级。",
    "answer": "架构：内核层(LiteOS/Linux内核)、系统服务层、框架层、应用层。分级：1)Mini(轻量系统)——MCU级(128KB+RAM)，如Hi3861/STM32F407，运行LiteOS-M；2)Small(小型系统)——1MB+RAM，如Hi3516，运行LiteOS-A；3)Standard(标准系统)——128MB+RAM，如RK3568，运行Linux内核，支持ArkUI和完整应用。OpenHarmony核心特性：分布式架构(多设备协同)、一次开发多端部署、开源、HDF统一驱动框架。",
    "explain": "OpenHarmony分三级覆盖MCU到富设备。"
  },
  {
    "id": 726,
    "ch": "28",
    "type": "short",
    "q": "简述OpenHarmony在STM32F407上的开发流程。",
    "answer": "流程：1)环境搭建——安装DevEco Device Tool(VS Code插件)；2)获取OpenHarmony源码——repo命令拉取轻量系统代码；3)选择开发板——STM32F407IGT6(OpenHarmony已适配)；4)配置——使用hb命令选择产品(stm32f407ig)和公司；5)编译——hb build -f 编译生成bin文件；6)烧录——使用ST-Link烧录到STM32F407；7)调试——通过串口查看日志。开发内容：编写业务代码、配置GPIO/UART驱动(HDF框架)、编译测试。",
    "explain": "OpenHarmony设备开发需DevEco+源码+编译+烧录。"
  },
  {
    "id": 727,
    "ch": "28",
    "type": "short",
    "q": "简述OpenHarmony分布式能力的应用场景。",
    "answer": "场景：1)跨屏显示——手机视频在智慧屏播放(分布式UI)；2)共享外设——手机调用平板摄像头(分布式硬件)；3)分布式数据——多设备数据自动同步(分布式数据管理)；4)分布式任务——计算任务分发到多设备执行(分布式任务调度)；5)无缝流转——应用从手机流转到平板继续操作。技术基础：分布式软总线(设备发现/连接)、分布式数据管理、分布式任务调度、分布式UI框架。",
    "explain": "分布式能力是OpenHarmony核心卖点。"
  },
  {
    "id": 728,
    "ch": "29",
    "type": "single",
    "q": "MSP430单片机由哪家公司生产？",
    "options": [
      "德州仪器(TI)",
      "意法半导体",
      "NXP",
      "Microchip"
    ],
    "answer": "A",
    "explain": "MSP430是德州仪器(TI)的超低功耗16位单片机系列。"
  },
  {
    "id": 729,
    "ch": "29",
    "type": "single",
    "q": "MSP430的CPU内核是？",
    "options": [
      "16位RISC",
      "8位8051",
      "32位Cortex-M",
      "8位AVR"
    ],
    "answer": "A",
    "explain": "MSP430采用16位RISC CPU，寄存器为16位。"
  },
  {
    "id": 730,
    "ch": "29",
    "type": "single",
    "q": "MSP430最突出的特点是？",
    "options": [
      "超低功耗",
      "高主频",
      "大容量Flash",
      "内置WiFi"
    ],
    "answer": "A",
    "explain": "MSP430以超低功耗著称，LPM3模式约0.7uA。"
  },
  {
    "id": 731,
    "ch": "29",
    "type": "single",
    "q": "MSP430的LPM3低功耗模式功耗约为？",
    "options": [
      "0.7uA",
      "1mA",
      "10mA",
      "100uA"
    ],
    "answer": "A",
    "explain": "MSP430 LPM3模式约0.7uA(带RTC运行)。"
  },
  {
    "id": 732,
    "ch": "29",
    "type": "single",
    "q": "MSP430开发常用的IDE是？",
    "options": [
      "Code Composer Studio(CCS)",
      "Keil",
      "IAR",
      "STM32CubeIDE"
    ],
    "answer": "A",
    "explain": "MSP430常用TI的CCS或IAR/Energia开发。"
  },
  {
    "id": 733,
    "ch": "29",
    "type": "single",
    "q": "MSP430的时钟系统特点不包括？",
    "options": [
      "内置PLL到168MHz",
      "多时钟源(MCLK/SMCLK/ACLK)",
      "支持低速晶振",
      "DCO内部RC"
    ],
    "answer": "A",
    "explain": "MSP430时钟含MCLK/SMCLK/ACLK，DCO/晶振多源，无高PLL(最高约25MHz)。"
  },
  {
    "id": 734,
    "ch": "29",
    "type": "single",
    "q": "MSP430的低功耗模式LPM4的特点是？",
    "options": [
      "关闭CPU和所有时钟",
      "仅CPU关闭",
      "仅时钟降低",
      "正常工作"
    ],
    "answer": "A",
    "explain": "LPM4关闭CPU和所有时钟(含ACLK)，最低功耗约0.1uA。"
  },
  {
    "id": 735,
    "ch": "29",
    "type": "single",
    "q": "MSP430的GPIO特点是？",
    "options": [
      "每个引脚可独立配置中断",
      "无中断功能",
      "仅8位端口",
      "无上拉"
    ],
    "answer": "A",
    "explain": "MSP430每个引脚可独立配置输入/输出/中断(上升/下降/双边沿)。"
  },
  {
    "id": 736,
    "ch": "29",
    "type": "single",
    "q": "MSP430典型应用场景是？",
    "options": [
      "电池供电便携设备",
      "高性能计算",
      "网络服务器",
      "图形渲染"
    ],
    "answer": "A",
    "explain": "MSP430适合电池供电的低功耗便携设备(如智能电表/传感器节点)。"
  },
  {
    "id": 737,
    "ch": "29",
    "type": "single",
    "q": "MSP430的ADC分辨率常见为？",
    "options": [
      "12位",
      "8位",
      "10位",
      "16位"
    ],
    "answer": "A",
    "explain": "MSP430内置12位ADC(部分型号有比较器/SD16)。"
  },
  {
    "id": 738,
    "ch": "29",
    "type": "multiple",
    "q": "MSP430的低功耗模式有？",
    "options": [
      "LPM0(CPU关)",
      "LPM1",
      "LPM2",
      "LPM3/LPM4"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "MSP430有LPM0-4共5种低功耗模式，功耗递减。"
  },
  {
    "id": 739,
    "ch": "29",
    "type": "multiple",
    "q": "MSP430的时钟源有？",
    "options": [
      "DCO(内部RC)",
      "LFXT1(32.768kHz晶振)",
      "XT2(高频晶振)",
      "VLO(内部低频)"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "MSP430时钟源含DCO/LFXT1/XT2/VLO等。"
  },
  {
    "id": 740,
    "ch": "29",
    "type": "multiple",
    "q": "MSP430的低功耗设计策略有？",
    "options": [
      "使用低功耗模式",
      "降低时钟频率",
      "关闭未用外设",
      "中断驱动代替轮询"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "低功耗模式/降频/关外设/中断驱动均为低功耗策略。"
  },
  {
    "id": 741,
    "ch": "29",
    "type": "multiple",
    "q": "MSP430的典型应用有？",
    "options": [
      "智能电表",
      "便携医疗设备",
      "无线传感器节点",
      "烟雾报警器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "MSP430适合电池供电的低功耗设备。"
  },
  {
    "id": 742,
    "ch": "29",
    "type": "multiple",
    "q": "MSP430开发工具/环境有？",
    "options": [
      "Code Composer Studio",
      "IAR EW430",
      "Energia(Arduino兼容)",
      "MSP-FET调试器"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "CCS/IAR/Energia/MSP-FET均可用于MSP430开发。"
  },
  {
    "id": 743,
    "ch": "29",
    "type": "judge",
    "q": "MSP430是16位单片机。",
    "answer": true,
    "explain": "MSP430采用16位RISC架构，寄存器16位。"
  },
  {
    "id": 744,
    "ch": "29",
    "type": "judge",
    "q": "MSP430的低功耗模式LPM3下RTC仍然可以运行。",
    "answer": true,
    "explain": "LPM3关闭CPU和主时钟但ACLK(32.768kHz)运行，RTC可用。"
  },
  {
    "id": 745,
    "ch": "29",
    "type": "judge",
    "q": "MSP430的最高主频可以达到168MHz。",
    "answer": false,
    "explain": "MSP430最高约25MHz(DCO)，远低于STM32的168MHz。"
  },
  {
    "id": 746,
    "ch": "29",
    "type": "judge",
    "q": "MSP430可以通过中断从低功耗模式唤醒。",
    "answer": true,
    "explain": "MSP430低功耗模式由中断唤醒，自动恢复CPU时钟。"
  },
  {
    "id": 747,
    "ch": "29",
    "type": "short",
    "q": "简述MSP430的低功耗模式及其特点。",
    "answer": "MSP430有5种低功耗模式(LPM0-4)：1)LPM0——CPU关闭，主时钟(MCLK)停止，SMCLK/ACLK运行，约0.5mA；2)LPM1/LPM2——进一步关闭DCO等，功耗更低；3)LPM3——CPU/DCO关闭，ACLK(32.768kHz)运行(RTC可用)，约0.7uA；4)LPM4——所有时钟关闭，仅RAM保持，约0.1uA。唤醒：外部中断/定时器中断/RTC闹钟唤醒CPU恢复运行。低功耗设计策略：中断驱动(事件唤醒处理后再休眠)、降低时钟频率、关闭未用外设。",
    "explain": "MSP430低功耗模式LPM3/LPM4是核心。"
  },
  {
    "id": 748,
    "ch": "29",
    "type": "short",
    "q": "比较MSP430和STM32F4在低功耗方面的差异。",
    "answer": "MSP430：1)16位RISC，主频低(25MHz)但功耗极低；2)LPM3约0.7uA(带RTC)；3)适合纽扣电池供电数年；4)外设少但ADC/定时器/串口够用；5)适合传感器节点/电表。STM32F4：1)32位Cortex-M4F(168MHz)，性能强但功耗高；2)Stop模式约100uA；3)Standby模式约2uA；4)外设丰富(USB/ETH/DMA)；5)适合需要计算/通信的场合。选择：极致低功耗选MSP430，需要高性能/丰富外设选STM32。",
    "explain": "MSP430重低功耗，STM32重性能。"
  },
  {
    "id": 749,
    "ch": "29",
    "type": "short",
    "q": "简述MSP430的时钟系统和配置。",
    "answer": "时钟系统：MSP430有3个时钟信号——MCLK(主时钟供CPU)、SMCLK(子系统时钟供外设)、ACLK(辅助时钟供RTC/LPM3)。时钟源：DCO(内部数控RC，可快速切换)、LFXT1(32.768kHz外部晶振)、XT2(高频外部晶振)、VLO(内部约12kHz RC)。配置：通过BCSCTL1/2/3寄存器选择时钟源和分频。低功耗策略：正常运行用DCO高频(快速处理)，空闲时切LPM3用ACLK(低功耗RTC运行)。DCO优势：启动快(us级)适合间歇工作。",
    "explain": "MSP430多时钟源支持灵活功耗管理。"
  },
  {
    "id": 750,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统使用的主控芯片是？",
    "options": [
      "STC89C52RC",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智能交通灯系统采用STC89C52RC作为主控。"
  },
  {
    "id": 751,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统使用的传感器/输入器件是？",
    "options": [
      "按键(模式切换)",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智能交通灯系统的输入包括按键(模式切换)。"
  },
  {
    "id": 752,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的显示方式是？",
    "options": [
      "LED红绿黄+数码管倒计时",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智能交通灯系统通过LED红绿黄+数码管倒计时显示信息。"
  },
  {
    "id": 753,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的通信方式是？",
    "options": [
      "无(独立运行)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智能交通灯系统通信方式：无(独立运行)。"
  },
  {
    "id": 754,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的主要功能是？",
    "options": [
      "实现十字路口交通灯自动控制和倒计时显示",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "实现十字路口交通灯自动控制和倒计时显示"
  },
  {
    "id": 755,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的供电方式是？",
    "options": [
      "5V USB供电",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智能交通灯系统供电：5V USB供电。"
  },
  {
    "id": 756,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的关键技术是？",
    "options": [
      "定时器中断+状态机",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智能交通灯系统核心技术：定时器中断+状态机。"
  },
  {
    "id": 757,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的输出执行器件是？",
    "options": [
      "LED+数码管",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智能交通灯系统输出包括LED+数码管。"
  },
  {
    "id": 758,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统中调试采用的主要方法是？",
    "options": [
      "串口printf+LED状态指示",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智能交通灯系统调试方法：串口printf+LED状态指示。"
  },
  {
    "id": 759,
    "ch": "30",
    "type": "single",
    "q": "智能交通灯系统的MCU内核属于？",
    "options": [
      "8051(8位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智能交通灯系统使用8051内核(8位)。"
  },
  {
    "id": 760,
    "ch": "30",
    "type": "multiple",
    "q": "智能交通灯系统的主要功能特性包括？",
    "options": [
      "定时自动切换",
      "夜间黄灯闪烁模式",
      "紧急通行模式",
      "倒计时显示"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能交通灯系统核心功能。"
  },
  {
    "id": 761,
    "ch": "30",
    "type": "multiple",
    "q": "智能交通灯系统的开发工具包括？",
    "options": [
      "Keil C51",
      "STC-ISP",
      "Proteus仿真",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智能交通灯系统使用Keil C51/STC-ISP/Proteus仿真等工具开发。"
  },
  {
    "id": 762,
    "ch": "30",
    "type": "multiple",
    "q": "智能交通灯系统的技术难点包括？",
    "options": [
      "定时精确控制",
      "状态机设计",
      "LED驱动",
      "按键消抖"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能交通灯系统面临的主要技术挑战。"
  },
  {
    "id": 763,
    "ch": "30",
    "type": "multiple",
    "q": "嵌入式项目开发中智能交通灯系统涉及的硬件模块有？",
    "options": [
      "按键(模式切换)",
      "LED红绿黄+数",
      "LED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 764,
    "ch": "30",
    "type": "multiple",
    "q": "智能交通灯系统的通信协议/接口包括？",
    "options": [
      "GPIO",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智能交通灯系统通信接口：GPIO。"
  },
  {
    "id": 765,
    "ch": "30",
    "type": "judge",
    "q": "智能交通灯系统使用STC89C52RC作为主控芯片。",
    "answer": true,
    "explain": "智能交通灯系统主控为STC89C52RC。"
  },
  {
    "id": 766,
    "ch": "30",
    "type": "judge",
    "q": "智能交通灯系统需要实时响应外部事件。",
    "answer": true,
    "explain": "智能交通灯系统需要需要实时处理。"
  },
  {
    "id": 767,
    "ch": "30",
    "type": "judge",
    "q": "智能交通灯系统可以在不连接任何传感器的情况下正常工作。",
    "answer": true,
    "explain": "智能交通灯系统不依赖传感器才能正常工作。"
  },
  {
    "id": 768,
    "ch": "30",
    "type": "judge",
    "q": "智能交通灯系统的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 769,
    "ch": "30",
    "type": "short",
    "q": "简述智能交通灯系统的系统架构和主要模块。",
    "answer": "智能交通灯系统系统架构：1)主控——STC89C52RC(8051)；2)输入模块——按键(模式切换)；3)输出模块——LED+数码管；4)显示模块——LED红绿黄+数码管倒计时；5)通信模块——无(独立运行)；6)电源模块——5V USB供电。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智能交通灯系统包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 770,
    "ch": "30",
    "type": "short",
    "q": "智能交通灯系统项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)定时精确控制——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)状态机设计——通过示波器/逻辑分析仪排查时序和信号；3)LED驱动——软件算法优化或状态机设计；4)调试——使用串口printf+LED状态指示逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 771,
    "ch": "30",
    "type": "short",
    "q": "如何从零开始开发智能交通灯系统？简述开发流程。",
    "answer": "流程：1)需求分析——明确智能交通灯系统的功能和性能指标；2)硬件选型——确定STC89C52RC主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Keil C51/STC-ISP/Proteus仿真创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决定时精确控制等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 772,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟采用STM32F407作为主控。"
  },
  {
    "id": 773,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟使用的传感器/输入器件是？",
    "options": [
      "DS3231(高精度RTC)",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟的输入包括DS3231(高精度RTC)。"
  },
  {
    "id": 774,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的显示方式是？",
    "options": [
      "OLED/LCD1602",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟通过OLED/LCD1602显示信息。"
  },
  {
    "id": 775,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的通信方式是？",
    "options": [
      "无(本地显示)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟通信方式：无(本地显示)。"
  },
  {
    "id": 776,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的主要功能是？",
    "options": [
      "实现高精度时钟显示、闹钟、温度显示",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "实现高精度时钟显示、闹钟、温度显示"
  },
  {
    "id": 777,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的供电方式是？",
    "options": [
      "5V USB/电池",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟供电：5V USB/电池。"
  },
  {
    "id": 778,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的关键技术是？",
    "options": [
      "RTC+I2C+定时器",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟核心技术：RTC+I2C+定时器。"
  },
  {
    "id": 779,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的输出执行器件是？",
    "options": [
      "OLED+蜂鸣器",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟输出包括OLED+蜂鸣器。"
  },
  {
    "id": 780,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟中调试采用的主要方法是？",
    "options": [
      "SWD调试+printf串口",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟调试方法：SWD调试+printf串口。"
  },
  {
    "id": 781,
    "ch": "31",
    "type": "single",
    "q": "STM32智能电子钟的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "STM32智能电子钟使用Cortex-M4内核(32位)。"
  },
  {
    "id": 782,
    "ch": "31",
    "type": "multiple",
    "q": "STM32智能电子钟的主要功能特性包括？",
    "options": [
      "RTC高精度计时",
      "闹钟功能",
      "温度显示",
      "按键调时"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STM32智能电子钟核心功能。"
  },
  {
    "id": 783,
    "ch": "31",
    "type": "multiple",
    "q": "STM32智能电子钟的开发工具包括？",
    "options": [
      "STM32CubeMX",
      "HAL库",
      "Keil/CubeIDE",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "STM32智能电子钟使用STM32CubeMX/HAL库/Keil/CubeIDE等工具开发。"
  },
  {
    "id": 784,
    "ch": "31",
    "type": "multiple",
    "q": "STM32智能电子钟的技术难点包括？",
    "options": [
      "RTC配置",
      "I2C通信",
      "OLED显示驱动",
      "闹钟逻辑"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "STM32智能电子钟面临的主要技术挑战。"
  },
  {
    "id": 785,
    "ch": "31",
    "type": "multiple",
    "q": "嵌入式项目开发中STM32智能电子钟涉及的硬件模块有？",
    "options": [
      "DS3231(高",
      "OLED/LCD",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 786,
    "ch": "31",
    "type": "multiple",
    "q": "STM32智能电子钟的通信协议/接口包括？",
    "options": [
      "I2C",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "STM32智能电子钟通信接口：I2C。"
  },
  {
    "id": 787,
    "ch": "31",
    "type": "judge",
    "q": "STM32智能电子钟使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "STM32智能电子钟主控为STM32F407。"
  },
  {
    "id": 788,
    "ch": "31",
    "type": "judge",
    "q": "STM32智能电子钟需要实时响应外部事件。",
    "answer": true,
    "explain": "STM32智能电子钟需要需要实时处理。"
  },
  {
    "id": 789,
    "ch": "31",
    "type": "judge",
    "q": "STM32智能电子钟可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "STM32智能电子钟需要传感器才能正常工作。"
  },
  {
    "id": 790,
    "ch": "31",
    "type": "judge",
    "q": "STM32智能电子钟的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 791,
    "ch": "31",
    "type": "short",
    "q": "简述STM32智能电子钟的系统架构和主要模块。",
    "answer": "STM32智能电子钟系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——DS3231(高精度RTC)；3)输出模块——OLED+蜂鸣器；4)显示模块——OLED/LCD1602；5)通信模块——无(本地显示)；6)电源模块——5V USB/电池。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "STM32智能电子钟包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 792,
    "ch": "31",
    "type": "short",
    "q": "STM32智能电子钟项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)RTC配置——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)I2C通信——通过示波器/逻辑分析仪排查时序和信号；3)OLED显示驱动——软件算法优化或状态机设计；4)调试——使用SWD调试+printf串口逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 793,
    "ch": "31",
    "type": "short",
    "q": "如何从零开始开发STM32智能电子钟？简述开发流程。",
    "answer": "流程：1)需求分析——明确STM32智能电子钟的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用STM32CubeMX/HAL库/Keil/CubeIDE创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决RTC配置等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 794,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智能温控风扇采用STM32F407作为主控。"
  },
  {
    "id": 795,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇使用的传感器/输入器件是？",
    "options": [
      "DS18B20温度/NTC热敏电阻",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智能温控风扇的输入包括DS18B20温度/NTC热敏电阻。"
  },
  {
    "id": 796,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的显示方式是？",
    "options": [
      "OLED/LCD",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智能温控风扇通过OLED/LCD显示信息。"
  },
  {
    "id": 797,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的通信方式是？",
    "options": [
      "无(本地控制)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智能温控风扇通信方式：无(本地控制)。"
  },
  {
    "id": 798,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的主要功能是？",
    "options": [
      "根据温度自动调节风扇转速，实现恒温控制",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "根据温度自动调节风扇转速，实现恒温控制"
  },
  {
    "id": 799,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的供电方式是？",
    "options": [
      "12V/5V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智能温控风扇供电：12V/5V适配器。"
  },
  {
    "id": 800,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的关键技术是？",
    "options": [
      "ADC+PID+PWM",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智能温控风扇核心技术：ADC+PID+PWM。"
  },
  {
    "id": 801,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的输出执行器件是？",
    "options": [
      "PWM风扇+OLED",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智能温控风扇输出包括PWM风扇+OLED。"
  },
  {
    "id": 802,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇中调试采用的主要方法是？",
    "options": [
      "SWD+printf+示波器看PWM",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智能温控风扇调试方法：SWD+printf+示波器看PWM。"
  },
  {
    "id": 803,
    "ch": "32",
    "type": "single",
    "q": "智能温控风扇的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智能温控风扇使用Cortex-M4内核(32位)。"
  },
  {
    "id": 804,
    "ch": "32",
    "type": "multiple",
    "q": "智能温控风扇的主要功能特性包括？",
    "options": [
      "温度采集",
      "PID算法控温",
      "PWM调速",
      "OLED显示温度"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能温控风扇核心功能。"
  },
  {
    "id": 805,
    "ch": "32",
    "type": "multiple",
    "q": "智能温控风扇的开发工具包括？",
    "options": [
      "STM32CubeMX",
      "HAL库",
      "Keil",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智能温控风扇使用STM32CubeMX/HAL库/Keil等工具开发。"
  },
  {
    "id": 806,
    "ch": "32",
    "type": "multiple",
    "q": "智能温控风扇的技术难点包括？",
    "options": [
      "ADC采集",
      "PID参数整定",
      "PWM输出",
      "温度滤波"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能温控风扇面临的主要技术挑战。"
  },
  {
    "id": 807,
    "ch": "32",
    "type": "multiple",
    "q": "嵌入式项目开发中智能温控风扇涉及的硬件模块有？",
    "options": [
      "DS18B20温",
      "OLED/LCD",
      "PWM风扇",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 808,
    "ch": "32",
    "type": "multiple",
    "q": "智能温控风扇的通信协议/接口包括？",
    "options": [
      "1-Wire",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智能温控风扇通信接口：1-Wire/ADC。"
  },
  {
    "id": 809,
    "ch": "32",
    "type": "judge",
    "q": "智能温控风扇使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "智能温控风扇主控为STM32F407。"
  },
  {
    "id": 810,
    "ch": "32",
    "type": "judge",
    "q": "智能温控风扇需要实时响应外部事件。",
    "answer": true,
    "explain": "智能温控风扇需要需要实时处理。"
  },
  {
    "id": 811,
    "ch": "32",
    "type": "judge",
    "q": "智能温控风扇可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "智能温控风扇需要传感器才能正常工作。"
  },
  {
    "id": 812,
    "ch": "32",
    "type": "judge",
    "q": "智能温控风扇的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 813,
    "ch": "32",
    "type": "short",
    "q": "简述智能温控风扇的系统架构和主要模块。",
    "answer": "智能温控风扇系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——DS18B20温度/NTC热敏电阻；3)输出模块——PWM风扇+OLED；4)显示模块——OLED/LCD；5)通信模块——无(本地控制)；6)电源模块——12V/5V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智能温控风扇包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 814,
    "ch": "32",
    "type": "short",
    "q": "智能温控风扇项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)ADC采集——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)PID参数整定——通过示波器/逻辑分析仪排查时序和信号；3)PWM输出——软件算法优化或状态机设计；4)调试——使用SWD+printf+示波器看PWM逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 815,
    "ch": "32",
    "type": "short",
    "q": "如何从零开始开发智能温控风扇？简述开发流程。",
    "answer": "流程：1)需求分析——明确智能温控风扇的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用STM32CubeMX/HAL库/Keil创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决ADC采集等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 816,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁使用的主控芯片是？",
    "options": [
      "STC89C52RC",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "电子密码锁采用STC89C52RC作为主控。"
  },
  {
    "id": 817,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁使用的传感器/输入器件是？",
    "options": [
      "矩阵键盘4x4",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "电子密码锁的输入包括矩阵键盘4x4。"
  },
  {
    "id": 818,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的显示方式是？",
    "options": [
      "LCD1602",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "电子密码锁通过LCD1602显示信息。"
  },
  {
    "id": 819,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的通信方式是？",
    "options": [
      "无(本地存储)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "电子密码锁通信方式：无(本地存储)。"
  },
  {
    "id": 820,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的主要功能是？",
    "options": [
      "密码输入验证、开锁、密码修改、错误报警",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "密码输入验证、开锁、密码修改、错误报警"
  },
  {
    "id": 821,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的供电方式是？",
    "options": [
      "5V+电池备份",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "电子密码锁供电：5V+电池备份。"
  },
  {
    "id": 822,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的关键技术是？",
    "options": [
      "IAP存储密码+状态机",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "电子密码锁核心技术：IAP存储密码+状态机。"
  },
  {
    "id": 823,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的输出执行器件是？",
    "options": [
      "LCD1602+电磁锁+蜂鸣器",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "电子密码锁输出包括LCD1602+电磁锁+蜂鸣器。"
  },
  {
    "id": 824,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁中调试采用的主要方法是？",
    "options": [
      "串口printf+LCD显示",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "电子密码锁调试方法：串口printf+LCD显示。"
  },
  {
    "id": 825,
    "ch": "33",
    "type": "single",
    "q": "电子密码锁的MCU内核属于？",
    "options": [
      "8051(8位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "电子密码锁使用8051内核(8位)。"
  },
  {
    "id": 826,
    "ch": "33",
    "type": "multiple",
    "q": "电子密码锁的主要功能特性包括？",
    "options": [
      "密码验证",
      "密码修改",
      "错误次数限制报警",
      "IAP掉电保存"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "电子密码锁核心功能。"
  },
  {
    "id": 827,
    "ch": "33",
    "type": "multiple",
    "q": "电子密码锁的开发工具包括？",
    "options": [
      "Keil C51",
      "STC-ISP",
      "Proteus",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "电子密码锁使用Keil C51/STC-ISP/Proteus等工具开发。"
  },
  {
    "id": 828,
    "ch": "33",
    "type": "multiple",
    "q": "电子密码锁的技术难点包括？",
    "options": [
      "矩阵键盘扫描",
      "密码存储",
      "LCD驱动",
      "安全防破解"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "电子密码锁面临的主要技术挑战。"
  },
  {
    "id": 829,
    "ch": "33",
    "type": "multiple",
    "q": "嵌入式项目开发中电子密码锁涉及的硬件模块有？",
    "options": [
      "矩阵键盘4x4",
      "LCD1602",
      "LCD1602",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 830,
    "ch": "33",
    "type": "multiple",
    "q": "电子密码锁的通信协议/接口包括？",
    "options": [
      "GPIO",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "电子密码锁通信接口：GPIO。"
  },
  {
    "id": 831,
    "ch": "33",
    "type": "judge",
    "q": "电子密码锁使用STC89C52RC作为主控芯片。",
    "answer": true,
    "explain": "电子密码锁主控为STC89C52RC。"
  },
  {
    "id": 832,
    "ch": "33",
    "type": "judge",
    "q": "电子密码锁需要实时响应外部事件。",
    "answer": false,
    "explain": "电子密码锁不需要严格需要实时处理。"
  },
  {
    "id": 833,
    "ch": "33",
    "type": "judge",
    "q": "电子密码锁可以在不连接任何传感器的情况下正常工作。",
    "answer": true,
    "explain": "电子密码锁不依赖传感器才能正常工作。"
  },
  {
    "id": 834,
    "ch": "33",
    "type": "judge",
    "q": "电子密码锁的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 835,
    "ch": "33",
    "type": "short",
    "q": "简述电子密码锁的系统架构和主要模块。",
    "answer": "电子密码锁系统架构：1)主控——STC89C52RC(8051)；2)输入模块——矩阵键盘4x4；3)输出模块——LCD1602+电磁锁+蜂鸣器；4)显示模块——LCD1602；5)通信模块——无(本地存储)；6)电源模块——5V+电池备份。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "电子密码锁包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 836,
    "ch": "33",
    "type": "short",
    "q": "电子密码锁项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)矩阵键盘扫描——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)密码存储——通过示波器/逻辑分析仪排查时序和信号；3)LCD驱动——软件算法优化或状态机设计；4)调试——使用串口printf+LCD显示逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 837,
    "ch": "33",
    "type": "short",
    "q": "如何从零开始开发电子密码锁？简述开发流程。",
    "answer": "流程：1)需求分析——明确电子密码锁的功能和性能指标；2)硬件选型——确定STC89C52RC主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Keil C51/STC-ISP/Proteus创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决矩阵键盘扫描等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 838,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站使用的主控芯片是？",
    "options": [
      "ESP32",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "空气质量监测站采用ESP32作为主控。"
  },
  {
    "id": 839,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站使用的传感器/输入器件是？",
    "options": [
      "PMS5003颗粒物/MQ-135甲醛/DHT11温湿度",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "空气质量监测站的输入包括PMS5003颗粒物/MQ-135甲醛/DHT11温湿度。"
  },
  {
    "id": 840,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "空气质量监测站通过OLED显示信息。"
  },
  {
    "id": 841,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的通信方式是？",
    "options": [
      "WiFi上传云平台",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "空气质量监测站通信方式：WiFi上传云平台。"
  },
  {
    "id": 842,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的主要功能是？",
    "options": [
      "监测PM2.5/甲醛/温湿度并上传云平台",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "监测PM2.5/甲醛/温湿度并上传云平台"
  },
  {
    "id": 843,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的供电方式是？",
    "options": [
      "5V USB/太阳能",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "空气质量监测站供电：5V USB/太阳能。"
  },
  {
    "id": 844,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的关键技术是？",
    "options": [
      "多传感器融合+WiFi+MQTT",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "空气质量监测站核心技术：多传感器融合+WiFi+MQTT。"
  },
  {
    "id": 845,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的输出执行器件是？",
    "options": [
      "OLED+云平台",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "空气质量监测站输出包括OLED+云平台。"
  },
  {
    "id": 846,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站中调试采用的主要方法是？",
    "options": [
      "串口printf+云平台查看",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "空气质量监测站调试方法：串口printf+云平台查看。"
  },
  {
    "id": 847,
    "ch": "34",
    "type": "single",
    "q": "空气质量监测站的MCU内核属于？",
    "options": [
      "Xtensa LX6(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "空气质量监测站使用Xtensa LX6内核(32位)。"
  },
  {
    "id": 848,
    "ch": "34",
    "type": "multiple",
    "q": "空气质量监测站的主要功能特性包括？",
    "options": [
      "PM2.5监测",
      "甲醛监测",
      "温湿度监测",
      "WiFi云上传"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "空气质量监测站核心功能。"
  },
  {
    "id": 849,
    "ch": "34",
    "type": "multiple",
    "q": "空气质量监测站的开发工具包括？",
    "options": [
      "Arduino IDE",
      "ESP32板卡包",
      "MQTT库",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "空气质量监测站使用Arduino IDE/ESP32板卡包/MQTT库等工具开发。"
  },
  {
    "id": 850,
    "ch": "34",
    "type": "multiple",
    "q": "空气质量监测站的技术难点包括？",
    "options": [
      "多传感器数据处理",
      "WiFi连接稳定性",
      "MQTT协议",
      "低功耗"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "空气质量监测站面临的主要技术挑战。"
  },
  {
    "id": 851,
    "ch": "34",
    "type": "multiple",
    "q": "嵌入式项目开发中空气质量监测站涉及的硬件模块有？",
    "options": [
      "PMS5003颗",
      "OLED",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 852,
    "ch": "34",
    "type": "multiple",
    "q": "空气质量监测站的通信协议/接口包括？",
    "options": [
      "WiFi",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "空气质量监测站通信接口：WiFi/MQTT。"
  },
  {
    "id": 853,
    "ch": "34",
    "type": "judge",
    "q": "空气质量监测站使用ESP32作为主控芯片。",
    "answer": true,
    "explain": "空气质量监测站主控为ESP32。"
  },
  {
    "id": 854,
    "ch": "34",
    "type": "judge",
    "q": "空气质量监测站需要实时响应外部事件。",
    "answer": false,
    "explain": "空气质量监测站不需要严格需要实时处理。"
  },
  {
    "id": 855,
    "ch": "34",
    "type": "judge",
    "q": "空气质量监测站可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "空气质量监测站需要传感器才能正常工作。"
  },
  {
    "id": 856,
    "ch": "34",
    "type": "judge",
    "q": "空气质量监测站的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 857,
    "ch": "34",
    "type": "short",
    "q": "简述空气质量监测站的系统架构和主要模块。",
    "answer": "空气质量监测站系统架构：1)主控——ESP32(Xtensa LX6)；2)输入模块——PMS5003颗粒物/MQ-135甲醛/DHT11温湿度；3)输出模块——OLED+云平台；4)显示模块——OLED；5)通信模块——WiFi上传云平台；6)电源模块——5V USB/太阳能。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "空气质量监测站包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 858,
    "ch": "34",
    "type": "short",
    "q": "空气质量监测站项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)多传感器数据处理——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)WiFi连接稳定性——通过示波器/逻辑分析仪排查时序和信号；3)MQTT协议——软件算法优化或状态机设计；4)调试——使用串口printf+云平台查看逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 859,
    "ch": "34",
    "type": "short",
    "q": "如何从零开始开发空气质量监测站？简述开发流程。",
    "answer": "流程：1)需求分析——明确空气质量监测站的功能和性能指标；2)硬件选型——确定ESP32主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Arduino IDE/ESP32板卡包/MQTT库创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决多传感器数据处理等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 860,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统使用的主控芯片是？",
    "options": [
      "ESP32",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统采用ESP32作为主控。"
  },
  {
    "id": 861,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统使用的传感器/输入器件是？",
    "options": [
      "RC522 RFID模块",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统的输入包括RC522 RFID模块。"
  },
  {
    "id": 862,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统通过OLED显示信息。"
  },
  {
    "id": 863,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的通信方式是？",
    "options": [
      "WiFi(远程管理)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统通信方式：WiFi(远程管理)。"
  },
  {
    "id": 864,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的主要功能是？",
    "options": [
      "刷卡身份识别、开门控制、远程授权管理",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "刷卡身份识别、开门控制、远程授权管理"
  },
  {
    "id": 865,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的供电方式是？",
    "options": [
      "5V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统供电：5V适配器。"
  },
  {
    "id": 866,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的关键技术是？",
    "options": [
      "RFID识别+WiFi+数据库",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统核心技术：RFID识别+WiFi+数据库。"
  },
  {
    "id": 867,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的输出执行器件是？",
    "options": [
      "OLED+继电器+蜂鸣器",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统输出包括OLED+继电器+蜂鸣器。"
  },
  {
    "id": 868,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统中调试采用的主要方法是？",
    "options": [
      "串口printf+OLED显示",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统调试方法：串口printf+OLED显示。"
  },
  {
    "id": 869,
    "ch": "35",
    "type": "single",
    "q": "RFID智能门禁系统的MCU内核属于？",
    "options": [
      "Xtensa LX6(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "RFID智能门禁系统使用Xtensa LX6内核(32位)。"
  },
  {
    "id": 870,
    "ch": "35",
    "type": "multiple",
    "q": "RFID智能门禁系统的主要功能特性包括？",
    "options": [
      "RFID刷卡识别",
      "继电器开门",
      "WiFi远程授权",
      "OLED状态显示"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "RFID智能门禁系统核心功能。"
  },
  {
    "id": 871,
    "ch": "35",
    "type": "multiple",
    "q": "RFID智能门禁系统的开发工具包括？",
    "options": [
      "Arduino IDE",
      "ESP32包",
      "MFRC522库",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "RFID智能门禁系统使用Arduino IDE/ESP32包/MFRC522库等工具开发。"
  },
  {
    "id": 872,
    "ch": "35",
    "type": "multiple",
    "q": "RFID智能门禁系统的技术难点包括？",
    "options": [
      "SPI通信",
      "RFID卡片读取",
      "WiFi服务器",
      "权限管理"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "RFID智能门禁系统面临的主要技术挑战。"
  },
  {
    "id": 873,
    "ch": "35",
    "type": "multiple",
    "q": "嵌入式项目开发中RFID智能门禁系统涉及的硬件模块有？",
    "options": [
      "RC522 RF",
      "OLED",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 874,
    "ch": "35",
    "type": "multiple",
    "q": "RFID智能门禁系统的通信协议/接口包括？",
    "options": [
      "SPI",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "RFID智能门禁系统通信接口：SPI/WiFi。"
  },
  {
    "id": 875,
    "ch": "35",
    "type": "judge",
    "q": "RFID智能门禁系统使用ESP32作为主控芯片。",
    "answer": true,
    "explain": "RFID智能门禁系统主控为ESP32。"
  },
  {
    "id": 876,
    "ch": "35",
    "type": "judge",
    "q": "RFID智能门禁系统需要实时响应外部事件。",
    "answer": false,
    "explain": "RFID智能门禁系统不需要严格需要实时处理。"
  },
  {
    "id": 877,
    "ch": "35",
    "type": "judge",
    "q": "RFID智能门禁系统可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "RFID智能门禁系统需要传感器才能正常工作。"
  },
  {
    "id": 878,
    "ch": "35",
    "type": "judge",
    "q": "RFID智能门禁系统的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 879,
    "ch": "35",
    "type": "short",
    "q": "简述RFID智能门禁系统的系统架构和主要模块。",
    "answer": "RFID智能门禁系统系统架构：1)主控——ESP32(Xtensa LX6)；2)输入模块——RC522 RFID模块；3)输出模块——OLED+继电器+蜂鸣器；4)显示模块——OLED；5)通信模块——WiFi(远程管理)；6)电源模块——5V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "RFID智能门禁系统包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 880,
    "ch": "35",
    "type": "short",
    "q": "RFID智能门禁系统项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)SPI通信——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)RFID卡片读取——通过示波器/逻辑分析仪排查时序和信号；3)WiFi服务器——软件算法优化或状态机设计；4)调试——使用串口printf+OLED显示逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 881,
    "ch": "35",
    "type": "short",
    "q": "如何从零开始开发RFID智能门禁系统？简述开发流程。",
    "answer": "流程：1)需求分析——明确RFID智能门禁系统的功能和性能指标；2)硬件选型——确定ESP32主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Arduino IDE/ESP32包/MFRC522库创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决SPI通信等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 882,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测使用的主控芯片是？",
    "options": [
      "ESP32",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智能健康监测采用ESP32作为主控。"
  },
  {
    "id": 883,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测使用的传感器/输入器件是？",
    "options": [
      "MAX30102心率血氧",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智能健康监测的输入包括MAX30102心率血氧。"
  },
  {
    "id": 884,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智能健康监测通过OLED显示信息。"
  },
  {
    "id": 885,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的通信方式是？",
    "options": [
      "WiFi(BLE)上传手机",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智能健康监测通信方式：WiFi(BLE)上传手机。"
  },
  {
    "id": 886,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的主要功能是？",
    "options": [
      "测量心率和血氧饱和度并上传手机APP",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "测量心率和血氧饱和度并上传手机APP"
  },
  {
    "id": 887,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的供电方式是？",
    "options": [
      "3.7V锂电池",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智能健康监测供电：3.7V锂电池。"
  },
  {
    "id": 888,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的关键技术是？",
    "options": [
      "I2C+信号处理+BLE",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智能健康监测核心技术：I2C+信号处理+BLE。"
  },
  {
    "id": 889,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的输出执行器件是？",
    "options": [
      "OLED+手机APP",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智能健康监测输出包括OLED+手机APP。"
  },
  {
    "id": 890,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测中调试采用的主要方法是？",
    "options": [
      "串口printf+手机查看",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智能健康监测调试方法：串口printf+手机查看。"
  },
  {
    "id": 891,
    "ch": "36",
    "type": "single",
    "q": "智能健康监测的MCU内核属于？",
    "options": [
      "Xtensa LX6(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智能健康监测使用Xtensa LX6内核(32位)。"
  },
  {
    "id": 892,
    "ch": "36",
    "type": "multiple",
    "q": "智能健康监测的主要功能特性包括？",
    "options": [
      "心率测量",
      "血氧测量",
      "OLED显示",
      "BLE手机传输"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能健康监测核心功能。"
  },
  {
    "id": 893,
    "ch": "36",
    "type": "multiple",
    "q": "智能健康监测的开发工具包括？",
    "options": [
      "Arduino IDE",
      "ESP32包",
      "MAX30102库",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智能健康监测使用Arduino IDE/ESP32包/MAX30102库等工具开发。"
  },
  {
    "id": 894,
    "ch": "36",
    "type": "multiple",
    "q": "智能健康监测的技术难点包括？",
    "options": [
      "I2C通信",
      "PPG信号处理",
      "心率算法",
      "低功耗设计"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能健康监测面临的主要技术挑战。"
  },
  {
    "id": 895,
    "ch": "36",
    "type": "multiple",
    "q": "嵌入式项目开发中智能健康监测涉及的硬件模块有？",
    "options": [
      "MAX30102",
      "OLED",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 896,
    "ch": "36",
    "type": "multiple",
    "q": "智能健康监测的通信协议/接口包括？",
    "options": [
      "I2C",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智能健康监测通信接口：I2C/BLE/WiFi。"
  },
  {
    "id": 897,
    "ch": "36",
    "type": "judge",
    "q": "智能健康监测使用ESP32作为主控芯片。",
    "answer": true,
    "explain": "智能健康监测主控为ESP32。"
  },
  {
    "id": 898,
    "ch": "36",
    "type": "judge",
    "q": "智能健康监测需要实时响应外部事件。",
    "answer": true,
    "explain": "智能健康监测需要需要实时处理。"
  },
  {
    "id": 899,
    "ch": "36",
    "type": "judge",
    "q": "智能健康监测可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "智能健康监测需要传感器才能正常工作。"
  },
  {
    "id": 900,
    "ch": "36",
    "type": "judge",
    "q": "智能健康监测的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 901,
    "ch": "36",
    "type": "short",
    "q": "简述智能健康监测的系统架构和主要模块。",
    "answer": "智能健康监测系统架构：1)主控——ESP32(Xtensa LX6)；2)输入模块——MAX30102心率血氧；3)输出模块——OLED+手机APP；4)显示模块——OLED；5)通信模块——WiFi(BLE)上传手机；6)电源模块——3.7V锂电池。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智能健康监测包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 902,
    "ch": "36",
    "type": "short",
    "q": "智能健康监测项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)I2C通信——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)PPG信号处理——通过示波器/逻辑分析仪排查时序和信号；3)心率算法——软件算法优化或状态机设计；4)调试——使用串口printf+手机查看逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 903,
    "ch": "36",
    "type": "short",
    "q": "如何从零开始开发智能健康监测？简述开发流程。",
    "answer": "流程：1)需求分析——明确智能健康监测的功能和性能指标；2)硬件选型——确定ESP32主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Arduino IDE/ESP32包/MAX30102库创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决I2C通信等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 904,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统使用的主控芯片是？",
    "options": [
      "ESP32",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统采用ESP32作为主控。"
  },
  {
    "id": 905,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统使用的传感器/输入器件是？",
    "options": [
      "土壤湿度/水位/DHT11",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统的输入包括土壤湿度/水位/DHT11。"
  },
  {
    "id": 906,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统通过OLED显示信息。"
  },
  {
    "id": 907,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的通信方式是？",
    "options": [
      "WiFi云平台",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统通信方式：WiFi云平台。"
  },
  {
    "id": 908,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的主要功能是？",
    "options": [
      "监测土壤湿度自动控制灌溉并上传云端",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "监测土壤湿度自动控制灌溉并上传云端"
  },
  {
    "id": 909,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的供电方式是？",
    "options": [
      "太阳能+锂电池",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统供电：太阳能+锂电池。"
  },
  {
    "id": 910,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的关键技术是？",
    "options": [
      "ADC+WiFi+自动控制",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统核心技术：ADC+WiFi+自动控制。"
  },
  {
    "id": 911,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的输出执行器件是？",
    "options": [
      "水泵继电器+OLED",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统输出包括水泵继电器+OLED。"
  },
  {
    "id": 912,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统中调试采用的主要方法是？",
    "options": [
      "串口printf+云平台",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统调试方法：串口printf+云平台。"
  },
  {
    "id": 913,
    "ch": "37",
    "type": "single",
    "q": "智慧农业灌溉系统的MCU内核属于？",
    "options": [
      "Xtensa LX6(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智慧农业灌溉系统使用Xtensa LX6内核(32位)。"
  },
  {
    "id": 914,
    "ch": "37",
    "type": "multiple",
    "q": "智慧农业灌溉系统的主要功能特性包括？",
    "options": [
      "土壤湿度监测",
      "自动灌溉",
      "WiFi远程控制",
      "太阳能供电"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智慧农业灌溉系统核心功能。"
  },
  {
    "id": 915,
    "ch": "37",
    "type": "multiple",
    "q": "智慧农业灌溉系统的开发工具包括？",
    "options": [
      "Arduino IDE",
      "ESP32包",
      "MQTT库",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智慧农业灌溉系统使用Arduino IDE/ESP32包/MQTT库等工具开发。"
  },
  {
    "id": 916,
    "ch": "37",
    "type": "multiple",
    "q": "智慧农业灌溉系统的技术难点包括？",
    "options": [
      "土壤湿度校准",
      "水泵控制",
      "WiFi稳定性",
      "太阳能管理"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智慧农业灌溉系统面临的主要技术挑战。"
  },
  {
    "id": 917,
    "ch": "37",
    "type": "multiple",
    "q": "嵌入式项目开发中智慧农业灌溉系统涉及的硬件模块有？",
    "options": [
      "土壤湿度",
      "OLED",
      "水泵继电器",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 918,
    "ch": "37",
    "type": "multiple",
    "q": "智慧农业灌溉系统的通信协议/接口包括？",
    "options": [
      "WiFi",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智慧农业灌溉系统通信接口：WiFi/MQTT。"
  },
  {
    "id": 919,
    "ch": "37",
    "type": "judge",
    "q": "智慧农业灌溉系统使用ESP32作为主控芯片。",
    "answer": true,
    "explain": "智慧农业灌溉系统主控为ESP32。"
  },
  {
    "id": 920,
    "ch": "37",
    "type": "judge",
    "q": "智慧农业灌溉系统需要实时响应外部事件。",
    "answer": false,
    "explain": "智慧农业灌溉系统不需要严格需要实时处理。"
  },
  {
    "id": 921,
    "ch": "37",
    "type": "judge",
    "q": "智慧农业灌溉系统可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "智慧农业灌溉系统需要传感器才能正常工作。"
  },
  {
    "id": 922,
    "ch": "37",
    "type": "judge",
    "q": "智慧农业灌溉系统的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 923,
    "ch": "37",
    "type": "short",
    "q": "简述智慧农业灌溉系统的系统架构和主要模块。",
    "answer": "智慧农业灌溉系统系统架构：1)主控——ESP32(Xtensa LX6)；2)输入模块——土壤湿度/水位/DHT11；3)输出模块——水泵继电器+OLED；4)显示模块——OLED；5)通信模块——WiFi云平台；6)电源模块——太阳能+锂电池。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智慧农业灌溉系统包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 924,
    "ch": "37",
    "type": "short",
    "q": "智慧农业灌溉系统项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)土壤湿度校准——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)水泵控制——通过示波器/逻辑分析仪排查时序和信号；3)WiFi稳定性——软件算法优化或状态机设计；4)调试——使用串口printf+云平台逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 925,
    "ch": "37",
    "type": "short",
    "q": "如何从零开始开发智慧农业灌溉系统？简述开发流程。",
    "answer": "流程：1)需求分析——明确智慧农业灌溉系统的功能和性能指标；2)硬件选型——确定ESP32主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Arduino IDE/ESP32包/MQTT库创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决土壤湿度校准等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 926,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智能停车管理采用STM32F407作为主控。"
  },
  {
    "id": 927,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理使用的传感器/输入器件是？",
    "options": [
      "超声波HC-SR04/红外",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智能停车管理的输入包括超声波HC-SR04/红外。"
  },
  {
    "id": 928,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的显示方式是？",
    "options": [
      "LED指引+LCD",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智能停车管理通过LED指引+LCD显示信息。"
  },
  {
    "id": 929,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的通信方式是？",
    "options": [
      "WiFi/以太网",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智能停车管理通信方式：WiFi/以太网。"
  },
  {
    "id": 930,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的主要功能是？",
    "options": [
      "车位检测、车位引导、停车计费管理",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "车位检测、车位引导、停车计费管理"
  },
  {
    "id": 931,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的供电方式是？",
    "options": [
      "12V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智能停车管理供电：12V适配器。"
  },
  {
    "id": 932,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的关键技术是？",
    "options": [
      "超声波测距+状态机+网络",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智能停车管理核心技术：超声波测距+状态机+网络。"
  },
  {
    "id": 933,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的输出执行器件是？",
    "options": [
      "LED指示+LCD+道闸",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智能停车管理输出包括LED指示+LCD+道闸。"
  },
  {
    "id": 934,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理中调试采用的主要方法是？",
    "options": [
      "SWD+printf+示波器",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智能停车管理调试方法：SWD+printf+示波器。"
  },
  {
    "id": 935,
    "ch": "38",
    "type": "single",
    "q": "智能停车管理的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智能停车管理使用Cortex-M4内核(32位)。"
  },
  {
    "id": 936,
    "ch": "38",
    "type": "multiple",
    "q": "智能停车管理的主要功能特性包括？",
    "options": [
      "车位检测",
      "LED引导",
      "计数管理",
      "网络上传"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能停车管理核心功能。"
  },
  {
    "id": 937,
    "ch": "38",
    "type": "multiple",
    "q": "智能停车管理的开发工具包括？",
    "options": [
      "STM32CubeMX",
      "HAL库",
      "Keil",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智能停车管理使用STM32CubeMX/HAL库/Keil等工具开发。"
  },
  {
    "id": 938,
    "ch": "38",
    "type": "multiple",
    "q": "智能停车管理的技术难点包括？",
    "options": [
      "超声波测距精度",
      "多车位管理",
      "状态机设计",
      "网络通信"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能停车管理面临的主要技术挑战。"
  },
  {
    "id": 939,
    "ch": "38",
    "type": "multiple",
    "q": "嵌入式项目开发中智能停车管理涉及的硬件模块有？",
    "options": [
      "超声波HC-SR",
      "LED指引+LC",
      "LED指示",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 940,
    "ch": "38",
    "type": "multiple",
    "q": "智能停车管理的通信协议/接口包括？",
    "options": [
      "UART",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智能停车管理通信接口：UART/以太网。"
  },
  {
    "id": 941,
    "ch": "38",
    "type": "judge",
    "q": "智能停车管理使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "智能停车管理主控为STM32F407。"
  },
  {
    "id": 942,
    "ch": "38",
    "type": "judge",
    "q": "智能停车管理需要实时响应外部事件。",
    "answer": true,
    "explain": "智能停车管理需要需要实时处理。"
  },
  {
    "id": 943,
    "ch": "38",
    "type": "judge",
    "q": "智能停车管理可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "智能停车管理需要传感器才能正常工作。"
  },
  {
    "id": 944,
    "ch": "38",
    "type": "judge",
    "q": "智能停车管理的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 945,
    "ch": "38",
    "type": "short",
    "q": "简述智能停车管理的系统架构和主要模块。",
    "answer": "智能停车管理系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——超声波HC-SR04/红外；3)输出模块——LED指示+LCD+道闸；4)显示模块——LED指引+LCD；5)通信模块——WiFi/以太网；6)电源模块——12V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智能停车管理包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 946,
    "ch": "38",
    "type": "short",
    "q": "智能停车管理项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)超声波测距精度——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)多车位管理——通过示波器/逻辑分析仪排查时序和信号；3)状态机设计——软件算法优化或状态机设计；4)调试——使用SWD+printf+示波器逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 947,
    "ch": "38",
    "type": "short",
    "q": "如何从零开始开发智能停车管理？简述开发流程。",
    "answer": "流程：1)需求分析——明确智能停车管理的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用STM32CubeMX/HAL库/Keil创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决超声波测距精度等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 948,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "工业数据采集网关采用STM32F407作为主控。"
  },
  {
    "id": 949,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关使用的传感器/输入器件是？",
    "options": [
      "4-20mA/Modbus传感器",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "工业数据采集网关的输入包括4-20mA/Modbus传感器。"
  },
  {
    "id": 950,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的显示方式是？",
    "options": [
      "LCD",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "工业数据采集网关通过LCD显示信息。"
  },
  {
    "id": 951,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的通信方式是？",
    "options": [
      "以太网/RS485",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "工业数据采集网关通信方式：以太网/RS485。"
  },
  {
    "id": 952,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的主要功能是？",
    "options": [
      "采集工业传感器数据并通过以太网上传",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "采集工业传感器数据并通过以太网上传"
  },
  {
    "id": 953,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的供电方式是？",
    "options": [
      "24V工业电源",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "工业数据采集网关供电：24V工业电源。"
  },
  {
    "id": 954,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的关键技术是？",
    "options": [
      "Modbus+以太网+DMA",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "工业数据采集网关核心技术：Modbus+以太网+DMA。"
  },
  {
    "id": 955,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的输出执行器件是？",
    "options": [
      "以太网+LCD",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "工业数据采集网关输出包括以太网+LCD。"
  },
  {
    "id": 956,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关中调试采用的主要方法是？",
    "options": [
      "SWD+串口+逻辑分析仪",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "工业数据采集网关调试方法：SWD+串口+逻辑分析仪。"
  },
  {
    "id": 957,
    "ch": "39",
    "type": "single",
    "q": "工业数据采集网关的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "工业数据采集网关使用Cortex-M4内核(32位)。"
  },
  {
    "id": 958,
    "ch": "39",
    "type": "multiple",
    "q": "工业数据采集网关的主要功能特性包括？",
    "options": [
      "多通道ADC采集",
      "Modbus RTU",
      "以太网上传",
      "DMA高效传输"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "工业数据采集网关核心功能。"
  },
  {
    "id": 959,
    "ch": "39",
    "type": "multiple",
    "q": "工业数据采集网关的开发工具包括？",
    "options": [
      "STM32CubeMX",
      "HAL库",
      "LWIP",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "工业数据采集网关使用STM32CubeMX/HAL库/LWIP等工具开发。"
  },
  {
    "id": 960,
    "ch": "39",
    "type": "multiple",
    "q": "工业数据采集网关的技术难点包括？",
    "options": [
      "Modbus协议",
      "以太网TCP/IP",
      "DMA配置",
      "工业抗干扰"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "工业数据采集网关面临的主要技术挑战。"
  },
  {
    "id": 961,
    "ch": "39",
    "type": "multiple",
    "q": "嵌入式项目开发中工业数据采集网关涉及的硬件模块有？",
    "options": [
      "4-20mA",
      "LCD",
      "以太网",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 962,
    "ch": "39",
    "type": "multiple",
    "q": "工业数据采集网关的通信协议/接口包括？",
    "options": [
      "Modbus",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "工业数据采集网关通信接口：Modbus/TCP/RS485。"
  },
  {
    "id": 963,
    "ch": "39",
    "type": "judge",
    "q": "工业数据采集网关使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "工业数据采集网关主控为STM32F407。"
  },
  {
    "id": 964,
    "ch": "39",
    "type": "judge",
    "q": "工业数据采集网关需要实时响应外部事件。",
    "answer": true,
    "explain": "工业数据采集网关需要需要实时处理。"
  },
  {
    "id": 965,
    "ch": "39",
    "type": "judge",
    "q": "工业数据采集网关可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "工业数据采集网关需要传感器才能正常工作。"
  },
  {
    "id": 966,
    "ch": "39",
    "type": "judge",
    "q": "工业数据采集网关的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 967,
    "ch": "39",
    "type": "short",
    "q": "简述工业数据采集网关的系统架构和主要模块。",
    "answer": "工业数据采集网关系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——4-20mA/Modbus传感器；3)输出模块——以太网+LCD；4)显示模块——LCD；5)通信模块——以太网/RS485；6)电源模块——24V工业电源。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "工业数据采集网关包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 968,
    "ch": "39",
    "type": "short",
    "q": "工业数据采集网关项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)Modbus协议——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)以太网TCP/IP——通过示波器/逻辑分析仪排查时序和信号；3)DMA配置——软件算法优化或状态机设计；4)调试——使用SWD+串口+逻辑分析仪逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 969,
    "ch": "39",
    "type": "short",
    "q": "如何从零开始开发工业数据采集网关？简述开发流程。",
    "answer": "流程：1)需求分析——明确工业数据采集网关的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用STM32CubeMX/HAL库/LWIP创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决Modbus协议等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 970,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明采用STM32F407作为主控。"
  },
  {
    "id": 971,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明使用的传感器/输入器件是？",
    "options": [
      "光敏电阻/人体红外PIR",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明的输入包括光敏电阻/人体红外PIR。"
  },
  {
    "id": 972,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的显示方式是？",
    "options": [
      "无(OLED调试)",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明通过无(OLED调试)显示信息。"
  },
  {
    "id": 973,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的通信方式是？",
    "options": [
      "WiFi(OpenHarmony软总线)",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明通信方式：WiFi(OpenHarmony软总线)。"
  },
  {
    "id": 974,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的主要功能是？",
    "options": [
      "基于光感和人体检测的智能照明控制",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "基于光感和人体检测的智能照明控制"
  },
  {
    "id": 975,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的供电方式是？",
    "options": [
      "5V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明供电：5V适配器。"
  },
  {
    "id": 976,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的关键技术是？",
    "options": [
      "OpenHarmony+PWM+ADC",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明核心技术：OpenHarmony+PWM+ADC。"
  },
  {
    "id": 977,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的输出执行器件是？",
    "options": [
      "PWM LED驱动",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明输出包括PWM LED驱动。"
  },
  {
    "id": 978,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明中调试采用的主要方法是？",
    "options": [
      "串口日志+OpenHarmony调试",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明调试方法：串口日志+OpenHarmony调试。"
  },
  {
    "id": 979,
    "ch": "40",
    "type": "single",
    "q": "OpenHarmony智能照明的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "OpenHarmony智能照明使用Cortex-M4内核(32位)。"
  },
  {
    "id": 980,
    "ch": "40",
    "type": "multiple",
    "q": "OpenHarmony智能照明的主要功能特性包括？",
    "options": [
      "光感自动调光",
      "人体感应开关",
      "OpenHarmony分布式",
      "手机APP控制"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony智能照明核心功能。"
  },
  {
    "id": 981,
    "ch": "40",
    "type": "multiple",
    "q": "OpenHarmony智能照明的开发工具包括？",
    "options": [
      "DevEco",
      "OpenHarmony源码",
      "ST-Link",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "OpenHarmony智能照明使用DevEco/OpenHarmony源码/ST-Link等工具开发。"
  },
  {
    "id": 982,
    "ch": "40",
    "type": "multiple",
    "q": "OpenHarmony智能照明的技术难点包括？",
    "options": [
      "OpenHarmony移植",
      "PWM调光",
      "传感器融合",
      "分布式通信"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony智能照明面临的主要技术挑战。"
  },
  {
    "id": 983,
    "ch": "40",
    "type": "multiple",
    "q": "嵌入式项目开发中OpenHarmony智能照明涉及的硬件模块有？",
    "options": [
      "光敏电阻",
      "无(OLED调试",
      "PWM LED驱",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 984,
    "ch": "40",
    "type": "multiple",
    "q": "OpenHarmony智能照明的通信协议/接口包括？",
    "options": [
      "OpenHarmony软总线",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "OpenHarmony智能照明通信接口：OpenHarmony软总线。"
  },
  {
    "id": 985,
    "ch": "40",
    "type": "judge",
    "q": "OpenHarmony智能照明使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "OpenHarmony智能照明主控为STM32F407。"
  },
  {
    "id": 986,
    "ch": "40",
    "type": "judge",
    "q": "OpenHarmony智能照明需要实时响应外部事件。",
    "answer": true,
    "explain": "OpenHarmony智能照明需要需要实时处理。"
  },
  {
    "id": 987,
    "ch": "40",
    "type": "judge",
    "q": "OpenHarmony智能照明可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "OpenHarmony智能照明需要传感器才能正常工作。"
  },
  {
    "id": 988,
    "ch": "40",
    "type": "judge",
    "q": "OpenHarmony智能照明的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 989,
    "ch": "40",
    "type": "short",
    "q": "简述OpenHarmony智能照明的系统架构和主要模块。",
    "answer": "OpenHarmony智能照明系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——光敏电阻/人体红外PIR；3)输出模块——PWM LED驱动；4)显示模块——无(OLED调试)；5)通信模块——WiFi(OpenHarmony软总线)；6)电源模块——5V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "OpenHarmony智能照明包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 990,
    "ch": "40",
    "type": "short",
    "q": "OpenHarmony智能照明项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)OpenHarmony移植——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)PWM调光——通过示波器/逻辑分析仪排查时序和信号；3)传感器融合——软件算法优化或状态机设计；4)调试——使用串口日志+OpenHarmony调试逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 991,
    "ch": "40",
    "type": "short",
    "q": "如何从零开始开发OpenHarmony智能照明？简述开发流程。",
    "answer": "流程：1)需求分析——明确OpenHarmony智能照明的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用DevEco/OpenHarmony源码/ST-Link创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决OpenHarmony移植等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 992,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境采用STM32F407作为主控。"
  },
  {
    "id": 993,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境使用的传感器/输入器件是？",
    "options": [
      "温湿度/光照/CO2",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境的输入包括温湿度/光照/CO2。"
  },
  {
    "id": 994,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境通过OLED显示信息。"
  },
  {
    "id": 995,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的通信方式是？",
    "options": [
      "OpenHarmony分布式软总线",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境通信方式：OpenHarmony分布式软总线。"
  },
  {
    "id": 996,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的主要功能是？",
    "options": [
      "分布式环境监测，多设备协同采集和显示",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "分布式环境监测，多设备协同采集和显示"
  },
  {
    "id": 997,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的供电方式是？",
    "options": [
      "5V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境供电：5V适配器。"
  },
  {
    "id": 998,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的关键技术是？",
    "options": [
      "OpenHarmony分布式+多传感器",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境核心技术：OpenHarmony分布式+多传感器。"
  },
  {
    "id": 999,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的输出执行器件是？",
    "options": [
      "OLED+执行器",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境输出包括OLED+执行器。"
  },
  {
    "id": 1000,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境中调试采用的主要方法是？",
    "options": [
      "串口+分布式日志",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境调试方法：串口+分布式日志。"
  },
  {
    "id": 1001,
    "ch": "41",
    "type": "single",
    "q": "OpenHarmony分布式环境的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "OpenHarmony分布式环境使用Cortex-M4内核(32位)。"
  },
  {
    "id": 1002,
    "ch": "41",
    "type": "multiple",
    "q": "OpenHarmony分布式环境的主要功能特性包括？",
    "options": [
      "分布式数据同步",
      "多设备协同",
      "环境监测",
      "跨设备显示"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony分布式环境核心功能。"
  },
  {
    "id": 1003,
    "ch": "41",
    "type": "multiple",
    "q": "OpenHarmony分布式环境的开发工具包括？",
    "options": [
      "DevEco",
      "OpenHarmony源码",
      "ST-Link",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "OpenHarmony分布式环境使用DevEco/OpenHarmony源码/ST-Link等工具开发。"
  },
  {
    "id": 1004,
    "ch": "41",
    "type": "multiple",
    "q": "OpenHarmony分布式环境的技术难点包括？",
    "options": [
      "分布式软总线",
      "数据同步",
      "多传感器管理",
      "OpenHarmony设备开发"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony分布式环境面临的主要技术挑战。"
  },
  {
    "id": 1005,
    "ch": "41",
    "type": "multiple",
    "q": "嵌入式项目开发中OpenHarmony分布式环境涉及的硬件模块有？",
    "options": [
      "温湿度",
      "OLED",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 1006,
    "ch": "41",
    "type": "multiple",
    "q": "OpenHarmony分布式环境的通信协议/接口包括？",
    "options": [
      "OpenHarmony软总线",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "OpenHarmony分布式环境通信接口：OpenHarmony软总线。"
  },
  {
    "id": 1007,
    "ch": "41",
    "type": "judge",
    "q": "OpenHarmony分布式环境使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "OpenHarmony分布式环境主控为STM32F407。"
  },
  {
    "id": 1008,
    "ch": "41",
    "type": "judge",
    "q": "OpenHarmony分布式环境需要实时响应外部事件。",
    "answer": false,
    "explain": "OpenHarmony分布式环境不需要严格需要实时处理。"
  },
  {
    "id": 1009,
    "ch": "41",
    "type": "judge",
    "q": "OpenHarmony分布式环境可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "OpenHarmony分布式环境需要传感器才能正常工作。"
  },
  {
    "id": 1010,
    "ch": "41",
    "type": "judge",
    "q": "OpenHarmony分布式环境的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 1011,
    "ch": "41",
    "type": "short",
    "q": "简述OpenHarmony分布式环境的系统架构和主要模块。",
    "answer": "OpenHarmony分布式环境系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——温湿度/光照/CO2；3)输出模块——OLED+执行器；4)显示模块——OLED；5)通信模块——OpenHarmony分布式软总线；6)电源模块——5V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "OpenHarmony分布式环境包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 1012,
    "ch": "41",
    "type": "short",
    "q": "OpenHarmony分布式环境项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)分布式软总线——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)数据同步——通过示波器/逻辑分析仪排查时序和信号；3)多传感器管理——软件算法优化或状态机设计；4)调试——使用串口+分布式日志逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 1013,
    "ch": "41",
    "type": "short",
    "q": "如何从零开始开发OpenHarmony分布式环境？简述开发流程。",
    "answer": "流程：1)需求分析——明确OpenHarmony分布式环境的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用DevEco/OpenHarmony源码/ST-Link创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决分布式软总线等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 1014,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业采用STM32F407作为主控。"
  },
  {
    "id": 1015,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业使用的传感器/输入器件是？",
    "options": [
      "土壤湿度/温湿度/光照",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业的输入包括土壤湿度/温湿度/光照。"
  },
  {
    "id": 1016,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业通过OLED显示信息。"
  },
  {
    "id": 1017,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的通信方式是？",
    "options": [
      "OpenHarmony分布式",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业通信方式：OpenHarmony分布式。"
  },
  {
    "id": 1018,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的主要功能是？",
    "options": [
      "分布式智慧农业监测和自动灌溉控制",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "分布式智慧农业监测和自动灌溉控制"
  },
  {
    "id": 1019,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的供电方式是？",
    "options": [
      "5V/太阳能",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业供电：5V/太阳能。"
  },
  {
    "id": 1020,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的关键技术是？",
    "options": [
      "OpenHarmony+多传感器+自动控制",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业核心技术：OpenHarmony+多传感器+自动控制。"
  },
  {
    "id": 1021,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的输出执行器件是？",
    "options": [
      "水泵+风扇+OLED",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业输出包括水泵+风扇+OLED。"
  },
  {
    "id": 1022,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业中调试采用的主要方法是？",
    "options": [
      "串口+分布式调试",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业调试方法：串口+分布式调试。"
  },
  {
    "id": 1023,
    "ch": "42",
    "type": "single",
    "q": "OpenHarmony智慧农业的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "OpenHarmony智慧农业使用Cortex-M4内核(32位)。"
  },
  {
    "id": 1024,
    "ch": "42",
    "type": "multiple",
    "q": "OpenHarmony智慧农业的主要功能特性包括？",
    "options": [
      "环境监测",
      "自动灌溉",
      "分布式协同",
      "远程监控"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony智慧农业核心功能。"
  },
  {
    "id": 1025,
    "ch": "42",
    "type": "multiple",
    "q": "OpenHarmony智慧农业的开发工具包括？",
    "options": [
      "DevEco",
      "OpenHarmony源码",
      "ST-Link",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "OpenHarmony智慧农业使用DevEco/OpenHarmony源码/ST-Link等工具开发。"
  },
  {
    "id": 1026,
    "ch": "42",
    "type": "multiple",
    "q": "OpenHarmony智慧农业的技术难点包括？",
    "options": [
      "OpenHarmony设备开发",
      "传感器校准",
      "自动控制逻辑",
      "分布式架构"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "OpenHarmony智慧农业面临的主要技术挑战。"
  },
  {
    "id": 1027,
    "ch": "42",
    "type": "multiple",
    "q": "嵌入式项目开发中OpenHarmony智慧农业涉及的硬件模块有？",
    "options": [
      "土壤湿度",
      "OLED",
      "水泵",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 1028,
    "ch": "42",
    "type": "multiple",
    "q": "OpenHarmony智慧农业的通信协议/接口包括？",
    "options": [
      "OpenHarmony软总线",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "OpenHarmony智慧农业通信接口：OpenHarmony软总线。"
  },
  {
    "id": 1029,
    "ch": "42",
    "type": "judge",
    "q": "OpenHarmony智慧农业使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "OpenHarmony智慧农业主控为STM32F407。"
  },
  {
    "id": 1030,
    "ch": "42",
    "type": "judge",
    "q": "OpenHarmony智慧农业需要实时响应外部事件。",
    "answer": false,
    "explain": "OpenHarmony智慧农业不需要严格需要实时处理。"
  },
  {
    "id": 1031,
    "ch": "42",
    "type": "judge",
    "q": "OpenHarmony智慧农业可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "OpenHarmony智慧农业需要传感器才能正常工作。"
  },
  {
    "id": 1032,
    "ch": "42",
    "type": "judge",
    "q": "OpenHarmony智慧农业的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 1033,
    "ch": "42",
    "type": "short",
    "q": "简述OpenHarmony智慧农业的系统架构和主要模块。",
    "answer": "OpenHarmony智慧农业系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——土壤湿度/温湿度/光照；3)输出模块——水泵+风扇+OLED；4)显示模块——OLED；5)通信模块——OpenHarmony分布式；6)电源模块——5V/太阳能。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "OpenHarmony智慧农业包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 1034,
    "ch": "42",
    "type": "short",
    "q": "OpenHarmony智慧农业项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)OpenHarmony设备开发——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)传感器校准——通过示波器/逻辑分析仪排查时序和信号；3)自动控制逻辑——软件算法优化或状态机设计；4)调试——使用串口+分布式调试逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 1035,
    "ch": "42",
    "type": "short",
    "q": "如何从零开始开发OpenHarmony智慧农业？简述开发流程。",
    "answer": "流程：1)需求分析——明确OpenHarmony智慧农业的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用DevEco/OpenHarmony源码/ST-Link创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决OpenHarmony设备开发等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 1036,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜使用的主控芯片是？",
    "options": [
      "STM32F407",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "智能储物柜采用STM32F407作为主控。"
  },
  {
    "id": 1037,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜使用的传感器/输入器件是？",
    "options": [
      "矩阵键盘/RFID",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "智能储物柜的输入包括矩阵键盘/RFID。"
  },
  {
    "id": 1038,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的显示方式是？",
    "options": [
      "LCD",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "智能储物柜通过LCD显示信息。"
  },
  {
    "id": 1039,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的通信方式是？",
    "options": [
      "WiFi/蓝牙",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "智能储物柜通信方式：WiFi/蓝牙。"
  },
  {
    "id": 1040,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的主要功能是？",
    "options": [
      "电子储物柜的密码/刷卡开锁和管理",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "电子储物柜的密码/刷卡开锁和管理"
  },
  {
    "id": 1041,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的供电方式是？",
    "options": [
      "12V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "智能储物柜供电：12V适配器。"
  },
  {
    "id": 1042,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的关键技术是？",
    "options": [
      "状态机+RFID+WiFi",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "智能储物柜核心技术：状态机+RFID+WiFi。"
  },
  {
    "id": 1043,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的输出执行器件是？",
    "options": [
      "电磁锁+LCD+蜂鸣器",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "智能储物柜输出包括电磁锁+LCD+蜂鸣器。"
  },
  {
    "id": 1044,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜中调试采用的主要方法是？",
    "options": [
      "SWD+printf+LCD",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "智能储物柜调试方法：SWD+printf+LCD。"
  },
  {
    "id": 1045,
    "ch": "43",
    "type": "single",
    "q": "智能储物柜的MCU内核属于？",
    "options": [
      "Cortex-M4(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "智能储物柜使用Cortex-M4内核(32位)。"
  },
  {
    "id": 1046,
    "ch": "43",
    "type": "multiple",
    "q": "智能储物柜的主要功能特性包括？",
    "options": [
      "密码开锁",
      "RFID刷卡",
      "WiFi远程管理",
      "LCD状态显示"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能储物柜核心功能。"
  },
  {
    "id": 1047,
    "ch": "43",
    "type": "multiple",
    "q": "智能储物柜的开发工具包括？",
    "options": [
      "STM32CubeMX",
      "HAL库",
      "Keil",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "智能储物柜使用STM32CubeMX/HAL库/Keil等工具开发。"
  },
  {
    "id": 1048,
    "ch": "43",
    "type": "multiple",
    "q": "智能储物柜的技术难点包括？",
    "options": [
      "多柜管理",
      "RFID读取",
      "电磁锁驱动",
      "WiFi通信"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "智能储物柜面临的主要技术挑战。"
  },
  {
    "id": 1049,
    "ch": "43",
    "type": "multiple",
    "q": "嵌入式项目开发中智能储物柜涉及的硬件模块有？",
    "options": [
      "矩阵键盘",
      "LCD",
      "电磁锁",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 1050,
    "ch": "43",
    "type": "multiple",
    "q": "智能储物柜的通信协议/接口包括？",
    "options": [
      "SPI",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "智能储物柜通信接口：SPI/WiFi。"
  },
  {
    "id": 1051,
    "ch": "43",
    "type": "judge",
    "q": "智能储物柜使用STM32F407作为主控芯片。",
    "answer": true,
    "explain": "智能储物柜主控为STM32F407。"
  },
  {
    "id": 1052,
    "ch": "43",
    "type": "judge",
    "q": "智能储物柜需要实时响应外部事件。",
    "answer": false,
    "explain": "智能储物柜不需要严格需要实时处理。"
  },
  {
    "id": 1053,
    "ch": "43",
    "type": "judge",
    "q": "智能储物柜可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "智能储物柜需要传感器才能正常工作。"
  },
  {
    "id": 1054,
    "ch": "43",
    "type": "judge",
    "q": "智能储物柜的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 1055,
    "ch": "43",
    "type": "short",
    "q": "简述智能储物柜的系统架构和主要模块。",
    "answer": "智能储物柜系统架构：1)主控——STM32F407(Cortex-M4)；2)输入模块——矩阵键盘/RFID；3)输出模块——电磁锁+LCD+蜂鸣器；4)显示模块——LCD；5)通信模块——WiFi/蓝牙；6)电源模块——12V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "智能储物柜包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 1056,
    "ch": "43",
    "type": "short",
    "q": "智能储物柜项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)多柜管理——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)RFID读取——通过示波器/逻辑分析仪排查时序和信号；3)电磁锁驱动——软件算法优化或状态机设计；4)调试——使用SWD+printf+LCD逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 1057,
    "ch": "43",
    "type": "short",
    "q": "如何从零开始开发智能储物柜？简述开发流程。",
    "answer": "流程：1)需求分析——明确智能储物柜的功能和性能指标；2)硬件选型——确定STM32F407主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用STM32CubeMX/HAL库/Keil创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决多柜管理等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  },
  {
    "id": 1058,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统使用的主控芯片是？",
    "options": [
      "ESP32",
      "ATmega328P",
      "PIC16F877A",
      "Arduino Uno"
    ],
    "answer": "A",
    "explain": "能耗监测系统采用ESP32作为主控。"
  },
  {
    "id": 1059,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统使用的传感器/输入器件是？",
    "options": [
      "PZEM-004T电能/电流互感器",
      "仅GPS模块",
      "仅加速度计",
      "仅摄像头"
    ],
    "answer": "A",
    "explain": "能耗监测系统的输入包括PZEM-004T电能/电流互感器。"
  },
  {
    "id": 1060,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的显示方式是？",
    "options": [
      "OLED",
      "无显示",
      "仅串口输出",
      "仅LED"
    ],
    "answer": "A",
    "explain": "能耗监测系统通过OLED显示信息。"
  },
  {
    "id": 1061,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的通信方式是？",
    "options": [
      "WiFi云平台",
      "仅CAN总线",
      "仅USB",
      "仅以太网"
    ],
    "answer": "A",
    "explain": "能耗监测系统通信方式：WiFi云平台。"
  },
  {
    "id": 1062,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的主要功能是？",
    "options": [
      "监测电压电流功率能耗并上传云平台分析",
      "仅测量电压",
      "仅显示时间",
      "仅播放音乐"
    ],
    "answer": "A",
    "explain": "监测电压电流功率能耗并上传云平台分析"
  },
  {
    "id": 1063,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的供电方式是？",
    "options": [
      "5V适配器",
      "仅纽扣电池",
      "仅以太网POE",
      "仅手摇发电"
    ],
    "answer": "A",
    "explain": "能耗监测系统供电：5V适配器。"
  },
  {
    "id": 1064,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的关键技术是？",
    "options": [
      "电能计量+WiFi+云平台",
      "仅GPIO翻转",
      "仅看门狗",
      "仅延时循环"
    ],
    "answer": "A",
    "explain": "能耗监测系统核心技术：电能计量+WiFi+云平台。"
  },
  {
    "id": 1065,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的输出执行器件是？",
    "options": [
      "OLED+云平台",
      "仅蜂鸣器",
      "仅LED",
      "无输出"
    ],
    "answer": "A",
    "explain": "能耗监测系统输出包括OLED+云平台。"
  },
  {
    "id": 1066,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统中调试采用的主要方法是？",
    "options": [
      "串口printf+云平台",
      "仅逻辑分析仪",
      "仅示波器",
      "无调试手段"
    ],
    "answer": "A",
    "explain": "能耗监测系统调试方法：串口printf+云平台。"
  },
  {
    "id": 1067,
    "ch": "44",
    "type": "single",
    "q": "能耗监测系统的MCU内核属于？",
    "options": [
      "Xtensa LX6(32位)",
      "纯模拟电路",
      "FPGA",
      "DSP only"
    ],
    "answer": "A",
    "explain": "能耗监测系统使用Xtensa LX6内核(32位)。"
  },
  {
    "id": 1068,
    "ch": "44",
    "type": "multiple",
    "q": "能耗监测系统的主要功能特性包括？",
    "options": [
      "电压电流监测",
      "功率计算",
      "能耗统计",
      "云平台可视化"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "能耗监测系统核心功能。"
  },
  {
    "id": 1069,
    "ch": "44",
    "type": "multiple",
    "q": "能耗监测系统的开发工具包括？",
    "options": [
      "Arduino IDE",
      "ESP32包",
      "PZEM库",
      "AutoCAD"
    ],
    "answer": ["A", "B", "C"],
    "explain": "能耗监测系统使用Arduino IDE/ESP32包/PZEM库等工具开发。"
  },
  {
    "id": 1070,
    "ch": "44",
    "type": "multiple",
    "q": "能耗监测系统的技术难点包括？",
    "options": [
      "电能计量精度",
      "WiFi稳定性",
      "数据安全",
      "云平台对接"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "能耗监测系统面临的主要技术挑战。"
  },
  {
    "id": 1071,
    "ch": "44",
    "type": "multiple",
    "q": "嵌入式项目开发中能耗监测系统涉及的硬件模块有？",
    "options": [
      "PZEM-004",
      "OLED",
      "OLED",
      "外壳模具"
    ],
    "answer": ["A", "B", "C"],
    "explain": "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。"
  },
  {
    "id": 1072,
    "ch": "44",
    "type": "multiple",
    "q": "能耗监测系统的通信协议/接口包括？",
    "options": [
      "WiFi",
      "JTAG",
      "SWD",
      "I2C(调试用)"
    ],
    "answer": ["A", "D"],
    "explain": "能耗监测系统通信接口：WiFi/MQTT/UART。"
  },
  {
    "id": 1073,
    "ch": "44",
    "type": "judge",
    "q": "能耗监测系统使用ESP32作为主控芯片。",
    "answer": true,
    "explain": "能耗监测系统主控为ESP32。"
  },
  {
    "id": 1074,
    "ch": "44",
    "type": "judge",
    "q": "能耗监测系统需要实时响应外部事件。",
    "answer": false,
    "explain": "能耗监测系统不需要严格需要实时处理。"
  },
  {
    "id": 1075,
    "ch": "44",
    "type": "judge",
    "q": "能耗监测系统可以在不连接任何传感器的情况下正常工作。",
    "answer": false,
    "explain": "能耗监测系统需要传感器才能正常工作。"
  },
  {
    "id": 1076,
    "ch": "44",
    "type": "judge",
    "q": "能耗监测系统的开发需要阅读芯片数据手册和传感器手册。",
    "answer": true,
    "explain": "嵌入式开发必须参考数据手册。"
  },
  {
    "id": 1077,
    "ch": "44",
    "type": "short",
    "q": "简述能耗监测系统的系统架构和主要模块。",
    "answer": "能耗监测系统系统架构：1)主控——ESP32(Xtensa LX6)；2)输入模块——PZEM-004T电能/电流互感器；3)输出模块——OLED+云平台；4)显示模块——OLED；5)通信模块——WiFi云平台；6)电源模块——5V适配器。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。",
    "explain": "能耗监测系统包含输入/输出/显示/通信/电源五大模块。"
  },
  {
    "id": 1078,
    "ch": "44",
    "type": "short",
    "q": "能耗监测系统项目中遇到的主要技术难点及解决方法？",
    "answer": "技术难点：1)电能计量精度——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)WiFi稳定性——通过示波器/逻辑分析仪排查时序和信号；3)数据安全——软件算法优化或状态机设计；4)调试——使用串口printf+云平台逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。",
    "explain": "系统化排查从硬件到软件逐层定位。"
  },
  {
    "id": 1079,
    "ch": "44",
    "type": "short",
    "q": "如何从零开始开发能耗监测系统？简述开发流程。",
    "answer": "流程：1)需求分析——明确能耗监测系统的功能和性能指标；2)硬件选型——确定ESP32主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用Arduino IDE/ESP32包/PZEM库创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决电能计量精度等技术问题；9)部署运行——现场测试和长期稳定性验证。",
    "explain": "完整开发流程从需求到部署。"
  }
];


var TYPE_STATS = {
  "single": 490,
  "multiple": 236,
  "judge": 205,
  "short": 148
};
