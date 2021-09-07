function add(number1: number, number2: number): number {
  return number1 + number2;
}

function myFunc(index: number, skills: string[]): string {
  if (index < 0) {
    return "Index must be greater than 0";
  }

  if (index > skills.length) {
    return -1;
  }

  if (skills[index] === true) {
    skills[index] = false;
  }

  return skills[index];
}

interface Auto {
  size: number;
  wheels: number;
  color: string;
  isImported: boolean;
}

let myAuto: Auto;
fetch("www.autos.com").then((auto) => {
  const responseAuto = auto.body as unknown as Auto;
  if (responseAuto.size > 230) {
    responseAuto.type = "Van";
  }

  myAuto = responseAuto;
});

myAuto.wheels();
