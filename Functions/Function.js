// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, and job title.
// outputs your fortune to the screen like so: "You will be an X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune() {
    e.preventDefault();

    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("partner").value;
    location = document.getElementById("location").value;
    jobTitle = document.getElementById("job").value;

    document.getElementById("fortune").innerText = `You will be an ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`);
}

// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

function calculateDogAge(puppyAge) {
    dogAge = puppyAge * 7;
    console.log(`Your dog is ${dogAge} years old in dog years!`)
}

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, and amount per day.
// calculates the amount consumed for the rest of the life (based on a constant max-age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

function calculateSupply(item, age, amountPerDay) {
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log(`You need ${totalAmount} ${item} to reach ${maxAge}!`)
}

// Create 2 functions that calculate the properties of a circle, using the definitionsLinks to an external site. here.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// // Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius, diamiter) {
    radius * Math.PI * 2 = circumfrence;
    diamiter * Math.PI = circumfrence;
    console.log(`The circumference is ${circumfrence}`)
}

const calcArea = function(radius) => console.log(`The area is ${Math.PI * radius * radius}`);

// It's hot out! Let's make a converter based on the stepsLinks to an external site. here.
// Create a function called celsiusToFahrenheit:
// Store a Celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a Fahrenheit temperature into a variable.
// Convert it to Celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
    fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F.`)
}

function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F is ${celsius}°C`) 
}