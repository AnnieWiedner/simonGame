var count = 0;
var playersTurn = false;

var correctPattern = [];
var playerPattern = [];

var clicks = 0;

var btn;

var colors = ['red', 'green', 'blue', 'yellow'];

var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');
var start = document.getElementById("start");


var index;

var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

// returns the button to normal
var dimButton = function() {
  red.style.opacity = 0.75;
  green.style.opacity = 0.75;
  blue.style.opacity = 0.75;
  yellow.style.opacity = 0.75;
}

var lightUp = function(x) {
  switch(x){
    case "red":
      btn = document.getElementById('red');
      btn.style.opacity = 1;
      redSound.play();
      setTimeout(function() {
        dimDown("red")
      }, 800);
      break;
    case "green":
      btn = document.getElementById('green');
      btn.style.opacity = 1;
      greenSound.play();
      setTimeout(function() {
        dimDown("green")
      }, 800);
      break;
    case "blue":
      btn = document.getElementById('blue');
      btn.style.opacity = 1;
      blueSound.play();
      setTimeout(function() {
        dimDown("blue")
      }, 800);
      break;
    case "yellow":
      btn = document.getElementById('yellow');
      btn.style.opacity = 1;
      yellowSound.play();
      setTimeout(function() {
        dimDown("yellow")
      }, 800);
      break;
  }
}

var dimDown = function(x) {
  switch(x){
    case "red":
      btn = document.getElementById('red');
      btn.style.opacity = 0.5;
      break;
    case "green":
      btn = document.getElementById('green');
      btn.style.opacity = 0.5;
      break;
    case "blue":
      btn = document.getElementById('blue');
      btn.style.opacity = 0.5;
      break;
    case "yellow":
      btn = document.getElementById('yellow');
      btn.style.opacity = 0.5;
      break;
  }
}


var i = 0;

var displayPattern = function() {
  console.log(correctPattern)
  addMove();
  console.log(correctPattern)
  pattern = setInterval(function() {
    lightUp(correctPattern[i])
    if (i > correctPattern.length) {
      clearInterval(pattern);
      playersTurn = true;
    }
    else {
      i++;
    }
  }, 1000)
  i = 0;
}

var restartGame = function() {
  correctPattern = [];
  playerPattern = [];
  clicks = 0;
  count = 0;
}

var addMove = function() {
  count++;
  var index = Math.floor(Math.random()*4);
  var color = colors[index];
  correctPattern.push(color);
}

var playerMove = function(color) {
  playerPattern.push(color);
  console.log(playerPattern)
  if (playerPattern[clicks] === correctPattern[clicks]) {
    lightUp(color);
    clicks++
    if (playerPattern.length === correctPattern.length) {
      playersTurn = false;
      clicks = 0;
      playerPattern = [];
      displayPattern();
    }
  }
  else {
    alert("WRONG");
    restartGame();
  }
}

red.addEventListener("click", function(){
  if (playersTurn === true) {
    playerMove("red");
  }
})

green.addEventListener("click", function(){
  if (playersTurn === true) {
    playerMove("green");
  }
})

blue.addEventListener("click", function(){
  if (playersTurn === true) {
    playerMove("blue");
  }
})

yellow.addEventListener("click", function(){
  if (playersTurn === true) {
    playerMove("yellow");
  }
})

start.addEventListener("click", function(){
  displayPattern();
  start.classList.add("hidden");
  start.classList.remove("showing");
  start.innerHTML = "REPLAY";
})
