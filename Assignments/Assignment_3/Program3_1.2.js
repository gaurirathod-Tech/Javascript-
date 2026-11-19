/////////////////////////////////////////////////////////
//
//  Function Name   :   PrintEven
//  Input           :   Integers
//  Output          :   None
//  Description     :   Prints even numbers up to the
//                      given positive number
//  Date            :   19/11/2026
//  Author          :   Gauri Prakash Rathod
//
/////////////////////////////////////////////////////////

export function PrintEven(iNo)
{
    let iCnt = 0;

    if(iNo <= 0)
    {
        return;
    }
    else
    {
        for(iCnt = 1; iCnt <= iNo; iCnt++)
        {
            console.log(iCnt * 2);
        }
    }

    console.log("\n");
}