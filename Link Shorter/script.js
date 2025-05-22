// =======***======= DarkMode Section =======***=======

document.body.dataset.theme = localStorage.getItem("theme") || "light";

let themeBTN = document.getElementById("themeBTN");

themeBTN.addEventListener("click", () => {
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


// =======***======= Change URL Input Style Section =======***=======

let inputController = (userInput, inputLabel, helperText, SubmitBTN, maxLen, validationCallback) => {
  userInput.addEventListener("input", (e) => {
    let inputLen = e.target.value.length

    inputLabel.innerHTML = inputLen ? `Long URL (${inputLen}/${maxLen}) <span class="red-star">*</span>` :
      `Long URL <span class="red-star">*</span>`

    let [isValid, Message] = validationCallback(e.target.value)

    if (isValid) {
      if (validationCallback === validateURL) {
        userInput.style.borderColor = "var(--color-success)"
      } else {
        userInput.style.borderColor = "var(--color-primary)"
      }
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

inputController(urlInput, label, helperText, generateBTN, 1000, validateURL)


// =======***======= Generate Section =======***=======

const shortLink = document.getElementById("shortLink")
const inputCard = document.getElementById("inputCard")
const resultCard = document.getElementById("resultCard")

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

  let result = await response.json()
  let output = `https://phly.ir/${result.data.code}`

  shortLink.href = output
  shortLink.innerText = output

  inputCard.style.display = "none"
  resultCard.style.display = "flex"
})


// =======***======= Copy BTN Section =======***=======

const copyBTN = document.getElementById("copyBTN")

copyBTN.addEventListener("click", () => {
  navigator.clipboard.writeText(shortLink.href)
})


// =======***======= New BTN Section =======***=======

const newBTN = document.getElementById("newBTN")
const urlInputForm = document.getElementById("urlInputForm")

newBTN.addEventListener("click", () => {
  urlInputForm.reset();
  inputCard.style.display = "flex"
  resultCard.style.display = "none"
})


// =======***======= Validate Idea Section =======***=======

const validateIdea = (idea) => {
  if (!idea.trim()) {
    return [false, 'Idea cannot be empty.']
  }

  if (idea.length > 2048) {
    return [false, 'URL is too long. Maximum length is 2048 characters.']
  }

  return [true, '']
}


// =======***======= Change Idea Input Style Section =======***=======

let ideaInput = document.getElementById("ideaInput")
let ideaInputLabel = document.getElementById("ideaInputLabel")
let ideaHelperText = document.getElementById("ideaHelperText")
const ideaSubmitBTN = document.getElementById("ideaSubmitBTN")

inputController(ideaInput, ideaInputLabel, ideaHelperText, ideaSubmitBTN, 2048, validateIdea)


// =======***======= Open and Close Modal Section =======***=======

const closeBTN = document.getElementById("colseBTN")
const modalContainer = document.getElementById("modalContainer")
const ideaBTN = document.getElementById("ideaBTN")

const versionBTN = document.getElementById("versionBTN")
const versionModalColseBTN = document.getElementById("versionModalColseBTN")
const versionModalContainer = document.getElementById("versionModalContainer")


ideaBTN.addEventListener("click", () => {
  modalContainer.style.display = "flex"
})

closeBTN.addEventListener("click", () => {
  modalContainer.style.display = "none"
})

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none"
  }
})


versionBTN.addEventListener("click", () => {
  versionModalContainer.style.display = "flex"
})

versionModalColseBTN.addEventListener("click", () => {
  versionModalContainer.style.display = "none"
})

versionModalContainer.addEventListener("click", (event) => {
  if (event.target === versionModalContainer) {
    versionModalContainer.style.display = "none"
  }
})