const circle = document.querySelector('.progress_ring_circle')
const timeId = document.getElementById('time')
const radius = circle.r.baseVal.value
const circumference = 8 * Math.PI * radius



let pomodoroBlock = document.getElementById("pomodoroblockId")
let shorkBreak = document.getElementById("shorkBreakId")
let longBreak = document.getElementById("longBreakId")
let betweenBreak = document.getElementById("numberPomodoroId")



let minutes;
let timeTotel;
let secunds = 59;
let nullNum = 0;



let shork;
let long;
let between;



if (minutes == undefined) {
    timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
}



//Buttom
document.getElementById('btnContinueId').style.display = 'none'
document.getElementById('btnStopId').style.display = 'none'
document.getElementById('btnPauseId').style.display = 'none'

document.getElementById('btnSaveId').addEventListener('click', () => {
    minutes = pomodoroBlock.value - 1
    timeTotel = minutes * 4
    timeId.innerHTML = minutes + ':' + secunds
    shork = shorkBreak.value - 1
    long = longBreak.value - 1
    between = betweenBreak.value
    menuSettingsId.style.top = '-1000px'
})

document.getElementById("settingsBtnId").addEventListener('click', () => {
    document.getElementById("menuSettingsId").style.top = "30px";
})

document.getElementById("btnCloseId").addEventListener('click', () => {
    menuSettingsId.style.top = "-1000px";
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
    // clearInterval(stopTimer)
    // clearInterval(stopTimer2)
    // clearInterval(stopTimer3)

})

document.getElementById('btnStopId').addEventListener('click', () => {
    clearInterval(stopTimer)
    timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'

})

document.getElementById('btnContinueId').addEventListener('click', () => {
    funStartPomodoro()
})


//Circle
function setProgress(percent) {
    const offset = circumference - percent / timeTotel * circumference
    circle.style.strokeDashoffset = offset
}
circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDasharray = circumference


//Timer
let i = 0;
let stopTimer
function funStartPomodoro() {
    document.body.style.background = "black"
    stopTimer = setInterval(() => {
        --secunds
        timeId.innerHTML = minutes + ':' + secunds
        if (secunds == 0) {
            timeId.innerHTML = minutes + ':' + nullNum + secunds
            secunds = 60;
            --minutes
        }

        if (secunds < 10) {
            timeId.innerHTML = minutes + ':' + nullNum + secunds
        }

        if (minutes <= 9 && secunds == 00) {
            timeId.prepend(nullNum)
        }

        if (minutes <= 9) {
            timeId.prepend(nullNum)
        }

        if (minutes < 1 && secunds === 1) {
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
    }, 1);
}


function funStartBreak1() {
    document.body.style.background = "blue"
    stopTimer2 = setInterval(() => {
        --secunds
        timeId.innerHTML = shork + ':' + secunds
        if (secunds == 0) {
            timeId.innerHTML = shork + ':' + nullNum + secunds
            secunds = 60;
            --shork
        }

        if (secunds < 10) {
            timeId.innerHTML = shork + ':' + nullNum + secunds
        }

        if (shork <= 9 && secunds == 00) {
            timeId.prepend(nullNum)
        }

        if (shork <= 9) {
            timeId.prepend(nullNum)
        }

        if (shork < 1 && secunds === 1) {
            clearInterval(stopTimer2)
            shork = shorkBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            // document.getElementById('btnPauseId').style.display = 'Block'
            // document.getElementById('btnStartId').style.display = 'none'
            setTimeout(funStartPomodoro, 1000)

        }
        setProgress(shork)
    }, 1);
}

function funStartBreakBig() {
    i = 0;
    document.body.style.background = "green"
    stopTimer3 = setInterval(() => {
        --secunds
        timeId.innerHTML = long + ':' + secunds
        if (secunds == 0) {
            timeId.innerHTML = long + ':' + nullNum + secunds
            secunds = 60;
            --long
        }

        if (secunds < 10) {
            timeId.innerHTML = long + ':' + nullNum + secunds
        }

        if (long <= 9 && secunds == 00) {
            timeId.prepend(nullNum)
        }

        if (long <= 9) {
            timeId.prepend(nullNum)
        }

        if (long < 1 && secunds === 1) {
            clearInterval(stopTimer3)
            long = longBreak.value - 1
            timeId.innerHTML = '- -' + ' ' + ':' + ' ' + '- -'
            console.log(i)
            // setTimeout(funStartPomodoro, 1000)
            // document.getElementById('btnPauseId').style.display = 'none'
            // document.getElementById('btnStartId').style.display = 'block'
        }
        setProgress(long)
    }, 1);
}

