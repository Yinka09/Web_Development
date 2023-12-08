//Detecting button pressed

var newEvent = document.querySelectorAll("button.drum");

for (var i = 0; i < newEvent.length; i++) {
  newEvent[i].addEventListener("click", checkEvent);
}

//Detecting keyboard keyed

document.addEventListener("keydown", checkEvent);

//Function to execute when button or keyboard is pressed

function checkEvent(event) {
  if (event.type === "click" || event.type === "keydown") {
    //Assign button and key if any of the above event types occur
    var buttonHTML = this.innerHTML;
    var myKey = event.key;

    //Assign a variable that will be used to add the class called pressed to the eventkey for animations
    var activeButton =
      document.querySelector("." + myKey) ||
      document.querySelector("." + buttonHTML);
    //Add the pressed class for animation to the activeButton being clicked or keyed
    activeButton.classList.add("pressed");

    //Remove the pressed class animation from activeButton after 100miliseconds
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);

    //Switch cases for the various buttons to play sound
    switch (buttonHTML || myKey) {
      case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        var kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
        console.log(buttonHTML);
        console.log(event.key);
    }
  }
}

/**Functions I didnt use!

 function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
    checkEvent(myNewButton);
 } 

// document.addEventListener("keydown", function (event) {
//   alert("Key was pressed");
//   console.log(event.key);
// });
**/
