//Types = Renombrar/Alias a tipos
//Types = Definición de estructura de funciones
//Interfaces = Definición de estructura de objetos y clases

type PersonasNullable = Persona[] | null;
//type MultiArray = (string | boolean | number)[];
type MultiArray = string[] | boolean[] | number[];
let myArreglo: MultiArray = ["string", "hola", "hola"];
type Comer2 = (comida: string) => boolean;

interface Persona {
  edad: number;
  nombre: string;
  hijos: PersonasNullable;
  //comer: Comer2;
}

const personas: Persona[] = [];

const persona1: Persona = {
  edad: 40,
  nombre: "Juanito",
  hijos: [
    { edad: 10, nombre: "Pedro", hijos: null },
    { edad: 12, nombre: "Ana", hijos: null },
  ],
};
