/////////////////////////////////////////////////////////
//
//  Function Name   :   Display
//  Input           :   Integer
//  Output          :   None
//  Description     :   Displays "*" iNo times
//  Date            :   18/11/2026
//  Author          :   Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 0;

    while(iCnt < iNo)
    {
        console.log("*");
        iCnt++;
    }
}

/////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////

let iValue = 0;

const prompt = require("prompt-sync")();

console.log("Enter number :");
iValue = parseInt(prompt());

Display(iValue);
