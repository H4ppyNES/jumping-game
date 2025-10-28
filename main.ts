// STEP 6 (On Pressed Event)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // STEP 6 (Anti-Cheat Logic)
    if (myPlayer.isHittingTile(CollisionDirection.Bottom)) {
        // STEP 6 (Jumping Logic)
        myPlayer.vy = -150
    }
})
// STEP 5 (Overlap Block)
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    // STEP 5 (Destroy sprite)
    sprites.destroy(sprite)
    // STEP 7 (Life system)
    info.changeLifeBy(-1)
})
// STEP 9 (Score System)
info.onScore(10, function () {
    game.gameOver(true)
})
// STEP 7 (Life Mechanic)
info.onLifeZero(function () {
    game.showLongText("You Lost! :(", DialogLayout.Center)
    game.setGameOverMessage(false, "Try again?")
    game.gameOver(false)
})
// STEP 8 (Points System
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
let enemyProjectile: Sprite = null
let myPlayer: Sprite = null
// STEP 10 (Title and Instructions)
game.splash("Title Go Here")
// STEP 10 (Title and Instructions)
game.showLongText("Instructions go here", DialogLayout.Center)
// STEP 9 (Score System)
info.setScore(0)
info.setLife(3)
// STEP 1
scene.setBackgroundColor(9)
// STEP 1 (10x8 Tilemap)
tiles.setCurrentTilemap(tilemap`level1`)
// STEP 2 (Player Sprite)
myPlayer = sprites.create(img`
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
    `, SpriteKind.Player)
myPlayer.ay = 300
// STEP 2 (Enemy Sprite)
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
// STEP 3 (Player Location)
tiles.placeOnTile(myPlayer, tiles.getTileLocation(3, 6))
// STEP 3 (Enemy Projectile)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(9, 6))
// STEP 4 (Update Loop)
game.onUpdateInterval(2000, function () {
    // STEP 4 (Projectile Spawning)
    enemyProjectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 3 3 3 2 2 2 . . . . . 
        . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
        . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
        . . . . 2 3 3 3 3 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myEnemy, -50, 0)
})
