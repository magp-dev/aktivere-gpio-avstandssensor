let avstand = 0
let minimumavstand = 10
loops.everyInterval(1000, function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (bitbot.sonar(BBPingUnit.Centimeters) <= minimumavstand) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.analogWritePin(AnalogPin.P1, 1023)
        bitbot.ledRotate(true, BBArms.Both)
        basic.pause(20000)
    }
})
basic.forever(function () {
	
})
