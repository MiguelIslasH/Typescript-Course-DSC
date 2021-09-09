interface Persona {
  edad: number;
  nombre: string;
  pasatiempos: {
    extremos: string[];
    comunes: {
      enPareja: string[];
      solo: string[];
    };
  };
  esCasado: boolean;
}

const personas: Persona[] = [];

personas.push({
  edad: 20,
  esCasado: true,
  nombre: "juanito",
  pasatiempos: {
    extremos: ["pasatiempo"],
    comunes: { enPareja: [""], solo: [""] },
  },
});

/*
Cual es la estructura de este objeto?
{
  edad: ?
  nombre: ?
  pasatiempos: ?
  esCasado: ?
}
*/
