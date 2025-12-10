
var names = 'javascript';
var char = 'a';

var count=0;

//Array Length Method - array.length
var arr = [1,2,3,4,5];
console.log(arr.length);

//String Length Method - array.length
for(var i=0;i<=names.length;i++){
    if(names[i]===char){
       count++;
    }
}

console.log("Occurances of Character 'a' is: " +count);