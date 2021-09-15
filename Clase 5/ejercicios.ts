//Crear una interface Humano para un objeto que tenga las siguientes propiedades:

//edad: numérica

//nombre: cadena

//genero: solo puede ser: "Femenino", "Masculino" u "Otro"

//funcion de comer, la cual recibe una comida como argumento y regresa: una cadena de
//caracteres representando la opinión de la comida o puede no regresar nada

//El argumento de la comida que recibe esta función debe ser un objeto con las siguientes
//propiedades: nombre de comida: cadena, tipoDeComida: solo "Mexicana" o "China",
//ingredientes: lista de cadenas, calificación: un número o solo "Buena", "Mas o menos", "Mala"

//Finalmente usar esta interface(Humano) en un objeto, asignando todos las propiedades
//de la interfaz

//Usar: Interfaces, types, uniones, tipos constantes, definición de funciones

type RandomType = number | string | boolean;

interface RandomInterface {
  randomProperty1: number;
  randomProperty2: RandomType;
}

type MultiArrayExercise = (
  | (string | RandomInterface)
  | (RandomType | RandomInterface)
)[];

//const myArray: MultiArrayExercise = ["Hola", {randomProperty2: false}, "Cadena"];
//const myArray: MultiArrayExercise = {[293.2, {randomProperty1: 20}], randomProperty2: true};
//const myRandom: RandomType = 243 & "Hola" & true;
//const myRandomInterface extends RandomInterface = {randomProperty1: 34, randomProperty: true};
