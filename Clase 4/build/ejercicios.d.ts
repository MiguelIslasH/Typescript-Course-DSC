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
declare const personas: Persona[];
