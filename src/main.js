/*******************************************************************
  Name: Siyi Zhang
  CruzId: szhan253
  Project Name: Balloon Explode
  Hours Used: about 10h
  Points Breakdown: 1. Redesign the game's artwork, UI, and sound to 
    change its theme/aesthetic (to something other than sci-fi) (60)
      2. Create a new spaceship type (w/ new artwork) that's smaller, 
    moves faster, and is worth more points (20)
      3. Implement a simultaneous two-player mode (30)
  Sound Source: https://www.youtube.com/watch?v=Pszw2Wp6BS8&t=124s
                https://www.tukuppt.com/muban/lergzyer.html
********************************************************************/
let config = {
  type: Phaser.CANVAS,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyDown, keyR, keyLEFT, keyRIGHT, keyA, keyS, keyD;