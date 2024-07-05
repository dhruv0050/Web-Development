let timer = document.querySelector('.timer');
let startbt = document.getElementById('startbt');
let resetbt = document.getElementById('resetbt');
let stopbt = document.getElementById('stopbt');

let msec = 0;
let sec = 0;
let min = 0;

let timerid = null;

startbt.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

resetbt.addEventListener('click', function () {
    clearInterval(timerid);
    timerid = null; 
    timer.innerHTML = `00 : 00 : 00`;
    msec = 0;
    sec = 0;
    min = 0;
});

stopbt.addEventListener('click', function () {
    clearInterval(timerid);
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`;
}
