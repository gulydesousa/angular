
type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
    getAge: () => number;
    getPowers: () => string[];
}


let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    getPowers() {
        return this.powers;
    }
};

let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super fuerza"],
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    getPowers() {
        return this.powers;
    }
};

console.log({flash});
console.log({superman});
console.log(typeof flash);
export{}