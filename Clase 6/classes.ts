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

type TipoGasolina = "Premium" | "Magna";
const valor = 10;

class Vehiculo {
  private velocidad: number;

  constructor(velocidad: number) {
    this.velocidad = velocidad;
  }

  avanzar() {
    this.velocidad = 100;
  }
}

interface MiembroEmpresa {
  numeroId: number;
  iniciarSesion: (usuario: string, password: string) => boolean;
}

class Empleado implements MiembroEmpresa {
  readonly numeroId;

  constructor() {
    this.numeroId = 10;
  }
  iniciarSesion(usuario: string, password: string) {
    if (usuario === "u1" && password === "1234") {
      return true;
    }
    return false;
  }
}

class Auto extends Vehiculo {
  readonly numeroPurtas: number = 4;
  private color: string;
  private modelo: string;
  private _placas?: string;
  private _gasolina: TipoGasolina;
  private encendido: boolean;

  constructor(
    numPuertas: number,
    color: string,
    modelo: string,
    gasolina: TipoGasolina,
    encendido: boolean,
    velocidad: number,
    placas?: string
  ) {
    super(velocidad);
    this.numeroPurtas = numPuertas;
    this.color = color;
    this.modelo = modelo;
    this._gasolina = gasolina;
    this.encendido = encendido;
    if (placas) {
      this._placas = placas;
    }
  }

  get gasolina() {
    return this._gasolina;
  }

  set placas(numeroPlacas: string) {
    this._placas = numeroPlacas;
  }

  arrancar() {
    this.encendido = true;
    console.log("Arrancando...");
  }

  apagar() {
    this.encendido = false;
    console.log("Apagando...");
  }
}

const auto = new Auto(4, "azul", "GS3", "Premium", false, 0, "NWA-4534");
auto.apagar();
auto.placas = "AEA";
auto.gasolina;
auto.avanzar();
