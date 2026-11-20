///////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////

import { FindGreater } from './Program4_3.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let iValue1 = 0;
let iValue2 = 0;

rObj.question("Enter two numbers : ", function(input)
{
    let arr = input.split(" ");

    iValue1 = parseInt(arr[0]);
    iValue2 = parseInt(arr[1]);

    FindGreater(iValue1, iValue2);

    rObj.close();
});