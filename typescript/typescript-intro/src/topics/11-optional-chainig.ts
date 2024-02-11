export interface Passenger {
    name: string;
    children?: string[];
}
const passenger1: Passenger={name: 'Juan'};
const passenger2: Passenger={name: 'Pedro', children: ['Ana', 'Gabriel']};


function printChildren(passenger: Passenger): void {
    const howMany = passenger.children?.length || 0;
    console.log(howMany);
}

printChildren(passenger1);
printChildren(passenger2);