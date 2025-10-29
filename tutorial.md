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

### Adjusting Projectile Properties!

- :mouse pointer: Click the grey **[]** bubble inside your ``||sprites:set projectile to []||`` block and draw your **Projectile Sprite**. You can make this any shape you want — a **spike**, a **fireball**, or even a **flying donut** 🍩!  

- :lightbulb: Sensei Suggestion: Make sure your projectile is small and easy to jump over. Try using a 16x16 sprite or smaller.

Test out your code! By now you should have a **Tilemap**, **Player and Enemy Sprites**, and a **Projectile** to jump over!











## Coding the Jump Mechanic!

Now let's add the ability for our Player to **jump** over that projectile.

### Add Gravity!

We'll make gravity pull the Player down so the jump looks realistic.

- :paper plane: From the ``||sprites:Sprites||`` menu, grab the ``||sprites:set mySprite ay to ()||`` block and place it **under your Player creation block**.

- :mouse pointer: Set the **ay** value to **200**.  

This adds downward acceleration **gravity** to your Player!

### Jump When the A Button is Pressed!

Now that the Player falls, let's make them **jump** when you press **A**.

- :game controller: From the ``||controller:Controller||`` menu, grab the ``||controller:on A button pressed||`` block and place it somewhere on your coding area!  

(It doesn't need to connect to your ``||loops:on start||`` block because it's a *container*!)

- :paper plane: Inside it, place the ``||sprites:set mySprite vy to ()||`` block from ``||sprites:Sprites||``.

- :mouse pointer: Set the **vy** value to **-150** — this gives the Player an upward push!

- :lightbulb: Sensei Tip: A higher negative number makes the jump higher, and a smaller number makes it shorter.








## Coding the Collision!

We'll make the game detect when the Player hits the Projectile — but instead of ending the game right away, we'll make it **destroy the projectile** and **take away one life**. 💥

### Detect Sprite Overlap

- :paper plane: Go to the ``||sprites:Sprites||`` menu and find the ``||sprites:on overlap||`` block.

- :mouse pointer: Change the dropdowns so it says:  
  **Player** overlaps **Projectile**.

Now your game can detect when the Player and Projectile touch!

---

### Lose a Life When Hit

Let's make sure the Player loses a life whenever they get hit.

- :heart: From the ``||info:Info||`` menu, grab the ``||info:change life by (-1)||`` block and place it inside your ``||sprites:on overlap||`` container.

This takes away one life every time your Player collides with a Projectile.

---

### Destroy the Projectile

Once the Player gets hit, we don't want the projectile to keep floating around.

- :paper plane: Add a ``||sprites:destroy (otherSprite)||`` block from the ``||sprites:Sprites||`` menu inside the same container, right **after** the ``||info:change life by (-1)||``.

- :mouse pointer: Click the grey ``||sprites:(mySprite)||`` bubble and change it to ``||sprites:otherSprite||``.

Now the projectile that hit the Player will be destroyed when it makes contact. 💥

---

### Start With Lives

Make sure the Player has some lives to begin with!

- :heart: At the **top** of your ``||loops:on start||`` container, add a ``||info:set life to (3)||`` block from the ``||info:Info||`` menu.

This means your Player will have 3 tries before the game ends.

---

### Add Scoring for Surviving

Let's reward the player for staying alive!

- :clock: From the ``||game:Game||`` menu, add a ``||game:on game update every 500ms||`` container (if you don't already have one for scoring).

- :trophy: Inside it, place the ``||info:change score by (1)||`` block from ``||info:Info||``.

This gives the player 1 point every half-second they survive! 🕹️  

- :lightbulb: Sensei Tip — Try reducing the time to 200ms to make scoring faster or increasing it to 1000ms for slower scoring!

---

### Game Over When Out of Lives

Once the Player's lives reach zero, the game should end automatically.

- :circle: From the ``||info:Info||`` menu, drag out the ``||info:on life zero||`` block.

- :mouse pointer: Inside it, place the ``||game:game over (false)||`` block from the ``||game:Game||`` menu.

Now when the Player runs out of lives, the game ends. 🎮  








## Testing and Customization!

You're almost done — great work! 🎉

### Try Running Your Game!

Press the **Play ▶️** button on your simulator or download it to your handheld device.

Check:
- Does your Player fall due to gravity?  
- Can you jump over the projectile?  
- Does the game end when you touch it?


### 🧠 Challenge Mode!

If you finish early, try one of these **upgrades**:
- :clock: Change the ``||game:on game update every 500ms||`` to a random value to make the projectile come out at different times!
- :music: Add music that plays when the game starts.
- :game controller: Add a "B button" move — maybe a higher jump? 








## 🎉 You Did It!

Try uploading your finished game to your own GitHub repo or publish it in MakeCode to share with your class!  

🕹️ Keep experimenting, and soon you'll be building full-on platformers.  
**Great job, Game Dev!**
