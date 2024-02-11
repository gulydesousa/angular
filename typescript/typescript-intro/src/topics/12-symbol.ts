// Crear un símbolo
const miSimbolo = Symbol('Descripcion de mi simbolo');
const otroSimbolo = Symbol('Descripcion de mi simbolo');

// Usar el símbolo como clave de propiedad en un objeto
const miObjeto = {
  [miSimbolo]: 'Valor del simbolo'
};

// Usar el símbolo como clave de propiedad en un objeto
const miOtroObjeto = {
    [otroSimbolo]: 'Valor del simbolo'
  };
  
console.log(miObjeto[miSimbolo]);
console.log(miOtroObjeto[otroSimbolo]);

// Comparar símbolos
console.log(miSimbolo === otroSimbolo);
console.log(miSimbolo.description === otroSimbolo.description);
console.log({miSimbolo});
