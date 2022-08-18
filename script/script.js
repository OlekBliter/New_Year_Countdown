let days = document.getElementById("timeD");
let hours = document.getElementById("timeH");
let minutes = document.getElementById("timeM");
let seconds = document.getElementById("timeS");

let currentYear = new Date().getFullYear()
let currentDate = new Date().getDate()
let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
document.getElementById('info').innerHTML = `Time until ${currentYear + 1} year`

function updateCountDown() {
    let currentTime = new Date();
    diff = newYearTime - currentTime;
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d + 'd';
    hours.innerHTML = h < 10 + 'h' ? "0" + h : h  + 'h';
    minutes.innerHTML = m < 10 + 'm' ? "0" + m : m  + 'm';
    seconds.innerHTML = s < 10 + 's' ? "0" + s : s  + 's';
}
setInterval(updateCountDown, 1000);