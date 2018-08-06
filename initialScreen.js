var initScreenSketch = function(p){
  p.setup = function(){
    p.createCanvas(500,500);
    p.background('#43f2c3');
    p.textSize(25);
    p.text("Broken Calculators", 150, 220);
    p.createButton("Start Game").position(220,250).mousePressed(showHide);
  }

  function showHide(){

      document.getElementById("initialScreen").style.display = "none";
      document.getElementById("levelingScreen").style.display = "block";
      document.getElementById("calculatorScreen").style.display = "none";

  }
}
