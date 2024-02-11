// Funciones Básicas
function sumar( a:number, b:number ):number{
    return a + b;
  }
  
  const contar = ( heroes:string[] ):number => {
    return heroes.length;
  }

  const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  

  //Parametros por defecto
  const llamarBatman:Function = ( llamar:boolean=false ):void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes:Function = ( ...personas:string[] ) => {
    return personas.join(", ");
  }
  
  
  // Tipo funcion
  const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] ):void=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco:( n:number, t:string, b:boolean, a:string[] ) => void;
  noHaceNadaTampoco = noHaceNada
  

console.log(sumar(1,2));
console.log(unirheroes("Batman", "Superman", "Flash"));
console.log(noHaceNada(1, "Hola", true, ["Mundo", "Mundo2"]));
console.log(noHaceNadaTampoco(1, "Hola", true, ["Mundo", "Mundo2"]));



export{}