var sceneLevels1 = function(p) {
  var grid = [];
  p.mousePressed = function() {
    return false
  }
  p.level = 0;
  var backButton;
  var numberOfLevels = 15;
  var nextButton;


  p.preload = function() {
    myFont = p.loadFont("assets/GlacialIndifference-Regular.otf");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
    p.background('#ccffff');
    createButtons();
    createLevels();
    nextButton = p.createButton('Next').position(200,12).touchStarted(next);
    nextButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border-radius', '4px')
      .style('border', 'none')

    //menu bar
    p.noStroke()
    p.fill('lightgrey');
    p.rect(0, 0, p.width, 50);

    p.fill('black')
    p.textSize(20);
    p.textFont(myFont);
    p.text('Levels', (p.width / 2) - 22, 35);
  }

  p.draw = function() {
    if (localStorage.level13 === 'true'){
      grid[0].style('background-color', '#ff6666')
    }
    if (localStorage.level14 === 'true'){
      grid[1].style('background-color', '#ff6666')
    }
    if (localStorage.level15 === 'true'){
      grid[2].style('background-color', '#3366ff')
    }
    if (localStorage.level16 === 'true'){
      grid[3].style('background-color', '#3366ff')
    }
    if (localStorage.level17 === 'true'){
      grid[4].style('background-color', '#3366ff')
    }
    if (localStorage.level18 === 'true'){
      grid[5].style('background-color', '#3366ff')
    }
    if (localStorage.level19 === 'true'){
      grid[6].style('background-color', '#3366ff')
    }
    if (localStorage.level20 === 'true'){
      grid[7].style('background-color', '#3366ff')
    }
    if (localStorage.level21 === 'true'){
      grid[8].style('background-color', '#3366ff')
    }
    if (localStorage.level22 === 'true'){
      grid[9].style('background-color', '#3366ff')
    }
    if (localStorage.level23 === 'true'){
      grid[10].style('background-color', '#3366ff')
    }
    if (localStorage.level24 === 'true'){
      grid[11].style('background-color', '#3366ff')
    }
  }




  function createButtons() {

    backButton = p.createButton('Back').position((p.width / 2) - 140, 13)

    backButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1.2em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(back);


  }

  function createLevels() {
    grid.push(p.createButton(13).position(0 * 90 + 30, Math.floor(0 / 3) * 110 + 90).touchStarted(switchScreen13));
    grid.push(p.createButton(14).position(1 * 90 + 30, Math.floor(1 / 3) * 110 + 90).touchStarted(switchScreen14));
    grid.push(p.createButton(15).position(2 * 90 + 30, Math.floor(2 / 3) * 110 + 90).touchStarted(switchScreen15));
    grid.push(p.createButton(16).position(0 * 90 + 30, Math.floor(3 / 3) * 110 + 70).touchStarted(switchScreen16));
    grid.push(p.createButton(17).position(1 * 90 + 30, Math.floor(4 / 3) * 110 + 70).touchStarted(switchScreen17));
    grid.push(p.createButton(18).position(2 * 90 + 30, Math.floor(5 / 3) * 110 + 70).touchStarted(switchScreen18));
    grid.push(p.createButton(19).position(0 * 90 + 30, Math.floor(6 / 3) * 110 + 50).touchStarted(switchScreen19));
    grid.push(p.createButton(20).position(1 * 90 + 30, Math.floor(7 / 3) * 110 + 50).touchStarted(switchScreen20));
    grid.push(p.createButton(21).position(2 * 90 + 30, Math.floor(8 / 3) * 110 + 50).touchStarted(switchScreen21));
    grid.push(p.createButton(22).position(0 * 90 + 30, Math.floor(9 / 3) * 110 + 30).touchStarted(switchScreen22));
    grid.push(p.createButton(23).position(1 * 90 + 30, Math.floor(10 / 3) * 110 + 30).touchStarted(switchScreen23));
    grid.push(p.createButton(24).position(2 * 90 + 30, Math.floor(11 / 3) * 110 + 30).touchStarted(switchScreen24));

    for (i = 0; i < grid.length; i++) {
      string = "switchScreen" + i
      grid[i]
        .style('height', '80px')
        .style('width', '80px')
        .style('font', myFont)
        .style('font-size', '2em')
        .style('background-color', "lightgrey")
        .style('text-align', 'center')
        .style("align-content", "right")
        .style('border', 'none')
        .style('border-radius', '4px')

    }
  }
  function switchScreen13() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level13();
  }
  function switchScreen14() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level14();
  }
  function switchScreen15() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level15();
  }
  function switchScreen16() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level16();
  }
  function switchScreen17() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level17();
  }
  function switchScreen18() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level18();
  }
  function switchScreen19() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level19();
  }
  function switchScreen20() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }
  function switchScreen21() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level21();
  }
  function switchScreen22() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level22();
  }
  function switchScreen23() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level23();
  }
  function switchScreen24() {
    document.getElementById("levelsScreen1").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level24();
  }

  function next(){
    document.getElementById('levelsScreen2').style.display = 'block'
    document.getElementById('levelsScreen1').style.display = 'none'
  }

  function back() {
    document.getElementById('levelsScreen').style.display = 'block'
    document.getElementById('levelsScreen1').style.display = 'none'
  }

  function tutorial() {
    document.getElementById('tutorialScreen').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }
}
