
interface Character {
    name: string;
    hp: number;
    skills: string[];
    city?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
};

strider.city = 'Gotham';

console.table(strider);
export{}