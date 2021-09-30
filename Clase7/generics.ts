//https://www.typescriptlang.org/docs/handbook/2/generics.html

//Generics - Reusabilidad de componentes
//Sintaxis de generics
//Generics en funciones
//Genercis en interfaces
//Generics en clases

function add<T extends number | string>(value1: T): T {
  //mucho código!!!
  return value1;
}

let myValue = add<string>("hola");
//myValue.

function contador<T extends string | Array<string>>(value: T) {
  return value.length;
}

const finder = new Promise<string>((resolve, reject) => {
  resolve("10");

  reject(10);
});

console.log(contador<string[]>(["hola", "xd"]));

interface Productos<T> {
  productos: T[];
  obtenerProducto: (index: number) => T;
  guardarProducto: (producto: T) => boolean;
}

interface Comida {
  titulo: string;
  id: number;
  precio: number;
}

interface Lacteos {
  titulo: string;
  caducidad: string;
  ingredientes: [];
}

class ProductosComercio implements Productos<Lacteos> {
  productos: Lacteos[];

  constructor() {
    this.productos = [];
  }

  obtenerProducto(index: number) {
    return this.productos[index];
  }

  guardarProducto(producto: Lacteos) {
    this.productos.push(producto);
    return true;
  }
}

class Product2<T extends object> {
  productos: T[];

  constructor() {
    this.productos = [];
  }

  push(producto: T) {
    this.productos.push(producto);
  }
}

let tienda = new Product2();
tienda.push({ name: "xd" });
