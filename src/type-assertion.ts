// * Type assertion

// * "as" syntax

type Status = "pending" | "approved" | "rejected";
const someStatus: string = "pending";

const showStatus = (status: Status) => {
    console.log("Your current application status is " + status)
}

showStatus(someStatus as Status); //? Type assertion using "as" syntax

// * non-null assertion

interface Config {
    port?: number;
}

const config: Config = {
    port: 5000,
}

const currentPort: number = config.port!; //? Non-null assertion using "!" syntax
const currentPort2: number = config.port as number; //? Type assertion using "as" syntax

// * constant assertion

const configuration = {
    port: 5000,
    prefix: "/api/v1",
} as const; //? Constant assertion using "as const" syntax