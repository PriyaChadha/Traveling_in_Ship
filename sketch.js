var ship, shipImg1
var sea, seaImg

function preload(){
seaImg = loadImage ("sea.png")
shipImg1 = loadAnimation ("ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(600,250);

  sea = createSprite(300, 125, 20, 20)
  sea.addImage("sea", seaImg)
  sea.scale = 0.4
  sea.velocityX = 4
  
  
  ship = createSprite(300, 150, 20, 20)
  ship.addAnimation("bobbing", shipImg1)
  ship.scale = 0.1
  
  
  
}

function draw() {
  background("blue");

  if (sea.x > 600) {
    sea.x = 300
    
  }
 
  drawSprites();
}