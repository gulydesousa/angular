function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

//@classDecorator
export class SuperClass {
  public myProperty: string = "myProperty";

  print() {
    console.log("SuperClass.print() called");
  }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);






