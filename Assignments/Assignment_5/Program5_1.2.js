//////////////////////////////////////////////////////////////////////
//
//  Function Name   :   FindGreatest
//  Input           :   Three Integers 
//  Output          :   None
//  Description     :   Compares three numbers and displays the greatest
                        number among them.
//  Date            :   21/11/2026
//  Author          :   Gauri Prakash Rathod
//
//////////////////////////////////////////////////////////////////////

function FindGreatest(iNo1, iNo2, iNo3)
{
    if(iNo1 > iNo2 && iNo1 > iNo3)
    {
        console.log("Greatest number is: " + iNo1);
    }
    else if(iNo2 > iNo1 && iNo2 > iNo3)
    {
        console.log("Greatest number is: " + iNo2);
    }
    else
    {
        console.log("Greatest number is: " + iNo3);
    }
}

export { FindGreatest };