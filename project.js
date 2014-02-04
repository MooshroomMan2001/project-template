var sketchProc = function(processing) {
    var img = processing.loadImage("Background.png");
	
    // put variables here, just like kahn academy
    var exampleVar = 10;

    // put functions here, just like kahn academy
    var exampleFunction = function(){

    };

    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(800, 600);

	// some drawing commands; feel free to change these
	processing.fill(255, 255, 0);

	// draw some text

	// call a function (defined up above)
	exampleFunction();
    };

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {
	processing.image(img, 0, 0);
	processing.rect(mouseX, mouseY, 30, 30);
	if(mouseX >= 750 && mouseX <= 0){
	    processing.textSize(90, 80);
	    processing.text("You died!", 300, 300);
	}
	if(mouseY >= 500){
	    processing.textSize(90, 30);
	    processing.text("You died!", 300, 300);
	}
	
    };

}
// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
