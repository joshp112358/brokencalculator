var sceneLevels2 = function(p) {
  var grid = [];
  p.mousePressed = function() {
    return false
  }
  p.level = 0;
  var backButton;
  var tutorialButton;
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
    nextButton = p.createButton('Next').position(200,12).touchStarted(next)
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
    if (localStorage.level25 === 'true'){
      grid[0].style('background-color', '#ff6666')
    }
    if (localStorage.level26 === 'true'){
      grid[1].style('background-color', '#ff6666')
    }
    if (localStorage.level27 === 'true'){
      grid[2].style('background-color', '#3366ff')
    }
    if (localStorage.level28 === 'true'){
      grid[3].style('background-color', '#3366ff')
    }
    if (localStorage.level29 === 'true'){
      grid[4].style('background-color', '#3366ff')
    }
    if (localStorage.level30 === 'true'){
      grid[5].style('background-color', '#3366ff')
    }
    if (localStorage.level31 === 'true'){
      grid[6].style('background-color', '#3366ff')
    }
    if (localStorage.level32 === 'true'){
      grid[7].style('background-color', '#3366ff')
    }
    if (localStorage.level33 === 'true'){
      grid[8].style('background-color', '#3366ff')
    }
    if (localStorage.level34 === 'true'){
      grid[9].style('background-color', '#3366ff')
    }
    if (localStorage.level35 === 'true'){
      grid[10].style('background-color', '#3366ff')
    }
    if (localStorage.level36 === 'true'){
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
    grid.push(p.createButton(25).position(0 * 90 + 30, Math.floor(0 / 3) * 110 + 90).touchStarted(switchScreen25));
    grid.push(p.createButton(26).position(1 * 90 + 30, Math.floor(1 / 3) * 110 + 90).touchStarted(switchScreen26));
    grid.push(p.createButton(27).position(2 * 90 + 30, Math.floor(2 / 3) * 110 + 90).touchStarted(switchScreen27));
    grid.push(p.createButton(28).position(0 * 90 + 30, Math.floor(3 / 3) * 110 + 70).touchStarted(switchScreen28));
    grid.push(p.createButton(29).position(1 * 90 + 30, Math.floor(4 / 3) * 110 + 70).touchStarted(switchScreen29));
    grid.push(p.createButton(30).position(2 * 90 + 30, Math.floor(5 / 3) * 110 + 70).touchStarted(switchScreen30));
    grid.push(p.createButton(31).position(0 * 90 + 30, Math.floor(6 / 3) * 110 + 50).touchStarted(switchScreen31));
    grid.push(p.createButton(32).position(1 * 90 + 30, Math.floor(7 / 3) * 110 + 50).touchStarted(switchScreen32));
    grid.push(p.createButton(33).position(2 * 90 + 30, Math.floor(8 / 3) * 110 + 50).touchStarted(switchScreen33));
    grid.push(p.createButton(34).position(0 * 90 + 30, Math.floor(9 / 3) * 110 + 30).touchStarted(switchScreen34));
    grid.push(p.createButton(35).position(1 * 90 + 30, Math.floor(10 / 3) * 110 + 30).touchStarted(switchScreen35));
    grid.push(p.createButton(36).position(2 * 90 + 30, Math.floor(11 / 3) * 110 + 30).touchStarted(switchScreen36));

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
  function switchScreen25() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level25();
  }
  function switchScreen26() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level26();
  }
  function switchScreen27() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level27();
  }
  function switchScreen28() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level28();
  }
  function switchScreen29() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level29();
  }
  function switchScreen30() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level30();
  }
  function switchScreen31() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }
  function switchScreen31() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level31();
  }
  function switchScreen32() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level32();
  }
  function switchScreen33() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level33();
  }
  function switchScreen34() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level34();
  }
  function switchScreen35() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level35();
  }
  function switchScreen36() {
    document.getElementById("levelsScreen2").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level36();
  }


  function next(){
    document.getElementById('levelsScreen1').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }

  function back() {
    document.getElementById('levelsScreen1').style.display = 'block'
    document.getElementById('levelsScreen2').style.display = 'none'
  }


}
