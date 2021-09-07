//Typescript nos ayuda con:
//Menos propensos a errores en tiempo de ejecución
//Código más entendible
//Experiencia de desarrollador

function myFunc2(a, b) {
  return a + b;
}

function myFunc(index, skills) {
  if (index < 0) {
    return "Index must be greater than 0";
  }

  if (index > skills.lenght) {
    return -1;
  }

  if (skills[index] === true) {
    skills[index] = false;
  }
  return skills[index];
}

let contenido = myFunc(1, [false, "Flutter"]);

let myAuto;
fetch("www.autos.com").then((auto) => {
  if (auto.size > 230) {
    // undefined > 230
    auto.type = "Van"; // error
  }

  myAuto = auto; //
});

myAuto.wheels(); // myAuto no tenga wheels()
