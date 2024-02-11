type automovil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

// Objetos
const batimovil: automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

console.log({batimovil}, {bumblebee});


type Villano = {
  nombre: string;
  edad?: number;
  mutante: boolean;
};

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

console.log({villanos});

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type persona={
    poder: string,
    estatura:number
}

type grupo = {
    lider: boolean,
    miembros: string[]
}

const charles:persona = {
  poder: "psiquico",
  estatura: 1.78,
};

const apocalipsis:grupo = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: persona | grupo;

mystique = charles;
console.log({mystique});

mystique = apocalipsis;
console.log({mystique});
export {};
