const addNumbers = (a: number, b: number): number => {return a + b;};
const greet = (name: string): string => {return `Hello ${name}`;};
const saveTheWorld = (): void => {console.log('The world is saved!');};

//let myFunction;
//let myFunction:Function;
//let myFunction: (a: number, b: number) => number;
let myFunction: (a: string) => string;
//let myFunction: () => void;

/*
myFunction = 10;
console.log({myFunction});

myFunction = addNumbers;
console.log({myFunction});
console.log(myFunction(1,2));
*/
myFunction = greet;
console.log({myFunction});
console.log(myFunction('Tony'));
/*
myFunction = saveTheWorld;
console.log({myFunction});
console.log(myFunction());
*/
export{}

