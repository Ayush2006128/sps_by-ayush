const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var rocket,ct,building;
var img1,img2,img3,img4;
function preload(){
rocket1=loadImage("th.jpg")
rocket2=loadImage("th1.jpg")
ct1=loadImage("th2.jpg")
bg=loadImage("bg.jpg")
sp=loadImage("space.jpg")
rocket3=loadImage("OIP.jpg")
sp2=loadSound("space_music.mp3")
}

function setup(){
    createCanvas(800,800)
engine=Engine.create();
world = engine.world;
Engine.run(engine) 
// var options={
//     isStatic:true
// }
// // rocket=Bodies.rectangle(400,700,50,150,options);
// World.add(world,rocket)
// console.log(rocket)
rocket=createSprite(250,700,50,150)
ct=createSprite(650,700,50,100)
ct.addImage(ct1)

rocket.addImage(rocket1)
// ct=Bodies.rectangle(700,700,50,100,options);
// World.add(world,ct)

}
function draw(){
    if(rocket.y>600)
    background(bg)
//     rectMode(CENTER)
//     fill(255,0,0) 
//    // image(rocket1,rocket.position.x,rocket.position.y,50,150)
edges=createEdgeSprites();
rocket.collide(edges)

    if(keyDown("space")){
        //  Matter.Body.applyForce(rocket.body,rocket.body.position,{x:5,y:10})
        rocket.velocityY=-10;
        rocket.addImage(rocket2)
        sp2.play()
      }
      
      rocket.velocityY+=0.5;
      if(rocket.y<250){
          background(sp)
          ct.destroy()
          rocket.addImage(rocket3)
          rocket.y=150
          rocket.velocityY=0
      }
 //  rectMode(CENTER)
   // fill(140,0,0) 
    //image(ct1,ct.position.x,ct.position.y,50,100)   
   drawSprites()
   textSize(40);
   fill("gold");
   text("rocket launching simulation",250,250)  
    }