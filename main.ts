input.onButtonPressed(Button.A, function () {
    led2 = !(led2)
    if (led2) {
        radio.sendString("on")
    } else {
        radio.sendString("off")
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("k")
    basic.showIcon(IconNames.Triangle)
})
let led2 = false
led2 = true
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -500) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.Y) > 500) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) < -500) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) > 500) {
        radio.sendNumber(5)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) < 500 && input.acceleration(Dimension.X) > -500 && (input.acceleration(Dimension.Y) < 500 && input.acceleration(Dimension.Y) > -500)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
