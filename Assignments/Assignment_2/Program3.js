//////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   Display
//  Input           :   Integer
//  Output          :   None
//  Description     :   Displays "Hello" if iNo is less than 10,
//                      otherwise displays "Demo"
//  Date            :   18/11/2026
//  Author          :   Gauri Prakash Rathod
//
//////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    if(iNo < 10)
    {
        console.log("Hello");
    }
    else
    {
        console.log("Demo");
    }
}

//////////////////////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
//////////////////////////////////////////////////////////////////////////

const prompt = require("prompt-sync")();

let iValue = 0;

console.log("Enter number :");
iValue = parseInt(prompt());

Display(iValue);