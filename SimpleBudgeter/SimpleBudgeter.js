function calcExpences(shopping, gas, living, healthcare, taxes, other) {
    income = document.getElementById("income").value
    shopping = document.getElementById("shop").value;
    gas = document.getElementById("gas").value;  
    living = document.getElementById("living").value; 
    healthcare = document.getElementById("health").value; 
    taxes = document.getElementById("taxes").value; 
    other = document.getElementById("other").value; 

    expences = Number(shopping) + Number(gas) + Number(living) + Number(healthcare) + Number(taxes) + Number(other);
    surplus = Number(income) - expences

    document.getElementById("expence").innerHTML = `Your surplus is $${surplus}.`
}

