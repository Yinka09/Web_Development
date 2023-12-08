var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//Use the jquery selector to detect when a key has been pressed and call the nextSequence function
$(document).keydown(function (event) {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//Use the jquery selector to add a click event, adding the chosen Id to the userClickedPattern array
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  //An if statement to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    console.log("Wrong");
    startOver();
  }
}

function nextSequence() {
  //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];
  //Increase the level by 1 every time nextSequence() is called.
  level++;

  //Update the h1 with this change in the value of level.
  $("h1").text("Level " + level);

  //Generate randon number to select random buttons
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  //console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);

  //Use jQuery selector to select the random Id and add animations
  var randomId = "#" + randomChosenColour;
  $(randomId).fadeIn(100).fadeOut(100).fadeIn(100);

  //Add audio
  playSound(randomChosenColour);
  //console.log(userClickedPattern);
}

//Function to play sound in function nextSequence and when a user clicks a button
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Function to add animations to the current button selected
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  gamePattern = [];
  //userClickedPattern = [];
  level = 0;
  started = false;
}
