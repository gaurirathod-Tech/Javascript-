///////////////////////////////////////////////////////////////
//
// Entry point of the application
//
///////////////////////////////////////////////////////////////

import { DisplayGrade } from './Program5_3.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rObj.question("Enter marks: ", function(input)
{
    let fMarks = parseFloat(input);

    DisplayGrade(fMarks);

    rObj.close();
});