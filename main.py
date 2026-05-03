def on_received_number(receivedNumber):
    global recieved_temperature
    recieved_temperature = receivedNumber
radio.on_received_number(on_received_number)

def on_log_full():
    global Log_Full
    Log_Full = True
    if Log_Full == True:
        while Log_Full == True:
            datalogger.mirror_to_serial(True)
            Led_On_full_Memory_Symbol()
            datalogger.mirror_to_serial(False)
datalogger.on_log_full(on_log_full)

def on_button_pressed_a():
    global clock, power_cut
    if clock == 1:
        kitronik_air_quality.set_time(18, 15, 0)
        kitronik_air_quality.set_date(12, 4, 2026)
        clock = 0
    power_cut = False
    kitronik_air_quality.control_display_on_off(kitronik_air_quality.on_off(False))
input.on_button_pressed(Button.A, on_button_pressed_a)

def Led_On_full_Memory_Symbol():
    basic.show_leds("""
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        . . # # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        . # # # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . # # #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        . # # # #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        """)
    basic.pause(500)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(500)

def on_minute_changed():
    global temperature_answer, data_logging_time
    if data_logging_time == 30:
        temperature_answer = 0
        datalogger.log(datalogger.create_cv("time", time))
        datalogger.log(datalogger.create_cv("temperature", temperature_answer))
        datalogger.log(datalogger.create_cv("humidity", kitronik_air_quality.read_humidity()))
        datalogger.log(datalogger.create_cv("IAQ Score", kitronik_air_quality.get_air_quality_score()))
        datalogger.log(datalogger.create_cv("IAQ%", kitronik_air_quality.get_air_quality_percent()))
        datalogger.log(datalogger.create_cv("eCO2", kitronik_air_quality.reade_co2()))
        datalogger.log(datalogger.create_cv("Pressure in MBAR",
                kitronik_air_quality.read_pressure(kitronik_air_quality.PressureUnitList.M_BAR)))
        datalogger.log(datalogger.create_cv("recieved temperature", recieved_temperature))
        datalogger.log(datalogger.create_cv("Date", kitronik_air_quality.read_date()))
        data_logging_time = 0
    else:
        data_logging_time += 1
timeanddate.on_minute_changed(on_minute_changed)

def radio_send_readings():
    radio.send_string(time)
    radio.send_string(env1)
    radio.send_string(env2)

def on_button_pressed_ab():
    global power_cut
    power_cut = False
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    kitronik_air_quality.control_display_on_off(kitronik_air_quality.on_off(True))
input.on_button_pressed(Button.B, on_button_pressed_b)

def if_statements_to_perfect_IAQ():
    if kitronik_air_quality.read_temperature(kitronik_air_quality.TemperatureUnitList.C) < 30:
        if kitronik_air_quality.read_temperature(kitronik_air_quality.TemperatureUnitList.C) > 15:
            if kitronik_air_quality.read_humidity() < 60:
                if kitronik_air_quality.read_humidity() > 30:
                    if kitronik_air_quality.get_air_quality_score() < 800:
                        if kitronik_air_quality.get_air_quality_percent() < 80:
                            if kitronik_air_quality.get_air_quality_percent() > 50:
                                if kitronik_air_quality.reade_co2() < 600:
                                    statusLEDs.show_color(kitronik_air_quality.colors(ZipLedColors.GREEN))
                                else:
                                    statusLEDs.show_color(kitronik_air_quality.colors(ZipLedColors.RED))
