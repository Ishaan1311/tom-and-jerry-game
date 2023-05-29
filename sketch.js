var tom, jerry, tom_img, jerry_img, sleepingtom_img, sleepingjerry_img, happytom_img

function preload (){
  tom_img = loadImage("tom110.png")
  jerry_img = loadImage("jerry0.png")
  sleepingtom_img = loadImage("sleepingtom.jpeg")
  sleepingjerry_img = loadImage("sleeping jerry0.png")
  happytom_img = loadImage("happytom.png")
}

function setup (){
  createCanvas(600,600)
  tom = createSprite(200,200,70,70)
  tom.addImage("img", tom_img)
  jerry = createSprite(200,300,100,100)
  jerry.addImage("img", jerry_img)
//  jerry.addImage("img", sleepingjerry_img)
  tom.scale = 0.5
  jerry.scale = 0.5
}

function draw (){
  background(0)
  tom.x = World.mouseX
  tom.y = World.mouseY
  if(isCollding(tom, jerry)){
    tom.changeImage(tom)
    jerry.destroy()
    jerry = createSprite(Math.round(random (10,500)), Math.round(random (10,500)))
    jerry.addImage("img", jerry_img)
  }else{
    tom.changeImage("img", sleepingtom_img)
    jerry.changeImage("img", sleepingjerry_img)
  }
  if(jerry.x < 20 || jerry.x > 450){
    jerry.visible = false
    textSize(20)
    fill("red")
    text("Oh Chase is Over!!", 50,200)
    text("Move the Cat to Restart", 50,300)
  }
  drawSprites()
}

function isCollding(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
  && object2.x - object1.x < object1.width/2 + object2.width/2
  && object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y - object1.y < object1.height/2 + object2.height/2){
    return true
  }else{
    return false
  }
}