////////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckVotingEligibility
//  Input           :   Integer (Age)
//  Output          :   None
//  Description     :   Checks the given age and displays whether the
                        person is eligible for voting, not eligible
                        for voting, or has entered an invalid age.
//  Date            :   20/11/2026
//  Author          :   Gauri Prakash Rathod
//
////////////////////////////////////////////////////////////////////////////

function CheckVotingEligibility(iAge)
{
    if(iAge >= 18)
    {
        console.log("You are eligible for voting");
    }
    else
    {
        console.log("You are not eligible for voting");
    }
}

export { CheckVotingEligibility };