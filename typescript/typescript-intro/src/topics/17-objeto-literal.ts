let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
   
};

flash.getName = function () {
    return this.name;
};

console.log(flash.getName());
export { };
