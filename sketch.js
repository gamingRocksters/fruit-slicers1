var  appleImage;
var  watermelonImage;
var  pineappleImage;
var  greenApple;
var  pomergranateImage;
var  fruitsGroup;
var  fruit2Group;
var  bombGroup;
var bombImage;
var  sword,swordImage;
var  newBackground,backgroundImage;
var  gameOver,gameOverImage;
var  gameState = "play";
var  score = 0;





function preload(){
  appleImage = loadImage("Red_Apple.png");
  pineappleImage = loadImage("Pineapple.png");
  watermelonImage = loadImage("watermelon.png");
  greenApple = loadImage("Green_Apple.png");
  pomergranateImage = loadImage("Pomegranate.webp");
   
   bombImage = loadImage("Bomb_FNPIB.webp");
  
  swordImage=loadImage("sword.png");
  
  backgroundImage = loadImage("background.png");
  
  gameOverImage = loadImage("gameover.png");
  
}
function setup(){
  createCanvas(400,400);
  
  newBackground = createSprite(200,200);
  newBackground.addImage("background",backgroundImage);
  newBackground.scale = 1.8;
  
  sword=createSprite(200,200,20,20);
   sword.addImage("sword",swordImage);
  sword.scale=0.7;
  
  gameOver = createSprite(200,200);
  gameOver.addImage("gameover",gameOverImage);
  gameOver.visible = false;

  
  fruitsGroup = createGroup();
  fruit2Group = createGroup();
  bombGroup = createGroup();
  
  
  
  
}

function draw(){
  
   
    if(gameState === "play"){
       sword.x=World.mouseX;
       sword.y=World.mouseY;
      
        fruits();
  bombs();
  
       
        if(sword.isTouching(fruitsGroup)){
        fruitsGroup.destroyEach();
          score = score+1;
     
         }
         
       if(sword.isTouching(fruit2Group)){
        fruit2Group.destroyEach();
         score = score+2;
     
         }
      if(sword.isTouching(bombGroup)){
        bombGroup.destroyEach();
         gameState = "end";
        
      }
       
      
    }
  
  
 
  
  
 
  
  
  
  
 
  
  drawSprites();
  
  fill("white");
  textSize(25);
 text("SCORE: "+score,250,20);
  if(gameState ==="end"){
     gameOver.visible = true;
      text("ENTER PLAY BUTTON TO \n RESTART!!",50,250);
  }
}
function fruits(){
  
      
  if (frameCount % 60 === 0){
     var fruit = createSprite(387,122,10,40);
     fruit.velocityX = -09;
    var fruit1 = createSprite(400,295,10,40);
     fruit1.velocityX = -09;
   
    var rand = Math.round(random(1,3));
    var rand1 = Math.round(random(4,5));
       
    
    switch(rand) {
      case 1: fruit.addImage(appleImage);
              fruit.scale = 0.13; 
              fruit1.lifetime = 2;

              break;
      case 2: fruit.addImage( pineappleImage);
              fruit.scale = 0.2;  
              fruit1.lifetime = 2;
             
              break;
      case 3: fruit.addImage(watermelonImage);
              fruit.scale = 0.4;
              fruit1.lifetime = 2;
            
              break;
      
      default: break;
   
    }
    switch(rand1){
     case 4: fruit1.addImage(greenApple);
              fruit1.scale = 0.13;
              fruit1.lifetime = 1.5;
            
              break;
      case 5: fruit1.addImage(pomergranateImage);
              fruit1.scale = 0.2;
              fruit1.lifetime = 1.5;
             
              break;
      default:break;
    }
  fruitsGroup.add(fruit);
    fruit2Group.add(fruit1);
    
  }
  
} 
function bombs(){
  var bomb = createSprite(79,450,10,10);
    if(frameCount % 60 === 0){
        
            bomb.velocityY = -50;
            bomb.scale = 0.2;
             
        var rand3 = Math.round(random(1,2));

    switch(rand3){
            case 1:
                    bomb.x= 101;
                    bomb.addImage(bombImage);
                    break;      
            case 2:  bomb.x = 350;
                    bomb.addImage(bombImage);
                    break;
            default:break;
    }                       
  }
  bombGroup.add(bomb);
 

}