// find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;
var previousLocationCounter = 0;

body.onkeydown = function(e){

  var tl = new TrafficLight(taxiLocationCounter);

  if (e.keyCode == 39){
    if (tl.state() === 'green'){
      previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter++;
      moveTaxi(previousLocationCounter, taxiLocationCounter);
    }
}
else if (e.keyCode == 37){
  previousLocationCounter = taxiLocationCounter
  taxiLocationCounter--;
  moveTaxi(previousLocationCounter, taxiLocationCounter);
}
else if (e.keyCode == 38){
  tl.red();
}
else if (e.keyCode == 40){
  tl.green();
}

displayMessage(e.keyCode);
    // right arrow : 39
    // left arrow  : 37
    // up arrow    : 38
    // down arrow  : 40

    // to make the second TrafficLight `Orange`
    // var tl = new TrafficLight(2);
    // tl.orange();

};
