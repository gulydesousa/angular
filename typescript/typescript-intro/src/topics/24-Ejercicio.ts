import { getPokemon, Pokemon } from "./23-pokemon";

getPokemon(100)
.then(pokemon => console.log(pokemon.sprites.front_default))
.catch(err => console.warn(err))
.finally(() => console.log('Finalizó la petición a getPokemon'));

//*********** DECORADOR ***************** */

(Pokemon.prototype as any).customName = "Pikachu";

const pikachu = new Pokemon("Pikachu", "Electricidad");

pikachu.publicApi="";
console.log({pikachu});

export{}

