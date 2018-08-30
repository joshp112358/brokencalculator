var levelSelectionSketch = function(s) {
  s.touchStarted = function(){
    return false;
  }

  var buttons = [];
  var makeButtons = function() {
    // x delta 95, y delta 70
    buttons.push(s.createButton("1").position(80, 90).mousePressed(s.switchScreen1));
    buttons.push(s.createButton("2").position(175, 90).mousePressed(s.switchScreen2));
    buttons.push(s.createButton("3").position(270, 90).mousePressed(s.switchScreen3));
    buttons.push(s.createButton("4").position(365, 90).mousePressed(s.switchScreen4));
    buttons.push(s.createButton("5").position(80, 160).mousePressed(s.switchScreen5));
    buttons.push(s.createButton("6").position(175, 160).mousePressed(s.switchScreen6));
    buttons.push(s.createButton("7").position(270, 160).mousePressed(s.switchScreen7));
    buttons.push(s.createButton("8").position(365, 160).mousePressed(s.switchScreen8));
    buttons.push(s.createButton("9").position(80, 230).mousePressed(s.switchScreen9));
    buttons.push(s.createButton("10").position(175, 230).mousePressed(s.switchScreen10));
    buttons.push(s.createButton("11").position(270, 230).mousePressed(s.switchScreen11));
    buttons.push(s.createButton("12").position(365, 230).mousePressed(s.switchScreen12));
    buttons.push(s.createButton("13").position(80, 300).mousePressed(s.switchScreen13));
    buttons.push(s.createButton("14").position(175, 300).mousePressed(s.switchScreen14));
    buttons.push(s.createButton("15").position(270, 300).mousePressed(s.switchScreen15));
    buttons.push(s.createButton("16").position(365, 300).mousePressed(s.switchScreen16));
    buttons.push(s.createButton("17").position(80, 370).mousePressed(s.switchScreen17));
    buttons.push(s.createButton("18").position(175, 370).mousePressed(s.switchScreen18));
    buttons.push(s.createButton("19").position(270, 370).mousePressed(s.switchScreen19));
    buttons.push(s.createButton("20").position(365, 370).mousePressed(s.switchScreen20));
  }

  function star(x, y, radius1, radius2, npoints) {
    var angle = s.TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    s.beginShape();
    for (var a = 0; a < s.TWO_PI; a += angle) {
      var sx = x + s.cos(a) * radius2;
      var sy = y + s.sin(a) * radius2;
      s.vertex(sx, sy);
      sx = x + s.cos(a + halfAngle) * radius1;
      sy = y + s.sin(a + halfAngle) * radius1;
      s.vertex(sx, sy);
    }
    s.endShape(s.CLOSE);
  }


  function styleize() {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style('width', '50px')
        .style('height', '30px')
    }
  }

  function makeStars(){
    for (let i = 0; i<buttons.length; i++){
      s.fill('white');
      var x = buttons[i].x;
      var y = buttons[i].y;
      star(x+5,y+45,7,3.5,5);
      star(x+25,y+45,7,3.5,5);
      star(x+45,y+45,7,3.5,5);
    }
  }




  s.setup = function() {
    s.createCanvas(500, 500);
    s.background('#43f2c3');
    makeButtons();
    makeStars();
    styleize();
    s.textSize(25)
    s.text("Levels", 230, 50)
  }

  s.draw = function(){
    s.fill('orange');
    if (localStorage.level1 === "3"){
      star(80+5,90+45,7,3.5,5);
      star(80+25,90+45,7,3.5,5);
      star(80+45,90+45,7,3.5,5);
    }
    else if (localStorage.level1 === "2") {
      star(80+5,90+45,7,3.5,5);
      star(80+25,90+45,7,3.5,5);
    }
    else if (localStorage.level1 === "1") {
      star(80+5,90+45,7,3.5,5);
    }
    if (localStorage.level2 === "3"){
      star(175+5,90+45,7,3.5,5);
      star(175+25,90+45,7,3.5,5);
      star(175+45,90+45,7,3.5,5);
    }
    else if (localStorage.level2 === "2") {
      star(175+5,90+45,7,3.5,5);
      star(175+25,90+45,7,3.5,5);
    }
    else if (localStorage.level2 === "1") {
      star(175+5,90+45,7,3.5,5);
    }
    if (localStorage.level3 === "3"){
      star(270+5,90+45,7,3.5,5);
      star(270+25,90+45,7,3.5,5);
      star(270+45,90+45,7,3.5,5);
    }
    else if (localStorage.level3 === "2") {
      star(270+5,90+45,7,3.5,5);
      star(270+25,90+45,7,3.5,5);
    }
    else if (localStorage.level3 === "1") {
      star(270+5,90+45,7,3.5,5);
    }
    if (localStorage.level4 === "3"){
      star(365+5,90+45,7,3.5,5);
      star(365+25,90+45,7,3.5,5);
      star(365+45,90+45,7,3.5,5);
    }
    else if (localStorage.level4 === "2") {
      star(365+5,90+45,7,3.5,5);
      star(365+25,90+45,7,3.5,5);
    }
    else if (localStorage.level4 === "1") {
      star(365+5,90+45,7,3.5,5);
    }
    if (localStorage.level5 === "3"){
      star(80+5,160+45,7,3.5,5);
      star(80+25,160+45,7,3.5,5);
      star(80+45,160+45,7,3.5,5);
    }
    else if (localStorage.level5 === "2") {
      star(80+5,160+45,7,3.5,5);
      star(80+25,160+45,7,3.5,5);
    }
    else if (localStorage.level5 === "1") {
      star(80+5,160+45,7,3.5,5);
    }
    if (localStorage.level6 === "3"){
      star(175+5,160+45,7,3.5,5);
      star(175+25,160+45,7,3.5,5);
      star(175+45,160+45,7,3.5,5);
    }
    else if (localStorage.level6 === "2") {
      star(175+5,160+45,7,3.5,5);
      star(175+25,160+45,7,3.5,5);
    }
    else if (localStorage.level6 === "1") {
      star(175+5,160+45,7,3.5,5);
    }
    if (localStorage.level7 === "3"){
      star(270+5,160+45,7,3.5,5);
      star(270+25,160+45,7,3.5,5);
      star(270+45,160+45,7,3.5,5);
    }
    else if (localStorage.level7 === "2") {
      star(270+5,160+45,7,3.5,5);
      star(270+25,160+45,7,3.5,5);
    }
    else if (localStorage.level7 === "1") {
      star(270+5,160+45,7,3.5,5);
    }
    if (localStorage.level8 === "3"){
      star(365+5,160+45,7,3.5,5);
      star(365+25,160+45,7,3.5,5);
      star(365+45,160+45,7,3.5,5);
    }
    else if (localStorage.level8 === "2") {
      star(365+5,160+45,7,3.5,5);
      star(365+25,160+45,7,3.5,5);
    }
    else if (localStorage.level8 === "1") {
      star(365+5,160+45,7,3.5,5);
    }
    if (localStorage.level9 === "3"){
      star(80+5,230+45,7,3.5,5);
      star(80+25,230+45,7,3.5,5);
      star(80+45,230+45,7,3.5,5);
    }
    else if (localStorage.level9 === "2") {
      star(80+5,230+45,7,3.5,5);
      star(80+25,230+45,7,3.5,5);
    }
    else if (localStorage.level9 === "1") {
      star(80+5,230+45,7,3.5,5);
    }
    if (localStorage.level10 === "3"){
      star(175+5,230+45,7,3.5,5);
      star(175+25,230+45,7,3.5,5);
      star(175+45,230+45,7,3.5,5);
    }
    else if (localStorage.level10 === "2") {
      star(175+5,230+45,7,3.5,5);
      star(175+25,230+45,7,3.5,5);
    }
    else if (localStorage.level10 === "1") {
      star(175+5,230+45,7,3.5,5);
    }
    if (localStorage.level11 === "3"){
      star(270+5,230+45,7,3.5,5);
      star(270+25,230+45,7,3.5,5);
      star(270+45,230+45,7,3.5,5);
    }
    else if (localStorage.level11=== "2") {
      star(270+5,230+45,7,3.5,5);
      star(270+25,230+45,7,3.5,5);
    }
    else if (localStorage.level11 === "1") {
      star(270+5,230+45,7,3.5,5);
    }
    if (localStorage.level12 === "3"){
      star(365+5,230+45,7,3.5,5);
      star(365+25,230+45,7,3.5,5);
      star(365+45,230+45,7,3.5,5);
    }
    else if (localStorage.level12 === "2") {
      star(365+5,230+45,7,3.5,5);
      star(365+25,230+45,7,3.5,5);
    }
    else if (localStorage.level12 === "1") {
      star(365+5,230+45,7,3.5,5);
    }
    if (localStorage.level13 === "3"){
      star(80+5,300+45,7,3.5,5);
      star(80+25,300+45,7,3.5,5);
      star(80+45,300+45,7,3.5,5);
    }
    else if (localStorage.level13 === "2") {
      star(80+5,300+45,7,3.5,5);
      star(80+25, 300+45,7,3.5,5);
    }
    else if (localStorage.level13 === "1") {
      star(80+5,300+45,7,3.5,5);
    }
    if (localStorage.level14 === "3"){
      star(175+5,300+45,7,3.5,5);
      star(175+25,300+45,7,3.5,5);
      star(175+45,300+45,7,3.5,5);
    }
    else if (localStorage.level14 === "2") {
      star(175+5,300+45,7,3.5,5);
      star(175+25,300+45,7,3.5,5);
    }
    else if (localStorage.level14 === "1") {
      star(175+5,300+45,7,3.5,5);
    }
    if (localStorage.level15 === "3"){
      star(270+5,300+45,7,3.5,5);
      star(270+25,300+45,7,3.5,5);
      star(270+45,300+45,7,3.5,5);
    }
    else if (localStorage.level15 === "2") {
      star(270+5,300+45,7,3.5,5);
      star(270+25,300+45,7,3.5,5);
    }
    else if (localStorage.level15 === "1") {
      star(270+5,300+45,7,3.5,5);
    }
    if (localStorage.level16 === "3"){
      star(365+5,300+45,7,3.5,5);
      star(365+25,300+45,7,3.5,5);
      star(365+45,300+45,7,3.5,5);
    }
    else if (localStorage.level16 === "2") {
      star(365+5,300+45,7,3.5,5);
      star(365+25,300+45,7,3.5,5);
    }
    else if (localStorage.level16 === "1") {
      star(365+5,300+45,7,3.5,5);
    }

    if (localStorage.level17 === "3"){
      star(80+5,370+45,7,3.5,5);
      star(80+25,370+45,7,3.5,5);
      star(80+45,370+45,7,3.5,5);
    }
    else if (localStorage.level17 === "2") {
      star(80+5,370+45,7,3.5,5);
      star(80+25,370+45,7,3.5,5);
    }
    else if (localStorage.level17 === "1") {
      star(80+5,370+45,7,3.5,5);
    }
    if (localStorage.level18 === "3"){
      star(175+5,370+45,7,3.5,5);
      star(175+25,370+45,7,3.5,5);
      star(175+45,370+45,7,3.5,5);
    }
    else if (localStorage.level18 === "2") {
      star(175+5,370+45,7,3.5,5);
      star(175+25,370+45,7,3.5,5);
    }
    else if (localStorage.level18 === "1") {
      star(175+5,370+45,7,3.5,5);
    }
    if (localStorage.level19 === "3"){
      star(270+5,370+45,7,3.5,5);
      star(270+25,370+45,7,3.5,5);
      star(270+45,370+45,7,3.5,5);
    }
    else if (localStorage.level19 === "2") {
      star(270+5,370+45,7,3.5,5);
      star(270+25,370+45,7,3.5,5);
    }
    else if (localStorage.level19 === "1") {
      star(270+5,370+45,7,3.5,5);
    }
    if (localStorage.level20=== "3"){
      star(365+5,370+45,7,3.5,5);
      star(365+25,370+45,7,3.5,5);
      star(365+45,370+45,7,3.5,5);
    }
    else if (localStorage.level20 === "2") {
      star(365+5,370+45,7,3.5,5);
      star(365+25,370+45,7,3.5,5);
    }
    else if (localStorage.level20 === "1") {
      star(365+5,370+45,7,3.5,5);
    }
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
