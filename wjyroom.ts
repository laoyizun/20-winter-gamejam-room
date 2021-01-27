namespace SpriteKind {
    export const giao = SpriteKind.create()
    export const 传送门 = SpriteKind.create()
    export const 僵尸 = SpriteKind.create()
    export const water = SpriteKind.create()
    export const air = SpriteKind.create()
    export const 幽灵 = SpriteKind.create()
    export const 火 = SpriteKind.create()
    export const 传送门2 = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const wbosszd = SpriteKind.create()
    export const 动物 = SpriteKind.create()
    export const 虚空 = SpriteKind.create()
    export const 彩蛋 = SpriteKind.create()
    export const 成就 = SpriteKind.create()
    export const 出口 = SpriteKind.create()
    export const 胜利 = SpriteKind.create()
    export const w入口 = SpriteKind.create()
    export const 门 = SpriteKind.create()
    export const boss2 = SpriteKind.create()
}
namespace wjyroom{
    let w_啊巴啊巴 = 0
let 虚空: Sprite = null
let wmySprite2: Sprite = null
let boss2: Sprite = null
let 胜利: Sprite = null
let 鸭子 = 0
let 幽灵: Sprite = null
let 墙1 = 0
let wsboss = 0
let wbo_s_s: Sprite = null
let wboossssssss = 0
let z_d: Sprite = null
let wprojectile: Sprite = null
let 吴b = 0
let qiang = 0
let whp: StatusBarSprite = null
let w_b = 0
let 吴c = 0
let 吴a = 0
let 僵尸: Sprite = null
let water: Sprite = null
let 出口: Sprite = null
let 彩蛋: Sprite = null
let 分数 = 0
let wmySprite: Sprite = null
let 吴_猪角: Sprite = null
let 爱心 = 0
let water1 = 0
let wair = 0
let 地狱 = 0
let wboss = 0
let 动物: Sprite = null
let 灯关 = 0
let wwaterer = 0
let w人口 = 0
let wagain = 0
let 第1次胜利 = 0
let 第2次 = 0
第1次胜利 = 0
let last = 0
wagain = 0
w人口 = 0
wwaterer = 0
灯关 = 0
    export function init(){
sprites.onOverlap(SpriteKind.boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    whp.value += -2
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.彩蛋, function (sprite, otherSprite) {
    tiles.placeOnTile(吴_猪角, tiles.getTileLocation(13, 11))
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (吴a == 0) {
        吴a += 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.动物, function (sprite, otherSprite) {
    info.changeLifeBy(3)
    otherSprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (吴a == 1) {
        吴_猪角.vy = -60
        吴a += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.胜利, function (sprite, otherSprite) {
    otherSprite.destroy()
    qiang = 0
    last += 1
    wagain = 0
    finish()
    pause(100)
    wwaterer = 0
    灯关 = 0
    tiles.setTilemap(tilemap`wjy级别4`)
    for (let index = 0; index < 3; index++) {
        动物 = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.动物)
        tiles.placeOnRandomTile(动物, assets.tile`wjytile25`)
    }
    info.setScore(0)
    wboss = 0
    地狱 = 0
    wair = 0
    water1 = 0
    爱心 = 0
    吴_猪角 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    lantern.startLanternEffect(吴_猪角)
    lantern.setBreathingEnabled(true)
    wmySprite = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.传送门)
    分数 = 0
    info.setLife(20)
    彩蛋 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.彩蛋)
    tiles.placeOnTile(彩蛋, tiles.getTileLocation(8, 1))
    出口 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
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
        `, SpriteKind.成就)
    tiles.placeOnTile(出口, tiles.getTileLocation(13, 10))
    出口 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.出口)
    tiles.placeOnTile(出口, tiles.getTileLocation(15, 11))
    出口 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.w入口)
    tiles.placeOnTile(出口, tiles.getTileLocation(14, 6))
    water = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.water)
    water.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(water, tiles.getTileLocation(11, 4))
    for (let index = 0; index < 3; index++) {
        僵尸 = sprites.create(img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd111ddddddf......
            ......fd1dddddddbf......
            ......fd1dfbddbbff......
            ......fbddfcdbbcf.......
            .....ffffccddbfff.......
            ....fcb1bbbfcffff.......
            ....f1b1dcffffffff......
            ....fdfdf..ffffffffff...
            .....f.f.....ffffff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.僵尸)
        tiles.placeOnRandomTile(僵尸, assets.tile`wjytile16`)
        tiles.placeOnRandomTile(僵尸, assets.tile`wjytile12`)
        僵尸.setFlag(SpriteFlag.BounceOnWall, true)
        僵尸.setVelocity(-50, 0)
        僵尸.ay = 50
    }
    wmySprite.setFlag(SpriteFlag.Invisible, true)
    吴_猪角.ay = 100
    tiles.placeOnTile(吴_猪角, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(wmySprite, tiles.getTileLocation(14, 4))
    吴a = 1
    吴c = 0
    w_b = 0
    scene.cameraFollowSprite(吴_猪角)
    controller.moveSprite(吴_猪角, 100, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.门, function (sprite, otherSprite) {
    finish()
    gamejam.roomFinished(true)
})
scene.onOverlapTile(SpriteKind.giao, assets.tile`wjytile19`, function (sprite, location) {
    tiles.setTilemap(tilemap`wjy级别2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    finish()
    gamejam.roomFinished(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.僵尸, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (吴b >= 1) {
        wprojectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 吴_猪角, -70, 0)
    } else {
        wprojectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 吴_猪角, 70, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    吴_猪角.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    吴b = 0
})
function finish () {
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Player)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Projectile)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Food)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Enemy)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.giao)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.传送门)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.僵尸)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.water)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.air)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.幽灵)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.火)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.传送门2)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.boss)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.wbosszd)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.StatusBar)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.动物)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.虚空)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.彩蛋)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.成就)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.出口)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.胜利)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.w入口)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.门)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.火, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
scene.onHitWall(SpriteKind.wbosszd, function (sprite, location) {
    z_d.destroy()
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    wboossssssss = 0
    status.destroy()
    wbo_s_s.destroy()
    wsboss += 1
    wboossssssss += 1
    第1次胜利 += 1
    墙1 += 1
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    pause(1000)
    wair = 0
})
sprites.onOverlap(SpriteKind.虚空, SpriteKind.Player, function (sprite, otherSprite) {
    finish()
    gamejam.roomFinished(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.成就, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    分数 += 1
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.传送门, function (sprite, otherSprite) {
    tiles.placeOnTile(吴_猪角, tiles.getTileLocation(1, 8))
    地狱 += 1
    if (地狱 == 1) {
        for (let index = 0; index < 3; index++) {
            动物 = sprites.create(img`
                . . . . . . . . . . b 5 b . . . 
                . . . . . . . . . b 5 b . . . . 
                . . . . . . b b b b b b . . . . 
                . . . . . b b 5 5 5 5 5 b . . . 
                . . . . b b 5 d 1 f 5 5 d f . . 
                . . . . b 5 5 1 f f 5 d 4 c . . 
                . . . . b 5 5 d f b d d 4 4 . . 
                . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                b d d d b b d 5 5 4 4 4 4 4 b . 
                b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                c b d c d 5 5 b 5 5 5 5 5 5 b . 
                . c d d c c b d 5 5 5 5 5 d b . 
                . . c b d d d d d 5 5 5 b b . . 
                . . . c c c c c c c c b b . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.动物)
            tiles.placeOnRandomTile(动物, assets.tile`wjytile22`)
            动物.ay = 100
        }
        幽灵 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 . . . . . . . . 
            . 1 f 1 f 1 1 1 1 . . . . . . . 
            . 1 f 1 f 1 1 1 1 1 . . . . . . 
            . 1 1 1 1 1 1 1 1 1 . . . . . . 
            . 1 f 1 f 1 1 1 1 1 . . . . . . 
            . 1 f f f 1 1 1 1 1 1 . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 1 1 1 . . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.幽灵)
        幽灵.setFlag(SpriteFlag.BounceOnWall, true)
        幽灵.setVelocity(50, 0)
        幽灵.ay = -100
        幽灵.y = 吴_猪角.y + 32
        tiles.placeOnTile(幽灵, tiles.getTileLocation(5, 6))
        for (let index = 0; index < 3; index++) {
            僵尸 = sprites.create(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111dbf......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd111ddddddf......
                ......fd1dddddddbf......
                ......fd1dfbddbbff......
                ......fbddfcdbbcf.......
                .....ffffccddbfff.......
                ....fcb1bbbfcffff.......
                ....f1b1dcffffffff......
                ....fdfdf..ffffffffff...
                .....f.f.....ffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.僵尸)
            tiles.placeOnRandomTile(僵尸, assets.tile`wjytile29`)
            僵尸.setFlag(SpriteFlag.BounceOnWall, true)
            僵尸.setVelocity(-50, 0)
            僵尸.ay = 50
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    finish()
    gamejam.roomFinished(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    lantern.setLightBandWidth(50)
    pause(2000)
    lantern.setLightBandWidth(15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.water, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    wair += 1
    water.destroy()
    if (wair >= 1) {
        info.startCountdown(1)
        pause(1000)
        wwaterer += 1
    }
})
info.onLifeZero(function () {
    finish()
    gamejam.roomFinished(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.僵尸, function (sprite, otherSprite) {
    otherSprite.destroy()
    爱心 += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w入口, function (sprite, otherSprite) {
    w人口 += 1
})
sprites.onOverlap(SpriteKind.wbosszd, SpriteKind.动物, function (sprite, otherSprite) {
    otherSprite.destroy()
})
gamejam.onMyGameUpdateInterval(2000, function () {
    if (1 == 鸭子) {
        动物 = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.动物)
        tiles.placeOnRandomTile(动物, assets.tile`wjytile27`)
        z_d.follow(动物, 101)
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (wsboss == 1) {
        第1次胜利 += 1
        if (分数 >= 1) {
            game.splash("你竟然发现彩蛋")
            分数 = 0
        }
        if (第1次胜利 == 2) {
            胜利 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . 6 6 6 6 6 6 6 6 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 8 8 9 6 . . . . 
                . . . 6 9 6 9 6 8 8 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 9 6 9 6 9 6 9 6 . . . . 
                . . . 6 6 6 6 6 6 6 6 6 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.胜利)
            tiles.placeOnTile(胜利, tiles.getTileLocation(3, 13))
            wagain += 1
            第1次胜利 += 1
        }
        if (第1次胜利 == 5) {
            boss2 = sprites.create(img`
                . c c c c c c c c c c c c c c . 
                c b d d d d d d d d d d d d b c 
                c d d d d d d d d d d d d d d c 
                c d d d d d d d d d d d d d d c 
                c d d d d d d d d d d d d d d c 
                c d d d d d d d d d d d d d d c 
                c d d d d d d d d d d d d d d c 
                c b d d d d d d d d d d d d b c 
                c c b b b b b b b b b b b b c c 
                c c f f f f f f f f f f f f c c 
                c b c 4 4 c 7 c 6 6 c 3 c c b c 
                c b c 4 4 c 7 c 6 6 c 3 c c b c 
                f b c 4 4 c 7 c 6 6 c 3 c c b f 
                f d c c c c c c c c c c c c d f 
                f d c b b d d d d d d b b c d f 
                f d f f f f f f f f f f f f d f 
                `, SpriteKind.门)
            info.changeScoreBy(1)
            tiles.placeOnTile(boss2, tiles.getTileLocation(3, 13))
            qiang += 1
        }
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (地狱 == 1) {
        wmySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 5 4 7 . . . . . . 
            . . . . 7 7 5 7 2 4 7 . . . . . 
            . . . . 4 2 5 5 5 4 7 . . . . . 
            . . . . 4 2 2 5 4 2 7 7 . . . . 
            . . . . 7 5 5 4 2 2 7 . . . . . 
            . . . . . 5 5 4 2 4 . . . . . . 
            . . . . . . 7 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.火)
        wmySprite2.setVelocity(50, 50)
        wmySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 5 4 7 . . . . . . 
            . . . . 7 7 5 7 2 4 7 . . . . . 
            . . . . 4 2 5 5 5 4 7 . . . . . 
            . . . . 4 2 2 5 4 2 7 7 . . . . 
            . . . . 7 5 5 4 2 2 7 . . . . . 
            . . . . . 5 5 4 2 4 . . . . . . 
            . . . . . . 7 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.火)
        wmySprite2.setVelocity(-50, 50)
        wmySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 5 4 7 . . . . . . 
            . . . . 7 7 5 7 2 4 7 . . . . . 
            . . . . 4 2 5 5 5 4 7 . . . . . 
            . . . . 4 2 2 5 4 2 7 7 . . . . 
            . . . . 7 5 5 4 2 2 7 . . . . . 
            . . . . . 5 5 4 2 4 . . . . . . 
            . . . . . . 7 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.火)
        wmySprite2.setVelocity(50, -50)
        wmySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 5 4 7 . . . . . . 
            . . . . 7 7 5 7 2 4 7 . . . . . 
            . . . . 4 2 5 5 5 4 7 . . . . . 
            . . . . 4 2 2 5 4 2 7 7 . . . . 
            . . . . 7 5 5 4 2 2 7 . . . . . 
            . . . . . 5 5 4 2 4 . . . . . . 
            . . . . . . 7 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.火)
        wmySprite2.setVelocity(-50, -50)
        wmySprite2.follow(幽灵)
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (wwaterer == 1) {
        water = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.water)
        water.setFlag(SpriteFlag.Invisible, true)
        tiles.placeOnTile(water, tiles.getTileLocation(11, 4))
        wwaterer = 0
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (w人口) {
        wboss += 1
        w人口 = 0
        if (wboss == 1) {
            鸭子 = 0
            鸭子 += 1
            wsboss = 0
            虚空 = sprites.create(img`
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                `, SpriteKind.虚空)
            tiles.placeOnTile(虚空, tiles.getTileLocation(6, 15))
            w_啊巴啊巴 = 0
            tiles.placeOnTile(吴_猪角, tiles.getTileLocation(0, 11))
            wbo_s_s = sprites.create(img`
                ....................
                .......f4f4f........
                ..4ff4.f2f2f.4ff4...
                ..2ff2.fffff.2ff2...
                ..f22f.f222f.f22f...
                ..f22f.f222f.f22f...
                ...ff...fff...ff....
                ..fffffffffffffff...
                ..fffffffffffffff...
                ........fff.........
                ....ffffffffff......
                ....ffffffffff......
                ........fff.........
                ......fffffff.......
                ......fffffff.......
                ........fff.........
                .........fff........
                ..........fff.......
                ...........ff.......
                ....................
                `, SpriteKind.boss)
            w_啊巴啊巴 += 1
            whp = statusbars.create(20, 4, StatusBarKind.Health)
            whp.attachToSprite(wbo_s_s)
            whp.setBarBorder(10, 2)
            wbo_s_s.setVelocity(50, 50)
            wbo_s_s.setFlag(SpriteFlag.BounceOnWall, true)
            tiles.placeOnTile(wbo_s_s, tiles.getTileLocation(5, 11))
        }
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (w_啊巴啊巴 == 1) {
        z_d = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.wbosszd)
        z_d.x = wbo_s_s.x
        z_d.y = wbo_s_s.y
        z_d.follow(吴_猪角, 100)
    }
})
gamejam.onMyGameUpdateInterval(1000, function () {
    if (wboossssssss == 1) {
        z_d.destroy()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    吴_猪角.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    吴b += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wbosszd, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.出口, function (sprite, otherSprite) {
    tiles.placeOnTile(吴_猪角, tiles.getTileLocation(7, 0))
})

tiles.setTilemap(tilemap`wjy级别3`)
for (let index = 0; index < 3; index++) {
    动物 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.动物)
    tiles.placeOnRandomTile(动物, assets.tile`wjytile25`)
}
info.setScore(0)
wboss = 0
地狱 = 0
wair = 0
water1 = 0
爱心 = 0
吴_猪角 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
wmySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.传送门)
分数 = 0
info.setLife(100000)
彩蛋 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.彩蛋)
tiles.placeOnTile(彩蛋, tiles.getTileLocation(8, 1))
出口 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
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
    `, SpriteKind.成就)
tiles.placeOnTile(出口, tiles.getTileLocation(13, 10))
出口 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.出口)
tiles.placeOnTile(出口, tiles.getTileLocation(15, 11))
water = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.water)
water.setFlag(SpriteFlag.Invisible, true)
tiles.placeOnTile(water, tiles.getTileLocation(11, 4))
出口 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.w入口)
tiles.placeOnTile(出口, tiles.getTileLocation(14, 6))
for (let index = 0; index < 3; index++) {
    僵尸 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.僵尸)
    tiles.placeOnRandomTile(僵尸, assets.tile`wjytile16`)
    tiles.placeOnRandomTile(僵尸, assets.tile`wjytile12`)
    僵尸.setFlag(SpriteFlag.BounceOnWall, true)
    僵尸.setVelocity(-50, 0)
    僵尸.ay = 50
}
wmySprite.setFlag(SpriteFlag.Invisible, true)
吴_猪角.ay = 100
tiles.placeOnTile(吴_猪角, tiles.getTileLocation(2, 2))
tiles.placeOnTile(wmySprite, tiles.getTileLocation(14, 4))
吴a = 1
吴c = 0
w_b = 0
scene.cameraFollowSprite(吴_猪角)
controller.moveSprite(吴_猪角, 100, 0)
forever(function () {
    if (qiang == 1) {
        tiles.setWallAt(tiles.getTileLocation(2, 13), true)
        tiles.setWallAt(tiles.getTileLocation(3, 12), true)
        tiles.setWallAt(tiles.getTileLocation(4, 13), true)
        tiles.setTileAt(tiles.getTileLocation(2, 13), assets.tile`wjytile23`)
        tiles.setTileAt(tiles.getTileLocation(3, 12), assets.tile`wjytile23`)
        tiles.setTileAt(tiles.getTileLocation(4, 13), assets.tile`wjytile23`)
    }
    if (墙1 == 2) {
        tiles.setWallAt(tiles.getTileLocation(2, 13), false)
        tiles.setWallAt(tiles.getTileLocation(3, 12), false)
        tiles.setWallAt(tiles.getTileLocation(4, 13), false)
        tiles.setTileAt(tiles.getTileLocation(2, 13), assets.tile`wjytile28`)
        tiles.setTileAt(tiles.getTileLocation(3, 12), assets.tile`wjytile28`)
        tiles.setTileAt(tiles.getTileLocation(4, 13), assets.tile`wjytile28`)
    }
})
forever(function () {
	
})
forever(function () {
    if (last == 1) {
        胜利.destroy()
        last = 0
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (爱心 == 1) {
        info.changeLifeBy(2)
        爱心 = 0
    }
})
    }}
