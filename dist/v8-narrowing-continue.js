// * some caveat of Type Guard
// const printAll = (x: string | string[] | null) => {
//     if(x &&typeof x === "object") {
//         for(let str of x) {
//             console.log(str) 
//         }
//     } else if (typeof x === "string") {
//         console.log(x)
//     } else {
//         console.log("")
//     }
// };
// printAll(null)
//  * Equality Narrowing
const example = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
                return;
            }
        }
        console.log(x);
        return;
    }
    console.log(" ");
};
printAll("Faysal");
const move = (animal) => {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
};
// * instanceof Narrowing
// const date = new Date();
// const err = new Error("An error occurred");
// console.log(date instanceof Error)
// console.log(err instanceof Date)
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("1999-12-31");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
