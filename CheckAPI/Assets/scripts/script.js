import { GBI } from "./lib.js"

// =======***======= DarkMode Section =======***=======

const themeBTN = GBI("themeBTN");
const logo = GBI("logo")
const theme = localStorage.getItem("theme")

document.body.dataset.theme = theme || "light";
if (theme == "dark") {
    themeIcon.classList = ("fa fa-solid fa-sun")
    logo.src = "./Assets/logo/logo-white.png"
}

themeBTN.addEventListener("click", () => {
    const body = document.body.dataset;
    const themeIcon = GBI("themeIcon")
    if (body.theme === "dark") {
        localStorage.setItem("theme", "light");
        body.theme = localStorage.getItem("theme");
        themeIcon.classList.replace("fa-sun", "fa-moon")
        logo.src = "./Assets/logo/logo-dark.png"
    }
    else {
        localStorage.setItem("theme", "dark");
        body.theme = localStorage.getItem("theme");
        themeIcon.classList.replace("fa-moon", "fa-sun")
        logo.src = "./Assets/logo/logo-white.png"
    }
});