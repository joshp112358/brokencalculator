var initScreenSketch = function(p) {
  p.touchStarted = function(){
    return false;
  }
  p.setup = function() {
    p.createCanvas(500, 500);
    p.background('#43f2c3');
    p.textSize(25);
    p.text("Broken Calculators", 150, 220);
    p.createButton("Start Game").position(220, 250).mousePressed(showHide );
    p.createButton("Instructions").position(220, 270).mousePressed(sup);
  }

  var released = true;

  function mouseReleased() {
    released = true;
    return false;
  }


  function sup() {
    console.log('hai');
  }
  function ugh(){
    return false;
  }

  function showHide() {

    document.getElementById("initialScreen").style.display = "none";
    document.getElementById("levelingScreen").style.display = "block";
    document.getElementById("calculatorScreen").style.display = "none";

  }
}
