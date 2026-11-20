
/////////////////////////////////////////////////////////////////
//
// Entry point of the application
//
/////////////////////////////////////////////////////////////////

import { CheckVotingEligibility } from './Program4_4.2.js';

import readline from 'readline';

const rObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let iAge = 0;

rObj.question("Enter your age : ", function(input)
{
    iAge = parseInt(input);

    CheckVotingEligibility(iAge);

    rObj.close();
});