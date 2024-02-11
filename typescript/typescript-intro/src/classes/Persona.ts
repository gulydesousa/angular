export class Person {
  private name: string;
  private surname: string;
  private age: number;
  private address: string;

  constructor(name: string, surname: string, age: number, address: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.address = address;
  }

  public getFullName(): string {
    return this.name + " " + this.surname;
  }

  public getAge(): number {
    return this.age;
  }

  private setAge(age: number): void {
    this.age = age;
  }

  private getAddres(): string {
    return this.address;
  }
}

export class Employee extends Person {
  private salary: number;

  constructor(
    name: string,
    surname: string,
    age: number,
    address: string,
    salary: number
  ) {
    super(name, surname, age, address);
    this.salary = salary;
  }

  private getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }
}

export const iva = 16;
export const rtf = 10;

export default Person;
