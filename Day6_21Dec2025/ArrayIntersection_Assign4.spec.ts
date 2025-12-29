function intersection(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        // Check if element exists in arr2 and not already in result
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}


//Typical case
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(intersection(arr1, arr2));

/*
//No common elements
const arr1 = [1, 2, 3, 4];
const arr2 = [5,6,7,8];
console.log(intersection(arr1, arr2)); 


//All elements common
const arr1 = [1, 2, 3, 4];
const arr2 = [4,3,2,1];
console.log(intersection(arr1, arr2)); 


//With duplicates
const arr1 = [1, 2, 2, 4];
const arr2 = [8,2,6,2];
console.log(intersection(arr1, arr2)); 
*/
