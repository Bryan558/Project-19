var cyclist,cyclistImg
var road,roadImg
var water,waterImg,waterGroup
var pedestrians,pedestrainsImg,pedestrainGroup
var gameState = "play"
var score = 0

function preload(){
cyclistImg = loadImage("cyclist.jpg")
roadImg = loadImage("road.png")
waterImg = loadImage("water.jpg")
pedestrainsImg = loadImage("pedestrain.png")
}

function setup() {
 createCanvas(600,600)
 road = createSprite(300,300)
 road.addImage(roadImg)
 road.velocityY=12
 road.scale=11
 cyclist = createSprite(350,550,50,50)
 cyclist.addImage(cyclistImg)
 cyclist.scale=0.15

pedestrainGroup = new Group();
waterGroup= new Group();

}


function draw() {
 background(220)
 

if(gameState === "play"){
    text("score",20,300)
    textSize(15)
    fill("red")
    

    if(road.y > 500){
        road.y=400
        }
    if(keyDown("right_arrow")) {
        cyclist.x=cyclist.x+4
        }
        if(keyDown("left_arrow")) {
         cyclist.x=cyclist.x-4
         }    
         if(cyclist.isTouching(pedestrainGroup)){
            gameState ="end"
          
            
         }
         if(waterGroup.isTouching(cyclist)){
            waterGroup.destroyEach()
            score=score+1
         }
        }
     
    
  spawnPedestrains()
  spawnWater()
drawSprites()
text("score: "+ score,width-150,30);
if(gameState ==="end"){
    background("black");
    stroke("red");
    fill("red");
    textSize(40);
    text("Game Over", 230,250)
   
  }
        
        

        }
                
    function spawnWater(){
        if(frameCount % 350 === 0){
            water = createSprite(200,20)
            water.addImage(waterImg);
            water.scale=0.4
            water.velocityY=9
    water.x = Math.round(random(200,450,10,10));
    waterGroup.add(water);
    
    
                 }   
                }
                function spawnPedestrains(){
                    if(frameCount % 170 === 0){
                        pedestrains=createSprite(200,20)
                        pedestrains.addImage(pedestrainsImg)
                        pedestrains.scale=0.8
                        pedestrains.velocityY=9
                       pedestrains.x = Math.round(random(100,450,10,10));
                       pedestrainGroup.add(pedestrains);
                       
                    }
                }
                