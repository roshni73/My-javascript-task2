/* Write a JavaScript function that takes an array of numbers and uses the reduce
function to find both the maximum and minimum values in the array. The function
should return an object with properties max and min, representing the maximum
and minimum values, respectively*/


let numbers = [2,3,6,8,3,9,333];
 
function findMax(numbers){
    return numbers.reduce((a, b) => Math.max(a, b));

}

function findMin(numbers){
    return numbers.reduce((a, b) => Math.min(a, b));
}
console.log(findMin(numbers));
console.log(findMax(numbers));

let minmax={
    min:findMin(numbers),
    max:findMax(numbers)
  
};
console.log (minmax);
