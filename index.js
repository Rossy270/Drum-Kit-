document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

var buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handlerClick);
}

function handlerClick() {
  var buttonName = this.innerHTML;
  playSound(buttonName);
  buttonAnimation(buttonName);
}

function playSound(letterName) {
  var soundPath = "";

  switch (letterName) {
    case "w":
      soundPath = "crash.mp3";
      break;
    case "a":
      soundPath = "kick-bass.mp3";
      break;
    case "s":
      soundPath = "snare.mp3";
      break;
    case "d":
      soundPath = "tom-1.mp3";
      break;
    case "j":
      soundPath = "tom-2.mp3";
      break;
    case "k":
      soundPath = "tom-3.mp3";
      break;
    case "l":
      soundPath = "tom-4.mp3";
      break;
    default:
      console.log("buttom not found");
  }

  var audio = new Audio("sounds/" + soundPath);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 50);
}
