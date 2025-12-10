
//var num-> 45
//re-assignment
//re-declaration

//let empname -> "testing"
//re-assignment
//re-declaration

//const final=34
//re-assignment
//re-declaration

//var redeclaration - Allowed
var num = 45;
var num = 50;
console.log(num);

//var reassignment - Allowed

var num = 45;
num = 60;
console.log(num);

//let redeclaration - NOT Allowed
// Shows compiler error as below
// Cannot redeclare block-scoped variable 'empname'

let empname = "testing";
//let empname = "jobs";
console.log(empname);

//let reassignment - Allowed

let empname1 = "testing";
empname1 = "Jobs";
console.log(empname1);

//const final=34
//re-assignment
//re-declaration

//const redeclaration - NOT Allowed
// Shows compiler error as below
// Cannot redeclare block-scoped variable 'final'
const final=34;
//const final = 40;
console.log(final);

//const reassignment - Allowed
//We will get Runtime error as below
//TypeError: Assignment to constant variable.

const final1=34;
final1 = 40;
console.log(final1);




