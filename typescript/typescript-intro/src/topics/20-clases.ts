interface Xmen {
  name: string;
  realName: string;
  MutantPower(id: number): string;
}

interface Human {
  age: number;
}

class Mutant implements Xmen, Human {
  constructor(
    public name: string,
    public realName: string,

    public age: number
  ) {}

  MutantPower(id: number) {
    return `${this.name} is mutant with id: ${id}`;
  }
}

const wolverine = new Mutant("Wolverine", "Logan", 60);





interface addTwoNumbers {
    (a: number, b: number): number;
}

let fn:addTwoNumbers = (a: number, b: number) => a + b;


console.log(wolverine.MutantPower(1));
console.log(fn(1, 2));

export {};
