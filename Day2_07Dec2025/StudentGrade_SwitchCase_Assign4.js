//Check and Print the Student Grade based on marks using Switch-Case

function runTests(score){

switch(score){
    case 60:
        console.log("Grade D");
        break;
    case 70:
        console.log("Grade C");
        break;
    case 80:
        console.log("Grade B");
        break;
    case 90:
        console.log("Grade A");
        break;
    default:
        console.log("Grade F");
        break;
}
}

let studentScore = 90;
runTests(studentScore);