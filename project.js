var sketchProc = function(processing) {
    var img = processing.loadImage("Background.png");
    var dog = processing.loadImage("Untitled.png");
    var audio = new Audio("Barf.mp3");
    var music = new Audio("mixdown.wav");
music.controls = true;
music.loop = true;
music.autoplay = true;
document.body.appendChild(music);

    


	
    // put variables anywhere
    var textY = 300;
    var textX = 300;
    var barfX = 1;
    var barfFired = false;
    var barfY = 150;
    var x = 625;
    var y = 100; 

    var enemyOne = {
	x: 625
    };
    var enemyTwo = {
	x: 625,
	y: 100
    };
    


    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(625, 450);

	// some drawing commands; feel free to change these
	processing.fill(255, 255, 0);

	// mouse clicked function
    };
    processing.mouseClicked = function(){
	barfFired = true;
	barfX = 1;
	audio.play();
	

    };

    var moveEnemy = function(enemy) {
	enemy.x = enemy.x - 1;
    }

    var drawEnemy = function(enemy) {
	processing.fill(255, 0, 0);
	processing.rect(enemy.x, 200, 30, 30);
    }

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {
	moveEnemy(enemyOne);
	moveEnemy(enemyTwo);
	processing.image(img, 0, 0);
	processing.image(dog, processing.mouseX, processing.mouseY);
	if(barfFired){
	    processing.fill(166, 255, 0);
	    processing.rect(barfX, barfY, 20, 20);
	    barfX = barfX + 5;
	    if (processing.keyPressed && processing.keyCode === processing.UP){
		barfY -= 5;
	    } else if (processing.keyPressed && processing.keyCode === processing.DOWN){
		barfY += 5;
	    }
	}
	drawEnemy(enemyOne);
	drawEnemy(enemyTwo);
    };

}
// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
