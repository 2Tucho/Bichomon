console.log(document.title);

// Ejercicio 1
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

// Ejercicio 2
const primeraGen = document.querySelectorAll("body > main > div:nth-child(6)")[0].children;
for (let i = 0; i < primeraGen.length; i++) {
    primeraGen[i].style.backgroundColor = "aliceblue";
}

// Ejercicio 3
let URLactual = window.location.href;
console.log(URLactual);


//Ejercicio 4
let URLdomain = window.location.host;
console.log(URLdomain);

//Ejercicio 5
document.querySelector("body > main").childNodes[11]
    




