///////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckNumber
//  Input           :   Integers
//  Output          :   None
//  Description     :   Checks whether the given number is
//                      Zero, Positive, or Negative
//  Date            :   20/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////

export function CheckNumber(iValue)
{
    if(iValue == 0)
    {
        console.log("Zero");
    }
    else if(iValue < 0)
    {
        console.log("Negative number.");
    }
    else
    {
        console.log("Positive number.");
    }
}