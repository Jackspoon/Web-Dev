"use strict";

document.getElementById("mode").addEventListener("click", toggleMode) 

document.getElementById("def").addEventListener("click", function() {
    let defElement = document.getElementById("def")
    if (defDisplayed) {
        defElement.innerHTML = "surplus*"
        defDisplayed = false
    } else {
        defElement.innerHTML = `surplus <i class="italic">(an amount of something left over when requirements have been met; an excess of production or supply over demand)</i>`
        defDisplayed = true
    }

} )

let defDisplayed = false

function calcExpenses() {
    const tips = []
    let income = document.getElementById("income").value
    let shopping = document.getElementById("shop").value;
    let gas = document.getElementById("gas").value;  
    let living = document.getElementById("living").value; 
    let healthcare = document.getElementById("health").value; 
    let taxes = document.getElementById("taxes").value; 
    let other = document.getElementById("other").value; 

    let targetSurplus = Number(income) * 0.1;

    let expenses = Number(shopping) + Number(gas) + Number(living) + Number(healthcare) + Number(taxes) + Number(other);
    let surplus = Number(income) - expenses

    document.getElementById("expense").innerHTML = `Your surplus is $${surplus}.`

    if (document.getElementById("income").value = 0 && surplus <= 0) {
        tips.push("Get a job.")
    }

    if (income < 0) {
        tips.push("How are you LOSING MONEY for a job?!")
    }
    
    if (income > 0) {
        tips.push("You're employed! Keep going!")
    }

    if (surplus <= 0) {
        tips.push("You're in debt! Stop spending so much money!")
    }

    if (surplus < targetSurplus) {
        tips.push("You should probably stop spending so much money. You're not even getting 10% of it.")
    }

    renderTips(tips)
}

function renderTips(tips) {
    let tipsElement = document.getElementById("tips")
    tipsElement.innerHTML = ""
    for (let tip of tips) {
        let tipElement = document.createElement("li")
        tipElement.innerHTML = tip
        tipsElement.appendChild(tipElement)
    }
}

let isDarkMode = false

function toggleMode() {
    let mode = document.getElementById("mode")
    let body = document.getElementsByTagName("body")[0]
    if (isDarkMode === false) {
        mode.innerHTML = `Light mode`
        body.className = "darkmode"
        isDarkMode = true
    } else {
        mode.innerHTML = `Dark mode`
        body.className = "lightmode"
        isDarkMode = false
        }
}