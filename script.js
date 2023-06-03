let ms = 0, s = 0, m = 0;
let count;

let timee = document.querySelector('.time')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.Reset')
let st = timee.textContent

start.addEventListener('click', function () {


    if (!count) { count = setInterval(run, 10) }

    function run() {
        timee.textContent = m + ":" + s + ":" + ms
        ms++
        if (ms == 100) {
            s += 1
            ms = 0
        }
        if (s == 60) {
            s = 0
            m += 1
        }
    }
})

stop.addEventListener('click', function () {
    clearInterval(count)
    count = false

})

reset.addEventListener('click', function () {
    clearInterval(count)
    count = false
    timee.textContent = st
    m = 0; s = 0; ms = 0;

})