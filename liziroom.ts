namespace SpriteKind {
    export const Lizi_Player = SpriteKind.create()
    export const Lizi_Food = SpriteKind.create()
}
namespace liziroom{
let Lizi_Cheerry_loacation = 0
let Lizi_Cherry: Sprite = null
let Lizi_spendtime = 0
let Lizi_cat: Sprite = null
let Lizi_cat_direction = 0
let Lizi_starttime = 0
export function init(){
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Lizi_cat_direction == 0) {
        Lizi_cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . e e e . . . . e e e . . . . . 
            . c d d c . . c d d c . . . . . 
            . c b d d f f d d b c . . . . . 
            . c 3 b d d b d b 3 c . . . . . 
            . f b 3 d d d d 3 b f . . . . . 
            . e d d d d d d d d e . . . . . 
            . e d f d d d d f d e . b f b . 
            . f d d f d d f d d f . f d f . 
            . f b d d b b d d 2 f . f d f . 
            . . f 2 2 2 2 2 2 b b f f d f . 
            . . f b d d d d d d b b d b f . 
            . . f d d d d d b d d f f f . . 
            . . f d f f f d f f d f . . . . 
            . . f f . . f f . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Lizi_cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e e . . . . e e e . 
            . . . . . c d d c . . c d d c . 
            . . . . . c b d d f f d d b c . 
            . . . . . c 3 b d b d d b 3 c . 
            . . . . . f b 3 d d d d 3 b f . 
            . . . . . e d d d d d d d d e . 
            . b f b . e d f d d d d f d e . 
            . f d f . f d d f d d f d d f . 
            . f d f . f 2 d d b b d d b f . 
            . f d f f b b 2 2 2 2 2 2 f . . 
            . f b d b b d d d d d d b f . . 
            . . f f f d d b d d d d d f . . 
            . . . . f d f f d f f f d f . . 
            . . . . f f . . f f . . f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Lizi_cat_direction == 0) {
        Lizi_cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . e e e . . . . e e e . . . . . 
            . c d d c . . c d d c . . . . . 
            . c b d d f f d d b c . . . . . 
            . c 3 b d d b d b 3 c . . . . . 
            . f b 3 d d d d 3 b f . . . . . 
            . e d d d d d d d d e . . . . . 
            . e d f d d d d f d e . b f b . 
            . f d d f d d f d d f . f d f . 
            . f b d d b b d d 2 f . f d f . 
            . . f 2 2 2 2 2 2 b b f f d f . 
            . . f b d d d d d d b b d b f . 
            . . f d d d d d b d d f f f . . 
            . . f d f f f d f f d f . . . . 
            . . f f . . f f . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Lizi_cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e e . . . . e e e . 
            . . . . . c d d c . . c d d c . 
            . . . . . c b d d f f d d b c . 
            . . . . . c 3 b d b d d b 3 c . 
            . . . . . f b 3 d d d d 3 b f . 
            . . . . . e d d d d d d d d e . 
            . b f b . e d f d d d d f d e . 
            . f d f . f d d f d d f d d f . 
            . f d f . f 2 d d b b d d b f . 
            . f d f f b b 2 2 2 2 2 2 f . . 
            . f b d b b d d d d d d b f . . 
            . . f f f d d b d d d d d f . . 
            . . . . f d f f d f f f d f . . 
            . . . . f f . . f f . . f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Lizi_Player, SpriteKind.Lizi_Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Lizi_cat_direction = 1
    Lizi_cat.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e . . . . e e e . 
        . . . . . c d d c . . c d d c . 
        . . . . . c b d d f f d d b c . 
        . . . . . c 3 b d b d d b 3 c . 
        . . . . . f b 3 d d d d 3 b f . 
        . . . . . e d d d d d d d d e . 
        . b f b . e d f d d d d f d e . 
        . f d f . f d d f d d f d d f . 
        . f d f . f 2 d d b b d d b f . 
        . f d f f b b 2 2 2 2 2 2 f . . 
        . f b d b b d d d d d d b f . . 
        . . f f f d d b d d d d d f . . 
        . . . . f d f f d f f f d f . . 
        . . . . f f . . f f . . f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function LiziMaze_display_result () {
    Lizi_spendtime = game.runtime() - Lizi_starttime
    game.splash("You have spent ", "" + convertToText(Lizi_spendtime / 1000) + " seconds")
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Lizi_Food)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Lizi_Player)
    gamejam.roomFinished(true)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Lizi_cat)
})
function LiziMaze_Cheery_creat () {
    Lizi_Cherry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Lizi_Food)
    Lizi_Cheerry_loacation = randint(1, 0)
    if (Lizi_Cheerry_loacation < 1) {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass2)
    } else if (Lizi_Cheerry_loacation == 2) {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass1)
    } else {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass3)
    }
}
sprites.onDestroyed(SpriteKind.Lizi_Food, function (sprite) {
    if (info.score() < 5) {
        LiziMaze_Start_finding()
    } else {
        LiziMaze_display_result()
    }
})
function LiziMaze_Start_finding () {
    LiziMaze_Cheery_creat()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Lizi_cat_direction = 0
    Lizi_cat.setImage(img`
        . . . . . . . . . . . . . . . . 
        . e e e . . . . e e e . . . . . 
        . c d d c . . c d d c . . . . . 
        . c b d d f f d d b c . . . . . 
        . c 3 b d d b d b 3 c . . . . . 
        . f b 3 d d d d 3 b f . . . . . 
        . e d d d d d d d d e . . . . . 
        . e d f d d d d f d e . b f b . 
        . f d d f d d f d d f . f d f . 
        . f b d d b b d d 2 f . f d f . 
        . . f 2 2 2 2 2 2 b b f f d f . 
        . . f b d d d d d d b b d b f . 
        . . f d d d d d b d d f f f . . 
        . . f d f f f d f f d f . . . . 
        . . f f . . f f . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
	
})
function LiziMaze_init () {
    tiles.setTilemap(tilemap`lizilevel1`)
    Lizi_cat = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . e e e . . . . e e e . . . . . 
        . c d d c . . c d d c . . . . . 
        . c b d d f f d d b c . . . . . 
        . c 3 b d d b d b 3 c . . . . . 
        . f b 3 d d d d 3 b f . . . . . 
        . e d d d d d d d d e . . . . . 
        . e d f d d d d f d e . b f b . 
        . f d d f d d f d d f . f d f . 
        . f b d d b b d d 2 f . f d f . 
        . . f 2 2 2 2 2 2 b b f f d f . 
        . . f b d d d d d d b b d b f . 
        . . f d d d d d b d d f f f . . 
        . . f d f f f d f f d f . . . . 
        . . f f . . f f . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Lizi_Player)
    controller.moveSprite(Lizi_cat, 160, 160)
    tiles.placeOnTile(Lizi_cat, tiles.getTileLocation(5, 3))
    scene.cameraFollowSprite(Lizi_cat)
    info.setScore(0)
    Lizi_cat_direction = 0
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Lizi_cat)
})

LiziMaze_init()
game.splash("Collect 5 Cherries", "as soon as possible!")
Lizi_starttime = game.runtime()
LiziMaze_Start_finding()
  }
}