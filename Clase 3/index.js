//Lenguaje de programación JS
//ECMAScript

//Variables y constantes
let variable1 = 12.5;
let variable2 = 32;
let declaracion;
const hola = "hola";

//Tipos de datos
("boolean");
("number");
("string");
("object"); //[] {}
//Template literals
//console.log(`hola como estas? ${variable1}`);
//Operadores aritmeticos
//console.log(variable1 + variable2);
//console.log(variable1 - variable2);
//console.log(variable1 / variable2);
//console.log(variable1 * variable2);
//console.log(2 ** 4); //2^4
//Operadores de comparación
// > < <= >=
console.log(10 > 80); //false
console.log(10 < 80); //true
console.log(10 >= 80); //false
console.log(10 <= 80); //true
// == === != !==
let numero = 10;
let numero2 = 5;
console.log("10" === 10); // false
console.log("10" !== 10); // false
//Operadores lógicos
console.log(booleano1 && booleano2); // and / Y
console.log(booleano1 || booleano2); // or / O
console.log(!booleano2); // not

//Condicionales
//if / si?

let booleano1 = true;
let booleano2 = false;
let vacio = null;
let indefinido;

//null => void
//undefined =>
// null - undefined - 0 - ""
// 38201831 - 20 - "jkljda" -
if (numero === numero2) {
  let hola = "hola";
}

//Scope
//Else
if (numero === numero2) {
  let hola = "hola";
} else {
  console.log("no es cierto");
}
//else if
if (numero === numero2) {
  console.log(numero);
  let hola = "hola";
} else if (numero < numero2) {
  console.log("no es cierto");
} else if (numero <= numero2) {
} else if (false) {
} else {
  console.log("hola");
}
//Switch
switch (numero) {
  case 10:
    console.log("es 10");
    break;
  case 20:
    console.log("es 20");
    break;
  case 20:
    console.log("es 20");
    break;
  case 20:
    console.log("es 20");
    break;
  case 20:
    console.log("es 20");
    break;
  case 20:
    console.log("es 20");
    break;
  default:
    console.log("no se cumplió ninguna");
}

//Ciclos
//For
//Scope
//while
//forEach ** despues de arreglos **
//map  **Despues de arreglos**

//Estructuras de datos
//Arreglos
//Métodos de arreglos
//Objetos
//JSON => JavaScript Object Notation
//clases **despues de funciones**

//Funciones
//Arrow functions
//retorno
//parametros
//Scope

//Asynchronous programming
//Callbacks
/*
function myComplexFunction(number1, number2, sendToDatabase) {
  const myNumber = number1 + number2;
  //...
  sendToDatabase("My number: " + myNumber);
}

function mySender(message) {
  console.log(message);
}

myComplexFunction(1, 2, mySender);
*/

//setTimeout
/*
setTimeout(() => {
  console.log("timeout");
}, 4000);
console.log("Y el timeout?");
*/

/*
function timeOuts() {
  setTimeout(() => {
    console.log("Primer timeout");
  }, 4000);

  setTimeout(() => {
    console.log("segundo timeOut");
  }, 1000);

  setTimeout(() => {
    console.log("tercer timeout");
  }, 2000);
}
*/

//Callback hell
/*
function myFunction() {
  setTimeout(() => {
    console.log("mensaje 1");
    setTimeout(() => {
      console.log("mensaje 2");
      setTimeout(() => {
        console.log("mensaje 3");
      }, 10);
    }, 500);

    setTimeout(() => {
      console.log("mensaje 4");
    }, 2000);
  }, 1000);
}
*/

/*
//https://www.bing.com/images/search?view=detailV2&ccid=HvfWLvTa&id=DF07D4AE8B4A8039FDCC96F0DEB244EF35F681E2&thid=OIP.HvfWLvTa8Jg3sCx5XvWglAHaEU&mediaurl=https%3a%2f%2fmiro.medium.com%2fmax%2f721%2f0*iiecmuTLPBqbxd5V.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1ef7d62ef4daf09837b02c795ef5a094%3frik%3d4oH2Ne9Est7wlg%26pid%3dImgRaw%26r%3d0&exph=420&expw=721&q=callback+hell&simid=608024711909352523&FORM=IRPRST&ck=1A34DEDBC80E55BCABCDC21B59F04C46&selectedIndex=0&ajaxhist=0&ajaxserp=0
function myFunc(url, sender) {
  sender(url, () => {
    let response = url.body();
    response.json((jsonData) => {
      const json = JSON.parse(jsonData);
      printJsonFormated(json, () => {
        console.log(json);
      });
    })
  });
}
*/

//Promises
/*
let myProm = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Finalizada"), 5000);
  //reject("Error 404");
})
  .then((response) => console.log("promesa: " + response))
  .then()
  .catch((error) => console.log("Error: " + error));

fetch("https://catfact.ninja/fact").then((response) => {
  response.json().then((json) => console.log(json.fact));
});
*/

//Async await
/*
async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const jsonResponse = await response.json();
  console.log(jsonResponse.fact);
}

getCatFact();
*/
//Ejercicios
