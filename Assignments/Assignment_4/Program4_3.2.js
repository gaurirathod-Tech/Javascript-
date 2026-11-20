////////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   FindGreater
//  Input           :   Two Integers
//  Output          :   None
//  Description     :   Compares two numbers and displays the greater
                        number.If both numbers are equal, displays
                        a message indicating that both numbers are equal.
//  Date            :   20/11/2026
//  Author          :   Gauri Prakash Rathod
//
////////////////////////////////////////////////////////////////////////////

function FindGreater(iNo1, iNo2)
{
    if(iNo1 > iNo2)
    {
        console.log(iNo1 + " is greater");
    }
    else if(iNo2 > iNo1)
    {
        console.log(iNo2 + " is greater");
    }
    else
    {
        console.log("Both numbers are equal");
    }
}

export { FindGreater };