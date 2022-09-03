function introJuego () {
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # #
        . # . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.showString("Go!")
}
// Salta el dino
input.onButtonPressed(Button.A, function () {
    cabezaDino.change(LedSpriteProperty.Y, -1)
    cuerpoDino.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    cuerpoDino.change(LedSpriteProperty.Y, 1)
    cabezaDino.change(LedSpriteProperty.Y, 1)
})
// Con este bn se agacha el dino. Lo que se debe hacer es cambiar la coordenada de la cabeza
input.onButtonPressed(Button.B, function () {
    cabezaDino.change(LedSpriteProperty.Y, 1)
    cabezaDino.change(LedSpriteProperty.X, 1)
    basic.pause(1000)
    cabezaDino.change(LedSpriteProperty.Y, -1)
    cabezaDino.change(LedSpriteProperty.X, -1)
})
let obstaculo: game.LedSprite = null
let cuerpoDino: game.LedSprite = null
let cabezaDino: game.LedSprite = null
cabezaDino = game.createSprite(1, 3)
cuerpoDino = game.createSprite(1, 4)
game.setScore(0)
game.setLife(2)
basic.forever(function () {
    obstaculo = game.createSprite(4, randint(3, 4))
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        obstaculo.change(LedSpriteProperty.X, -1)
        if (obstaculo.isTouching(cuerpoDino) || obstaculo.isTouching(cabezaDino)) {
            basic.pause(100)
            game.removeLife(1)
            obstaculo.delete()
        }
    }
    if (obstaculo.isTouchingEdge()) {
        obstaculo.delete()
    }
})
