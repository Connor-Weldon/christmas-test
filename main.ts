input.onButtonPressed(Button.A, function () {
    millimeters += -1
    basic.showNumber(millimeters)
})
input.onButtonPressed(Button.B, function () {
    millimeters += -2
    basic.showNumber(millimeters)
})
input.onGesture(Gesture.Shake, function () {
    millimeters += -5
    basic.showNumber(millimeters)
})
let millimeters = 0
millimeters = 20
if (millimeters == 20) {
    basic.showNumber(20)
}
if (millimeters > 2) {
    music.playTone(262, music.beat(BeatFraction.Whole))
}
if (millimeters == 0) {
    basic.showIcon(IconNames.Sad)
    basic.showString("empty")
}
