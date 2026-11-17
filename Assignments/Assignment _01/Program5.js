
/////////////////////////////////////////////////////////
//
//  Function Name   : Accept
//  Input           : Integer
//  Output          : None
//  Description     : Displays "*" iNo times
//  Date            : 17/11/2026
//  Author          : Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////

function Accept(iNo)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(" * ");
    }
}

/////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////

function main()
{
    let iValue = 0;

    iValue = 5;

    Accept(iValue);
}

main();
