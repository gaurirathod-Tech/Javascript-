
/////////////////////////////////////////////////////////
//
//  Function Name   : Divide
//  Input           : Integer, Integer
//  Output          : Integer
//  Description     : Performs Division
//  Date            : 17/11/2026
//  Author          : Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////

function Divide(iNo1, iNo2)
{
    let iAns = 0;

    if(iNo2 == 0)
    {
        return -1;
    }

    iAns = Math.trunc(iNo1 / iNo2);

    return iAns;
}

/////////////////////////////////////////////////////////
//
//  Entry point of the Application
//
/////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 15;
    let iValue2 = 5;
    let iRet = 0;

    iRet = Divide(iValue1, iValue2);

    console.log("Division is " + iRet);
}

main();
