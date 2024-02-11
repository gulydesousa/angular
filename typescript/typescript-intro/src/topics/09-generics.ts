export function whatsMyArgument<T>(arg:T):T {
    return arg;
}


const amIString = whatsMyArgument<string>("Hola Mundo");
const amINumber = whatsMyArgument<number>(1);
const amIObject = whatsMyArgument<object>({});
const amIArray = whatsMyArgument<number[]>([1, 2, 3]);
const amIFunction = whatsMyArgument<Function>(() => {return "Soy una función"});

console.log(amIString.split(" "));
console.log(amINumber.toFixed(2));
console.log(amIObject);
console.log(amIArray.reverse());
console.log(amIFunction());

console.log(whatsMyArgument(1).toFixed());


//const whoAmIString = whatsMyArgument<string>(5);