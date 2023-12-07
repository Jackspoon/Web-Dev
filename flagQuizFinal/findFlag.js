const guesses = document.getElementsByClassName("big")

const option = document.getElementById("flagFinds")

const Flagthing = document.getElementsByClassName("Flagthing")

for (let index = 0; index < guesses.length; index++) {
    const element = guesses[index];
    element.addEventListener("focus", dropBar)
    element.addEventListener("keyup", type)
}

for (let index = 0; index < Flagthing.length; index++) {
    const element = Flagthing[index];
    element.addEventListener("click", select)
    
}

function select() {
    option.classList.add("hidden")
    currentGuess.value = this.innerHTML 
    blur()
}

function dropBar() {
    currentGuess = this
    blur()
    const rect = this.getBoundingClientRect()
    option.classList.remove("hidden")
    option.style.top = rect.bottom + window.scrollY + "px"
    option.style.left = rect.left + "px"
    option.style.width = rect.width - 4 + "px" 
}

function type() {
    const value = this.value.toUpperCase()
    for (let index = 0; index < Flagthing.length; index++) {
        const element = Flagthing[index];
        if (element.innerHTML.toUpperCase().includes(value)) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    }

}

function blur() {
    for (let index = 0; index < Flagthing.length; index++) {
        const element = Flagthing[index];
        element.classList.remove("hidden")
    }
}