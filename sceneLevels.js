var sceneLevels = function(p) {
  var grid = [];
  p.mousePressed = function() {
    return false
  }
  p.level = 0;
  var backButton;
  var tutorialButton;
  var nextButton;
  var numberOfLevels = 15;

  p.preload = function() {
    myFont = p.loadFont("assets/GlacialIndifference-Regular.otf");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
    p.background('#ccffff');
    createButtons();
    createLevels();


    //menu bar
    p.noStroke()
    p.fill('lightgrey');
    p.rect(0, 0, p.width, 50);

    p.fill('black')
    p.textSize(20);
    p.textFont(myFont);
    p.text('Levels', (p.width / 2) - 22, 35);
    nextButton = p.createButton('Next').position(200,12 ).touchStarted(next)
    nextButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border-radius', '4px')
      .style('border', 'none')

  }

  p.draw = function() {
    if (localStorage.level1 === 'true'){
      grid[0].style('background-color', '#ff6666')
    }
    if (localStorage.level2 === 'true'){
      grid[1].style('background-color', '#ff6666')
    }
    if (localStorage.level3 === 'true'){
      grid[2].style('background-color', '#3366ff')
    }
    if (localStorage.level4 === 'true'){
      grid[3].style('background-color', '#3366ff')
    }
    if (localStorage.level5 === 'true'){
      grid[4].style('background-color', '#3366ff')
    }
    if (localStorage.level6 === 'true'){
      grid[5].style('background-color', '#3366ff')
    }
    if (localStorage.level7 === 'true'){
      grid[6].style('background-color', '#3366ff')
    }
    if (localStorage.level8 === 'true'){
      grid[7].style('background-color', '#3366ff')
    }
    if (localStorage.level9 === 'true'){
      grid[8].style('background-color', '#3366ff')
    }
    if (localStorage.level10 === 'true'){
      grid[9].style('background-color', '#3366ff')
    }
    if (localStorage.level11 === 'true'){
      grid[10].style('background-color', '#3366ff')
    }
    if (localStorage.level12 === 'true'){
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
    grid.push(p.createButton(1).position(0 * 90 + 30, Math.floor(0 / 3) * 110 + 90).touchStarted(switchScreen1));
    grid.push(p.createButton(2).position(1 * 90 + 30, Math.floor(1 / 3) * 110 + 90).touchStarted(switchScreen2));
    grid.push(p.createButton(3).position(2 * 90 + 30, Math.floor(2 / 3) * 110 + 90).touchStarted(switchScreen3));
    grid.push(p.createButton(4).position(0 * 90 + 30, Math.floor(3 / 3) * 110 + 70).touchStarted(switchScreen4));
    grid.push(p.createButton(5).position(1 * 90 + 30, Math.floor(4 / 3) * 110 + 70).touchStarted(switchScreen5));
    grid.push(p.createButton(6).position(2 * 90 + 30, Math.floor(5 / 3) * 110 + 70).touchStarted(switchScreen6));
    grid.push(p.createButton(7).position(0 * 90 + 30, Math.floor(6 / 3) * 110 + 50).touchStarted(switchScreen7));
    grid.push(p.createButton(8).position(1 * 90 + 30, Math.floor(7 / 3) * 110 + 50).touchStarted(switchScreen8));
    grid.push(p.createButton(9).position(2 * 90 + 30, Math.floor(8 / 3) * 110 + 50).touchStarted(switchScreen9));
    grid.push(p.createButton(10).position(0 * 90 + 30, Math.floor(9 / 3) * 110 + 30).touchStarted(switchScreen10));
    grid.push(p.createButton(11).position(1 * 90 + 30, Math.floor(10 / 3) * 110 + 30).touchStarted(switchScreen11));
    grid.push(p.createButton(12).position(2 * 90 + 30, Math.floor(11 / 3) * 110 + 30).touchStarted(switchScreen12));

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

  function switchScreen1() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level1();

  }
  function switchScreen2() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level2();
  }
  function switchScreen3() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level3();
  }
  function switchScreen4() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level4();
  }
  function switchScreen5() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level5();
  }
  function switchScreen6() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level6();
  }
  function switchScreen7() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level7();
  }
  function switchScreen8() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level8();
  }
  function switchScreen9() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level9();
  }
  function switchScreen10() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level10();
  }
  function switchScreen11() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level11();
  }
  function switchScreen12() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level12();
  }


  function back() {
    document.getElementById('homeScreen').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }

  function next(){
    document.getElementById('levelsScreen1').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }


}
