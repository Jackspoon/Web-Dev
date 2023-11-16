document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "goodbye:(";
});

document.getElementById("greeting").addEventListener("dblclick", function () {
    document.getElementById("greeting").innerHTML = "Hello Jell-o";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.borderRadius = "100%"
})

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.borderRadius = "0%"
})

document.getElementById("focusing").addEventListener("focus", function () {
    document.getElementById("focusing").style.backgroundColor = 'green';
})


document.getElementById("focusing").addEventListener("blur", function () {
    document.getElementById("focusing").style.backgroundColor = 'white';
})


document.getElementById("cheater").addEventListener("copy", function () {
    document.getElementById("cheater").innerHTML = 'How dare you! Cheater!!!!! You are not cool.';
})

document.getElementById("dragger").addEventListener("drag", function () {
    document.getElementById("dragger").innerHTML = 'Haha, it is different now.';
})

document.getElementById("don't").addEventListener("contextmenu", function () {
    document.getElementById("don't").innerHTML = 'I told you to not to!';
})

document.getElementById("notclick").addEventListener("mousedown", function () {
    document.getElementById("notclick").innerHTML = 'this is different';
})