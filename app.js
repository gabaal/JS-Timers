//Show and hide text, hidden upon initialisation
const showTextBtn = document.getElementById("showTextBtn");
showTextBtn.addEventListener("click", showText);

function showText() {
  var textElement = document.getElementById("displayText");
  textElement.style.display = "block"; // Display the text

  setTimeout(function () {
    // Set a timeout to hide the text after 5 seconds
    textElement.style.display = "none"; //hide the
  }, 5000);
}

//Start and reset seconds counter
const startResetBtn = document.getElementById("startStopTimer");
startResetBtn.addEventListener("click", startStopTimer);
var timer;
var seconds = 0;

function startStopTimer() {
  var timerDisplay = document.getElementById("timerDisplay");
  seconds = 0; // Reset the timer to 0 seconds
  timerDisplay.textContent = "0 seconds"; //display the timer
  // Start the timer
  if (timer) {
    clearInterval(timer); //if timer running clear it
  }
  timer = setInterval(function () {
    seconds++;
    timerDisplay.textContent = seconds + " seconds";
  }, 1000);
}
