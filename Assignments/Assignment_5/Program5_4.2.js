///////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckMultipleDivisibility
//  Input           :   Integer
//  Output          :   None
//  Description     :   Checks whether the given number is divisible
//                      by 3, by 5, by both 3 and 5, or by neither,
//                      and displays the appropriate message.
//  Date            :   21/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////////////

function CheckMultipleDivisibility(iValue)
{
    if(iValue % 3 == 0 && iValue % 5 == 0)
    {
        console.log("Divisible by both 3 and 5");
    }
    else if(iValue % 3 == 0)
    {
        console.log("Divisible by 3");
    }
    else if(iValue % 5 == 0)
    {
        console.log("Divisible by 5");
    }
    else
    {
        console.log("Not divisible by 3 or 5");
    }
}

export { CheckMultipleDivisibility };