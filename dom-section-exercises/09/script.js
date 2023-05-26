const startBtn = document.querySelector("#play-pause");
const resetBtn = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() 
{
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes ++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    document.getElementById("time").innerText = hours + ":" + minutes + ":" + seconds;
}

startBtn.addEventListener("click", function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("play-pause").innerHTML = `<img id="play-pause-img" src="./images/pause.png" alt="play-pause-img">`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById("play-pause").innerHTML = `<img id="play-pause-img" src="./images/play.png" alt="play-pause-img">`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener("click", function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    timerStatus = "stopped";

    document.getElementById("time").innerHTML = "0:0:0";
    document.getElementById("play-pause").innerHTML = `<img id="play-pause-img" src="./images/play.png" alt="play-pause-img">`;
});