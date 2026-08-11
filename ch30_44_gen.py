# ch30-44 project chapter questions (generated from project data templates)

# Project data: each project defines its specific hardware/software configuration
PROJECTS = [
    {"ch":"30","name":"智能交通灯系统","mcu":"STC89C52RC","mcu_fam":"8051","mcu_bits":"8位",
     "sensors":"按键(模式切换)","display":"LED红绿黄+数码管倒计时","comm":"无(独立运行)",
     "input":"独立按键","output":"LED+数码管","power":"5V USB供电","key_tech":"定时器中断+状态机",
     "function":"实现十字路口交通灯自动控制和倒计时显示","debug":"串口printf+LED状态指示",
     "comm_proto":"GPIO","features":["定时自动切换","夜间黄灯闪烁模式","紧急通行模式","倒计时显示"],
     "tools":["Keil C51","STC-ISP","Proteus仿真"],
     "challenges":["定时精确控制","状态机设计","LED驱动","按键消抖"],
     "realtime":True,"needs_sensor":False,"mcu_right":True},
    {"ch":"31","name":"STM32智能电子钟","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"DS3231(高精度RTC)","display":"OLED/LCD1602","comm":"无(本地显示)",
     "input":"独立按键","output":"OLED+蜂鸣器","power":"5V USB/电池","key_tech":"RTC+I2C+定时器",
     "function":"实现高精度时钟显示、闹钟、温度显示","debug":"SWD调试+printf串口",
     "comm_proto":"I2C","features":["RTC高精度计时","闹钟功能","温度显示","按键调时"],
     "tools":["STM32CubeMX","HAL库","Keil/CubeIDE"],
     "challenges":["RTC配置","I2C通信","OLED显示驱动","闹钟逻辑"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"32","name":"智能温控风扇","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"DS18B20温度/NTC热敏电阻","display":"OLED/LCD","comm":"无(本地控制)",
     "input":"温度传感器","output":"PWM风扇+OLED","power":"12V/5V适配器","key_tech":"ADC+PID+PWM",
     "function":"根据温度自动调节风扇转速，实现恒温控制","debug":"SWD+printf+示波器看PWM",
     "comm_proto":"1-Wire/ADC","features":["温度采集","PID算法控温","PWM调速","OLED显示温度"],
     "tools":["STM32CubeMX","HAL库","Keil"],
     "challenges":["ADC采集","PID参数整定","PWM输出","温度滤波"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"33","name":"电子密码锁","mcu":"STC89C52RC","mcu_fam":"8051","mcu_bits":"8位",
     "sensors":"矩阵键盘4x4","display":"LCD1602","comm":"无(本地存储)",
     "input":"矩阵键盘","output":"LCD1602+电磁锁+蜂鸣器","power":"5V+电池备份","key_tech":"IAP存储密码+状态机",
     "function":"密码输入验证、开锁、密码修改、错误报警","debug":"串口printf+LCD显示",
     "comm_proto":"GPIO","features":["密码验证","密码修改","错误次数限制报警","IAP掉电保存"],
     "tools":["Keil C51","STC-ISP","Proteus"],
     "challenges":["矩阵键盘扫描","密码存储","LCD驱动","安全防破解"],
     "realtime":False,"needs_sensor":False,"mcu_right":True},
    {"ch":"34","name":"空气质量监测站","mcu":"ESP32","mcu_fam":"Xtensa LX6","mcu_bits":"32位",
     "sensors":"PMS5003颗粒物/MQ-135甲醛/DHT11温湿度","display":"OLED","comm":"WiFi上传云平台",
     "input":"PMS5003(UART)+ADC","output":"OLED+云平台","power":"5V USB/太阳能","key_tech":"多传感器融合+WiFi+MQTT",
     "function":"监测PM2.5/甲醛/温湿度并上传云平台","debug":"串口printf+云平台查看",
     "comm_proto":"WiFi/MQTT","features":["PM2.5监测","甲醛监测","温湿度监测","WiFi云上传"],
     "tools":["Arduino IDE","ESP32板卡包","MQTT库"],
     "challenges":["多传感器数据处理","WiFi连接稳定性","MQTT协议","低功耗"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"35","name":"RFID智能门禁系统","mcu":"ESP32","mcu_fam":"Xtensa LX6","mcu_bits":"32位",
     "sensors":"RC522 RFID模块","display":"OLED","comm":"WiFi(远程管理)",
     "input":"RC522(SPI)","output":"OLED+继电器+蜂鸣器","power":"5V适配器","key_tech":"RFID识别+WiFi+数据库",
     "function":"刷卡身份识别、开门控制、远程授权管理","debug":"串口printf+OLED显示",
     "comm_proto":"SPI/WiFi","features":["RFID刷卡识别","继电器开门","WiFi远程授权","OLED状态显示"],
     "tools":["Arduino IDE","ESP32包","MFRC522库"],
     "challenges":["SPI通信","RFID卡片读取","WiFi服务器","权限管理"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"36","name":"智能健康监测","mcu":"ESP32","mcu_fam":"Xtensa LX6","mcu_bits":"32位",
     "sensors":"MAX30102心率血氧","display":"OLED","comm":"WiFi(BLE)上传手机",
     "input":"MAX30102(I2C)","output":"OLED+手机APP","power":"3.7V锂电池","key_tech":"I2C+信号处理+BLE",
     "function":"测量心率和血氧饱和度并上传手机APP","debug":"串口printf+手机查看",
     "comm_proto":"I2C/BLE/WiFi","features":["心率测量","血氧测量","OLED显示","BLE手机传输"],
     "tools":["Arduino IDE","ESP32包","MAX30102库"],
     "challenges":["I2C通信","PPG信号处理","心率算法","低功耗设计"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"37","name":"智慧农业灌溉系统","mcu":"ESP32","mcu_fam":"Xtensa LX6","mcu_bits":"32位",
     "sensors":"土壤湿度/水位/DHT11","display":"OLED","comm":"WiFi云平台",
     "input":"土壤湿度(ADC)","output":"水泵继电器+OLED","power":"太阳能+锂电池","key_tech":"ADC+WiFi+自动控制",
     "function":"监测土壤湿度自动控制灌溉并上传云端","debug":"串口printf+云平台",
     "comm_proto":"WiFi/MQTT","features":["土壤湿度监测","自动灌溉","WiFi远程控制","太阳能供电"],
     "tools":["Arduino IDE","ESP32包","MQTT库"],
     "challenges":["土壤湿度校准","水泵控制","WiFi稳定性","太阳能管理"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"38","name":"智能停车管理","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"超声波HC-SR04/红外","display":"LED指引+LCD","comm":"WiFi/以太网",
     "input":"超声波(ADC/GPIO)","output":"LED指示+LCD+道闸","power":"12V适配器","key_tech":"超声波测距+状态机+网络",
     "function":"车位检测、车位引导、停车计费管理","debug":"SWD+printf+示波器",
     "comm_proto":"UART/以太网","features":["车位检测","LED引导","计数管理","网络上传"],
     "tools":["STM32CubeMX","HAL库","Keil"],
     "challenges":["超声波测距精度","多车位管理","状态机设计","网络通信"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"39","name":"工业数据采集网关","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"4-20mA/Modbus传感器","display":"LCD","comm":"以太网/RS485",
     "input":"ADC/RS485","output":"以太网+LCD","power":"24V工业电源","key_tech":"Modbus+以太网+DMA",
     "function":"采集工业传感器数据并通过以太网上传","debug":"SWD+串口+逻辑分析仪",
     "comm_proto":"Modbus/TCP/RS485","features":["多通道ADC采集","Modbus RTU","以太网上传","DMA高效传输"],
     "tools":["STM32CubeMX","HAL库","LWIP"],
     "challenges":["Modbus协议","以太网TCP/IP","DMA配置","工业抗干扰"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"40","name":"OpenHarmony智能照明","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"光敏电阻/人体红外PIR","display":"无(OLED调试)","comm":"WiFi(OpenHarmony软总线)",
     "input":"光敏ADC+PIR","output":"PWM LED驱动","power":"5V适配器","key_tech":"OpenHarmony+PWM+ADC",
     "function":"基于光感和人体检测的智能照明控制","debug":"串口日志+OpenHarmony调试",
     "comm_proto":"OpenHarmony软总线","features":["光感自动调光","人体感应开关","OpenHarmony分布式","手机APP控制"],
     "tools":["DevEco","OpenHarmony源码","ST-Link"],
     "challenges":["OpenHarmony移植","PWM调光","传感器融合","分布式通信"],
     "realtime":True,"needs_sensor":True,"mcu_right":True},
    {"ch":"41","name":"OpenHarmony分布式环境","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"温湿度/光照/CO2","display":"OLED","comm":"OpenHarmony分布式软总线",
     "input":"多传感器I2C/ADC","output":"OLED+执行器","power":"5V适配器","key_tech":"OpenHarmony分布式+多传感器",
     "function":"分布式环境监测，多设备协同采集和显示","debug":"串口+分布式日志",
     "comm_proto":"OpenHarmony软总线","features":["分布式数据同步","多设备协同","环境监测","跨设备显示"],
     "tools":["DevEco","OpenHarmony源码","ST-Link"],
     "challenges":["分布式软总线","数据同步","多传感器管理","OpenHarmony设备开发"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"42","name":"OpenHarmony智慧农业","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"土壤湿度/温湿度/光照","display":"OLED","comm":"OpenHarmony分布式",
     "input":"ADC/I2C传感器","output":"水泵+风扇+OLED","power":"5V/太阳能","key_tech":"OpenHarmony+多传感器+自动控制",
     "function":"分布式智慧农业监测和自动灌溉控制","debug":"串口+分布式调试",
     "comm_proto":"OpenHarmony软总线","features":["环境监测","自动灌溉","分布式协同","远程监控"],
     "tools":["DevEco","OpenHarmony源码","ST-Link"],
     "challenges":["OpenHarmony设备开发","传感器校准","自动控制逻辑","分布式架构"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"43","name":"智能储物柜","mcu":"STM32F407","mcu_fam":"Cortex-M4","mcu_bits":"32位",
     "sensors":"矩阵键盘/RFID","display":"LCD","comm":"WiFi/蓝牙",
     "input":"矩阵键盘+RFID","output":"电磁锁+LCD+蜂鸣器","power":"12V适配器","key_tech":"状态机+RFID+WiFi",
     "function":"电子储物柜的密码/刷卡开锁和管理","debug":"SWD+printf+LCD",
     "comm_proto":"SPI/WiFi","features":["密码开锁","RFID刷卡","WiFi远程管理","LCD状态显示"],
     "tools":["STM32CubeMX","HAL库","Keil"],
     "challenges":["多柜管理","RFID读取","电磁锁驱动","WiFi通信"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
    {"ch":"44","name":"能耗监测系统","mcu":"ESP32","mcu_fam":"Xtensa LX6","mcu_bits":"32位",
     "sensors":"PZEM-004T电能/电流互感器","display":"OLED","comm":"WiFi云平台",
     "input":"PZEM(UART)/ADC","output":"OLED+云平台","power":"5V适配器","key_tech":"电能计量+WiFi+云平台",
     "function":"监测电压电流功率能耗并上传云平台分析","debug":"串口printf+云平台",
     "comm_proto":"WiFi/MQTT/UART","features":["电压电流监测","功率计算","能耗统计","云平台可视化"],
     "tools":["Arduino IDE","ESP32包","PZEM库"],
     "challenges":["电能计量精度","WiFi稳定性","数据安全","云平台对接"],
     "realtime":False,"needs_sensor":True,"mcu_right":True},
]

for p in PROJECTS:
    ch = p["ch"]
    nm = p["name"]
    mcu = p["mcu"]
    # 10 single choice
    s(ch, "%s使用的主控芯片是？" % nm, [mcu, "ATmega328P", "PIC16F877A", "Arduino Uno"], "A", "%s采用%s作为主控。" % (nm, mcu))
    s(ch, "%s使用的传感器/输入器件是？" % nm, [p["sensors"], "仅GPS模块", "仅加速度计", "仅摄像头"], "A", "%s的输入包括%s。" % (nm, p["sensors"]))
    s(ch, "%s的显示方式是？" % nm, [p["display"], "无显示", "仅串口输出", "仅LED"], "A", "%s通过%s显示信息。" % (nm, p["display"]))
    s(ch, "%s的通信方式是？" % nm, [p["comm"], "仅CAN总线", "仅USB", "仅以太网"], "A", "%s通信方式：%s。" % (nm, p["comm"]))
    s(ch, "%s的主要功能是？" % nm, [p["function"], "仅测量电压", "仅显示时间", "仅播放音乐"], "A", p["function"])
    s(ch, "%s的供电方式是？" % nm, [p["power"], "仅纽扣电池", "仅以太网POE", "仅手摇发电"], "A", "%s供电：%s。" % (nm, p["power"]))
    s(ch, "%s的关键技术是？" % nm, [p["key_tech"], "仅GPIO翻转", "仅看门狗", "仅延时循环"], "A", "%s核心技术：%s。" % (nm, p["key_tech"]))
    s(ch, "%s的输出执行器件是？" % nm, [p["output"], "仅蜂鸣器", "仅LED", "无输出"], "A", "%s输出包括%s。" % (nm, p["output"]))
    s(ch, "%s中调试采用的主要方法是？" % nm, [p["debug"], "仅逻辑分析仪", "仅示波器", "无调试手段"], "A", "%s调试方法：%s。" % (nm, p["debug"]))
    s(ch, "%s的MCU内核属于？" % nm, [p["mcu_fam"]+"("+p["mcu_bits"]+")", "纯模拟电路", "FPGA", "DSP only"], "A", "%s使用%s内核(%s)。" % (nm, p["mcu_fam"], p["mcu_bits"]))
    # 5 multiple choice
    m(ch, "%s的主要功能特性包括？" % nm, p["features"][:4], ["A","B","C","D"], "%s核心功能。" % nm)
    m(ch, "%s的开发工具包括？" % nm, p["tools"]+["AutoCAD"], ["A","B","C"], "%s使用%s等工具开发。" % (nm, "/".join(p["tools"])))
    m(ch, "%s的技术难点包括？" % nm, p["challenges"][:4], ["A","B","C","D"], "%s面临的主要技术挑战。" % nm)
    m(ch, "嵌入式项目开发中%s涉及的硬件模块有？" % nm, [p["sensors"].split("/")[0][:8], p["display"][:8], p["output"].split("+")[0][:8], "外壳模具"], ["A","B","C"], "传感器/显示/输出是核心硬件；外壳模具非嵌入式开发范畴。")
    m(ch, "%s的通信协议/接口包括？" % nm, [p["comm_proto"].split("/")[0], "JTAG", "SWD", "I2C(调试用)"], ["A","D"] if "I2C" not in p["comm_proto"] else ["A","D"], "%s通信接口：%s。" % (nm, p["comm_proto"]))
    # 4 judge
    j(ch, "%s使用%s作为主控芯片。" % (nm, mcu), p["mcu_right"], "%s主控为%s。" % (nm, mcu))
    j(ch, "%s需要实时响应外部事件。" % nm, p["realtime"], "%s%s需要实时处理。" % (nm, "需要" if p["realtime"] else "不需要严格"))
    j(ch, "%s可以在不连接任何传感器的情况下正常工作。" % nm, not p["needs_sensor"], "%s%s传感器才能正常工作。" % (nm, "需要" if p["needs_sensor"] else "不依赖"))
    j(ch, "%s的开发需要阅读芯片数据手册和传感器手册。" % nm, True, "嵌入式开发必须参考数据手册。")
    # 3 short answer
    t(ch, "简述%s的系统架构和主要模块。" % nm,
      "%s系统架构：1)主控——%s(%s)；2)输入模块——%s；3)输出模块——%s；4)显示模块——%s；5)通信模块——%s；6)电源模块——%s。软件架构：初始化->主循环(传感器采集->数据处理->输出控制->显示更新->通信上传)。" % (nm, mcu, p["mcu_fam"], p["sensors"], p["output"], p["display"], p["comm"], p["power"]),
      "%s包含输入/输出/显示/通信/电源五大模块。" % nm)
    t(ch, "%s项目中遇到的主要技术难点及解决方法？" % nm,
      "技术难点：1)%s——需参考数据手册配置寄存器/使用HAL库或Arduino库；2)%s——通过示波器/逻辑分析仪排查时序和信号；3)%s——软件算法优化或状态机设计；4)调试——使用%s逐步排查。解决方法：分模块测试、参考官方例程、社区论坛求助。" % (p["challenges"][0], p["challenges"][1] if len(p["challenges"])>1 else "通信", p["challenges"][2] if len(p["challenges"])>2 else "控制逻辑", p["debug"]),
      "系统化排查从硬件到软件逐层定位。")
    t(ch, "如何从零开始开发%s？简述开发流程。" % nm,
      "流程：1)需求分析——明确%s的功能和性能指标；2)硬件选型——确定%s主控/传感器/显示/通信模块；3)原理图设计——各模块电路连接；4)PCB设计——布线制板焊接；5)软件搭建——使用%s创建工程配置外设；6)模块开发——逐个实现传感器驱动/显示驱动/通信/控制逻辑；7)集成测试——系统联调；8)优化调试——解决%s等技术问题；9)部署运行——现场测试和长期稳定性验证。" % (nm, mcu, "/".join(p["tools"]), p["challenges"][0]),
      "完整开发流程从需求到部署。")
