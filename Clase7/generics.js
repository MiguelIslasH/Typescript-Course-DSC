//https://www.typescriptlang.org/docs/handbook/2/generics.html
//Generics - Reusabilidad de componentes
//Sintaxis de generics
//Generics en funciones
//Genercis en interfaces
//Generics en clases
function add(value1) {
    //mucho código!!!
    return value1;
}
var myValue = add("hola");
//myValue.
function contador(value) {
    return value.length;
}
console.log(contador(["hola", "xd"]));
var ProductosComercio = /** @class */ (function () {
    function ProductosComercio() {
        this.productos = [];
    }
    ProductosComercio.prototype.obtenerProducto = function (index) {
        return this.productos[index];
    };
    ProductosComercio.prototype.guardarProducto = function (producto) {
        this.productos.push(producto);
        return true;
    };
    return ProductosComercio;
}());
