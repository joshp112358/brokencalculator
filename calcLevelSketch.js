var calcLevelSketch = function(p) {

  p.calcButtons = [];
  p.calcInput;
  p.brokenKeys = ['7', '8']
  p.target = 0;
  var targElem;
  p.score = 0;
  var scorElem;
  var backButton;
  var timerElem;
  var time = 60;
  p.displayEndMessage = false;
  p.moveHistory = [];
  var moveHistoryElem;


  p.makeCalcButtons = function() {
    p.calcButtons = [];
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
    p.calcButtons.push(p.createButton('CE').position(100, 380));
    p.calcButtons.push(p.createButton('0').position(160, 380));
    p.calcButtons.push(p.createButton('=').position(220, 380));
    p.calcButtons.push(p.createButton('+').position(280, 380));

    p.calcInput.style('width', '225px')
      .style('height', '35px')
      .style('background-color', "white")
      .style("font-size", "2em")
      .style("align-content", "right");


    for (let i = 1; i < p.calcButtons.length; i++) {
      p.calcButtons[i].style('width', '50px')
        .style('height', '50px')
        .style('background-color', "white")
        .style('font-size', '1em')
        .mousePressed(add);
    }
    p.calcButtons[13].mousePressed(zeroed)
    p.calcButtons[15].mousePressed(equals)
  }



  p.makeBrokenKeys = function(){
    if (p.brokenKeys.indexOf('7')!==-1){
      p.calcButtons[1].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('8')!==-1){
      p.calcButtons[2].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('9')!==-1){
      p.calcButtons[3].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('/')!==-1){
      p.calcButtons[4].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('4')!==-1){
      p.calcButtons[5].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('5')!==-1){
      p.calcButtons[6].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('6')!==-1){
      p.calcButtons[7].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('*')!==-1){
      p.calcButtons[8].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('1')!==-1){
      p.calcButtons[9].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('2')!==-1){
      p.calcButtons[10].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('3')!==-1){
      p.calcButtons[11].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('-')!==-1){
      p.calcButtons[12].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('0')!==-1){
      p.calcButtons[14].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('+')!==-1){
      p.calcButtons[16].style('background-color', "rgb(256,0,0)")
      .mousePressed(donothing);
    }
  }

  function equals() {
    var value = eval(p.calcInput.value());
    if (value == p.target && p.moveHistory.indexOf(p.calcInput.value())===-1){
      p.score += 1;
      p.moveHistory.push(p.calcInput.value());
      moveHistoryElem.html(moveHistoryElem.html() + "<br>"+ p.calcInput.value());
      zeroed();
    }
    else{
      zeroed();
    }
  }

  function add(){
    p.calcInput.value(p.calcInput.value() + this.html());
  }

  function zeroed() {
    p.calcInput.value("");
  }

  function donothing() {}

  p.switchScreen = function(){
  document.getElementById("levelingScreen").style.display = "block";
  document.getElementById("calculatorScreen").style.display = "none";
}

  var counter = 0;
  var interval;

  p.startTimer = function(){
    interval = setInterval(timeIt, 1000);
  }
  function timeIt(){
    counter++;
    timerElem.html("Time "+eval(time-counter));
    if (counter == 60){
      clearInterval(interval);
      counter = 0;
      p.displayEndMessage = true;
    }
  }
  p.setup = function() {
    p.createCanvas(500, 500);
    p.background('#43f2c3');
    timerElem = p.createDiv("Time "+time).position(250,80);
    p.makeCalcButtons();
    scoreElem = p.createDiv().position(100,50);
    targElem = p.createDiv().position(100,80);
    backButton = p.createButton('Back').mousePressed(p.switchScreen).position(400, 420);
    moveHistoryElem = p.createDiv('Move History').position(370,90).style("width", '120px').style("height", '320px');
    p.fill("black")
    p.rect(90,130,250,310)

  }

  p.clearMoveHistory = function(){
    p.moveHistory = [];
    moveHistoryElem.html("Move History")
  }

  p.draw = function() {
    scoreElem.html('Score: '+ p.score)
    targElem.html('Target:' + p.target)
    if (p.displayEndMessage){
      timerElem.html("Times Up")
    }
  }
}
