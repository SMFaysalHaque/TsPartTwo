//* types alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, primitives, unions, tuples, and any other types

// TODO: type alias
type ID = number;

//! interface id = number

type Role = "admin" | "member";

// ! interface admin | "member"

interface User {
    name: string;
    id: ID;
    role: Role;
}

// TODO: interface

interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Feline",
    breed: "Persian"
};

type Vehicle = {
    brand: string;
}

type Car = Vehicle & { //? "&" symbol is used to perform intersection
    model: string;
}

const car: Car = {
    brand: "Toyota",
    model: "Camry"
};

interface IEmployee {
    name: string;
}

interface IEmployee {
    role: string;
}

const employee: IEmployee = {
    name: "John Doe",
    role: "Developer"
};

//! If there are two "interfaces" with the same name, they get merged; however, if there are two "types" with the same name, it will result in a duplicate error.