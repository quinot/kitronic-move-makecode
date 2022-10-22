images.iconImage(IconNames.Rabbit).scrollImage(1, 200)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
kitronik_servo_lite.neutral()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) != 0) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        if (pins.digitalReadPin(DigitalPin.P16) != 0) {
            strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        if (input.buttonIsPressed(Button.B)) {
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        } else {
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        kitronik_servo_lite.forward()
    } else if (input.buttonIsPressed(Button.B)) {
        kitronik_servo_lite.backward()
    } else {
        kitronik_servo_lite.stop()
    }
    strip.show()
    basic.pause(10)
})
