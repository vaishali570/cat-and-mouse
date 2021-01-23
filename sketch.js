


var cat,mouse;
var catImg,mouseImg
var background,backgroundImg;



function preload() {
  catImg=loadImage("images/tomOne.png");
   mouseImg=loadImage("images/jerryOne.png");
   backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1200,800);
    cat=createSprite(4,4,2,4)
    cat.addImage("tomOne",catImg);
    cat.scale=0.2

background=createSprite(1200,800)
background.addImage("garden",backgroundImg);
background.scale=1.9;

}

function draw() {

    
    
    drawSprites();
}


function keyPressed(){

  

}
