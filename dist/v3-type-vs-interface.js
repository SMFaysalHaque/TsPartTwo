//* types alias vs interface
const cat = {
    species: "Feline",
    breed: "Persian"
};
const car = {
    brand: "Toyota",
    model: "Camry"
};
const employee = {
    name: "John Doe",
    role: "Developer"
};
export {};
//! If there are two "interfaces" with the same name, they get merged; however, if there are two "types" with the same name, it will result in a duplicate error.
