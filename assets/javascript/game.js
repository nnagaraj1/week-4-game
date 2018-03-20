// Creating variables to hold the number of wins and losses
    var wins = 0;
    var losses = 0;

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "week..4-game/IndianaJonesThemeSong.mp3");

// Theme Button
$("#musicControls").on("click", ".theme-button", function() {
    audioElement.play();
  }).on("click", ".pause-button", function() {
    audioElement.pause();
  });

// Game

var crystals = ['red-crystal', 'yellow-crystal', 'blue-crystal', 'purple-crystal'];
$('#red-crystal', '#yellow-crystal', '#blue-crystal', '#purple-crystal').click(function() {

});
var score = document.getElementById('score');
// var score = getElementById(red-crystal, yellow-crystal, blue-crystal, purple-crystal.onclick(math.sum));
score.innerHTML = 0;
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 1);

function addtoScore(val) {
  var addedNumber = parseInt(val);
  var currentScore = parseInt(score.innerHTML);
    score.innerHTML = addedNumber + currentScore;
}
var red-crystal = document.getElementById("redcrystal");
// redcrystal.setAttribute("value", "3");
  console.log(red-crystal.value);
var yellow-crystal = document.getElementById("yellowcrystal");
//console.log(yellow-crystal.value);
var blue-crystal = document.getElementById("bluecrystal");
//console.log(blue-crystal.value);
var purple-crystal = document.getElementById("purplecrystal");
//console.log(purple-crystal.value);

// Images 
$('#red-crystal').prepend('<img id="redcrystal" src="redcrystal.jpg" />');
$('#yellow-crystal').prepend('<img id="yellowcrystal" src="yellowcrystal.jpg" />');
$('#blue-crystal').prepend('<img id="bluecrystal" src="bluecrystal.jpg" />');
$('#purple-crystal').prepend('<img id="purplecrystal" src="purplecrystal.jpg" />');

// Event Functions
red-crystal.addEventListener('click', function() {
  //for red crystal
  addtoScore(this.value);
  checkScore();
});

yellow-crystal.addEventListener('click', function(){
  //for yellow 
  addtoScore(this.value);
  checkScore();
});

blue-crystal.addEventListener('click', function(){
  //for blue
  addtoScore(this.value);
  checkScore();
})

purple-crystal.addEventListener('click', function(){
  //for purple
  addtoScore(this.value);
  checkScore();
});

//var sum = parseInt(red-crystal.value) + parseInt(yellow-crystal.value) + parseInt(blue-crystal.value) + parseInt(purple-crystal.value);

// Functions
$('body').on('click', '#red-crystal', function() {
  alert("You've added __ to the total score");

}).on('click', '#yellow-crystal', function() {
  alert("You've added __ to the total score");

}).on('click', '#blue-crystal', function() {
  alert("You've added __ to the total score");

}).on('click', 'purple-crystal', function() {
  alert("You've added __ to the total score");
})

//console.log(sum);
function getRandomValue(a, b) {
  return Math.floor((Math.random() * a) + b);
}

function checkScore () {
//score, targetScore
  if(currentScore === targetScore) {
    alert('You win!');
  } else if (currentScore > targetScore) {
    alert ('Sorry, you lose!');
  }
}

console.log(getRandomValue(10, 1));