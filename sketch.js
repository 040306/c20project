var cat, catRunning, catStill, catStart;
var mouse, mouseRunning, mouseStill, mouseStart;
var bg, bgImg;

function preload() {
catRunning = loadAnimation("images/cat2.png", "images/cat3.png")
catStill =loadAnimation("images/cat1.png")
catStart = loadAnimation("images/cat4.png")

mouseRunning = loadAnimation("images/mouse1.png")
mouseStill = loadAnimation("images/mouse3.png")
mouseStart = loadAnimation("images/mouse4.png")

bgImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);

bg = createSprite(500, 400, 1000, 800)
bg.addImage("bg", bgImg)

    //create tom and jerry sprites here
cat = createSprite(800, 600, 100, 200)
cat.addAnimation("start", catStart)
cat.scale = 0.1

mouse = createSprite(200, 600, 100, 200)
mouse.addAnimation("start", mouseStart)
mouse.scale = 0.1
}

function draw() {
    background(255);
    keyPressed()
    
    
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(mouse)){
    cat. velocityX = 0
    mouse.velocityX = 0
    cat.addAnimation("still", catStill)
    cat.changeAnimation("still")
    mouse.addAnimation("still2", mouseStill)
    mouse.changeAnimation("still2")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -4
    mouse.velocityX = 4
    cat.addAnimation("running", catRunning);
    cat.changeAnimation("running");
    mouse.addAnimation("running2", mouseRunning);
    mouse.changeAnimation("running2");
}

}
