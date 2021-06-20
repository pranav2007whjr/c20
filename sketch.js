function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80)
  fixedrect.shapeColor="yellow"
  movingrect=createSprite(400,200,80,30)
  movingrect.shapeColor="yellow"
}

function draw() {
  background("black");  
  movingrect.x=mouseX
  movingrect.y=mouseY
  
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      fixedrect.shapeColor="orange" 
      movingrect.shapeColor="orange" 
    }
  else{
    fixedrect.shapeColor="yellow"
    movingrect.shapeColor="yellow"
  }
  drawSprites();
}