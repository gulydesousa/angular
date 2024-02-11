export class Persona {
  public nombre: string;
  public apellido: string;
  private edad: number;

  constructor(nombre: string, apellido: string, edad: number = -1) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }
}

export class Person {
  constructor(
    public nombre: string,
    public apellido: string,
    private edad: number
  ) {}

  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }
}

export class Hero extends Person {
  constructor(
    public nombre: string,
    public apellido: string,
    edad: number,
    public alterEgo: string
  ) {
    super(nombre, apellido, edad);
  }
}

const ironman = new Hero("Tony", "Stark", 45, "Ironman");
console.log(ironman);

export class Heroe {
  constructor(public alterEgo: string, public persona: Person) {}
}

const identidad = new Person("Tony", "Stark", 45);
const ironMan = new Heroe("Ironman", identidad);
console.log(ironMan);



const persona = new Persona("Juan", "Perez", 25);
console.log(new Persona("Pedrito", "de los Palotes"));

console.log(persona);

const person = new Person("Jhon", "Doe", 25);

console.log(person);
