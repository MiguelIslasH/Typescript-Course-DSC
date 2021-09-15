//Definición de funciones/métodos
//Herencia entre interfaces
//Implementación en clases
//Mezcla entre interfaces

interface Humano {
  edad: number;
  nombre: string;
  comer: (comida: string) => boolean;
}

interface Profesor {
  id: string;
  materiasAsignadas: string[];
}

//mas codigo...

interface Profesor {
  noSS: string;
}

interface Alumno extends Humano {
  boleta: string;
  materiasTomadas: string[];
}

const juan: Alumno = {
  boleta: "2019630385",
  materiasTomadas: ["Web", "Liderazgo"],
};

class EstudianteESCOM implements Alumno {
  //final, final
  constructor(
    readonly edad: number,
    readonly nombre: string,
    readonly materiasTomadas: string[],
    readonly boleta: string
  ) {} //readonly edad: number //readonly nombre: string, //readonly materiasTomadas: string[], //readonly boleta: string,

  comer(comida: string) {
    //hacer cosas...
    return true;
  }
}
