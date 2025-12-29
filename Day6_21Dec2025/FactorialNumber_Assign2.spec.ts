
function factorial(inputnumber: number): number {

    if (inputnumber < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
let fact:number;
fact = 1;

for(let i=1;i<=inputnumber;i++){

    fact = fact*i;
}

return fact;
}


let inputnumber:number = 5;

const output = factorial(inputnumber);

console.log("Factorial of a given Number is: "+output);