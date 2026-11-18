/////////////////////////////////////////////////////////
//
//  Function Name   :   ChkEven
//  Input           :   Integer
//  Output          :   Boolean
//  Description     :   Checks whether the given number
//                      is Even or Odd
//  Date            :   18/11/2026
//  Author          :   Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////

function ChkEven(iNo)
{
    if((iNo % 2) == 0)           // Business Logic
    {
        console.log(iNo + " is Even.");
        return true;
    }
    else
    {
        console.log(iNo + " is Odd.");
        return false;
    }
}

/////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////

const prompt = require("prompt-sync")();

let iValue = 0;
let bRet = false;

console.log("Enter number :");
iValue = parseInt(prompt());

bRet = ChkEven(iValue);