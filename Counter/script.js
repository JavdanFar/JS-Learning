const addBTN = document.getElementById("add")
const minusBTN = document.getElementById("minus")
const resetBTN = document.getElementById("reset")
const counter = document.getElementById("counter")

addBTN.addEventListener("click", () => {
    if (counter.innerHTML < 5) { counter.innerHTML = Number(counter.innerHTML) + 1 }
})

minusBTN.addEventListener("click", () => {
    if (counter.innerHTML > 0) { counter.innerHTML = Number(counter.innerHTML) - 1 }
})

resetBTN.addEventListener("click", () => {
    counter.innerHTML = 0
})