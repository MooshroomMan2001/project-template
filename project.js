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
    // enemy function; will call :)
    var enemies = function (){
	var x = 625;
	rect(x, 500, 30, 30);
	x = x - 5;
    };
    enemies();
    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {
	processing.image(img, 0, 0);
	processing.image(dog, mouseX, mouseY);
	if(barfFired){
	    processing.fill(166, 255, 0);
	    processing.rect(barfX, barfY, 20, 20);
	    barfX = barfX + 5;
	    if (keyPressed && keyCode === UP){
		barfY -= 5;
	    } else if (keyPressed && keyCode ===DOWN){
		barfY += 5;
	    }
	}
	
    };

}
// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
