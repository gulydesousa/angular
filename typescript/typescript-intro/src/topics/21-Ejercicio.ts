
// Crear interfaces
interface Auto{
    encender:boolean;
    velocidadMaxima:number;
    acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  


  const batimovil:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelear: ()=>{console.log("...... gogogo!!!");}
  }

conducirBatimovil(batimovil);



  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales
  interface Guason{
        reir?:boolean;
        comer?:boolean;
        llorar?:boolean;
    }

  const guason:Guason = {
    reir: true,
    comer:true,
    llorar:false
  }
  

  const reir = ( guason:Guason ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  reir(guason);
  
  // Cree una interfaz para la siguiente funcion
  interface Gotham{
    (citizen: string[]):number;
  }

  const ciudadGotica:Gotham = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  console.log(ciudadGotica(["Ricardo Tapia", "juan perez", "bruce wayne"]));

  

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */

  interface IPersona {
    nombre:    string;
    edad:      number;
    sexo:      string;
    estadoCivil:string,
    imprimirBio():void
  }       

  class Persona implements IPersona {

    constructor(
        public nombre: string,
        public edad: number,
        public sexo: string,
        public estadoCivil: string
    ) {}

    imprimirBio() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
    }

  }

  const yo: Persona = new Persona("Juan", 30, "M", "Casado");
  yo.imprimirBio();


export {};