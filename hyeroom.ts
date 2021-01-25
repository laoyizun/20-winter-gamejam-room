// 在此处添加您的代码
namespace SpriteKind {
    export const hyefood = SpriteKind.create()
    export const hyeplayer = SpriteKind.create()
    export const hyehelp = SpriteKind.create()
}
namespace hyeroom{

let 钥匙1数 = 0
let 钥匙1: Sprite = null
let hyebaoliu = 0
let hyesuijishu3 = 0
let hyesuijishu2 = 0
let hyesuijishu = 0
let hyecishu = 0
let hyebaoxiang3: Sprite = null
let hyebaoxiang2: Sprite = null
let hyebaoxiang1: Sprite = null
let hyehero: Sprite = null
export function init(){
gamejam.onMyGameUpdateInterval(500, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hyehero.overlapsWith(hyebaoxiang1)) {
        hyecishu = 1
        for (let index = 0; index < hyecishu; index++) {
            hyesuijishu = randint(0, 50)
            hyesuijishu2 = randint(0, 50)
            hyesuijishu3 = randint(1, 2)
            if (hyesuijishu3 == 1) {
                if (game.askForNumber("" + hyesuijishu + "+" + hyesuijishu2 + "=?") == hyesuijishu + hyesuijishu2) {
                    hyecishu += -1
                } else {
                    hyecishu = 10
                    game.splash("错！")
                    game.splash("重新来吧")
                }
            }
            if (hyesuijishu3 == 2) {
                if (hyesuijishu < hyesuijishu2) {
                    hyebaoliu = hyesuijishu
                    hyesuijishu = hyesuijishu2
                    hyesuijishu2 = hyebaoliu
                }
                if (game.askForNumber("" + hyesuijishu + "-" + hyesuijishu2 + "=?") == hyesuijishu - hyesuijishu2) {
                    hyecishu += -1
                } else {
                    hyecishu = 10
                    game.splash("错！")
                    game.splash("重新来吧")
                }
            }
        }
        hyebaoxiang1.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        钥匙1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . 4 . . 4 . . . . . 
            . . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.hyehelp)
        钥匙1.setPosition(110, 90)
    }
    if (hyehero.overlapsWith(hyebaoxiang2)) {
        if (钥匙1数 == 1) {
            tiles.setTilemap(tilemap`级别2`)
            hyebaoxiang2.say("下面有三个方块", 2000)
            hyebaoxiang2.say("你去摸一下黄方块", 2000)
        }
    }
    if (hyehero.overlapsWith(hyebaoxiang3)) {
    	
    }
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.hyehelp, function (sprite, otherSprite) {
    钥匙1数 = 1
})
scene.onOverlapTile(SpriteKind.hyeplayer, assets.tile`tile2`, function (sprite, location) {
    game.splash("黄：我下面没有方块")
})

tiles.setTilemap(tilemap`级别1`)
hyehero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.hyeplayer)
controller.moveSprite(hyehero)
scene.cameraFollowSprite(hyehero)
hyebaoxiang1 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 f f 4 4 4 4 e b . 
    b e 4 4 4 4 f 4 f 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 f 4 4 4 4 4 e b 
    b e 4 4 4 4 f f f f f 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.hyefood)
hyebaoxiang2 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 f f f 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 f 4 4 4 4 4 e b 
    b e 4 4 4 4 4 f 4 4 4 4 4 4 e b 
    b e 4 4 4 4 f 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 f f f 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.hyefood)
hyebaoxiang3 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 f f f 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 f 4 4 4 4 4 e b 
    b e 4 4 4 4 f f f 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 f 4 4 4 4 4 e b 
    b e e 4 4 4 f f f 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.hyefood)
hyebaoxiang1.setPosition(110, 90)
hyehero.setPosition(80, 60)
hyebaoxiang2.setPosition(10, 110)
hyebaoxiang3.setPosition(150, 10)
    }
}