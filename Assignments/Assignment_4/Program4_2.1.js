/////////////////////////////////////////////////////////
//
// Entry point of the application
//
/////////////////////////////////////////////////////////

import { CheckEvenOdd } from './Program4_2.2.js';

import readline from 'readline';

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Enter the number : ", function(input) {

    let iValue = parseInt(input);

    CheckEvenOdd(iValue);

    r.close();
});