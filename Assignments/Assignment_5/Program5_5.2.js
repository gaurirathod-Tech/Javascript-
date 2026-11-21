///////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckCharacterType
//  Input           :   Character
//  Output          :   None
//  Description     :   Checks the given character and displays whether
//                      it is an uppercase alphabet, lowercase alphabet,
//                      digit, or special character.
//  Date            :   21/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////////////


export function CheckCharacterType(cValue)
{
    if(cValue >= 'A' && cValue <= 'Z')
    {
        console.log("It is an Uppercase character");
    }
    else if(cValue >= 'a' && cValue <= 'z')
    {
        console.log("It is a Lowercase character");
    }
    else if(cValue >= '0' && cValue <= '9')
    {
        console.log("It is a Digit");
    }
    else
    {
        console.log("It is a Special character");
    }
}