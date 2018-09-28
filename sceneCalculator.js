
var sceneCalculator = function(p) {
  p.calcButtons = [];
  p.calcInput;
  p.brokenKeys = ['7', '8']
  p.level = 1;
  p.target = 2;
  var targElem;
  var backButton;
  var levelElem;
  p.score = 0;
  p.moveHistory = [];

  p.clearMoveHistory = function(){
    p.moveHistory = [];
  }

  p.setup = function() {
    p.createCanvas(300, 500);
    p.background('#ccffff');
    p.calcButtons.push(p.calcInput = p.createInput('').position(40, 200))
    makeBackButton();
    p.makeCalcButtons();
    p.makeBrokenKeys();
    levelElem = p.createDiv("Level " + p.level).position(20, 18);
    levelElem.style("font-size", "1.4em");
    targElem = p.createDiv("Target " + p.target).position(p.width/2 - 40, 60);
    targElem.style("font-size", "1.4em");
    makeScoreBar();
    //make calc background
    p.noStroke();
    p.fill("#3399ff")
    p.rect(36,190,240,300,10)

    //draw menu bar

    p.noStroke()
    p.fill('lightgrey');
    p.rect(0, 0, p.width, 50);


  }

  p.draw = function(){

    targElem.html('Target ' + p.target)
    levelElem.html('Level '+ p.level)
    makeScoreBar();
    if (p.score === 1){
      p.fill('pink');
      p.noStroke();
      p.ellipse(70,120,15,15);
    }
    if (p.score === 2){
      p.fill('pink');
      p.noStroke();
      p.ellipse(70,120,15,15);
      p.ellipse(150,120,15,15);
    }
    if (p.score === 3){
      p.fill('pink');
      p.noStroke();
      p.ellipse(70,120,15,15);
      p.ellipse(150,120,15,15);
      p.ellipse(230,120,15,15);
      localStorage.setItem('level'+p.level, true);
    }
    changeLevels();
  }

  function makeScoreBar(){
    p.noStroke();
    p.fill('black');
    p.ellipse(70,120,15,15);
    p.ellipse(150,120,15,15);
    p.ellipse(230,120,15,15);
  }

  function changeLevels(){
    if (p.score === 3){
      //change alpha on level screen via localhost
      if (p.level===35){
        level35();
      }else if (p.level===34){
        level35();
      }else if (p.level===33){
        level34();
      }else if (p.level===32){
        level33();
      }else if (p.level===31){
        level32();
      }else if (p.level===30){
        level31();
      }else if (p.level===29){
        level30();
      }else if (p.level===28){
        level29();
      }else if (p.level===27){
        level28();
      }else if (p.level===26){
        level27();
      }else if (p.level===25){
        level26();
      }else if (p.level===24){
        level25();
      }else if (p.level===23){
        level24();
      }else if (p.level===22){
        level23();
      }else if (p.level===21){
        level22();
      }else if (p.level===20){
        level21();
      }else if (p.level===19){
        level20();
      }else if (p.level===18){
        level19();
      }else if (p.level===17){
        level18();
      }else if (p.level===16){
        level17();
      }else if (p.level===15){
        level16();
      }else if (p.level===14){
        level15();
      }else if (p.level===13){
        level14();
      }else if (p.level===12){
        level13();
      }else if (p.level===11){
        level12();
      }else if (p.level===10){
        level11();
      }else if (p.level===9){
        level10();
      }else if (p.level===8){
        level9();
      }else if (p.level===7){
        level8();
      }else if (p.level===6){
        level7();
      }else if (p.level===5){
        level6();
      }else if (p.level===4){
        level5();
      }else if (p.level===3){
        level4();
      }else if (p.level===2){
        level3();
      }else if (p.level===1){
        level2();
      }
    }
  }

  function makeBackButton(){
    backButton = p.createButton('Back').position((p.width / 2)+15, 13)
    backButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(back);
  }


  p.makeCalcButtons = function() {
    p.calcButtons.push(p.createButton('7').position(40, 250));
    p.calcButtons.push(p.createButton('8').position(100, 250));
    p.calcButtons.push(p.createButton('9').position(160, 250));
    p.calcButtons.push(p.createButton('/').position(220, 250));
    p.calcButtons.push(p.createButton('4').position(40, 310));
    p.calcButtons.push(p.createButton('5').position(100, 310));
    p.calcButtons.push(p.createButton('6').position(160, 310));
    p.calcButtons.push(p.createButton('*').position(220, 310));
    p.calcButtons.push(p.createButton('1').position(40, 370));
    p.calcButtons.push(p.createButton('2').position(100, 370));
    p.calcButtons.push(p.createButton('3').position(160, 370));
    p.calcButtons.push(p.createButton('-').position(220, 370));
    p.calcButtons.push(p.createButton('CE').position(40, 430));
    p.calcButtons.push(p.createButton('0').position(100, 430));
    p.calcButtons.push(p.createButton('=').position(160, 430));
    p.calcButtons.push(p.createButton('+').position(220, 430));

    p.calcInput.style('width', '225px')
      .style('height', '35px')
      .style('background-color', "white")
      .style("font-size", "2em")
      .style("align-content", "left")
      .style('border', 'none');


    for (let i = 0; i < p.calcButtons.length; i++) {
      p.calcButtons[i].style('width', '50px')
        .style('height', '50px')
        .style('background-color', "white")
        .style('font-size', '1.4em')
        .style('text-align', 'center')
        .style('border-radius', '4px')
        .style('border', 'none')
        .mousePressed(add);
    }
    p.calcButtons[12].mousePressed(zeroed)
    p.calcButtons[14].mousePressed(equals)
  }

  function add() {
    p.calcInput.value(p.calcInput.value() + this.html());
  }
  function zeroed() {
    p.calcInput.value("");
  }
  function equals() {
    var value = eval(p.calcInput.value());
    if (value == p.target && p.moveHistory.indexOf(p.calcInput.value()) === -1) {
      p.score += 1;
      p.moveHistory.push(p.calcInput.value());
      zeroed();
    } else {
      p.calcInput.value(value);
    }
  }
  function donothing() {}


  p.makeBrokenKeys = function() {
    if (p.brokenKeys.indexOf('7') !== -1) {
      p.calcButtons[0].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('8') !== -1) {
      p.calcButtons[1].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('9') !== -1) {
      p.calcButtons[2].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('/') !== -1) {
      p.calcButtons[3].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('4') !== -1) {
      p.calcButtons[4].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('5') !== -1) {
      p.calcButtons[5].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('6') !== -1) {
      p.calcButtons[6].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('*') !== -1) {
      p.calcButtons[7].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('1') !== -1) {
      p.calcButtons[8].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('2') !== -1) {
      p.calcButtons[9].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('3') !== -1) {
      p.calcButtons[10].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('-') !== -1) {
      p.calcButtons[11].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('0') !== -1) {
      p.calcButtons[13].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('+') !== -1) {
      p.calcButtons[15].style('background-color', '#0000cc')
        .mousePressed(donothing);
    }
  }

  function back() {
    document.getElementById('levelsScreen').style.display = 'block'
    document.getElementById('calculatorScreen').style.display = 'none'
  }
}
