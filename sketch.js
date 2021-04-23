
var ground,forest;
var player,p_still,p_walk,p_hit,p_hurt,p_shield;
var army1,army2,army3;
var a_still,a_walk,a_hit,a_hurt,a_shield;
var life1=10
var life2=10
var life3=10
var life4=10
var boss;
var gameState="start";
var score=0;
var life=10;
var value=0;
var count=0;

function preload(){
  forest = loadImage("images/bg1.jpg");
  heartimg=loadImage("images/heart.png")

  p_still=loadAnimation("images/player/still/01.png","images/player/still/02.png","images/player/still/03.png","images/player/still/04.png","images/player/still/05.png","images/player/still/06.png","images/player/still/07.png","images/player/still/08.png","images/player/still/09.png","images/player/still/10.png");
  p_walk=loadAnimation("images/player/walk/11.png","images/player/walk/12.png","images/player/walk/13.png","images/player/walk/14.png","images/player/walk/15.png","images/player/walk/16.png","images/player/walk/17.png","images/player/walk/18.png","images/player/walk/19.png","images/player/walk/20.png","images/player/walk/21.png");
  p_hit=loadAnimation("images/player/hit/31.png","images/player/hit/32.png","images/player/hit/33.png","images/player/hit/34.png","images/player/hit/35.png","images/player/hit/36.png","images/player/hit/37.png","images/player/hit/38.png","images/player/hit/39.png")
  p_shield=loadAnimation("images/player/shield/41.png","images/player/shield/42.png","images/player/shield/43.png","images/player/shield/44.png","images/player/shield/45.png","images/player/shield/46.png","images/player/shield/47.png","images/player/shield/48.png","images/player/shield/49.png","images/player/shield/50.png")

  a_still=loadAnimation("images/army/still/01.png","images/army/still/02.png","images/army/still/03.png","images/army/still/04.png","images/army/still/05.png","images/army/still/06.png","images/army/still/07.png","images/army/still/08.png","images/army/still/09.png","images/army/still/10.png");
  a_walk=loadAnimation("images/army/walk/11.png","images/army/walk/12.png","images/army/walk/13.png","images/army/walk/14.png","images/army/walk/15.png","images/army/walk/16.png","images/army/walk/17.png","images/army/walk/18.png","images/army/walk/19.png","images/army/walk/20.png","images/army/walk/21.png");
  a_hit=loadAnimation("images/army/hit/31.png","images/army/hit/32.png","images/army/hit/33.png","images/army/hit/34.png","images/army/hit/35.png","images/army/hit/36.png","images/army/hit/37.png","images/army/hit/38.png","images/army/hit/39.png")
  a_hurt=loadAnimation("images/army/hurt/51.png","images/army/hurt/52.png","images/army/hurt/53.png","images/army/hurt/54.png","images/army/hurt/55.png","images/army/hurt/56.png","images/army/hurt/57.png","images/army/hurt/58.png","images/army/hurt/59.png","images/army/hurt/60.png")

  
}

function setup() {
  createCanvas(displayWidth,displayHeight-145);
 
  ground=createSprite(displayWidth, displayHeight/2-70,displayWidth , displayHeight);
  ground.addImage(forest);
  ground.scale = 3;

  player=createSprite(displayWidth/3, displayHeight-320,20,20);
  player.scale=3
  player.addAnimation("still",p_still);
  player.addAnimation("walk",p_walk);
  player.addAnimation("hit",p_hit);
  player.addAnimation("shield",p_shield);
  //player.debug=true
  player.setCollider("rectangle",20,-25,120,110)

  army1 = createSprite(displayWidth+250, displayHeight-320, 20, 20);
  army1.scale=3
  army1.addAnimation("still",a_still);
  army1.addAnimation("walk",a_walk);
  army1.addAnimation("hit",a_hit);
  army1.addAnimation("shield",a_hurt);
  //army1.debug=true
  army1.setCollider("rectangle",-20,-25,120,110)

  army2 = createSprite(displayWidth+250, displayHeight-320, 20, 20);
  army2.scale=3
  army2.addAnimation("still",a_still);
  army2.addAnimation("walk",a_walk);
  army2.addAnimation("hit",a_hit);
  army2.addAnimation("hurt",a_hurt);
  //army2.debug=true
  army2.setCollider("rectangle",-20,-25,120,110)

  army3 = createSprite(displayWidth+250, displayHeight-320, 20, 20);
  army3.scale=3
  army3.addAnimation("still",a_still);
  army3.addAnimation("walk",a_walk);
  army3.addAnimation("hit",a_hit);
  army3.addAnimation("hurt",a_hurt);
  //army3.debug=true
  army3.setCollider("rectangle",-20,-25,120,110)

  boss = createSprite(displayWidth+250, displayHeight-320, 20, 20);
  boss.scale=3
  boss.addAnimation("still",a_still);
  boss.addAnimation("walk",a_walk);
  boss.addAnimation("hit",a_hit);
  boss.addAnimation("hurt",a_hurt);
  //boss.debug=true
  boss.setCollider("rectangle",-20,-25,120,110)

    
  //form=new Form()
  start=createButton("Play")
  heart1=createSprite(displayWidth/2-60,50)
  heart1.addImage(heartimg)
  heart1.scale=0.05
  heart2=createSprite(displayWidth/2-20,50)
  heart2.addImage(heartimg)
  heart2.scale=0.05
  heart3=createSprite(displayWidth/2+20,50)
  heart3.addImage(heartimg)
  heart3.scale=0.05
  heart4=createSprite(displayWidth/2+60,50)
  heart4.addImage(heartimg)
  heart4.scale=0.05
 
}

