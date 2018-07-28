var levelSelectionSketch = function(s) {

  var buttons = [];
  var makeButtons = function() {
    buttons.push(s.createButton("level1").position(80, 90).mousePressed(s.switchScreen1));
    buttons.push(s.createButton("level2").position(170, 90).mousePressed(s.switchScreen2));
    buttons.push(s.createButton("level3").position(260, 90).mousePressed(s.switchScreen3));
    buttons.push(s.createButton("level4").position(350, 90).mousePressed(s.switchScreen4));
    buttons.push(s.createButton("level5").position(80, 160).mousePressed(s.switchScreen5));
    buttons.push(s.createButton("level6").position(170, 160).mousePressed(s.switchScreen6));
    buttons.push(s.createButton("level7").position(260, 160).mousePressed(s.switchScreen7));
    buttons.push(s.createButton("level8").position(350, 160).mousePressed(s.switchScreen8));
    buttons.push(s.createButton("level9").position(80, 230).mousePressed(s.switchScreen9));
    buttons.push(s.createButton("level10").position(170, 230).mousePressed(s.switchScreen10));
    buttons.push(s.createButton("level11").position(260, 230).mousePressed(s.switchScreen11));
    buttons.push(s.createButton("level12").position(350, 230).mousePressed(s.switchScreen12));
    buttons.push(s.createButton("level13").position(80, 300).mousePressed(s.switchScreen13));
    buttons.push(s.createButton("level14").position(170, 300).mousePressed(s.switchScreen14));
    buttons.push(s.createButton("level15").position(260, 300).mousePressed(s.switchScreen15));
    buttons.push(s.createButton("level16").position(350, 300).mousePressed(s.switchScreen16));
    buttons.push(s.createButton("level17").position(80, 370).mousePressed(s.switchScreen17));
    buttons.push(s.createButton("level18").position(170, 370).mousePressed(s.switchScreen18));
    buttons.push(s.createButton("level19").position(260, 370).mousePressed(s.switchScreen19));
    buttons.push(s.createButton("level20").position(350, 370).mousePressed(s.switchScreen20));


  }

  function styleize() {
    for (i=0; i<buttons.length; i++){
      buttons[i].style('width', '50px')
        .style('height', '30px')

    }
  }
  s.setup = function() {
    s.createCanvas(500, 500);
    s.background('#43f2c3');
    makeButtons();
    styleize();
    s.textSize(25)
    s.text("Levels", 230,50)
  }

  s.switchScreen1 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level1();
  }
  s.switchScreen2 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level2();
  }
  s.switchScreen3 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level3();
  }
  s.switchScreen4 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level4();
  }
  s.switchScreen5 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level5();
  }
  s.switchScreen6 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level6();
  }
  s.switchScreen7 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level7();
  }
  s.switchScreen8 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level8();
  }
  s.switchScreen9 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level9();
  }
  s.switchScreen10 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level10();
  }
  s.switchScreen11 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level11();
  }
  s.switchScreen12 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level12();
  }
  s.switchScreen13 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level13();
  }
  s.switchScreen14 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level14();
  }
  s.switchScreen15 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level15();
  }
  s.switchScreen16 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level16();
  }
  s.switchScreen17 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level17();
  }
  s.switchScreen18 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level18();
  }
  s.switchScreen19 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level19();
  }
  s.switchScreen20 = function(x) {
    document.getElementById("levelingScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }

}
