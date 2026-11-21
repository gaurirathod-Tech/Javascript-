///////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   DisplayGrade
//  Input           :   Float (Marks)
//  Output          :   None
//  Description     :   Validates the given marks and displays the
//                      corresponding grade based on the marks obtained.
//                      Displays "Invalid Marks" if the marks are less
//                      than 0 or greater than 100.
//  Date            :   21/11/2026
//  Author          :   Gauri Prakash Rathod
//
///////////////////////////////////////////////////////////////////////////

function DisplayGrade(fMarks)
{
    if(fMarks >= 75)
    {
        console.log("Grade: Distinction");
    }
    else if(fMarks >= 60)
    {
        console.log("Grade: First Class");
    }
    else if(fMarks >= 50)
    {
        console.log("Grade: Second Class");
    }
    else if(fMarks >= 35)
    {
        console.log("Grade: Pass Class");
    }
    else
    {
        console.log("Grade: Fail");
    }
}

export { DisplayGrade };