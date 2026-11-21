///////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckLeapYear
//  Input           :   Integer(Year)
//  Output          :   None
//  Description     :   Checks whether the given year is a leap year
//                      or not and displays the result.
//  Date            :   21/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////////////

function CheckLeapYear(iYear)
{
    if((iYear % 4 == 0 && iYear % 100 != 0) || (iYear % 400 == 0))
    {
        console.log("It is a Leap Year");
    }
    else
    {
        console.log("It is not a Leap Year");
    }
}

export { CheckLeapYear };