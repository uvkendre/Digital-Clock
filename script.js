// Get references to the HTML elements where the time will be displayed
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// Function to update the clock every second
function updateClock() {
    // Get the current hour, minute, and second
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // Convert to 12-hour format and set AM/PM
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // Add leading zero if the value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update the HTML elements with the current time
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    // Call updateClock again after 1 second
    setTimeout(updateClock, 1000);
}

// Initialize the clock update
updateClock();
