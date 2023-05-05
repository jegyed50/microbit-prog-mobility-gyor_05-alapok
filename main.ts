// 1 sor, 1 oszlop
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let column = 0; column <= 4; column++) {
        led.toggle(column, 0)
        basic.pause(500)
    }
    for (let row = 0; row <= 4; row++) {
        led.toggle(0, row)
        basic.pause(500)
    }
    basic.pause(500)
})
// F1
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let row2 = 0; row2 <= 4; row2++) {
        basic.pause(1000)
        for (let column2 = 0; column2 <= 1; column2++) {
            led.toggle(row2, column2 + 3)
        }
    }
    basic.pause(randint(1000, 5000))
    basic.clearScreen()
})
// 5x5 kitölt
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let column3 = 0; column3 <= 4; column3++) {
        for (let row3 = 0; row3 <= 4; row3++) {
            led.toggle(row3, column3)
            basic.pause(300)
        }
    }
})
// Véletlen minta
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    for (let index = 0; index < 100; index++) {
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(300)
    }
})
led.setBrightness(50)
music.setVolume(255)
basic.forever(function () {
	
})
