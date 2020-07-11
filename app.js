let starts = document.querySelector('#start');
let stops = document.querySelector('#stop');
let resets = document.querySelector('#reset');
let min = 0;
let sec = 0;
let mili_sec = 0;
let min_head = document.querySelector('#min');
let sec_head = document.querySelector('#sec');
let mili_head = document.querySelector('#mili_sec');
let interval;

function timer() {
    mili_sec++;
    mili_head.innerHTML = mili_sec;
    if (mili_sec >= 100) {
        sec++;
        if (sec <= 9) {
            sec_head.innerHTML = '0' + sec;
        } else {
            sec_head.innerHTML = sec;
        }
        mili_sec = 0;
    } else if (sec >= 60) {
        min++;
        if (min <= 9) {
            min_head.innerHTML = '0' + min;
        } else {
            min_head.innerHTML = min;
        }
        sec = 0;
    }
};

starts.addEventListener('click', function() {
    interval = setInterval(timer, 10);
    starts.style.pointerEvents = 'none';
    starts.style.opacity = '.4';
});

stops.addEventListener('click', function() {
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
});

resets.addEventListener('click', function() {
    min = 0 +'0';
    sec = 0+'0';
    mili_sec = 0+'0';
    mili_head.innerHTML = mili_sec;
    sec_head.innerHTML = sec;
    min_head.innerHTML = min;
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
});
