radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (50 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (60 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (70 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (80 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