function draw() {
  background(147,168,101)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(gameState==="play"){
    player.setCollider("rectangle",20,-25,120,110)  
    //form.hide()
    start.hide();

    if(value===0){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army1.velocityX=-4;
      }
    
        if(army1.x<=displayWidth/1.5){
          army1.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army1.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army1)&&count===0){
        life1--;
        count=1;
      }

      if(life1<=0){
        heart1.visible=false
        army1.destroy()
        value=1
      }
    }


    if(value===1){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army2.velocityX=-4;
      }
    
        if(army2.x<=displayWidth/1.5){
          army2.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army2.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army2)&&count===0){
        life2--;
        count=1;
      }

      if(life2<=0){
        heart2.visible=false
        army2.destroy()
        value=2
      }
    }  

    if(value===2){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army3.velocityX=-4;
      }
    
        if(army3.x<=displayWidth/1.5){
          army3.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army3.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army3)&&count===0){
        life3--;
        count=1;
      }

      if(life3<=0){
        heart3.visible=false
        army3.destroy()
        value=3
      }
    }

    if(value===3){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        boss.velocityX=-4;
      }
    
        if(boss.x<=displayWidth/1.5){
          boss.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          boss.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(boss)&&count===0){
        life4--;
        life--;
        count=1;
      }
      if(keyDown("s")&&count===0){
        player.changeAnimation("shield",p_shield);
        life++;
        count=1
      }
      if(keyWentUp("s")){
        player.changeAnimation("still",p_still);
        count=0
        
      }

      if(life4<=0){
        heart4.visible=false
        boss.destroy()
        gameState="end"
      }
      if(life<=0){
        player.destroy()
        gameState="end"
      }
      
    }


  }

  

  drawSprites();

  if(gameState==="end"){
    //player.changeAnimation("still",p_still);
    if(life>0&&life4<=0){
      alert("You Won!!!")
      gameState="bye"
    }
    if(life<=0&&life4>0){
      alert("Loser!!!")
      gameState="bye"
    }
    if(life===0&&life4===0){
      alert("Try better next time!!!")
      gameState="bye"
    }
  }

  if(gameState==="bye"){
    //player.changeAnimation("still",p_still);
  }

  if(gameState==="start"){
    textSize(20);
    fill("black");
    text("Instructions & Controls:",displayWidth/2,150)
    text("The game has 3 army and 1 boss in order",displayWidth/2,200)
    text("'h' for hit for all army and boss",displayWidth/2,250)
    text("'s' for shield for only boss:",displayWidth/2,300)
    text("right arrow for walking",displayWidth/2,350)
    text("Press Enter to start the game",displayWidth/2,400)

    if(keyDown("enter")){
      gameState="play"
    }
  /*  form.display()
    
    start.position(displayWidth/2 + 30, displayHeight/2+100);
    start.mousePressed(()=>{
      gameState="play";     
    })*/
    
  }

  textSize(20);
  fill("black");
  text("Score: "+score,displayWidth-200,50)
  text("Lives: "+life,50,50)
}




