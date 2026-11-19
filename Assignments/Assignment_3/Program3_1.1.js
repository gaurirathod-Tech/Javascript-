///////////////////////////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////////////////////////

import { PrintEven } from "./Program3_1.2.js";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main()
{
    rl.question("Enter number: ", function(input)
    {
        let iValue = parseInt(input);

        PrintEven(iValue);

        rl.close();
    });
}

main();
