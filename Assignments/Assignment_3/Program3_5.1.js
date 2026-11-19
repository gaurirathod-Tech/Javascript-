import { ChkVowel } from "./Program3_5.2.js";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main()
{
    let cValue = '\0';
    let bRet = false;

    rl.question("Enter character: \n", function(input)
    {
        cValue = input.charAt(0);

        bRet = ChkVowel(cValue);

        if(bRet == true)
        {
            console.log("It is Vowel.");
        }
        else
        {
            console.log("It is not Vowel.");
        }

        rl.close();
    });

    return 0;
}

main();