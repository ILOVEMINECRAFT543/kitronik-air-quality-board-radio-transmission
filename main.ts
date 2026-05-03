radio.onReceivedNumber(function (receivedNumber) {
    recieved_temperature = receivedNumber
})
datalogger.onLogFull(function () {
    Log_Full = true
    if (Log_Full == true) {
        while (Log_Full == true) {
            datalogger.mirrorToSerial(true)
            Led_On_full_Memory_Symbol()
            datalogger.mirrorToSerial(false)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (clock == 1) {
        kitronik_air_quality.setTime(14, 0, 0)
        kitronik_air_quality.setDate(26, 4, 2026)
        clock = 0
    }
    power_cut = false
    kitronik_air_quality.controlDisplayOnOff(kitronik_air_quality.onOff(false))
})
function display_screen () {
    kitronik_air_quality.show(kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C), 1, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show(kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.mBar), 2, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + kitronik_air_quality.readeCO2() + "eCO2", 3, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + kitronik_air_quality.getAirQualityScore() + "IAQ score", 4, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + kitronik_air_quality.readHumidity() + "Humidity", 5, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + kitronik_air_quality.getAirQualityPercent() + "IAQ %", 6, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show(kitronik_air_quality.readTime(), 7, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + Log_Full + "Log Status", 8, kitronik_air_quality.ShowAlign.Left)
}
function Led_On_full_Memory_Symbol () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
}
timeanddate.onMinuteChanged(function () {
    if (data_logging_time == 30) {
        let temperature_answer = 0
        datalogger.log(datalogger.createCV("time", time))
        datalogger.log(datalogger.createCV("temperature", temperature_answer))
        datalogger.log(datalogger.createCV("humidity", kitronik_air_quality.readHumidity()))
        datalogger.log(datalogger.createCV("IAQ Score", kitronik_air_quality.getAirQualityScore()))
        datalogger.log(datalogger.createCV("IAQ%", kitronik_air_quality.getAirQualityPercent()))
        datalogger.log(datalogger.createCV("eCO2", kitronik_air_quality.readeCO2()))
        datalogger.log(datalogger.createCV("Pressure in MBAR", kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.mBar)))
        datalogger.log(datalogger.createCV("recieved temperature", recieved_temperature))
        datalogger.log(datalogger.createCV("Date", kitronik_air_quality.readDate()))
        data_logging_time = 0
    } else {
        data_logging_time += 1
    }
})
function radio_send_readings () {
    radio.sendString(time)
    radio.sendString(env1)
    radio.sendString(env2)
}
input.onButtonPressed(Button.AB, function () {
    power_cut = false
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.controlDisplayOnOff(kitronik_air_quality.onOff(true))
})
function if_statements_to_perfect_IAQ () {
    if (kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C) < 30) {
        if (kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C) > 15) {
            if (kitronik_air_quality.readHumidity() < 60) {
                if (kitronik_air_quality.readHumidity() > 30) {
                    if (kitronik_air_quality.getAirQualityScore() < 800) {
                        if (kitronik_air_quality.getAirQualityPercent() < 80) {
                            if (kitronik_air_quality.getAirQualityPercent() > 50) {
                                if (kitronik_air_quality.readeCO2() < 600) {
                                    statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Green))
                                } else {
                                    statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Red))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function Display_readings () {
    kitronik_air_quality.show("" + kitronik_air_quality.readTimeParameter(TimeParameter.Hours) + " Hours", 1, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + kitronik_air_quality.readTimeParameter(TimeParameter.Minutes) + " Minutes", 2, kitronik_air_quality.ShowAlign.Centre)
    kitronik_air_quality.show("" + recieved_temperature + " Rec Temp", 3, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("" + temperature_final + " Temperature in °C", 4, kitronik_air_quality.ShowAlign.Centre)
    kitronik_air_quality.show("" + kitronik_air_quality.readHumidity() + " Humidity", 5, kitronik_air_quality.ShowAlign.Centre)
    kitronik_air_quality.show("" + kitronik_air_quality.getAirQualityScore() + " IAQ score", 6, kitronik_air_quality.ShowAlign.Centre)
    kitronik_air_quality.show("" + kitronik_air_quality.getAirQualityPercent() + " IAQ%", 7, kitronik_air_quality.ShowAlign.Centre)
    kitronik_air_quality.show("" + kitronik_air_quality.readeCO2() + " Eco2", 1, kitronik_air_quality.ShowAlign.Right)
    kitronik_air_quality.show("" + kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.mBar) + " pressure in MBAR", 8, kitronik_air_quality.ShowAlign.Right)
    statusLEDs.setBrightness(10)
}
let temperature_final = 0
let recieved_temperature = 0
let Log_Full = false
let data_logging_time = 0
let power_cut = false
let clock = 0
let env2 = ""
let env1 = ""
let time = ""
let statusLEDs: kitronik_air_quality.airQualityZIPLEDs = null
radio.setGroup(1)
statusLEDs = kitronik_air_quality.createAirQualityZIPDisplay()
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
kitronik_air_quality.measureData()
kitronik_air_quality.includeTime(kitronik_air_quality.onOff(true))
kitronik_air_quality.includeTemperature(kitronik_air_quality.TemperatureUnitList.C, kitronik_air_quality.onOff(true))
kitronik_air_quality.includePressure(kitronik_air_quality.PressureUnitList.mBar, kitronik_air_quality.onOff(true))
kitronik_air_quality.includeHumidity(kitronik_air_quality.onOff(true))
kitronik_air_quality.includeIAQ(kitronik_air_quality.onOff(true))
kitronik_air_quality.includeCO2(kitronik_air_quality.onOff(true))
kitronik_air_quality.includeLight(kitronik_air_quality.onOff(true))
time = "time"
env1 = "env1"
env2 = "env2"
clock = 1
power_cut = true
data_logging_time = 0
Log_Full = false
basic.forever(function () {
    kitronik_air_quality.measureData()
    if_statements_to_perfect_IAQ()
    kitronik_air_quality.logData()
    kitronik_air_quality.refresh()
    time = "time" + kitronik_air_quality.readTime() + "/r"
    env1 = "env1" + convertToText(temperature_final) + convertToText(kitronik_air_quality.readHumidity()) + convertToText(kitronik_air_quality.getAirQualityScore()) + convertToText(kitronik_air_quality.getAirQualityPercent()) + "/r"
    env2 = "env2" + convertToText(kitronik_air_quality.readeCO2()) + convertToText(kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.mBar)) + convertToText(input.lightLevel()) + "/r"
    basic.pause(100)
    temperature_final = kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C)
    basic.pause(100)
    if (power_cut == true) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # . . . .
            `)
    }
    radio.setGroup(2)
    display_screen()
    radio.setGroup(1)
    if (temperature_final > 25) {
        radio.sendNumber(3)
    } else if (temperature_final <= 10) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
})
