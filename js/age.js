let gameButton = document.querySelectorAll("section div h3")
let sectionOfAdrress = document.querySelector("section")
let spin = document.querySelector(".container")
let backButton = document.querySelector("h4")
let ageGame  = document.querySelector(".ageGame")
let inputAge = document.querySelector(".ageGame .box input")
let submitButtonAge = document.querySelector(".ageGame .box button")
let infoAge = document.querySelector(".info")
let infoAgeValue = document.querySelectorAll(".value")
let resetAge = document.querySelector(".reset")


gameButton.forEach(function (e) {
    e.onclick = function () {
        sectionOfAdrress.classList.toggle("active")
        spin.classList.toggle("active")
        backButton.classList.toggle("active")
        if (e.className === ageGame.className.split(" ")[0]) {
            ageGame.classList.toggle("active")
        }
    }
})
backButton.onclick = function () {
    sectionOfAdrress.classList.toggle("active")
    spin.classList.toggle("active")
    backButton.classList.toggle("active")
    ageGame.classList.remove("active")
    infoAge.classList.remove("active")
}
resetAge.onclick = function () {
        infoAgeValue.forEach(function (e) {
            inputAge.value = ""
            e.innerHTML = ""
        })
}
submitButtonAge.onclick = function () {
    infoAge.classList.add("active")
    setInfo()
}
function setInfo () {
    let milliSeconds = Date.now() - new Date (inputAge.value)
    let years = (milliSeconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)
    let months = parseInt(milliSeconds / (1000 * 60 * 60 * 24 * 30))
    let days = parseInt(milliSeconds / (1000 * 60 * 60 * 24))
    let hours = parseInt(milliSeconds / (1000 * 60 * 60))
    infoAgeValue.forEach(function (e) {
        if (e.dataset.value === "year") {
            e.innerHTML = years
        }else if (e.dataset.value === "month") {
            e.innerHTML = months
        }else if (e.dataset.value === "day") {
            e.innerHTML = days
        }else {
            e.innerHTML = hours
        }
    })
}

