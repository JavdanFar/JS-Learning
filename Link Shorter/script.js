// =======***======= DarkMode Section =======***=======

document.body.dataset.theme = localStorage.getItem("theme") || "light";

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const body = document.body.dataset;
  const themeIcon = document.getElementById("themeIcon")
  if (body.theme === "dark") {
    localStorage.setItem("theme", "light");
    body.theme = localStorage.getItem("theme");
    themeIcon.classList.replace("fa-sun", "fa-moon")
  }
  else {
    localStorage.setItem("theme", "dark");
    body.theme = localStorage.getItem("theme");
    themeIcon.classList.replace("fa-moon", "fa-sun")
  }
});

// =======***======= Validate URL Section =======***=======

const isValidURL = (url) => {
  try {
    const parsedURL = new URL(url)
    const allowedProtocols = ["http:", "https:"]

    if (!allowedProtocols.includes(parsedURL.protocol)) {
      return false
    }
    return true
  }
  catch {
    return false
  }
}

const validateURL = (url) => {
  if (!url.trim()) {
    return [false, 'URL cannot be empty.']
  }

  if (url.length > 1000) {
    return [false, 'URL is too long. Maximum length is 1000 characters.']
  }

  if (/\s/.test(url)) {
    return [false, 'URL should not contain spaces.']
  }

  if (!isValidURL(url)) {
    return [false, 'Invalid or unsupported URL format.']
  }

  return [true, 'URL is valid']
}

// =======***======= Change Input Style Section =======***=======

let inputController = (userInput, inputLabel, helperText, SubmitBTN) => {
  userInput.addEventListener("input", (e) => {
    let urlLen = e.target.value.length

    inputLabel.innerHTML = urlLen ? `Long URL (${urlLen}/1000) <span class="red-star">*</span>` :
      `Long URL <span class="red-star">*</span>`

    let [isValid, Message] = validateURL(e.target.value)

    if (isValid) {
      userInput.style.borderColor = "var(--color-success)"
      helperText.style.color = "var(--color-success)"
      SubmitBTN.classList.remove("disable")
      SubmitBTN.disabled = false
    } else {
      userInput.style.borderColor = "var(--color-alert)"
      helperText.style.color = "var(--color-alert)"
      SubmitBTN.classList.add("disable")
      SubmitBTN.disabled = true
    }

    helperText.innerText = Message
  })
}

let urlInput = document.getElementById("urlInput")
let label = document.getElementById("label")
let helperText = document.getElementById("helperText")
const generateBTN = document.getElementById("generateBTN")

inputController(urlInput, label, helperText, generateBTN)

// =======***======= Generate Section =======***=======

generateBTN.addEventListener("click", async function () {
  let urlValue = document.getElementById("urlInput").value
  const response = await fetch("https://phly.ir/api/links/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "url": urlValue
    })
  })
  let res = await response.json()
  console.log(`https://phly.ir/${res.data.code}`)
})

// =======***======= Change Idea Input Style Section =======***=======

let ideaInput = document.getElementById("urlInput")
let idearInputLabel = document.getElementById("label")
let ideaHelperText = document.getElementById("helperText")
const ideaSubmitBTN = document.getElementById("generateBTN")

inputController(ideaInput, idearInputLabel, ideaHelperText, ideaSubmitBTN)