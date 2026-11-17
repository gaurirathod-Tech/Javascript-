
/////////////////////////////////////////////////////////////////////////////////
//
//  Function Name   : Check
//  Input           : Integer
//  Output          : Boolean (TRUE or FALSE)
//  Description     : Checks whether the given number is divisible by 5.
//                    Returns TRUE if divisible by 5, otherwise returns FALSE.
//  Date            : 17/11/2026
//  Author          : Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////////////////////////////

function Check(iNo)
{
    if((iNo % 5) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/////////////////////////////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 0;
    let bRet = false;

    iValue = parseInt(prompt("Enter number : "));

    bRet = Check(iValue);

    if(bRet == true)
    {
        console.log("Divisible by 5");
    }
    else
    {
        console.log("Not Divisible by 5");
    }
}

main();
