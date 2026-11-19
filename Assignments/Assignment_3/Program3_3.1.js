////////////////////////////////////////////////////////
//
// Entry point of the application
//
////////////////////////////////////////////////////////

import { DisplayEvenFactor } from "./Program3_3.2.js";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main()
{
    let iValue = 0;

    rl.question("Enter number: ", function(input)
    {
        iValue = parseInt(input);

        DisplayEvenFactor(iValue);

        rl.close();
    });

    return 0;
}

main();