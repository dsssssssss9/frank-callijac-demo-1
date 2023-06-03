modules.calliMatrix.setAll(0x000000)
modules.calliMatrix.setPixelColor(0, 0x0000ff)
basic.pause(1000)
basic.forever(function () {
    basic.pause(200)
    modules.calliMatrix.rotate(1)
})
