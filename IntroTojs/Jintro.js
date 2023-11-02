const myName = "Jackson Graybeal"

let favColor = "Blue"

favColor = "green"

let age = 98

mainPerson = {
    name: "Jackson Graybeal", 
    age: 98,
    favColor: "green"
}

favFood = ["steak", "sushi", "iceCream", "potatoes"]

favThings = [2, "movies"]

const isAlive = true

function describePerson(person) {
    // alert(`BAD PERSON ALERT: ${person.name} stole your money`)
}

describePerson(mainPerson)

if(age < 15){
    document.getElementById("title").innerHTML = `Hello ${myName}, you can't drive yet`
} else if (age >= 15 && age < 80) {
    document.getElementById("title").innerHTML = `Hello ${myName}, you can drive`
} else if (age > 80){
    document.getElementById("title").innerHTML = `Hello ${myName}, you probably shouldn't drive`
} 

const para = document.createElement("p");
para.innerHTML = "I tell you if you should drive or not.";
document.getElementById('div1').appendChild(para);