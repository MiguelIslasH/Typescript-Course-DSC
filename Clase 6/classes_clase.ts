//https://www.typescriptlang.org/docs/handbook/2/classes.html

//POO
//¿Que son las clases?
//Atributos
//Atributos opcionales
//Modificadores de acceso: public, private y protected
//Métodos
//constructor
//readonly
//Instancias
//Getters y setters
//Herencia entre clases
//super
//Implementación de interfaces

interface MedioTransporte {
  motor: string;
  color: string;
  moverse: () => void;
}

class Motocicleta implements MedioTransporte {
  moverse: () => void;
}

class Vehiculo implements MedioTransporte {
  protected motor: string;
  protected color: string;

  constructor(color: string, motor: string) {
    this.motor = motor;
    this.color = color;
  }
  moverse() {
    console.log("Usa combustible...");
  }
}

class Auto extends Vehiculo {
  private readonly _numeroLlantas: number;
  private _placas?: string;
  private readonly _estadoAuto: boolean;

  constructor(
    numLlantas: number,
    color: string,
    motor: string,
    placas?: string
  ) {
    super(color, motor);
    this._numeroLlantas = numLlantas;
    this._estadoAuto = false;
    this._placas = placas;
  }

  get placas() {
    if (this._placas) {
      return this._placas;
    }

    return "No tiene placas";
  }

  set placas(placa: string) {
    this._placas = placa;
  }

  arrancar(llave: string) {
    console.log("llave: " + llave);
    console.log("arrancando...");
  }

  apagar() {
    this.motor = "apagado";
    console.log("apagando: ");
  }
}

let auto1 = new Auto(4, "azul", "motor1");
auto1.arrancar("llave");
auto1.apagar();

let auto2 = new Auto(6, "verde", "motor2", "djkwaljda");
auto1.apagar();
auto1.auto1.placas = "NWD-4953";
