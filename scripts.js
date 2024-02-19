console.log(document.title);

// Ejercicio 1
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

// Ejercicio 2


// Ejercicio 3
let URLactual = window.location.href;
console.log(URLactual);


//Ejercicio 4
let URLdomain = window.location.host;
console.log(URLdomain);

//Ejercicio 5
let estoEsMain = document.getElementsByTagName("main");
for (let i = 0; i < estoEsMain.length; i++) {
    let imagenes = document.getElementsByClassName("src")[i];
    console.log(imagenes);
}
