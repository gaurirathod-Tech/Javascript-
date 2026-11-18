//////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   Display
//  Input           :   Two Integers
//  Output          :   None
//  Description     :   Displays the first number iFrequency times
//  Date            :   18/11/2026
//  Author          :   Gauri Prakash Rathod
//
//////////////////////////////////////////////////////////////////////////

function Display(iNo, iFrequency)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= iFrequency; iCnt++)
    {
        console.log(iNo);
    }
}

//////////////////////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
//////////////////////////////////////////////////////////////////////////

const prompt = require("prompt-sync")();

let iValue = 0;
let iCount = 0;

console.log("Enter number :");
iValue = parseInt(prompt());

console.log("Enter frequency :");
iCount = parseInt(prompt());

Display(iValue, iCount);