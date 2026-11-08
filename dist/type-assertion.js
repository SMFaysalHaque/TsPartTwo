// * Type assertion
const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your current application status is " + status);
};
showStatus(someStatus); //? Type assertion using "as" syntax
const config = {
    port: 5000,
};
const currentPort = config.port; //? Non-null assertion using "!" syntax
const currentPort2 = config.port; //? Type assertion using "as" syntax
export {};
