var calcScreen = new p5(calcLevelSketch,"calculatorScreen");
var levelScreen = new p5(levelSelectionSketch, "levelingScreen")

function level1(){
  calcScreen.brokenKeys = ["8"];
  calcScreen.target = 8;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}

var level2 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 1;
  calcScreen.score = 0;

  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level3 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 15;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level4 = function(){
  calcScreen.brokenKeys = ["2"];
  calcScreen.target = 24;
  calcScreen.score = 0;

  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level5 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 11;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level6 = function(){
  calcScreen.brokenKeys = ["3"];
  calcScreen.target = 30;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level7 = function(){
  calcScreen.brokenKeys = ["4", "0"];
  calcScreen.target = 40;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level8 = function(){
  calcScreen.brokenKeys = ["1","2", "0"];
  calcScreen.target = 21;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level9 = function(){
  calcScreen.brokenKeys = ["1","3","0"];
  calcScreen.target = 33;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level10 = function(){
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
