let First_num = 0
let Second_num = 0
input.onButtonPressed(Button.A, function () {
    First_num += 1
    basic.showNumber(First_num)
})
input.onButtonPressed(Button.AB, function () {
    if (Second_num == First_num) {
        basic.showString("" + Second_num + First_num)
    } else {
        basic.showString("" + Second_num + First_num)
    }
})
input.onButtonPressed(Button.B, function () {
    Second_num += 1
    basic.showNumber(Second_num)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
basic.forever(function () {
	
})
