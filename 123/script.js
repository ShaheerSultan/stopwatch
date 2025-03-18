let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById("time");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", function() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = "Stop";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = "00:00:00";
    startStopButton.textContent = "Start";
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    timeDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}
