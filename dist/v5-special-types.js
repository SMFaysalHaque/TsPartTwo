// * Top type
let helloWorld = "Hello, World!"; //? "any" type can hold any value
helloWorld = 42; //? "any" type can be reassigned to a number
helloWorld.length; //? No error, but can lead to runtime errors if the value is not a string
const someThing = "Hello, World!"; //? "unknown" type can hold any value but requires type checking before use
// someThing.length; //? Error: Object is of type 'unknown'. You need to check the type before accessing properties
// * Core type
let someThing2; //? "unknown" type can hold any value but requires type checking before use
const num = 42; //? "number" type can hold numeric values
someThing2 = num; //? Assigning a number to an unknown type is allowed
const currentUser = null; //? "null" type represents the absence of a value
// * Unit type
const greet = () => {
    console.log("Hello world");
};
greet(); //? "void" type represents the absence of a return value
// * Sub-type of unit type
const anotherGreet = () => {
    console.log("Hello world");
    return undefined; //? "undefined" type represents the absence of a value, similar to "void", but can be explicitly returned
};
const greetings = anotherGreet();
console.log(greetings);
// * Bottom type
// let neverHappening: never = 32; //? "never" type represents a value that never occurs, so assigning a number will result in an error
const getError = (msg) => {
    throw new Error(msg); //? "never" type represents a value that never occurs, so throwing an error is a valid use case
};
const x = getError("This is an error"); //? "never" type represents a value that never occurs, so assigning the result of a function that throws an error to a variable will result in an error
export {};
//? We can assign any other type to `never`.
