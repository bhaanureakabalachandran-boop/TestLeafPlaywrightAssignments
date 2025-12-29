//PrintDuplicate [56,78,90,23,90,76,43,56]

let arr1 = [56,78,90,23,90,76,43,56];

for(let i=0;i<=arr1.length;i++){
    for(let j=i+1;j<=arr1.length;j++){

       if(arr1[i]===arr1[j]){
           console.log("Duplicate Value in Array is:"+arr1[i]);
       }
    }
}