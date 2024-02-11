function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number, base: number = 2): number {
    return a * base;
}

const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = 
    (character: Character, healX: number): void => {
    character.hp += healX;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('Health Points:', this.hp);
    }
}

healCharacter(strider, 20);
strider.showHp();

/*
const sumResult = add(4, 6);
const multResult = multiply(4, 10);
const arrowSum = addNumbersArrow(14, 16);

console.log({sum: sumResult}, {arrowSum}, {mult: multResult});
*/



export{}