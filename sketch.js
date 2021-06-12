var pkbob, pkbobAnim, bgImage, bgSprite1, bgSprite2;
function preload() {
  pkbobAnim = loadAnimation("ch_01.png", "ch_02.png", "ch_03.png", "ch_04.png", "ch_05.png", "ch_06.png", "ch_07.png", "ch_08.png");
  bgImage = loadImage("InfScrollBg.jpg");
}

function setup() {
  createCanvas(800,400);
  pkbob = createSprite(400, 222, 50, 50);
  pkbob.addAnimation("pkbob", pkbobAnim);
  pkbob.scale = 0.18;
  pkbob.depth = 2;
  bgSprite1 = createSprite(0, 125);
  bgSprite1.addAnimation("bgSpr1", bgImage);
  bgSprite1.depth = 1;
  bgSprite1.x = bgSprite1.width / 2;
  bgSprite1.velocityX = -6;
  /*bgSprite2 = createSprite(1145, 125, width, height);
  bgSprite2.addAnimation("bgSpr2", bgImage);
  bgSprite2.depth = 1;
  bgSprite2.velocityX = -6;
  bgSprite1.debug = true;
  bgSprite2.debug = true;*/
  //pkbob.debug = true;
  
}

function draw() {
  //background(bgImage);
  background(0);
  if (bgSprite1.x < 0) {
    bgSprite1.x = bgSprite1.width / 2;
    //bgSprite2.x = 1145;
  }
  drawSprites();
}