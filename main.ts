input.onSound(DetectedSound.Loud, function () {
    flag = !(flag)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    FLAG_2 = !(FLAG_2)
})
let FLAG_2 = false
let flag = false
flag = true
FLAG_2 = true
basic.forever(function () {
    if (flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (FLAG_2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
