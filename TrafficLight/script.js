const redBTN = document.getElementById("redBTN")
const yellowBTN = document.getElementById("yellowBTN")
const greenBTN = document.getElementById("greenBTN")

const redLight = document.getElementById("redLight")
const yellowLight = document.getElementById("yellowLight")
const greenLight = document.getElementById("greenLight")

const switchKey = document.getElementById("switchKey")

let autoMode = false
let intervalId = null
let step = 0

function turnOnRed() {
    redLight.style.backgroundColor = "red"
    yellowLight.style.backgroundColor = "white"
    greenLight.style.backgroundColor = "white"
}

function turnOnYellow() {
    redLight.style.backgroundColor = "white"
    yellowLight.style.backgroundColor = "yellow"
    greenLight.style.backgroundColor = "white"
}

function turnOnGreen() {
    redLight.style.backgroundColor = "white"
    yellowLight.style.backgroundColor = "white"
    greenLight.style.backgroundColor = "green"
}

redBTN.addEventListener("click", turnOnRed)
yellowBTN.addEventListener("click", turnOnYellow)
greenBTN.addEventListener("click", turnOnGreen)

function autoCycleStep() {
    switch (step) {
        case 0: turnOnRed(); break;
        case 1: turnOnYellow(); break;
        case 2: turnOnGreen(); break;
    }
    step = (step + 1) % 3;
}

function toggleAutoLights() {
    autoMode = !autoMode

    if (autoMode) {
        intervalId = setInterval(autoCycleStep, 2000)
        switchKey.textContent = "Stop Auto"
    } else {
        clearInterval(intervalId)
        switchKey.textContent = "Start Auto"
    }
}

switchKey.addEventListener("click", toggleAutoLights)

console.log(3%3)