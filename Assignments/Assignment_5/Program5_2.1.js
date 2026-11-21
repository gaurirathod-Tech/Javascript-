///////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////

import { CheckLeapYear } from './Program5_2.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rObj.question("Enter year: ", function(input)
{
    let iYear = parseInt(input);

    CheckLeapYear(iYear);

    rObj.close();
});