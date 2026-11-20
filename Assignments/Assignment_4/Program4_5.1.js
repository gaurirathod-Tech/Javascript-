/////////////////////////////////////////////////////////
//
// Entry point of the application
//
/////////////////////////////////////////////////////////

import { CheckDivisibility } from './Program4_5.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let iValue = 0;

rObj.question("Enter a number: ", function(input)
{
    iValue = parseInt(input);

    CheckDivisibility(iValue);

    rObj.close();
});