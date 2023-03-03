var main = document.getElementsByClassName("main")[0],
     alldiv = document.getElementsByTagName("div"),
     div,
     img;
     
var audioRight = new Audio('assets/corr.mp3')
 var audioWrong = new Audio('assets/wrong.mp3')
// this code creates an HTML5 audio element with a sound effect to play when a user makes an incorrect match.

 var array = ['assets/1.gif', 'assets/2.gif', 'assets/3.gif', 'assets/4.gif', 'assets/5.gif', 'assets/6.gif', 'assets/1.gif', 'assets/2.gif', 'assets/3.gif', 'assets/4.gif', 'assets/5.gif', 'assets/6.gif'] // This array holds the file paths for the images used in the game.
 function createmyelems() {
    for (var i = 0; i < array.length; i++) {
        // Create a new div element
        var div = document.createElement("div");
        // Create a new image element
        var img = document.createElement("img");
        // Set the image element's source file path and ID attribute
        img.src = array[i];
        img.id = array[i];
        // Add the image element as a child of the div element
        div.appendChild(img);
        // Add the div element as a child of the main HTML element
        main.appendChild(div);
      }
    }
 createmyelems() //This function selects the first element with the class name "main" and creates 12 div elements with 12 image elements inside, assigning each image a unique ID.

// Declare an array to store the clicked div elements and a boolean flag
var x = [],
    flag = true;

// iterate through all the div elements and assign an onclick function to each one
for (var i = 0; i < alldiv.length; i++) {
  alldiv[i].onclick = function() {
    // If flag is false, do not allow any more clicks
    if (!flag) return;
    // Set the opacity of the clicked div image to 1
    this.firstChild.style.opacity = "1";
    // Store the clicked div in the x array
    if (x.length == 0) {
      x[0] = this;
    } else if (x.length == 1) {
      x[1] = this;
    }
    // If two divs have been clicked, disable clicks and call the check function after a delay
    if (x.length == 2) {
      flag = false;
      setTimeout(check, 700);
    }
  }
}
var wrongAttempts = 0;
function updateWrongAttempts() {
  wrongAttempts++;
  document.getElementById("wrongattempts").innerHTML = "Wrong Attempts: " + wrongAttempts;
} // This function updates the number of wrong attempts on the webpage.
function check() {
    var matched = x[0].firstChild.id === x[1].firstChild.id;
     (matched ? audioRight : audioWrong).play();
    if (!matched) {
      updateWrongAttempts();
      x[0].firstChild.style.opacity = x[1].firstChild.style.opacity = "0";
    }
    x = [];
    flag = true;
    if (!document.querySelector('img:not([style*="opacity: 0"])')) {
      setTimeout(() => alert("You Won!"), 1000);
    }
  } // Im having a trouble with this alert could not make it work on time .
 
 var timeRemaining = 60
 var intervalId = setInterval(function() {
     timeRemaining--
     document.getElementById("timer").textContent = "Time remaining: " + timeRemaining + " seconds"
     if (timeRemaining <= 0) {
         clearInterval(intervalId)
         alert("Game Over!")
         
     }
 }, 1000) // This code runs a timer that updates every second, decrementing the remaining time for the player to complete the game. If the time runs out, the game is over.
 
