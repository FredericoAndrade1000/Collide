var player = {
	posX: 0,
	posY: 0,
	sizeX: 30,
	sizeY: 30,
	color: "blue"
}
var box = {
	posX: 50,
	posY: 50,
	sizeX: 80,
	sizeY: 80,
	color: "black"
}
var kcode = {
	up: 38,
	w: 87,
	down: 40,
	s: 83,
	right: 39,
	d: 68,
	left: 37,
	a: 65
}
var moveUp = false, moveDown = false, moveLeft = false, moveRight = false, speedMoviment = 5, divSpeed = 1
var cnv = document.querySelector("canvas")
var ctx = cnv.getContext("2d")

update()

function update(){
	events()
	move()
	collideBorder(player)
	collideObjectsDetect(player, box)
	clear()
	render(box)
	render(player)
	window.requestAnimationFrame(update, cnv)
}
function render(object){
	ctx.fillStyle = object.color
	ctx.fillRect(object.posX,object.posY,object.sizeX,object.sizeY)
}
function clear(){
	ctx.clearRect(0,0,cnv.width,cnv.height)
}
function events(){
	addEventListener("keydown", keyDownPress)
	addEventListener("keyup", keyUpPress)
}
function keyDownPress(e){
	switch(e.keyCode){
		case kcode.up: 
		case kcode.w:
			moveUp = true
			break
			
		case kcode.down: 
		case kcode.s:
			moveDown = true
			break
		case kcode.left: 
		case kcode.a:
			moveLeft = true
			break
			
		case kcode.right: 
		case kcode.d:
			moveRight = true
			break
		}
}
function keyUpPress(e){
	switch(e.keyCode){
		case kcode.up: 
		case kcode.w:
			moveUp = false
			break
			
		case kcode.down: 
		case kcode.s:
			moveDown = false
			break
		case kcode.left: 
		case kcode.a:
			moveLeft = false
			break
			
		case kcode.right: 
		case kcode.d:
			moveRight = false
			break
		}
}
function move(){
	if (moveUp && moveLeft){
		divSpeed = 1.5
	}
	if (moveUp && moveRight){
		divSpeed = 1.5
	}
	if (moveDown && moveLeft){
		divSpeed = 1.5
	}
	if (moveDown && moveRight){
		divSpeed = 1.5
	}
	if(moveUp){
		player.posY -= speedMoviment/divSpeed
	}
	if(moveDown){
		player.posY += speedMoviment/divSpeed
	}
	if(moveRight){
		player.posX += speedMoviment/divSpeed
	}
	if(moveLeft){
		player.posX -= speedMoviment/divSpeed
	}
	divSpeed = 1
}
function collideBorder(object){
	if (object.posX + object.sizeX > cnv.width){
		object.posX = cnv.width - object.sizeX
	}
	if (object.posX < 0){
		object.posX = 0 
	}
	if (object.posY + object.sizeY > cnv.height){
		object.posY = cnv.height - object.sizeY
	}
	if (object.posY < 0){
		object.posY = 0 
	}
}
function collideObjectsDetect(object1, object2){
	if (object1.posX + object1.sizeX > object2.posX && 
		object1.posX < object2.posX + object2.sizeX && 
		object1.posY + object1.sizeY > object2.posY && 
		object1.posY < object2.posY + object2.sizeY){
		
		object1.color = "red"
	} else{
		object1.color = "blue"
	}
}