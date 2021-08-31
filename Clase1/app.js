//Typescript nos ayuda con:
//Menos propensos a errores en tiempo de ejecución
//Código más entendible
//Experiencia de desarrollador

function add(number1, number2) {
  return number1 + number2;
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

let myAuto;
fetch("www.autos.com").then((auto) => {
  if (auto.size > 230) {
    auto.type = "Van";
  }

  myAuto = auto;
});

myAuto.wheels();
