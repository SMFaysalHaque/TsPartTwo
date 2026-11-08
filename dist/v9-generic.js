const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(123);
console.log(stringArr);
console.log(numberArr);
stringArr.map((item) => item.toUpperCase());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "Faysal",
        role: "Manager",
    },
};
export {};
