// ------------------------------------------------------------
// Using addEventListener
// using anonymous function

// const handleClick = () => {
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// });

// looping + event listener

// let numberOfDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < numberOfDrumButtons.length; i++) {
//     numberOfDrumButtons[i].addEventListener("click", function () {
//       this.style.color = "white";
//     });
//   }

// ------------------------------------------------------------
// OR
// using loop

// let numberOfDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < numberOfDrumButtons.length; i++) {
//   numberOfDrumButtons[i].addEventListener("click", function () {
//     alert("I got clicked!");
//   });
// }

// ------------------------------------------------------------
// play audio using javascript

// let audio = new Audio('audio_file.mp3');
// audio.play();

// let numberOfDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < numberOfDrumButtons.length; i++) {
//   numberOfDrumButtons[i].addEventListener("click", function () {
//     let tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//   });
// }

// ------------------------------------------------------------

// let numberOfDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < numberOfDrumButtons.length; i++) {
//   numberOfDrumButtons[i].addEventListener("click", function () {
//     this.style.color = "white";
//   });
// }

// ------------------------------------------------------------
// Using Switch Statement

// let numberOfDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < numberOfDrumButtons.length; i++) {
//   numberOfDrumButtons[i].addEventListener("click", function () {
//     let buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) {
//       case "w":
//         let tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         let tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         let tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         let tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         let snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         let crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         let kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       default:
//         console.log(buttonInnerHTML);
//         break;
//     }
//   });
// }

// ------------------------------------------------------------
// Using Keydown event listener

// document.addEventListener("keydown", function(event){
//   console.log(event.key);
// } )

let numberOfDrumButtons = document.querySelectorAll(".drum");

// Detecting Button Press
for (let i = 0; i < numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(this.innerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keydown / Keypress Press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  console.log(event.key);
  buttonAnimation(event.key);
});

// create a function to make sound
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// ------------------------------------------------------------
// Adding some animation and a Timeout Function

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}
