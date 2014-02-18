var sketchProc = function(processing) {
    var img = processing.loadImage("Background.png");
    var dog = processing.loadImage("Untitled.png");
	
    // put variables anywhere
    var textY = 300
    var textX = 300

    // put functions here, just like kahn academy


    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(625, 450);

	// some drawing commands; feel free to change these
	processing.fill(255, 255, 0);

	// draw some text
    };

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {
	processing.image(img, 0, 0);
	processing.image(dog, mouseX, mouseY);
	if(mouseX >= 625 && mouseX <= 0){
	    processing.textSize(90, 80);
	    processing.fill(255, 0, 0);
	    processing.text("You died!", textX, textY);
	}
	if(mouseY >= 450){
	    processing.textSize(90, 30);
	    processing.text("You died!", textX, textY);
        }
	
    };

}
// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
