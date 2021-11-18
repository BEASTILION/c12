

var ground
var trex,trex_running;
var edges;
var ground_img;
var invisible_ground
var cloud;
var clouimg;



function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_img = loadImage("ground2.png")
  cloudimg = loadImage("cloud.png")
}

function setup(){

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  
  edges = createEdgeSprites();

  //Creating ground
  ground = createSprite(200,180,400,20)
  ground.addImage("ground",ground_img)

  //creating invisible ground
  invisible_ground = createSprite(200,190,400,20)
  invisible_ground.visible = false
 
  var num =Math.round(random(10,50));
  console.log(num);
}

  function draw(){
      background(180)
    
      
     //space button   
      if(keyDown("space") && trex.y>=153){
      trex.velocityY = -7;
      
      }
      

    //trex gravity
    trex.velocityY= trex.velocityY + 0.5;

    //collide of trex
    trex.collide(invisible_ground)
    
    //ground movement
    ground.velocityX=-4

    // infinite ground
  
    if (ground.x<0  ){
    ground.x=ground.width/2
    }

    //trex.collide(edges)








    spawnClouds()
drawSprites()

}

function spawnClouds(){


  if(frameCount % 60 === 0  ){
    cloud = createSprite(600,100,40,10)
    cloud.velocityX= -3
    cloud.addImage("cloud",cloudimg)
    cloud.scale= 0.5
    cloud.y =Math.round(random(10, 120 ))
    cloud.depth = trex.depth
    trex.depth= trex.depth+1  ;

    
    console.log(cloud.depth,trex.depth)
  }
    
  
}