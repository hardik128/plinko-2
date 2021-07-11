const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos=[];
var divisions=[];
var divisionHeight=300;
var count,gameState,score,particle1;
var score=0;
var count=5;
var gameState=1;
function setup() {
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  ground01=new Ground(450,590,900,20)
  ground02=new Ground(0,300,1,600)
  ground03=new Ground(600,300,1,600)
  

  for(var i=100; i<=500;i=i+100){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=7.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,70));
  }

  for(var j=22.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,120));
  } 

  for(var j=7.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,170));
  }

  for(var j=22.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,220));
  } 

  

}



function draw() {
  frameRate(120);
  background(20,5,65);  
  if(gameState === 1){
  Engine.update(engine);
  ground01.display(); 
  ground02.display();
  ground03.display();
 
  console.log(mouseX)
  
  textSize(20)
  text("Turns Left: "+count,450,40)  

  textSize(20)
  text("Score: "+score,50,40)

  
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  }

  if((gameState === 1) && (keyWentDown("UP"))){
    particle1 = new Particle(mouseX,10,20)
    count--;
  }

  if((gameState === 1) && (count===0)){
    gameState = 2;
  } 

  if(gameState === 2){
    background(0)
    textSize(50)
    fill("blue")
    text("Game Over",200,200)
    text("Score:" +score,225,400)
  }


  if((gameState === 1) && (particle1 != null)){
    particle1.display();
  }
  
  if(particle1 != null){
      particle1.display();
    if(particle1.body.position.y>300){

        if(particle1.body.position.x<200){
          score=score+500;
          console.log(score)
          particle1=null;
        }
    
        else if(particle1.body.position.x>200 && particle1.body.position.x<400){
          score=score+200;
          console.log(score)
          particle1=null;
      }
     
        else if(particle1.body.position.x>400 && particle1.body.position.x<600){
          score=score+100;
          console.log(score)
          particle1=null;
    }
  }
    
    
  }
  
  
  
  
}

function mousePressed(){
  
    
  
}

