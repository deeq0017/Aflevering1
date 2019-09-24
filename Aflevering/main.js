// JavaScript source code
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);


function myFunction() {
    document.getElementById("billede").innerHTML += "<br>Jeg har advaret dig<br>";
}

function mySecondFunction() {
    document.getElementById("knap").innerHTML += document.getElementById("billede").innerHTML;
}

var x = document.getElementById("button");
x.addEventListener("click", Alder);
x.addEventListener("click", someOtherFunction);

function Alder() {
    alert("24 år!")
}

function someOtherFunction() {
    alert("I know that I look younger, and that's because black don't crack.")
}

function nottrue(event) {
    var x = event.key;

    
    if (x == "b", "c", "i", "k", "f", "h", "m", "n" || x == "B", "C", "I", "K", "F", "H", "M", "N") {
        alert("FORKERT");
    }
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
    document.getElementById("kasse").innerHTML = "SÅDAN";
    event.target.style.border = "4px dotted green";
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "Nu er du færdig med dette!.";
}

// slut
var btn = document.getElementById("minknap");


function sayHello() {
    alert("Slut");
}

function setHoverColor() {
    btn.style.background = "yellow";
}

function setNormalColor() {
    btn.style.background = "";
}


btn.addEventListener("click", sayHello);
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);