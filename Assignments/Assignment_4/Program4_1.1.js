//////////////////////////////////////////////////////
//
// Entry point of the application
//
//////////////////////////////////////////////////////

import { CheckNumber } from './Program4_1.2.js';

import readline from 'readline';

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Enter number: ", function(input) {

    let iValue = parseInt(input);

    CheckNumber(iValue);

    r.close();
});
