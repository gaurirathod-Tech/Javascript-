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
    while(iNo > 0)
    {
        console.log("*");
        iNo--;
    }
}

/////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////

const prompt = require("prompt-sync")();

let iValue = 0;

console.log("Enter number :");
iValue = parseInt(prompt());

Display(iValue);