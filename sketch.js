var snake
var h = 40
var w = 10
var food

var score = 0

function setup(){
  createCanvas(400,400);
  

  snake = createSprite(200,200,w,h)
  snake.setVelocity(0, 0)
  snake.shapeColor = "green"

  food = createSprite(random(0,400), random(0,400), 10,10)
  food.shapeColor = "red"
}

function draw(){
  background("black");

  fill("white")
  textSize(12);
  text("Score: " + score, 325,50);

  keyPressed();
  eat();
  end();
  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.setVelocity(-2,0);
    snake.width = h
    snake.height = w
  }

  else if(keyCode === RIGHT_ARROW){
    snake.setVelocity(2,0);
    snake.width = h
    snake.height = w
  }

  else if(keyCode === DOWN_ARROW){
    snake.setVelocity(0,2);
    snake.width = w
    snake.height = h
  }

  else if(keyCode === UP_ARROW){
    snake.setVelocity(0,-2);
    snake.width = w
    snake.height = h
  }
}

function eat(){
  if(snake.isTouching(food)){
    food.x = random(0,400);
    food.y = random(0,400);

    h= h+10
    score = score + 10
   
    }
  }


function end(){

  if(snake.x>400||snake.x<0||snake.y>400||snake.y<0){
    fill("white");
    text("GAME OVER", 150, 200);
    food.destroy();
    snake.destroy();
  }
}