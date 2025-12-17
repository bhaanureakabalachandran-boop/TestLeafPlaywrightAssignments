
//Normal or Regular Function
function userProfile(name){
    console.log(name);
}

userProfile("Bhaanu Reaka");


//Arrow Function
//Arrow Function Syntax - let functionname = (parameters) => { Script inside method}
//Double the input value and print using Arrow function
let double = (inputnumber) => { console.log(inputnumber*2)}
double(8)

//Anonymous Function
//Anonymous Function will be used inside the Callback function
//Console.log message will be displayed after 2 seconds
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},2000)


//Callback Function

function getUserData(callback){

    setTimeout(function(){
    console.log("inside getUserData")
    //Call the Callback function and print the Values
    callback("Bhaanu Reaka","20");
    },3000)
}


function printUserData(username,age){
   console.log("inside printUserData")
   console.log("Username: "+username+" Age: "+age)
}


getUserData(printUserData)