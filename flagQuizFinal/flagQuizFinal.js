const option = document.getElementById("option")

let currentGuess

const guesses = document.getElementsByClassName("big")

const optionValues = document.getElementsByClassName("optionValue")

const submitGuesses = document.getElementById("submit")

for (let index = 0; index < guesses.length; index++) {
    const element = guesses[index];
    element.addEventListener("focus", dropBar)
    // element.addEventListener("blur", blur)
    element.addEventListener("keyup", type)
}

for (let index = 0; index < optionValues.length; index++) {
    const element = optionValues[index];
    element.addEventListener("click", select)
    
}

submitGuesses.addEventListener("click", submit) 

function submit() {
    for (let index = 0; index < guesses.length; index++) {
        const element = guesses[index];
        if (element.value == "") {
            alert("Please fill out all fields")
            return
        }
    }

    const guess1 = guesses[0].value
    const guess2 = guesses[1].value
    const guess3 = guesses[2].value
    const guess4 = guesses[3].value
    const guess5 = guesses[4].value
    const guess6 = guesses[5].value
    const guess7 = guesses[6].value
    const guess8 = guesses[7].value
    const guess9 = guesses[8].value
    const guess10 = guesses[9].value
    const guess11 = guesses[10].value

    if (guess1 === document.getElementById("op16").innerHTML) {
        document.getElementById("check16").classList.remove("hidden")
    }
    if (guess2 === document.getElementById("op9").innerHTML) {
        document.getElementById("check9").classList.remove("hidden")
    }
    if (guess3 === document.getElementById("op8").innerHTML) {
        document.getElementById("check8").classList.remove("hidden")
    }
    if (guess4 === document.getElementById("op6").innerHTML) {
        document.getElementById("check6").classList.remove("hidden")
    
    }
    if (guess5 === document.getElementById("op7").innerHTML) {
        document.getElementById("check7").classList.remove("hidden")
    
    }
    if (guess6 === document.getElementById("op2").innerHTML) {
        document.getElementById("check2").classList.remove("hidden")
    }
    if (guess7 === document.getElementById("op11").innerHTML) {
        document.getElementById("check11").classList.remove("hidden")
    }
    if (guess8 === document.getElementById("op3").innerHTML) {
        document.getElementById("check3").classList.remove("hidden")
    
    }
    if (guess9 === document.getElementById("op13").innerHTML) {
        document.getElementById("check13").classList.remove("hidden")
    
    }
    if (guess10 === document.getElementById("op12").innerHTML) {
        document.getElementById("check12").classList.remove("hidden")
    }
    if (guess11 === document.getElementById("op15").innerHTML) {
        document.getElementById("check15").classList.remove("hidden")
    
    }

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

function select() {
    option.classList.add("hidden")
    currentGuess.value = this.innerHTML 
    blur()
}

function type() {
    const value = this.value.toUpperCase()
    for (let index = 0; index < optionValues.length; index++) {
        const element = optionValues[index];
        if (element.innerHTML.toUpperCase().includes(value)) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    }

}

function blur() {
    for (let index = 0; index < optionValues.length; index++) {
        const element = optionValues[index];
        element.classList.remove("hidden")
    }
}