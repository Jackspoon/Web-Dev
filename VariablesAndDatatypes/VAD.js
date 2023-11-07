const name = "Jackson Graybeal"

let favColor = "Green"

let favFood = ["Pasta", " Sushi", " Steak"]

let age = 14

let numSiblings = 1

let pets = 1

let favNumber = [17, 14, 6]

let favNames = ["Jack", " Jake", " Berfnernererbert"]

let isAlive = true

const male = true

let glasses = true

Karli = {
    name: "Karli Graybeal",
    age: 16,
    favColor: "Black",
    favFood: ["Sushi", " Steak"],
    numSiblings: 1,
    male: false,
    glasses: false,
    isAlive: true,
}

Michael = {
    name: "Michael Graybeal",
    age: 42,
    favColor: "unknown",
    favFood: "Steak",
    numSiblings: 6,
    male: true,
    glasses: false,
    isAlive: true
}

Velvet = {
    name: "Velvet Graybeal",
    age: 37,
    favColor: "blue",
    favFood: "Steak",
    numSiblings: 2,
    male: false,
    glasses: false,
    isAlive: true
}

if (isAlive = true){
const boutJack = document.createElement("h1");
boutJack.innerHTML = `${name} is alive and he is ${age}, has glasses, his favorite color is ${favColor}, has ${numSiblings} sibling, ${pets} pet, and his favorite foods are ${favFood}. His favorite names are ${favNames} and his favorite numbers are ${favNumber}.`;
document.getElementById('jack').appendChild(boutJack);
}else if (isAlive = false){
    const boutJack = document.createElement("h1");
boutJack.innerHTML = `${name} is dead and he was ${age}, his favorite color was ${favColor}, had ${numSiblings} sibling, ${pets} pet, and his favorite foods were ${favFood}. His favorite names were ${favNames} and his favorite numbers were ${favNumber}.`;
document.getElementById('jack').appendChild(boutJack);}


const boutKarli = document.createElement("h1");
boutKarli.innerHTML = `${Karli.name} is ${Karli.age}, her favorite color is ${Karli.favColor} and her favorite foods are ${Karli.favFood}.`;
document.getElementById('karli').appendChild(boutKarli);

const boutVelvet = document.createElement("h1");
boutVelvet.innerHTML = `${Velvet.name} is ${Velvet.age}, her favorite color is ${Velvet.favColor} and her favorite food is ${Velvet.favFood}.`;
document.getElementById('velvet').appendChild(boutVelvet);

const boutMichael = document.createElement("h1");
boutMichael.innerHTML = `${Michael.name} is ${Michael.age}, his favorite color is ${Michael.favColor} and his favorite food is ${Michael.favFood}.`;
document.getElementById('Michael').appendChild(boutMichael);