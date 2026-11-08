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

const example = (x: string | number, y: string | boolean) => {

    if (x === y) {
        console.log(x, y)
    }
}

const printAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
            console.log(str)

            return
        }
    }
        console.log(x)  

        return
    }
    console.log(" ")
}

printAll("Faysal")

// * in operator Narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move = (animal: Fish | Bird) => {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
};

// * instanceof Narrowing

// const date = new Date();
// const err = new Error("An error occurred");

// console.log(date instanceof Error)
// console.log(err instanceof Date)

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString())
        return
    }

    const date = new Date(x);
    console.log(date.toISOString());
}

showDate("1999-12-31")

// * Discriminated Union Narrowing

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    } else {
        console.log(shape.sideLength)
    }
}