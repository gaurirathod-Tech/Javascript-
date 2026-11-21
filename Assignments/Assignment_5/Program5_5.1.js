///////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////

import { CheckCharacterType } from './Program5_5.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rObj.question("Enter a character: ", function(input)
{
    let cValue = input.charAt(0);

    CheckCharacterType(cValue);

    rObj.close();
});