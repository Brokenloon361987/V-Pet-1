//Create variables here

var database
var hdog, ndog, dog
var foodStock, foodS


function preload()
{
	//load images here

  hdog = loadImage("images/dogImg1.png")
  ndog = loadImage("images/dogImg.png")


}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()

 dog = createSprite(100, 200, 50, 50)

 dog.addImage(ndog)
 dog.scale = 0.15
  
 foodStock = database.ref("Food")
 foodStock.on("value", readStock)

}


function draw() {  

  background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(hdog);

}

  

  drawSprites();

textSize(15)

  fill("white")

text("food remaining " + foodS, 170, 80)

text("Press ⬆ to feed the dog", 170, 50)

  //add styles here

}

function readStock(data){

  foodS = data.val()

}
function writeStock(x){
  
if(x <=0 ){

x=0;

}else{

x=x-1;

}

database.ref('/').update({
  Food:x
})

}
