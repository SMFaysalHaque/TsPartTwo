// * Top type

let helloWorld: any = "Hello, World!"; //? "any" type can hold any value
helloWorld = 42; //? "any" type can be reassigned to a number
helloWorld.length; //? No error, but can lead to runtime errors if the value is not a string

const someThing: unknown = "Hello, World!"; //? "unknown" type can hold any value but requires type checking before use
// someThing.length; //? Error: Object is of type 'unknown'. You need to check the type before accessing properties

// * Core type

let someThing2: unknown; //? "unknown" type can hold any value but requires type checking before use
const num: number = 42; //? "number" type can hold numeric values

someThing2 = num; //? Assigning a number to an unknown type is allowed

// * Nullish type

interface User {
    name: string;
    age: number;
}

type loggedInUser =User | null; //? "null" type represents the absence of a value

const currentUser: loggedInUser = null; //? "null" type represents the absence of a value

// * Unit type

const greet = () => {
    console.log("Hello world")
}
greet(); //? "void" type represents the absence of a return value

// * Sub-type of unit type

const anotherGreet = (): undefined => {
    console.log("Hello world")
    return undefined; //? "undefined" type represents the absence of a value, similar to "void", but can be explicitly returned
}

const greetings: void = anotherGreet();
console.log(greetings)

// * Bottom type

// let neverHappening: never = 32; //? "never" type represents a value that never occurs, so assigning a number will result in an error

const getError = (msg: string): never => {
    throw new Error(msg); //? "never" type represents a value that never occurs, so throwing an error is a valid use case
}

const x: string = getError("This is an error"); //? "never" type represents a value that never occurs, so assigning the result of a function that throws an error to a variable will result in an error
//? We can assign any other type to `never`.