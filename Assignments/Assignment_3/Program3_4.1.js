/////////////////////////////////////////////////
//
// Entry point of the application
//
/////////////////////////////////////////////////

import { DisplayConvert } from "./Program3_4.2.js";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main()
{
    let cValue = '\0';

    rl.question("Enter character: \n", function(input)
    {
        cValue = input.charCodeAt(0);

        DisplayConvert(cValue);

        rl.close();
    });

    return 0;
}

main();