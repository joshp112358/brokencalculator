var calcScreen = new p5(calcLevelSketch,"calculatorScreen");
var levelScreen = new p5(levelSelectionSketch, "levelingScreen")
var initScreen = new p5(initScreenSketch, "initialScreen")
function level1(){
  calcScreen.level = 1;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["8"];
  calcScreen.target = 8;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}

var level2 = function(){
  calcScreen.level = 2;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 1;
  calcScreen.score = 0;

  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level3 = function(){
  calcScreen.level = 3;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 15;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level4 = function(){
  calcScreen.level = 4;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["2"];
  calcScreen.target = 24;
  calcScreen.score = 0;

  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level5 = function(){
  calcScreen.level = 5;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 11;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level6 = function(){
  calcScreen.level = 6;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["3"];
  calcScreen.target = 30;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level7 = function(){
  calcScreen.level = 7;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["4", "0"];
  calcScreen.target = 40;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level8 = function(){
  calcScreen.level = 8;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2", "0"];
  calcScreen.target = 21;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level9 = function(){
  calcScreen.level = 9;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","3","0"];
  calcScreen.target = 33;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level10 = function(){
  calcScreen.level = 10;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}

var level11 = function(){
  calcScreen.level = 11;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","3","4", "6"];
  calcScreen.target = 36;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level12 = function(){
  calcScreen.level = 12;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","3","4", "7"];
  calcScreen.target = 37;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level13 = function(){
  calcScreen.level = 13;
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5","+"];
  calcScreen.target = 10;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level14 = function(){
  calcScreen.level = 14;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["7","5", "*"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level15 = function(){
  calcScreen.level = 15;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5", "-"];
  calcScreen.target = 20;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level16 = function(){
  calcScreen.level = 16;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level17 = function(){
  p.level = 17;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level18 = function(){
  calcScreen.level = 18;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level19 = function(){
  calcScreen.level = 19;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level20 = function(){
  calcScreen.level = 20;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.startTimer();
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
