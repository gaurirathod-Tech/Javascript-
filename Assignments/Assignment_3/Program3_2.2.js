///////////////////////////////////////////////////////////////////
//
//  Function Name   :   DisplayFactor
//  Input           :   Integer
//  Output          :   None
//  Description     :   Displays all factors of the given
//                      number
//  Date            :   19/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////

export function DisplayFactor(iNo)
{
    let iCnt = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            process.stdout.write(iCnt + "\t");
        }
    }

    console.log();
}
