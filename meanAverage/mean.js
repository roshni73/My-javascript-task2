/* Write a JavaScript function that takes an array of numbers and utilizes the
reduce method to calculate the mean (average) of the numbers. The function
should return the mean value.
*/
let array = [2, 2, 3, 4, 2, 6, 7, 8, 9, 1];
function mean(array) {
    let sum = array.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
    return sum / array.length;
}   
console.log(mean(array));
