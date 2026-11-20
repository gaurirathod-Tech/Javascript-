//////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckDivisibility
//  Input           :   Integer 
//  Output          :   None
//  Description     :   Checks whether the given number is divisible
//                      by 5 and displays the result.
//  Date            :   20/11/2026
//  Author          :   Gauri Prakash Rathod
//
//////////////////////////////////////////////////////////////////////

function CheckDivisibility(iNo)
{
    if(iNo % 5 == 0)
    {
        console.log(iNo + " is divisible by 5");
    }
    else
    {
        console.log(iNo + " is not divisible by 5");
    }
}

export { CheckDivisibility };