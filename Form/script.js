const submitBtn = document.getElementById("submitBtn")

document.getElementById("fname").focus()
const county = document.getElementById("county")
const city = document.getElementById("city")

const geo = {
    alborz: {
        kj: 'Karaj',
        fd: 'Fardis'
    },
    tehran: {
        th: 'Tehran',
        dm: 'Damavand'
    }
}
function importCounty() {
    let res = '<option value="" disabled selected>-- Choose County --</option>';
    for (key in geo) {
        res += `<option value="${key}">${key}</option>`
    }
    county.innerHTML = res;
}
document.addEventListener("DOMContentLoaded", importCounty)

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const signupForm = document.forms.signupForm
    let fname = signupForm.fname
    let lname = signupForm.lname
    let email = signupForm.email
    let gender = signupForm.gender
    let city = signupForm.city

    console.log(`
        First name: ${fname.value}
        Last name: ${lname.value}
        Email: ${email.value}
        Gender: ${gender.value}
        Birth Place: ${city.value}
        `)

    signupForm.reset()
    city.innerHTML = '<option value="" disabled selected>-- Choose City --</option>';
    importCounty()
})

let email = document.getElementById('email')

email.addEventListener("blur", () => {
    if (email.value.includes("@")) {
        console.log("Email is Correct")
    } else {
        console.log("Email is Incorrect")
    }
})

county.addEventListener("change", () => {
    let cities = geo[county.value]
    console.log(cities)

    let res = '';
    for (const [key, value] of Object.entries(cities)) {
        res += `<option value="${key}">${value}</option>`
    }
    city.innerHTML = res;
})



const Validator = {
    email: function (email) {

    }
    ,
    valid: function (value, options) {

    }
}