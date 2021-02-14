
const circle = document.querySelector('.progress_ring_circle')
const timeId = document.getElementById('time')
const radius = circle.r.baseVal.value
const circumference = 8 * Math.PI * radius


let pomodoroBlock = document.getElementById("pomodoroblockId")
let shorkBreak = document.getElementById("shorkBreakId")
let longBreak = document.getElementById("longBreakId")
let betweenBreak = document.getElementById("numberPomodoroId")
const errorValue = document.getElementById("errorValue")


let minutes
let timeTotel
let seconds = 59
let nullNum = 0

let shork
let long
let between

if (minutes == undefined) {
    timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
}

document.getElementById('btnContinueId').style.display = 'none'
document.getElementById('btnStopId').style.display = 'none'
document.getElementById('btnPauseId').style.display = 'none'

document.getElementById('btnSaveId').addEventListener('click', () => {
    if (pomodoroBlock.value < 5 || shorkBreak.value < 5 || longBreak.value < 5 || betweenBreak.value < 4 && pomodoroBlock.value > 25 || shorkBreak.value > 25 || longBreak.value > 25 || betweenBreak.value > 15) {
        errorValue.style.opacity = '1'
    } else {
        minutes = pomodoroBlock.value - 1
        timeId.innerHTML = minutes + ':' + seconds
        shork = shorkBreak.value - 1
        long = longBreak.value - 1
        between = betweenBreak.value
        menuSettingsId.style.top = '-1000px'
    }

})

document.getElementById("settingsBtnId").addEventListener('click', () => {
    document.getElementById("menuSettingsId").style.top = "30px"
})

document.getElementById("btnCloseId").addEventListener('click', () => {
    menuSettingsId.style.top = "-1000px"
})

document.getElementById('btnStartId').addEventListener('click', () => {
    if (minutes == undefined) {
        alert('Error')
    } else {
        funStartPomodoro()
        document.getElementById('btnStartId').style.display = 'none'
        document.getElementById('btnPauseId').style.display = 'block'
    }
})

document.getElementById('btnPauseId').addEventListener('click', () => {
    document.getElementById('btnPauseId').style.display = 'none'
    document.getElementById('btnStopId').style.display = 'block'
    document.getElementById('btnContinueId').style.display = 'block'
    clearInterval(stopPomodoroTimer)
    clearInterval(stopSmaillBreakTimer)
    clearInterval(stopBigTimer)
})

document.getElementById('btnStopId').addEventListener('click', () => {
    timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
    minutes = undefined
    setProgress(0)
    document.getElementById('btnPauseId').style.display = 'none'
    document.getElementById('btnStopId').style.display = 'none'
    document.getElementById('btnContinueId').style.display = 'none'
    document.getElementById('btnStartId').style.display = 'block'
    $('body').css({ 'background-image': 'linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)' });
})

document.getElementById('btnContinueId').addEventListener('click', () => {
    clearInterval(stopPomodoroTimer)
    clearInterval(stopSmaillBreakTimer)
    clearInterval(stopBigTimer)
})

function setProgress(percent) {
    const offset = circumference - percent / timeTotel * circumference
    circle.style.strokeDashoffset = offset
}

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDasharray = circumference


let i = 0
let stopTimer

function funStartPomodoro() {
    $('body').css({ 'background-image': 'linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)' });
    timeTotel = minutes * 4 
    console.log(timeTotel)
    stopPomodoroTimer = setInterval(() => {

            --seconds
            timeId.innerHTML = minutes + ':' + seconds
            if (seconds == 0) {
                timeId.innerHTML = minutes + ':' + nullNum + seconds
                seconds = 60
                --minutes
            }

            if (seconds < 10) {
                timeId.innerHTML = minutes + ':' + nullNum + seconds
            }

            if (minutes <= 9 && seconds == 00) {
                timeId.prepend(nullNum)
            }

            if (minutes <= 9) {
                timeId.prepend(nullNum)
            }

            if (minutes < 1 && seconds === 1) {
                ++i
                clearInterval(stopPomodoroTimer)
                minutes = pomodoroBlock.value - 1
                timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
                if (i < 4) {

                    setTimeout(funStartSmaillBreak, 1000)
                } else {
                    setTimeout(funStartBigBreak, 1000)
                }
                console.log(i)
            }
            setProgress(minutes)
        }, 1)
    }

function funStartSmaillBreak() {
    $('body').css({ 'background-image': 'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)', 'linear - gradient(90deg, #F78CA0 0 %, #F9748F 20.31 %, #FD868C 66.67 %, #FE9A8B 100 %)': 'linear- gradient(0deg, #FFFFFF, #FFFFFF);' });
    timeTotel = shork * 4
    stopSmaillBreakTimer = setInterval(() => {
        console.log(timeTotel)
        --seconds
        timeId.innerHTML = shork + ':' + seconds
        if (seconds == 0) {
            timeId.innerHTML = shork + ':' + nullNum + seconds
            seconds = 60
            --shork
        }

        if (seconds < 10) {
            timeId.innerHTML = shork + ':' + nullNum + seconds
        }

        if (shork <= 9 && seconds == 00) {
            timeId.prepend(nullNum)
        }

        if (shork <= 9) {
            timeId.prepend(nullNum)
        }

        if (shork < 1 && seconds === 1) {
            clearInterval(stopSmaillBreakTimer)
            shork = shorkBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            setTimeout(funStartPomodoro, 1000)
        }
        setProgress(shork)
    }, 1)

}

function funStartBreakBig() {
    timeTotel = long * 4
    $('body').css({ 'background-image': 'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)', 'linear - gradient(90deg, #F78CA0 0 %, #F9748F 20.31 %, #FD868C 66.67 %, #FE9A8B 100 %)': 'linear- gradient(0deg, #FFFFFF, #FFFFFF);' });
    console.log(timeTotel)
    stopBigTimer = setInterval(() => {
        --seconds
        timeId.innerHTML = long + ':' + seconds

        if (seconds == 0) {
            timeId.innerHTML = long + ':' + nullNum + seconds
            seconds = 60
            --long
        }

        if (seconds < 10) {
            timeId.innerHTML = long + ':' + nullNum + seconds
        }

        if (long <= 9 && seconds == 00) {
            timeId.prepend(nullNum)
        }

        if (long <= 9) {
            timeId.prepend(nullNum)
        }

        if (long < 1 && seconds === 1) {
            clearInterval(stopBigTimer)
            long = longBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            console.log(i)
        }
        setProgress(long)
    }, 1)
}

