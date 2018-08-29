var initScreenSketch = function(p){
  p.setup = function(){
    p.createCanvas(500,500);
    p.background('pink');
    p.textSize(25);
    p.text("Broken Calculators", 150, 220);
    p.createButton("Start Game").position(220,250).mousePressed(showHide);
    p.createButton("Instructions").position(220,270)
  }

  function showHide(){

      document.getElementById("initialScreen").style.display = "none";
      document.getElementById("levelingScreen").style.display = "block";
      document.getElementById("calculatorScreen").style.display = "none";

  }
}
