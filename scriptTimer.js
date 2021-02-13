const circle = document.querySelector('.progress_ring_circle')
const timeId = document.getElementById('time')
const radius = circle.r.baseVal.value
const circumference = 8 * Math.PI * radius

let pomodoroBlock = document.getElementById("pomodoroblockId")
let shorkBreak = document.getElementById("shorkBreakId")
let longBreak = document.getElementById("longBreakId")
let betweenBreak = document.getElementById("numberPomodoroId")

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
    minutes = pomodoroBlock.value - 1
    timeId.innerHTML = minutes + ':' + seconds
    shork = shorkBreak.value - 1
    long = longBreak.value - 1
    between = betweenBreak.value
    menuSettingsId.style.top = '-1000px'
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
        document.getElementById('btnStartId').style.display = 'none'
        document.getElementById('btnPauseId').style.display = 'block'
        funStartPomodoro()
    }
})

document.getElementById('btnPauseId').addEventListener('click', () => {
    document.getElementById('btnPauseId').style.display = 'none'
    document.getElementById('btnStopId').style.display = 'block'
    document.getElementById('btnContinueId').style.display = 'block'
})

document.getElementById('btnStopId').addEventListener('click', () => {
    clearInterval(stopTimer)
    timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
})

document.getElementById('btnContinueId').addEventListener('click', () => {
    funStartPomodoro()
})

let i = 0
let stopTimer
function funStartPomodoro() {
    timeTotel = minutes * 4
    document.body.style.background = "black"
    stopTimer = setInterval(() => {
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
            clearInterval(stopTimer)
            minutes = pomodoroBlock.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            if (i < 4) {
                setTimeout(funStartBreak1, 1000)
            } else {
                setTimeout(funStartBreakBig, 1000)
            }
            console.log(i)
        }
        setProgress(minutes)
    }, 1)
}

function funStartBreak1() {
    timeTotel = shork * 4
    document.body.style.background = "blue"
    stopTimer2 = setInterval(() => {
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
            clearInterval(stopTimer2)
            shork = shorkBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            setTimeout(funStartPomodoro, 1000)
        }
    }, 1)

}

function funStartBreakBig() {
    timeTotel = long * 4
    i = 0
    document.body.style.background = "green"
    stopTimer3 = setInterval(() => {
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
            clearInterval(stopTimer3)
            long = longBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            console.log(i)
        }
        setProgress(long)
    }, 1)
}

function setProgress(percent) {
    const offset = circumference - percent / timeTotel * circumference
    circle.style.strokeDashoffset = offset
}
circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDasharray = circumference
