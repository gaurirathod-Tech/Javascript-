/////////////////////////////////////////////////////////
//
// Entry point of the application
//
/////////////////////////////////////////////////////////

import { DisplayFactor } from "./Program3_2.2.js";

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

        DisplayFactor(iValue);

        rl.close();
    });

    return 0;
}

main();