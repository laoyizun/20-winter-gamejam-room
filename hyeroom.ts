namespace SpriteKind {
    export const hyefood = SpriteKind.create()
    export const hyeplayer = SpriteKind.create()
    export const hyehelp = SpriteKind.create()
    export const hyehelp2 = SpriteKind.create()
    export const 黄宇恩great = SpriteKind.create()
    export const 黄宇恩bad = SpriteKind.create()
    export const 黄宇恩其他 = SpriteKind.create()
    export const 黄宇恩弹射物 = SpriteKind.create()
    export const 黄宇恩鬼 = SpriteKind.create()
}

namespace hyeroom{
let hyeyaoshi2: Sprite = null
let 黄宇恩苹果红: Sprite = null
let 黄宇恩苹果绿: Sprite = null
let 黄宇恩苹果黄: Sprite = null
let 黄宇恩弹射物2: Sprite = null
let sprite_list: Sprite[] = []
let 黄宇恩肯定3 = 0
let 黄宇恩ghost: Sprite = null
let 黄宇恩肯定2 = 0
let 黄宇恩肯定 = 0
let hyekending = 0
let hye钥匙1: Sprite = null
let hyebaoliu = 0
let hyesuijishu3 = 0
let hyesuijishu2 = 0
let hyesuijishu = 0
let hyecishu = 0
let 钥匙1数 = 0
let 黄宇恩方向 = 0
let yaoshi2shu = 0
let hyebaoxiang3: Sprite = null
let hyebaoxiang2: Sprite = null
let hyebaoxiang1: Sprite = null
let hyehero: Sprite = null
    export function init(){
scene.onOverlapTile(SpriteKind.hyeplayer, sprites.builtin.forestTiles29, function (sprite, location) {
    if (!(yaoshi2shu == 1)) {
        hyehero.x += -10
    }
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩great, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.黄宇恩弹射物, SpriteKind.黄宇恩bad, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    黄宇恩方向 = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    黄宇恩方向 = 2
})
sprites.onOverlap(SpriteKind.黄宇恩弹射物, SpriteKind.黄宇恩鬼, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
gamejam.onMyGameUpdateInterval(500, function () {
	
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩鬼, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
scene.onHitWall(SpriteKind.hyeplayer, function (sprite, location) {
    if (钥匙1数 == 1) {
        tiles.setWallAt(tiles.getTileLocation(2, 7), false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hyehero.overlapsWith(hyebaoxiang1)) {
        hyecishu = 10
        for (let index = 0; index < hyecishu; index++) {
            hyesuijishu = randint(0, 50)
            hyesuijishu2 = randint(0, 50)
            hyesuijishu3 = randint(1, 2)
            if (hyesuijishu3 == 1) {
                if (game.askForNumber("" + hyesuijishu + "+" + ("" + hyesuijishu2) + "=?") == hyesuijishu + hyesuijishu2) {
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
                if (game.askForNumber("" + hyesuijishu + "-" + ("" + hyesuijishu2) + "=?") == hyesuijishu - hyesuijishu2) {
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
        hye钥匙1 = sprites.create(img`
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
        hye钥匙1.setPosition(30, 20)
    }
    if (hyehero.overlapsWith(hyebaoxiang2)) {
        tiles.setTileAt(tiles.getTileLocation(12, 2), assets.tile`hyetile8`)
        tiles.setTileAt(tiles.getTileLocation(10, 0), assets.tile`hyetile2`)
        tiles.setTileAt(tiles.getTileLocation(12, 0), assets.tile`hyetile3`)
        tiles.setTileAt(tiles.getTileLocation(14, 0), assets.tile`hyetile4`)
        hyebaoxiang2.say("下面有三个方块", 2000)
        hyebaoxiang2.say("你去摸一下橙色方块", 2000)
        hyekending = 1
        钥匙1数 = 0
    }
    if (hyehero.overlapsWith(hyebaoxiang3)) {
        game.splash("按b射出子弹")
        game.splash("躲开黄色，碰到绿色，打死红色！")
        黄宇恩肯定 = 3
        黄宇恩肯定2 = 1
        yaoshi2shu = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    黄宇恩方向 = 4
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.hyehelp, function (sprite, otherSprite) {
    钥匙1数 = 1
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩bad, function (sprite, otherSprite) {
    info.changeScoreBy(-2)
    otherSprite.destroy()
})
info.onCountdownEnd(function () {
    黄宇恩肯定 = 99
    game.splash("恭喜你拿到了宝物！")
    game.splash("啊！有鬼！")
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩great)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩bad)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩其他)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.hyefood)
    tiles.setTilemap(tilemap`hyelevel_0`)
    info.setLife(10)
    for (let index = 0; index < 20; index++) {
        黄宇恩ghost = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.黄宇恩鬼)
        黄宇恩ghost.setVelocity(randint(-100, 100), randint(-100, 100))
        黄宇恩ghost.setPosition(randint(50, 180), randint(20, 100))
    }
    黄宇恩肯定3 = 1
    game.splash("鬼们正在跳舞，趁机逃走吧！")
    game.splash("别忘了用子弹！")
    sprite_list = sprites.allOfKind(SpriteKind.黄宇恩鬼)
    hyehero.setPosition(16, 96)
    info.setScore(0)
})
scene.onOverlapTile(SpriteKind.hyeplayer, assets.tile`hyetile8`, function (sprite, location) {
    if (hyekending == 1) {
        game.splash("黄：我下面没有钥匙")
        game.splash("红：我下面有钥匙")
        game.splash("绿：我下面没有钥匙")
        game.splash("绿是对的，红是错的，黄会谁便说。")
        game.splash("请挖开正确的洞")
    }
    hyekending = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (黄宇恩肯定2 == 1) {
        if (黄宇恩方向 == 1) {
            黄宇恩弹射物2 = sprites.createProjectileFromSprite(img`
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                `, hyehero, 0, -100)
            黄宇恩弹射物2.setKind(SpriteKind.黄宇恩弹射物)
        } else if (黄宇恩方向 == 2) {
            黄宇恩弹射物2 = sprites.createProjectileFromSprite(img`
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                `, hyehero, 0, 50)
            黄宇恩弹射物2.setKind(SpriteKind.黄宇恩弹射物)
        } else if (黄宇恩方向 == 3) {
            黄宇恩弹射物2 = sprites.createProjectileFromSprite(img`
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                `, hyehero, -100, 0)
            黄宇恩弹射物2.setKind(SpriteKind.黄宇恩弹射物)
        } else {
            黄宇恩弹射物2 = sprites.createProjectileFromSprite(img`
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                `, hyehero, 50, 0)
            黄宇恩弹射物2.setKind(SpriteKind.黄宇恩弹射物)
        }
    }
})
function 苹果 () {
    黄宇恩苹果黄 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 5 5 e e . . 
        . c e e e e e c 6 e e 5 5 5 e . 
        . c e e e 5 e c c 5 4 5 4 5 e . 
        c e e e 5 5 5 5 5 5 4 5 5 5 5 e 
        c e e 5 5 5 5 5 5 5 5 4 4 5 5 e 
        c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
        c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
        c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
        c e e 5 5 5 5 5 5 5 5 5 5 4 5 e 
        . e e e 5 5 5 5 5 5 5 5 5 4 e . 
        . 5 e e 5 5 5 5 5 5 5 5 4 5 e . 
        . . 5 e e 5 5 5 5 5 4 4 5 e . . 
        . . . 5 5 e e 4 4 4 5 e e . . . 
        . . . . . 5 5 e e e e . . . . . 
        `, SpriteKind.黄宇恩其他)
    黄宇恩苹果黄.setVelocity(randint(-100, 100), randint(-100, 100))
    黄宇恩苹果黄.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(黄宇恩苹果黄, sprites.dungeon.greenOuterSouth2)
    黄宇恩苹果绿 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 7 7 e e . . 
        . c e e e e e c 6 e e 7 7 7 e . 
        . c e e e 7 e c c 7 4 5 4 7 e . 
        c e e e 7 7 7 7 7 7 4 5 5 7 7 e 
        c e e 7 7 7 7 7 7 7 7 4 4 7 7 e 
        c e e 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c e e 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c e e 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c e e 7 7 7 7 7 7 7 7 7 7 4 7 e 
        . e e e 7 7 7 7 7 7 7 7 7 4 e . 
        . 7 e e 7 7 7 7 7 7 7 7 4 7 e . 
        . . 7 e e 7 7 7 7 7 4 4 7 e . . 
        . . . 7 7 e e 4 4 4 7 e e . . . 
        . . . . . 7 7 e e e e . . . . . 
        `, SpriteKind.黄宇恩great)
    tiles.placeOnRandomTile(黄宇恩苹果绿, sprites.dungeon.greenOuterSouth2)
    黄宇恩苹果绿.follow(hyehero, 50)
    黄宇恩苹果红 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.黄宇恩bad)
    tiles.placeOnRandomTile(黄宇恩苹果红, sprites.dungeon.greenOuterSouth2)
    黄宇恩苹果红.follow(hyehero, 50)
    pause(1000)
}
scene.onOverlapTile(SpriteKind.hyeplayer, sprites.builtin.forestTiles24, function (sprite, location) {
    if (!(钥匙1数 == 1)) {
        hyehero.x += -10
    }
})
scene.onOverlapTile(SpriteKind.hyeplayer, assets.tile`hyetile2`, function (sprite, location) {
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
            game.splash("yes！")
            game.splash("宝箱开了！")
            hyebaoxiang2.setImage(img`
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
            hyeyaoshi2 = sprites.create(img`
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
                `, SpriteKind.hyehelp2)
            hyeyaoshi2.setPosition(136, 15)
            hyekending = 100
        }
    }
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.hyehelp2, function (sprite, otherSprite) {
    yaoshi2shu = 1
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.hyeplayer, assets.tile`hyetile3`, function (sprite, location) {
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
            game.splash("啊！有蛇！")
            结束()
            gamejam.roomFinished(false)
        }
    }
})
scene.onOverlapTile(SpriteKind.hyeplayer, assets.tile`hyetile4`, function (sprite, location) {
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
            game.splash("啊！有蛇！")
            结束()
            gamejam.roomFinished(false)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    黄宇恩方向 = 3
})
function 结束 () {
    cubicbird.destroyAllSpriteOfKind(SpriteKind.hyeplayer)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.hyefood)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.hyehelp)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Projectile)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.hyehelp2)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩great)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩bad)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩其他)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.黄宇恩弹射物)
}
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩其他, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
})

