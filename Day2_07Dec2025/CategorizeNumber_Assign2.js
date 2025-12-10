
//Check and Return the Number is Positive/Negative/Zero 

function categorizeNumber(inputnum) {   
    if (inputnum === 0) {
        return "It is a Zero";
    } else if(inputnum >= 0){
        return "It is a Positive Number";
    }else if(inputnum <=0){
        return "It is a Negative Number";
    }
}


let input = 20;

console.log(categorizeNumber(input));