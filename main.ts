let avstand = 0
bitbot.select_model(BBModel.XL)
let minimumavstand = 10
basic.forever(function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (bitbot.sonar(BBPingUnit.Centimeters) <= minimumavstand) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.analogWritePin(AnalogPin.P1, 1023)
        bitbot.ledRotate(true, BBArms.Both)
        basic.pause(20000)
    }
    basic.pause(500)
})
