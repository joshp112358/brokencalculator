var calcShow = true;

function setup() {
	createCanvas(600,500);
	// calcButtons located in calculator.js
	makeCalcButtons();
}



function draw() {
		background('blue');
		displayLevel()
}

function add() {
	calcInput.value(calcInput.value()+this.html());
}
function equals() {
	calcInput.value(eval(calcInput.value()));
}
function zeroed() {
	calcInput.value('');
}
