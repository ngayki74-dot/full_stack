//
function checkGrade(marks) {               
    switch(true) {                        
        case (marks >= 90):
            console.log("Grade A");
            break;
        case (marks >= 75):
            console.log("Grade B");
            break;
        case (marks >= 50):
            console.log("Grade C");
            break;
        default:
            console.log("Fail");
    }
}

checkGrade(82);
