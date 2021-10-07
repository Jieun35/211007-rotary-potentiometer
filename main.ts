let 가변저항 = 0
/**
 * 가변저항3
 */
function 전체끄기 () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
}
basic.forever(function () {
    basic.showNumber(가변저항)
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    if (0 < 가변저항 && 가변저항 < 350) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (350 < 가변저항 && 가변저항 < 700) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (700 < 가변저항 && 가변저항 < 1023) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else if (false) {
    	
    }
})
