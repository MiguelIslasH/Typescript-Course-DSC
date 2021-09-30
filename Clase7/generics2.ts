//https://www.typescriptlang.org/docs/handbook/2/generics.html

//Generics - Reusabilidad de componentes
//Sintaxis de generics
//Generics en funciones
//Genercis en interfaces
//Generics en clases
//Casos de uso

function myFuncion<T extends number | string>(value: T) {
  //cosas...
  return value;
}

let miValor = myFuncion<string>("dakjlaw");

let miArreglo: Array<number | string> = [];
let miArreglo2: (string | number)[] = [];

miArreglo.push(10);
miArreglo.push("hola");

interface Juguete {
  id: string;
  nombre: string;
}

let promesas = new Promise<Juguete>((resolve, rejected) => {
  //Algo...
  resolve({ id: "1", nombre: "Juguete1" });

  //fallo...
});

interface Producto<T> {
  productos: T[];
  obtenerProducto(index: number): T;
  guardarProducto(producto: T): string;
}

interface Lacteos {
  id: string;
  nombre: string;
  precio: number;
}

interface Comidas {
  id: string;
  nombre: string;
  tipo: string;
}

class Producto<T> {
  productos: T[] = [];

  obtenerProducto(index: number) {
    return this.productos[index];
  }

  guardarProducto(producto: T) {
    this.productos.push(producto);
    return "Insertado correctamente";
  }
}

let myEcommerce = new Producto<Lacteos>();
let miProducto2 = new Producto<Comidas>();
miProducto2.guardarProducto({ id: "xdd", nombre: "tacos", tipo: "Mexicana" });
