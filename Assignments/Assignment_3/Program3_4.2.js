////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   DisplayConvert
//  Input           :   Integer
//  Output          :   None
//  Description     :   Converts an uppercase alphabet into lowercase
//                      and a lowercase alphabet into uppercase.
//  Date            :   19/11/2026
//  Author          :   Gauri Prakash Rathod
//
////////////////////////////////////////////////////////////////////////

export function DisplayConvert(cValue)
{
    if((cValue >= 65) && (cValue <= 90))
    {
        console.log(String.fromCharCode(cValue + 32));
    }
    else if((cValue >= 97) && (cValue <= 122))
    {
        console.log(String.fromCharCode(cValue - 32));
    }
}