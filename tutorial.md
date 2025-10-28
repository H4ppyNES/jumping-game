# Retro Game Lab Camp: Jumping Game!

## Introduction

Welcome to the Jumping Game! 

Let's hope you payed attention, because this project is centered around the topic; **Velocities and Acceleration!**

![gamescreenshot](https://raw.githubusercontent.com/H4ppyNES/jumping-game/refs/heads/master/assets/images/gamescreenshot.png "gamescreenshot")
## Backgrounds and Tilemaps

Let's create the background of the project!

### Adding a Background

- :tree: Firstly, find the ``||scene:Scene||`` menu in your **Toolbox** and find the ``||scene: set background color to ()||`` block and snap it onto your ``||loops: on start||`` block **already inside** your coding space!

- :mouse pointer: Now, Click the **()** in the coding block and **select** the colour you want your background to be! 

- :lightbulb: Idea Bubble: For a space themed jumping game, try black. For a game with the sky, try blue!

### Adding Interactable Tilemaps

Time to add the environment you'll be playing on!

- :tree: Go back to the ``||scene:Scene||`` menu and grab a ``||scene: set tilemap to []||`` and snap it to the **bottom** of your ``||loops: on start||`` container.

- :mouse pointer: Click the grey **[]** in the ``||scene: set tilemap to []||`` block and change the size of the tilemap from **[16 x 16]** to **[10 x 8]**. This is located in the **lower left corner** of your tilemap editor. 

Feel free to raise your hand and ask a **Code Sensei** for directions if you can't find it! 

- :map: In your Tilemap Editor, draw a "floor" for your sprites to stand on!

![screenshot2](https://github.com/H4ppyNES/jumping-game/blob/master/assets/images/screenshot2.png?raw=true "screenshot2")

Here's an example!

### Adding Collision Walls 

Even though you have your tiles, you can't actually use them as **walls** yet! You need to add a layer of collision to them.

- :map: In your Tilemap Editor, click the **Wall Editor** Button to be able to place walls in your tilemap! (see picture below)

![wallscreenshot](https://raw.githubusercontent.com/H4ppyNES/jumping-game/refs/heads/master/assets/images/wallscreenshot.png "wallscreenshot")
- :map: Now that you've turned **Wall Editor** on, paint over your floor and ceiling tiles with them! 

![screenshot](https://raw.githubusercontent.com/H4ppyNES/jumping-game/refs/heads/master/assets/images/screenshot.png "screenshot")

You'll know you've done it right when your tiles give off a ``||variables:red||`` shade!

## Adding Sprites

### What's a video game without Sprites?

### Adding a Player Sprite

- :paper plane: Find the ``||sprites:Sprites||`` menu in your **Toolbox** and find the ``||sprites: set mySprite to []||`` block! Add this **below** the other code

- :mouse pointer: Click the grey **[]** to open the Sprite Editor! Draw and Create your sprite or choose to re-paint a sprite from the **Gallery**!

- :info: Don't forget to name your sprite! Click the ``||variables:mySprite||`` in your code block and press ``||variables:Rename variable...||`` to create a new name for your sprite!

### Adding an Enemy Sprite

- :sync: Repeat what you've done for your Player sprite, but for the Enemy sprite instead!

- :mouse pointer: Click the ``||sprites:▼Player||`` in your  ``||sprites:set mySprite to []||`` and replace it with ``||sprites:Enemy||``!

🧠: If you find yourself **stuck** and can't make an Enemy sprite, raise your hand and ask a **Code Sensei**!

## Placing Your Sprites!

I'm sure you've noticed now, both your sprites are in the center!

### Add Position Blocks!

- :tree: In the ``||scene:Scene||`` menu from your **Toolbox**, find the ``||scene:place mySprite on top of col[] row[]||`` block and add it **below your sprites** in the ``||loops:on start||`` container!

You'll need to have **two** of these blocks; 1 for your **Player**, and 1 for your **Enemy**!

### Finding the Coordinates

- :map: Open the **Tilemap Editor** and hover your mouse over where you want your sprites to be placed! In the lower left corner, there should be coordinates (0,0) you can use to place your sprite!

![coordscreenshot](https://raw.githubusercontent.com/H4ppyNES/jumping-game/refs/heads/master/assets/images/coordscreenshot.png "coordscreenshot")

*Notice how it says (3,6)?* 

That's because my mouse is hovered on that position!

- :tree: Put your mouse where you want your sprites to be and replace the ``||scene:col[] row[]||`` bubbles with those numbers!

- :lightbulb: Sensei Recommendation: Player Sprite **(3, 6)** Enemy Sprite **(9, 6)**

## Coding the Projectile!

Time to add the projectile we have to **jump** over:

### Adding the Update Container!

- :circle: Find the ``||game:Game||`` menu in your **Toolbox** and look for the ``||game:on game update every 500ms||`` block and place it **away** from your other code!

This block is a "container block", which means it doesn't need to be connected to the ``||loops:on start||`` container block.

### Create the Projectile!

- :paper plane: In ``||sprites:Sprites||``, find the ``||sprites: set projectile to [] projectile from mySprite with vx [] vy []||`` block. Add this to your ``||game:on game update every 500ms||`` container.

- :mouse pointer: Set the **vx []** from 50 to -50 and set the **vy []** from 50 to 0!