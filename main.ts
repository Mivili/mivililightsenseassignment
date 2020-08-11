// c. Once button A is pressed, stop the alarm.
input.onButtonPressed(Button.A, function () {
    buttonAPressed = true
})
// 1. Read in the light sensor and store it in an appropriately named variable.
// 2. When the light sensor gets above 20 (or whatever you feel is a sufficient level) it will call the "Alarm" Function and stop reading light levels.
function checklightlevelplay () {
    buttonAPressed = false
    while (true) {
        ReadLight = input.lightLevel()
        if (ReadLight >= 150) {
            Alarm()
            break;
        }
    }
}
// d. Once button B is pressed, start reading the light level again. Only enable this once the alarm is disabled.
input.onButtonPressed(Button.B, function () {
    if (buttonAPressed == true) {
        checklightlevelplay()
    }
})
// 3. The Alarm Function:
// a. Choose a tone as your alarm.
// b. Sound the tone, wait for a short period, and sound the tone again.
function Alarm () {
    while (!(buttonAPressed)) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    }
}
let ReadLight = 0
let buttonAPressed = false
checklightlevelplay()
