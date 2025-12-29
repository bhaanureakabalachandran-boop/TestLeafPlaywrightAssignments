
//Return `results` containing pairs of indices.
//Sum of two numbers must be 18

const nums = [2, 4, 7, 8, 11, 14];

const result = [];

for(let i=0;i<=nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){

       if(nums[i]+nums[j] === 18){
           //console.log("Sum of Numbers equal to 18 indices are:"+nums[i] +"+"+nums[j] + "(" + i +","+ j +")");

           result.push([i, j]);
       }
    }
}

console.log(result);