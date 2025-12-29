//Find the number of occurrences of 2
//Given the array, const nums = [2,4,5,2,1,2];
//if const k = 2, then output should be incremented by 1

const nums = [2,4,5,2,1,2];
let count=0;

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);

    if(nums[i] == 2){
       count++;

    }
}

console.log("Number of Occurances of 2 is: "+count)

