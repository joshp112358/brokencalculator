var sceneTutorial = function(p){

  var backButton;
  p.preload = function() {
    myFont = p.loadFont("assets/GlacialIndifference-Regular.otf");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
    p.background('#ccffff');
    //menu bar
    p.noStroke()
    p.fill('lightgrey');
    p.rect(0, 0, p.width, 50);
    createButtons();

    p.fill('black');
    p.textSize(20);
    p.textFont(myFont);
    p.text('Tutorial', (p.width / 2) - 22, 35);

    p.noLoop();
  }

  var s = "The goal of this game is to make the target number with the Broken Calculator. Once you get three unique solutions, you passed the level!"

  p.draw = function(){
    p.textSize(20);
    p.textFont(myFont);
    p.text(s, 45,100,300,300);

  }
  function back() {
    document.getElementById('homeScreen').style.display = 'block'
    document.getElementById('tutorialScreen').style.display = 'none'
  }
  function createButtons() {

    backButton = p.createButton('Back').position((p.width / 2) - 140, 13)

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
}
