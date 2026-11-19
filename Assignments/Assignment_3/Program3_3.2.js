
///////////////////////////////////////////////////////////////////////
//
//  Function Name   :   DisplayEvenFactor
//  Input           :   Integer
//  Output          :   None
//  Description     :   Displays all even factors of the given
//                      number. If no even factors are found,
//                      displays an appropriate message.
//  Date            :   19/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////////

export function DisplayEvenFactor(iNo)
{
    let iCnt = 0;
    let iFlag = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if(((iNo % iCnt) == 0) && ((iCnt % 2) == 0))
        {
            process.stdout.write(iCnt + "\t");
            iFlag = 1;
        }
    }

    if(iFlag == 0)
    {
        process.stdout.write("Even factors not found");
    }

    console.log();
}