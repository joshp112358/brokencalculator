var calcButtons = [];
var calcInput;
var calcButton
var calcDeltaX = 40;
var calcDeltaY = 50;


function makeCalcButtons(){
  calcButtons.push(calcInput = createInput('').position(100,150).id('calcInput'));
  calcButtons.push(createButton('7').position(100,200).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('8').position(160,200).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('9').position(220,200).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('/').position(280,200).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('4').position(100,260).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('5').position(160,260).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('6').position(220,260).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('*').position(280,260).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('1').position(100,320).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('2').position(160,320).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('3').position(220,320).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('-').position(280,320).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('CE').position(100,380).class('calcButtons').mousePressed(zeroed));
  calcButtons.push(createButton('0').position(160,380).class('calcButtons').mousePressed(add));
  calcButtons.push(createButton('=').position(220,380).class('calcButtons').mousePressed(equals));
  calcButtons.push(createButton('+').position(280,380).class('calcButtons').mousePressed(add));
}

function displayLevel(){
  if (!calcShow) {
    for (i = 0; i<calcButtons.length; i++){
      calcButtons[i].hide();
    }
  }
  else {
    for (i = 0; i<calcButtons.length; i++){
      calcButtons[i].show();
    }
  }
}
