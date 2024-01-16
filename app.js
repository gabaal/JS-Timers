function showText() {
  var textElement = document.getElementById("displayText");
  textElement.style.display = "block"; // Display the text

  setTimeout(function () {
    // Set a timeout to hide the text after 5 seconds
    textElement.style.display = "none";
  }, 5000);
}

var timer;
var seconds = 0;

function startStopTimer() {
  var timerDisplay = document.getElementById("timerDisplay");

  seconds = 0; // Reset the timer to 0 seconds
  timerDisplay.textContent = "0 seconds";

  // Start the timer
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(function () {
    seconds++;
    timerDisplay.textContent = seconds + " seconds";
  }, 1000);
}
