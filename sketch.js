var calcLevelSketch = function(p) {
  var calcButtons = [];
  var calcInput;
  var calcButton
  var calcDeltaX = 40;
  var calcDeltaY = 50;
  var calcShow = true;
  // how can I make brokenKeys and target a input of calcLevel
  var brokenKeys = ['1', '3', '='];
	var target = 14;
	var score=0;
	var scoreElem;
  // = and CE are always 'broken'

  function makeCalcButtons() {
    calcButtons.push(calcInput = p.createInput('').position(100, 150).id('calcInput'));
    calcButtons.push(p.createButton('7').position(100, 200).class('calcButtons'));
    calcButtons.push(p.createButton('8').position(160, 200).class('calcButtons'));
    calcButtons.push(p.createButton('9').position(220, 200).class('calcButtons'));
    calcButtons.push(p.createButton('/').position(280, 200).class('calcButtons'));
    calcButtons.push(p.createButton('4').position(100, 260).class('calcButtons'));
    calcButtons.push(p.createButton('5').position(160, 260).class('calcButtons'));
    calcButtons.push(p.createButton('6').position(220, 260).class('calcButtons'));
    calcButtons.push(p.createButton('*').position(280, 260).class('calcButtons'));
    calcButtons.push(p.createButton('1').position(100, 320).class('calcButtons'));
    calcButtons.push(p.createButton('2').position(160, 320).class('calcButtons'));
    calcButtons.push(p.createButton('3').position(220, 320).class('calcButtons'));
    calcButtons.push(p.createButton('-').position(280, 320).class('calcButtons'));
    calcButtons.push(p.createButton('.').position(100, 380).class('calcButtons'));
    calcButtons.push(p.createButton('0').position(160, 380).class('calcButtons'));
    calcButtons.push(p.createButton('=').position(220, 380).class('calcButtons').mousePressed(equals));
    calcButtons.push(p.createButton('+').position(280, 380).class('calcButtons'));

		calcInput.style('width', '225px')
							.style('height', '35px')
							.style('background-color', "rgb(60,900,60)")
							.style("font-size","2em")
							.style("align-content","right");

		for (i = 0; i < calcButtons.length; i++) {
      if (brokenKeys.indexOf(calcButtons[i].html()) !== -1) {} else {
        calcButtons[i].mousePressed(add)
      }
    }
		for (i = 1; i < calcButtons.length; i++) {
			if (brokenKeys.indexOf(calcButtons[i].html()) === -1){
				calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(60,900, 60)")
											.style("font-size","2em");
			} else if (calcButtons[i].html()==='='){
				calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(60,900, 60)")
											.style("font-size","2em");
			} else {
				calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(256,0,0)")
											.style("font-size","2em");
			}
		}
  }
	function drawXs() {
		if (brokenKeys.indexOf('7') !== -1){
			X(100, 200)
		}if (brokenKeys.indexOf('8') !== -1){
			X(160, 200)
		}if (brokenKeys.indexOf('9') !== -1){
			X(220, 200)
		}if (brokenKeys.indexOf('/') !== -1){
			X(280, 200)
		}if (brokenKeys.indexOf('4') !== -1){
			X(100, 260)
		}if (brokenKeys.indexOf('5') !== -1){
			X(160, 260)
		}if (brokenKeys.indexOf('6') !== -1){
			X(220, 260)
		}if (brokenKeys.indexOf('*') !== -1){
			X(280, 260)
		}if (brokenKeys.indexOf('1') !== -1){
			X(100, 320)
		}if (brokenKeys.indexOf('2') !== -1){
			X(160, 320)
		}if (brokenKeys.indexOf('3') !== -1){
			X(220, 320)
		}if (brokenKeys.indexOf('-') !== -1){
			X(280, 320)
		}if (brokenKeys.indexOf('7') !== -1){
			X(100, 380)
		}if (brokenKeys.indexOf('8') !== -1){
			X(160, 380)
		}if (brokenKeys.indexOf('9') !== -1){
			X(220, 380)
		}if (brokenKeys.indexOf('/') !== -1){
			X(280, 380)
		}
	}

  function X(i, j) {
    p.stroke('red');
    p.strokeWeight(4);
    p.line(i, j, i + 50, j + 50);
    p.line(i + 50, j, i, j + 50);
  }

  function drawTimer() {}

  p.setup = function() {
    p.createCanvas(600, 500);
    makeCalcButtons();
		scoreElem = p.createDiv().position(100,50)
								.style("color", "white")
								.style("font-size","1.5em");
		p.createDiv("Target is:"+target).position(240, 50)
																		.style("color", "white")
																		.style("font-size","1.5em");

  }
  p.draw = function() {
    p.background('blue');
		scoreElem.html('Score: '+ score)
  }

  function add() {
    calcInput.value(calcInput.value() + this.html());
  }

  function equals() {
			// for every successful entry, add a point.
    calcInput.value(eval(calcInput.value()));
		if (calcInput.value() == target){
			calcInput.value('');
			score+=1;
		}
  }
}

var calcScreen = new p5(calcLevelSketch);
