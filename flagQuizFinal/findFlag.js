const guesses = document.getElementsByClassName("big")

const option = document.getElementById("flagFinds")

const Flagthing = document.getElementsByClassName("Flagthing")

const flagButton = document.getElementById("flagSubmit")

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

flagButton.addEventListener("click", submit) 

function submit() {
    if (whatsThatFlag.value == "") {
        alert("Please fill out all fields")
        return
    }
    const allFlags = document.getElementsByClassName("flag")
    for (let index = 0; index < allFlags.length; index++) {
        const element = allFlags[index];
        element.classList.add("hidden")
    }
    switch (whatsThatFlag.value) {
        case document.getElementById("flag1").innerHTML: 
            document.getElementById("bgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag2").innerHTML:
            document.getElementById("cgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag3").innerHTML:
            document.getElementById("germgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag4").innerHTML:
            document.getElementById("ggrid").classList.remove("hidden")
            break;
        case document.getElementById("flag5").innerHTML:
            document.getElementById("italygrid").classList.remove("hidden")
            break;
        case document.getElementById("flag6").innerHTML:
            document.getElementById("Japan").classList.remove("hidden")
            break;
        case document.getElementById("flag7").innerHTML:
            document.getElementById("swgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag8").innerHTML:
            document.getElementById("sgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag9").innerHTML:
            document.getElementById("tgrid").classList.remove("hidden")
            break;
        case document.getElementById("flag10").innerHTML:
            document.getElementById("ugrid").classList.remove("hidden")
            break;
        case document.getElementById("flag11").innerHTML:
            document.getElementById("agrid").classList.remove("hidden")
        default:
            break;
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