// * typeof
let x = 123;
console.log(typeof x);
// * Type Guard
const print = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    else {
        return value; // * If we break it down further, we eventually arrive at the `never` type for the final value.
    }
};
const loggedInUser = {
    name: "John Doe",
    address: {
        street: "123 Main St"
    },
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User is not found!!!");
};
export {};
