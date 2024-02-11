import { IPokemon } from "../interfaces/pokemon-interface";

import axios from "axios";

export const getPokemon = async (pokemonId: number): Promise<IPokemon> => {
  const resp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return <IPokemon>resp.data;
};

//*********** DECORADOR ***************** */
function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  //Object.seal(constructor);
  //Object.seal(constructor.prototype);
};

const checkPokemonID = (min: number, max: number): Function => {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < min || id > max) {
        throw new Error(`El id ${id} no es válido`);
      } else {
        return originalMethod(id);
      }
    };
  };
};


function readonly( isWritable: boolean = true ):Function {
  return function(target: any, propertyKey: string ){
      
      const descriptor: PropertyDescriptor = {
          get() {
              console.log( this )
              return 'Fernando'
          },
          set( this, val ){
              // console.log(this, val )
              Object.defineProperty( this, propertyKey, {
                  value: val,
                  writable: !isWritable,
                  enumerable: false
              })
          }
      }
      
      return descriptor;
  }
}


//Pueden haber tantos decoradores como se quiera
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  @readonly(false)
  public publicApi: string = "https://pokeapi.co/api/v2/pokemon/";
  constructor(public name: string, public power: string) {}

  @checkPokemonID(1, 100)
  public savePokemon(id: number) {
    console.log(`Guardando pokemon con id ${id}`);
  }
}
