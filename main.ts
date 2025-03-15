let avstand = 0
let minimumavstand = 10
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (avstand <= minimumavstand) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        bitbot.ledRotate(true, BBArms.Both)
        basic.pause(20000)
    }
})
