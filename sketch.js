var calcLevelSketch = function(p) {

  p.calcButtons = [];
  p.calcInput;
  var calcButton
  var calcDeltaX = 40;
  var calcDeltaY = 50;
  var calcShow = true;
  // how can I make brokenKeys and target a input of calcLevel
  p.brokenKeys;
	p.target;
	var score=0;
	var scoreElem;

  p.makeCalcButtons = function() {
    p.calcButtons.push(p.calcInput = p.createInput('').position(100, 140));
    p.calcButtons.push(p.createButton('7').position(100, 200));
    p.calcButtons.push(p.createButton('8').position(160, 200));
    p.calcButtons.push(p.createButton('9').position(220, 200));
    p.calcButtons.push(p.createButton('/').position(280, 200));
    p.calcButtons.push(p.createButton('4').position(100, 260));
    p.calcButtons.push(p.createButton('5').position(160, 260));
    p.calcButtons.push(p.createButton('6').position(220, 260));
    p.calcButtons.push(p.createButton('*').position(280, 260));
    p.calcButtons.push(p.createButton('1').position(100, 320));
    p.calcButtons.push(p.createButton('2').position(160, 320));
    p.calcButtons.push(p.createButton('3').position(220, 320));
    p.calcButtons.push(p.createButton('-').position(280, 320));
    p.calcButtons.push(p.createButton('CE').position(100, 380).mousePressed(clear));
    p.calcButtons.push(p.createButton('0').position(160, 380));
    p.calcButtons.push(p.createButton('=').position(220, 380).mousePressed(equals));
    p.calcButtons.push(p.createButton('+').position(280, 380));

		p.calcInput.style('width', '225px')
							.style('height', '35px')
							.style('background-color', "rgb(60,900,60)")
							.style("font-size","2em")
							.style("align-content","right");

		for (i = 0; i < p.calcButtons.length; i++) {
      if (p.calcButtons[i].html() === '=' || p.calcButtons[i].html() === 'CE'){}
      else if (p.brokenKeys.indexOf(p.calcButtons[i].html()) !== -1) {} else {
        p.calcButtons[i].mousePressed(add)
      }
    }

  }
	function drawXs() {
		if (p.brokenKeys.indexOf('7') !== -1){
			X(100, 200)
		}if (p.brokenKeys.indexOf('8') !== -1){
			X(160, 200)
		}if (p.brokenKeys.indexOf('9') !== -1){
			X(220, 200)
		}if (p.brokenKeys.indexOf('/') !== -1){
			X(280, 200)
		}if (p.brokenKeys.indexOf('4') !== -1){
			X(100, 260)
		}if (p.brokenKeys.indexOf('5') !== -1){
			X(160, 260)
		}if (p.brokenKeys.indexOf('6') !== -1){
			X(220, 260)
		}if (p.brokenKeys.indexOf('*') !== -1){
			X(280, 260)
		}if (p.brokenKeys.indexOf('1') !== -1){
			X(100, 320)
		}if (p.brokenKeys.indexOf('2') !== -1){
			X(160, 320)
		}if (p.brokenKeys.indexOf('3') !== -1){
			X(220, 320)
		}if (p.brokenKeys.indexOf('-') !== -1){
			X(280, 320)
		}if (p.brokenKeys.indexOf('7') !== -1){
			X(100, 380)
		}if (p.brokenKeys.indexOf('8') !== -1){
			X(160, 380)
		}if (p.brokenKeys.indexOf('9') !== -1){
			X(220, 380)
		}if (p.brokenKeys.indexOf('/') !== -1){
			X(280, 380)
		}
	}

  function X(i, j) {
    p.stroke('red');
    p.strokeWeight(4);
    p.line(i, j, i + 50, j + 50);
    p.line(i + 50, j, i, j + 50);
  }

  var targetElem;
  function drawTimer() {}
  var backButton;

  p.setup = function() {
    p.createCanvas(500, 500).parent("calculatorScreen");
    p.makeCalcButtons();
		scoreElem = p.createDiv().position(100,50)
								.style("color", "white")
								.style("font-size","1.5em");
		targetElem = p.createDiv().position(100, 80)
																		.style("color", "white")
																		.style("font-size","1.5em");

    p.background('orange');
    backButton = p.createButton('Back').mousePressed(p.switchScreen)
                                      .position(400,100)

  }

  p.switchScreen = function(){
    document.getElementById("levelingScreen").style.display = "block";
    document.getElementById("calculatorScreen").style.display = "none";
  }

  p.draw = function() {
		scoreElem.html('Score: '+ score)
    for (i = 1; i < p.calcButtons.length; i++) {
			if (p.brokenKeys.indexOf(p.calcButtons[i].html()) === -1){
				p.calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(60,900, 60)")
											.style("font-size","2em");
			} else if (p.calcButtons[i].html()==='='){
				p.calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(60,900, 60)")
											.style("font-size","2em");
			} else {
				p.calcButtons[i].style('width', '50px')
											.style('height', '50px')
											.style('background-color', "rgb(256,0,0)")
											.style("font-size","2em");
			}
		}

    targetElem.html("Target: "+p.target)
  }

  function add() {
    p.calcInput.value(p.calcInput.value() + this.html());
  }

  function equals() {
			// for every successful entry, add a point.
    p.calcInput.value(eval(p.calcInput.value()));
    if (p.calcInput.value() == p.target){
      clear();
      score += 1;
    }
    else{
      clear();
      p.stroke('white');

    }
	}
  function clear() {
    p.calcInput.value("");
  }
}

var levelSelectionSketch = function(s){
  var l1;
  s.setup = function(){
    s.createCanvas(500,500);
    s.background('black');
    s.createButton("level1").position(100,100).mousePressed(s.switchScreen1);
    s.createButton("level2").position(180,100).mousePressed(s.switchScreen2);

    s.createButton("level3").position(260,100).mousePressed(s.switchScreen3);
    s.createButton("level4").position(100,200).mousePressed(s.switchScreen4);
    s.createButton("level5").position(180,200).mousePressed(s.switchScreen5);

    s.createButton("level6").position(260,200).mousePressed(s.switchScreen6);
    s.createButton("level7").position(100,300).mousePressed(s.switchScreen7);
    s.createButton("level8").position(180,300).mousePressed(s.switchScreen8);

    s.createButton("level9").position(260,300).mousePressed(s.switchScreen9);
    s.createButton("level10").position(100,400).mousePressed(s.switchScreen10);
  }

  s.switchScreen1 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level1();
  }
  s.switchScreen2 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level2();
  }
  s.switchScreen3 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level3();
  }
  s.switchScreen4 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level4();
  }
  s.switchScreen5 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level5();
  }
  s.switchScreen6 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level6();
  }
  s.switchScreen7 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level7();
  }
  s.switchScreen8 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level8();
  }
  s.switchScreen9 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level9();
  }
  s.switchScreen10 = function(x){
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level10();
  }
}
