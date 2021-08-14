
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var c1, c2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var HI = 0;
var invisiblegrd


function preload() {
	bg = loadImage("images/back.jpg")

	c1 = loadImage("images/car.png")

	c2 = loadImage("images/car2.png")

	runnerImg = loadAnimation("images/b1.png", "images/b2.png", "images/b3.png", "images/b4.png"
		, "images/b5.png", "images/b6.png", "images/b7.png", "images/b8.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;


	runner = createSprite(110, height - 150)
	runner.addAnimation("runner", runnerImg)
	runner.scale = 1.4

	invisiblegrd = createSprite(width / 2, height - 20, width, 10)
	invisiblegrd.visible = false;




	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(bg);

	score = score + Math.round(getFrameRate() / 60)


	textSize(40)
	fill("Black")
	text("score = " + score, 200, 200)
	console.log(score)




	if (keyDown(UP_ARROW) && runner.y >= height - 200) {
		runner.y = runner.y - 60
	}

	runner.velocityY = runner.velocityY + 0.5;
	runner.collide(invisiblegrd);
	drawSprites();
	obsticle();


}

function obsticle() {
	if (frameCount % 150 === 0) {

		car = createSprite(width + 100, height - 90)
		car.velocityX = -5;
		car.scale = 1.3
		var no = round(random(1, 2))

		if (no === 1) {
			car.addImage(c1)
		}
		else {
			car.addImage(c2)
		}
		car.lifetime = 500
	}

}


