//Creación de tipos
//Unión de tipos
//Intersección
//Definicion de funciones
//Usar Types o interfaces

type MyTipo = number;
//let edad: MyTipo;

//type MyTipo = number | string;
type Edad = string | number;

let edad: Edad;
edad = 11;
edad = "11 años";

type Dimension = { size: number };
type DW = { color: string };
type Altura = DW & Dimension;

//type Altura = (number | string) & Dimension;

type TiposDeComida = "Mexicana" | "China" | "Japonesa";

interface Comida {
  nombre: string;
  gramos: number;
  tipoComida: TiposDeComida;
}

const comida: Comida = {
  gramos: 200,
  nombre: "Tacos",
  tipoComida: "Japonesa",
};

type Comer = (comida: Comida) => boolean;

interface Humano {
  comer: Comer;
}

const pedro: Humano = {
  edad: 20,
  nombre: "Susana",
  comer: (comida) => {
    return true;
  },
};

// Cuando usamos types y cuando interfaces?
