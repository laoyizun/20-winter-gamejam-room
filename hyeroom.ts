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
  let 随机数红黄宇恩 = 0
let 黄宇恩苹果红 : Sprite = null
let 随机数绿黄宇恩 = 0
let 黄宇恩苹果绿 : Sprite = null
let 随机数黄黄宇恩 = 0
let 黄宇恩苹果黄 : Sprite = null
let 黄宇恩弹射物2 : Sprite = null
let 黄宇恩肯定2 = 0
let 黄宇恩肯定 = 0
let yaoshi2shu = 0
let 钥匙1数 = 0
let hye钥匙1 : Sprite = null
let hyebaoliu = 0
let hyesuijishu3 = 0
let hyesuijishu2 = 0
let hyesuijishu = 0
let hyecishu = 0
let 黄宇恩方向 = 0
let hyeyaoshi2 : Sprite = null
let hyekending = 0
let hyebaoxiang3 : Sprite = null
let hyebaoxiang2 : Sprite = null
let hyebaoxiang1 : Sprite = null
let hyehero : Sprite = null

export function init(){

scene.onOverlapTile(SpriteKind.hyeplayer, myTiles.hyetile2, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
    if (hyekending == 1) {
        game.splash("黄：我下面没有钥匙")
        game.splash("红：我下面有钥匙")
        game.splash("绿：我下面没有钥匙")
        game.splash("绿是对的，红是错的，黄会谁便说。")
        game.splash("请挖开正确的洞")
        hyekending = 0
    }
    
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
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
            hyeyaoshi2.setPosition(10, 110)
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩great, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.黄宇恩弹射物, SpriteKind.黄宇恩bad, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    
    黄宇恩方向 = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    
    黄宇恩方向 = 2
})
gamejam.onMyGameUpdateInterval(500, function on_my_game_update_interval() {
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (hyehero.overlapsWith(hyebaoxiang1)) {
        hyecishu = 1
        for (let index = 0; index < hyecishu; index++) {
            hyesuijishu = randint(0, 50)
            hyesuijishu2 = randint(0, 50)
            hyesuijishu3 = randint(1, 2)
            if (hyesuijishu3 == 1) {
                if (game.askForNumber("" + ("" + hyesuijishu) + "+" + ("" + hyesuijishu2) + "=?") == hyesuijishu + hyesuijishu2) {
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
                
                if (game.askForNumber("" + ("" + hyesuijishu) + "-" + ("" + hyesuijishu2) + "=?") == hyesuijishu - hyesuijishu2) {
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
        hye钥匙1.setPosition(110, 90)
    }
    
    if (hyehero.overlapsWith(hyebaoxiang2)) {
        if (钥匙1数 == 1) {
            tiles.setTilemap(tilemap`
                hyelevel
            `)
            hyebaoxiang2.say("下面有三个方块", 2000)
            hyebaoxiang2.say("你去摸一下黄方块", 2000)
            hyekending = 1
        }
        
    }
    
    if (hyehero.overlapsWith(hyebaoxiang3)) {
        if (yaoshi2shu == 1) {
            tiles.setTilemap(tilemap`
                hyelevel_0
            `)
            game.splash("躲开黄色，碰到绿色，打死红色！")
            黄宇恩肯定 = 3
            黄宇恩肯定2 = 1
        }
        
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    黄宇恩方向 = 4
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.hyehelp, function on_on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    
    钥匙1数 = 1
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩bad, function on_on_overlap4(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
})
info.onCountdownEnd(function on_countdown_end() {
    结束()
    gamejam.roomFinished(true)
})
sprites.onOverlap(SpriteKind.hyehelp2, SpriteKind.hyeplayer, function on_on_overlap5(sprite: Sprite, otherSprite: Sprite) {
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
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
    
})
function 苹果() {
    
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
    随机数黄黄宇恩 = randint(1, 3)
    if (随机数黄黄宇恩 == 1) {
        tiles.placeOnRandomTile(黄宇恩苹果黄, sprites.dungeon.greenOuterSouthEast)
    } else if (随机数黄黄宇恩 == 2) {
        tiles.placeOnRandomTile(黄宇恩苹果黄, sprites.dungeon.greenOuterWest1)
    } else {
        tiles.placeOnRandomTile(黄宇恩苹果黄, sprites.dungeon.greenOuterSouth0)
    }
    
    黄宇恩苹果黄.setVelocity(50, 50)
    黄宇恩苹果黄.setFlag(SpriteFlag.DestroyOnWall, true)
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
    随机数绿黄宇恩 = randint(1, 3)
    if (随机数绿黄宇恩 == 1) {
        tiles.placeOnRandomTile(黄宇恩苹果绿, sprites.dungeon.greenOuterSouthEast)
    } else if (随机数绿黄宇恩 == 2) {
        tiles.placeOnRandomTile(黄宇恩苹果绿, sprites.dungeon.greenOuterWest1)
    } else {
        tiles.placeOnRandomTile(黄宇恩苹果绿, sprites.dungeon.greenOuterSouth0)
    }
    
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
    随机数红黄宇恩 = randint(1, 3)
    if (随机数红黄宇恩 == 1) {
        tiles.placeOnRandomTile(黄宇恩苹果红, sprites.dungeon.greenOuterSouthEast)
    } else if (随机数红黄宇恩 == 2) {
        tiles.placeOnRandomTile(黄宇恩苹果红, sprites.dungeon.greenOuterWest1)
    } else {
        tiles.placeOnRandomTile(黄宇恩苹果红, sprites.dungeon.greenOuterSouth0)
    }
    
    黄宇恩苹果红.follow(hyehero, 50)
}

scene.onOverlapTile(SpriteKind.hyeplayer, myTiles.hyetile3, function on_overlap_tile2(sprite: Sprite, location: tiles.Location) {
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
            game.splash("啊！有蛇！")
            结束()
            gamejam.roomFinished(false)
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.hyehelp2, function on_on_overlap6(sprite: Sprite, otherSprite: Sprite) {
    
    yaoshi2shu = 1
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.hyeplayer, myTiles.hyetile4, function on_overlap_tile3(sprite: Sprite, location: tiles.Location) {
    if (hyekending == 0) {
        if (controller.A.isPressed()) {
            game.splash("啊！有蛇！")
            结束()
            gamejam.roomFinished(false)
        }
        
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    黄宇恩方向 = 3
})
function 结束() {
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

sprites.onOverlap(SpriteKind.hyeplayer, SpriteKind.黄宇恩其他, function on_on_overlap7(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
})
tiles.setTilemap(tilemap`
    hyelevel_1
`)
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
forever(function on_forever() {
    
    if (黄宇恩肯定 == 3) {
        苹果()
        info.startCountdown(20)
        pause(1000)
        黄宇恩肯定 = 1
    }
    
    if (黄宇恩肯定 == 1) {
        苹果()
        pause(1000)
    }
    
})
forever(function on_forever2() {
    if (info.life() == -10) {
        结束()
        gamejam.roomFinished(false)
    }
    
})
}
}