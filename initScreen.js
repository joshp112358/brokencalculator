var calcScreen = new p5(calcLevelSketch,"calculatorScreen");
var levelsScreen = new p5(levelSelectionSketch,"levelingScreen");


var level1 = function(){
  calcScreen.brokenKeys = ["8"];
  calcScreen.target = 8;
}

var level2 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 1;
}
var level3 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 15;
}
var level4 = function(){
  calcScreen.brokenKeys = ["2"];
  calcScreen.target = 24;
}
var level5 = function(){
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 11;
}
var level6 = function(){
  calcScreen.brokenKeys = ["3"];
  calcScreen.target = 30;
}
var level7 = function(){
  calcScreen.brokenKeys = ["4", "0"];
  calcScreen.target = 40;
}
var level8 = function(){
  calcScreen.brokenKeys = ["1","2", "0"];
  calcScreen.target = 21;
}
var level9 = function(){
  calcScreen.brokenKeys = ["1","3","0"];
  calcScreen.target = 33;
}
var level10 = function(){
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
}

level1()