tiles.setTilemap(tilemap`hyelevel_1`)
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
controller.moveSprite(hyehero, 100, 100)
game.splash("按a开始解密码锁")
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
hyebaoxiang1.setPosition(30, 20)
hyehero.setPosition(38, 31)
hyebaoxiang2.setPosition(136, 15)
hyebaoxiang3.setPosition(82, 110)
forever(function () {
    if (黄宇恩肯定3 == 1) {
        if (info.score() >= 10) {
            结束()
            gamejam.roomFinished(true)
        }
    }
})
forever(function () {
    if (黄宇恩肯定 == 1) {
        if (info.life() <= -10) {
            结束()
            gamejam.roomFinished(false)
        }
    }
})
forever(function () {
    if (黄宇恩肯定3 == 1) {
        for (let 值 of sprite_list) {
            值.setVelocity(randint(-100, 100), randint(-100, 100))
            pause(1000)
        }
    }
})
forever(function () {
    if (黄宇恩肯定 == 3) {
        苹果()
        info.startCountdown(4)
        黄宇恩肯定 = 1
    }
    if (黄宇恩肯定 == 1) {
        苹果()
    }
})
forever(function () {
    if (info.life() <= -10) {
        结束()
        gamejam.roomFinished(false)
    }
})
    }
    }