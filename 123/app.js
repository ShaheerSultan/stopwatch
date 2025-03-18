let jsmin = 0;  // minutes
let jssec = 0;  // seconds
let jsmsec = 0; // milliseconds
let mins = document.getElementById('minutes');
let secs = document.getElementById('seconds');
let msecs = document.getElementById('milliseconds');

let interval;
let running = false;

function startStopwatch() {
    interval = setInterval(function() {
        jsmsec++; // Increase milliseconds
        msecs.textContent = formatTime(jsmsec); // Update milliseconds display

        if (jsmsec >= 100) { // If milliseconds reach 100, reset and increment seconds
            jssec++;
            secs.textContent = formatTime(jssec);
            jsmsec = 0; // Reset milliseconds
        }

        if (jssec >= 60) { // If seconds reach 60, reset and increment minutes
            jsmin++;
            mins.textContent = formatTime(jsmin);
            jssec = 0; // Reset seconds
        }
    }, 10); // Update every 10 milliseconds
}

function stopStopwatch() {
    clearInterval(interval); // Stop the stopwatch
}

function resetStopwatch() {
    jsmin = 0;
    jssec = 0;
    jsmsec = 0;

    mins.textContent = formatTime(jsmin);
    secs.textContent = formatTime(jssec);
    msecs.textContent = formatTime(jsmsec);

    stopStopwatch();
}

function formatTime(time) {
    return time < 10 ? '0' + time : time; // Ensure time is always two digits (e.g., 01, 02)
}

// Start/Stop Button Logic
document.getElementById('start-stop').addEventListener('click', function() {
    if (running) {
        stopStopwatch();
        this.textContent = 'Start'; // Change button text to 'Start'
    } else {
        startStopwatch();
        this.textContent = 'Stop'; // Change button text to 'Stop'
    }
    running = !running; // Toggle the running state
});

// Reset Button Logic
document.getElementById('reset').addEventListener('click', resetStopwatch);
