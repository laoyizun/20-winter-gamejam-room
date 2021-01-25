namespace liziroom {
  let Lizi_spendtime = 0
  let Lizi_Cheerry_loacation = 0
  let Lizi_Cherry: Sprite = null
  let Lizi_cat: Sprite = null
  let Lizi_cat_direction = 0
  let Lizi_starttime = 0
  export function init() {
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
      if (Lizi_cat_direction == 0) {
        animation.runImageAnimation(
          Lizi_cat,
          [img`
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
          `, img`
          . . . . . . . . . . . . . . . . 
          . e e e . . . . e e e . . . . . 
          . c d d c . . c d d c . . . . . 
          . c b d d f f d d b c . . . . . 
          . c 3 b d d b d b 3 c . . . . . 
          . f b 3 d d d d 3 b f . . . . . 
          . e d d d d d d d d e . . . . . 
          . e d f d d d d f d e . b f b . 
          . f d d f d d f d d f . f d f . 
          . f b d d b b d d 2 b f f d f . 
          . . f 2 2 2 2 2 2 d b b d b f . 
          . . f d d d d d d d f f f f . . 
          . . . f d b d f d f . . . . . . 
          . . . . f f f f f f . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `, img`
          . . . . . . . . . . . . . . . . 
          . e e e . . . . e e e . . . . . 
          . c d d c . . c d d c . . . . . 
          . c b d d f f d d b c . . . . . 
          . c 3 b d d b d b 3 c . . . . . 
          . f b 3 d d d d 3 b f . . . . . 
          . e d d d d d d d d e . . . . . 
          . e d f d d d d f d e b f b . . 
          . f d d f d d f d d f f d f . . 
          . f b d d b b d d 2 b f d f . . 
          . . f 2 2 2 2 2 2 d b d b f . . 
          . . f d d d d d d d f f f . . . 
          . . f d b d f f f d f . . . . . 
          . . . f f f f . . f f . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `],
          50,
          true
        )
      } else {
        animation.runImageAnimation(
          Lizi_cat,
          [img`
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
          `, img`
          . . . . . . . . . . . . . . . . 
          . . . . . e e e . . . . e e e . 
          . . . . . c d d c . . c d d c . 
          . . . . . c b d d f f d d b c . 
          . . . . . c 3 b d b d d b 3 c . 
          . . . . . f b 3 d d d d 3 b f . 
          . . . . . e d d d d d d d d e . 
          . b f b . e d f d d d d f d e . 
          . f d f . f d d f d d f d d f . 
          . f d f f b 2 d d b b d d b f . 
          . f b d b b d 2 2 2 2 2 2 f . . 
          . . f f f f d d d d d d d f . . 
          . . . . . . f d f d b d f . . . 
          . . . . . . f f f f f f . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `, img`
          . . . . . . . . . . . . . . . . 
          . . . . . e e e . . . . e e e . 
          . . . . . c d d c . . c d d c . 
          . . . . . c b d d f f d d b c . 
          . . . . . c 3 b d b d d b 3 c . 
          . . . . . f b 3 d d d d 3 b f . 
          . . . . . e d d d d d d d d e . 
          . . b f b e d f d d d d f d e . 
          . . f d f f d d f d d f d d f . 
          . . f d f b 2 d d b b d d b f . 
          . . f b d b d 2 2 2 2 2 2 f . . 
          . . . f f f d d d d d d d f . . 
          . . . . . f d f f f d b d f . . 
          . . . . . f f . . f f f f . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `],
          50,
          true
        )
      }
    })
    sprites.onDestroyed(SpriteKind.Food, function (sprite) {
      if (info.score() < 5) {
        LiziMaze_Start_finding()
      } else {
        LiziMaze_display_result()
      }
    })
    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {

    })
    controller.right.onEvent(ControllerButtonEvent.Released, function () {
      animation.stopAnimation(animation.AnimationTypes.All, Lizi_cat)
    })
    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
      Lizi_cat_direction = 1
      animation.runImageAnimation(
        Lizi_cat,
        [img`
      . . . . e e e . . . . e e e 
      . . . . c d d c . . c d d c 
      . . . . c b d d f f d d b c 
      . . . . c 3 b d b d d b 3 c 
      . . . . f b 3 d d d d 3 b f 
      . . . . e d d d d d d d d e 
      b f b . e d f d d d d f d e 
      f d f . f d d f d d f d d f 
      f d f . f 2 d d b b d d b f 
      f d f f b b 2 2 2 2 2 2 f . 
      f b d b b d d d d d d b f . 
      . f f f d d b d d d d d f . 
      . . . f d f f d f f f d f . 
      . . . f f . . f f . . f f . 
      `, img`
      . . . . e e e . . . . e e e 
      . . . . c d d c . . c d d c 
      . . . . c b d d f f d d b c 
      . . . . c 3 b d b d d b 3 c 
      . . . . f b 3 d d d d 3 b f 
      . . . . e d d d d d d d d e 
      b f b . e d f d d d d f d e 
      f d f . f d d f d d f d d f 
      f d f f b 2 d d b b d d b f 
      f b d b b d 2 2 2 2 2 2 f . 
      . f f f f d d d d d d d f . 
      . . . . . f d f d b d f . . 
      . . . . . f f f f f f . . . 
      . . . . . . . . . . . . . . 
      `, img`
      . . . . e e e . . . . e e e 
      . . . . c d d c . . c d d c 
      . . . . c b d d f f d d b c 
      . . . . c 3 b d b d d b 3 c 
      . . . . f b 3 d d d d 3 b f 
      . . . . e d d d d d d d d e 
      . b f b e d f d d d d f d e 
      . f d f f d d f d d f d d f 
      . f d f b 2 d d b b d d b f 
      . f b d b d 2 2 2 2 2 2 f . 
      . . f f f d d d d d d d f . 
      . . . . f d f f f d b d f . 
      . . . . f f . . f f f f . . 
      . . . . . . . . . . . . . . 
      `],
        50,
        true
      )
    })
    function LiziMaze_Chestnut_creat() {
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
      `, SpriteKind.Food)
      Lizi_Cheerry_loacation = randint(1, 0)
      if (Lizi_Cheerry_loacation < 1) {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass2)
      } else if (Lizi_Cheerry_loacation == 2) {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass1)
      } else {
        tiles.placeOnRandomTile(Lizi_Cherry, sprites.castle.tileGrass3)
      }
    }
    function LiziMaze_display_result() {
      Lizi_spendtime = game.runtime() - Lizi_starttime
      game.splash("You have spent ", "" + convertToText(Lizi_spendtime / 1000) + " seconds")
      gamejam.roomFinished(true)
    }
    controller.up.onEvent(ControllerButtonEvent.Released, function () {
      animation.stopAnimation(animation.AnimationTypes.All, Lizi_cat)
    })
    function LiziMaze_Start_finding() {
      LiziMaze_Chestnut_creat()
    }
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
      info.changeScoreBy(1)
      otherSprite.destroy()
    })
    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
      Lizi_cat_direction = 0
      animation.runImageAnimation(
        Lizi_cat,
        [img`
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
      `, img`
      . . . . . . . . . . . . . . . . 
      . e e e . . . . e e e . . . . . 
      . c d d c . . c d d c . . . . . 
      . c b d d f f d d b c . . . . . 
      . c 3 b d d b d b 3 c . . . . . 
      . f b 3 d d d d 3 b f . . . . . 
      . e d d d d d d d d e . . . . . 
      . e d f d d d d f d e . b f b . 
      . f d d f d d f d d f . f d f . 
      . f b d d b b d d 2 b f f d f . 
      . . f 2 2 2 2 2 2 d b b d b f . 
      . . f d d d d d d d f f f f . . 
      . . . f d b d f d f . . . . . . 
      . . . . f f f f f f . . . . . . 
      . . . . . . . . . . . . . . . . 
      . . . . . . . . . . . . . . . . 
      `, img`
      . . . . . . . . . . . . . . . . 
      . e e e . . . . e e e . . . . . 
      . c d d c . . c d d c . . . . . 
      . c b d d f f d d b c . . . . . 
      . c 3 b d d b d b 3 c . . . . . 
      . f b 3 d d d d 3 b f . . . . . 
      . e d d d d d d d d e . . . . . 
      . e d f d d d d f d e b f b . . 
      . f d d f d d f d d f f d f . . 
      . f b d d b b d d 2 b f d f . . 
      . . f 2 2 2 2 2 2 d b d b f . . 
      . . f d d d d d d d f f f . . . 
      . . f d b d f f f d f . . . . . 
      . . . f f f f . . f f . . . . . 
      . . . . . . . . . . . . . . . . 
      . . . . . . . . . . . . . . . . 
      `],
        50,
        true
      )
    })
    controller.left.onEvent(ControllerButtonEvent.Released, function () {
      animation.stopAnimation(animation.AnimationTypes.All, Lizi_cat)
    })
    function LiziMaze_init() {
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
      `, SpriteKind.Player)
      controller.moveSprite(Lizi_cat, 100, 100)
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