def Display_readings():
    kitronik_air_quality.show("" + str(kitronik_air_quality.read_time_parameter(TimeParameter.HOURS)) + " Hours",
        1,
        kitronik_air_quality.ShowAlign.LEFT)
    kitronik_air_quality.show("" + str(kitronik_air_quality.read_time_parameter(TimeParameter.MINUTES)) + " Minutes",
        2,
        kitronik_air_quality.ShowAlign.CENTRE)
    kitronik_air_quality.show("" + str(recieved_temperature) + " Rec Temp",
        3,
        kitronik_air_quality.ShowAlign.LEFT)
    kitronik_air_quality.show("" + str(temperature_final) + " Temperature in °C",
        4,
        kitronik_air_quality.ShowAlign.CENTRE)
    kitronik_air_quality.show("" + str(kitronik_air_quality.read_humidity()) + " Humidity",
        5,
        kitronik_air_quality.ShowAlign.CENTRE)
    kitronik_air_quality.show("" + str(kitronik_air_quality.get_air_quality_score()) + " IAQ score",
        6,
        kitronik_air_quality.ShowAlign.CENTRE)
    kitronik_air_quality.show("" + str(kitronik_air_quality.get_air_quality_percent()) + " IAQ%",
        7,
        kitronik_air_quality.ShowAlign.CENTRE)
    kitronik_air_quality.show("" + str(kitronik_air_quality.reade_co2()) + " Eco2",
        1,
        kitronik_air_quality.ShowAlign.RIGHT)
    kitronik_air_quality.show("" + str(kitronik_air_quality.read_pressure(kitronik_air_quality.PressureUnitList.M_BAR)) + " pressure in MBAR",
        8,
        kitronik_air_quality.ShowAlign.RIGHT)
    statusLEDs.set_brightness(10)
loop_number = 0
temperature_final = 0
temperature_answer = 0
recieved_temperature = 0
Log_Full = False
data_logging_time = 0
power_cut = False
clock = 0
env2 = ""
env1 = ""
time = ""
statusLEDs: kitronik_air_quality.airQualityZIPLEDs = None
radio.set_group(1)
statusLEDs = kitronik_air_quality.create_air_quality_zip_display()
kitronik_air_quality.setup_gas_sensor()
kitronik_air_quality.calc_baselines()
kitronik_air_quality.measure_data()
kitronik_air_quality.include_time(kitronik_air_quality.on_off(True))
kitronik_air_quality.include_temperature(kitronik_air_quality.TemperatureUnitList.C,
    kitronik_air_quality.on_off(True))
kitronik_air_quality.include_pressure(kitronik_air_quality.PressureUnitList.M_BAR,
    kitronik_air_quality.on_off(True))
kitronik_air_quality.include_humidity(kitronik_air_quality.on_off(True))
kitronik_air_quality.include_iaq(kitronik_air_quality.on_off(True))
kitronik_air_quality.include_co2(kitronik_air_quality.on_off(True))
kitronik_air_quality.include_light(kitronik_air_quality.on_off(True))
time = "time"
env1 = "env1"
env2 = "env2"
clock = 1
power_cut = True
data_logging_time = 0
Log_Full = False

def on_forever():
    global time, env1, env2, loop_number, temperature_final
    kitronik_air_quality.measure_data()
    if_statements_to_perfect_IAQ()
    kitronik_air_quality.log_data()
    kitronik_air_quality.refresh()
    time = "time" + kitronik_air_quality.read_time() + "/r"
    env1 = "env1" + convert_to_text(temperature_final) + convert_to_text(kitronik_air_quality.read_humidity()) + convert_to_text(kitronik_air_quality.get_air_quality_score()) + convert_to_text(kitronik_air_quality.get_air_quality_percent()) + "/r"
    env2 = "env2" + convert_to_text(kitronik_air_quality.reade_co2()) + convert_to_text(kitronik_air_quality.read_pressure(kitronik_air_quality.PressureUnitList.M_BAR)) + convert_to_text(input.light_level()) + "/r"
    if loop_number > 20:
        radio_send_readings()
        loop_number = 0
    loop_number += 1
    basic.pause(100)
    temperature_final = kitronik_air_quality.read_temperature(kitronik_air_quality.TemperatureUnitList.C)
    basic.pause(100)
    if power_cut == True:
        basic.show_leds("""
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
    else:
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # . . . .
            """)
    radio.set_group(2)
    Display_readings()
    radio.set_group(1)
    if temperature_final > 25:
        radio.send_number(3)
    elif temperature_final <= 10:
        radio.send_number(1)
    else:
        radio.send_number(2)
basic.forever(on_forever)
