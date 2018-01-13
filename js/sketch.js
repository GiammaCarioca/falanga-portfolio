function setup() {
	var cnv = createCanvas(window.innerWidth, window.innerHeight);
	cnv.parent('canvasContainer');
}
	
function draw() {
 	background(253, 181, 191);
 	fill(0, 0, 255);
 	textFont('CircularStd-Bold');
 	textSize(32);

 	translate(width/2, height/2);
 	for (var i = 0; i < 5; i++) {
 		rotate(TWO_PI / 5.0);
 		text("nino", mouseX-50, mouseY-50);
 		text("falanga", mouseX-25, mouseY-25);
 	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



