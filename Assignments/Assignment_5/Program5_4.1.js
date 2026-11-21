///////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////

import { CheckMultipleDivisibility } from './Program5_4.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rObj.question("Enter number: ", function(input)
{
    let iValue = parseInt(input);

    CheckMultipleDivisibility(iValue);

    rObj.close();
});