///////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////

import { FindGreatest } from './Program5_1.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rObj.question("Enter three numbers: \n", function(input)
{
    let arr = input.split(" ");

    let iValue1 = parseInt(arr[0]);
    let iValue2 = parseInt(arr[1]);
    let iValue3 = parseInt(arr[2]);

    FindGreatest(iValue1, iValue2, iValue3);

    rObj.close();
});
