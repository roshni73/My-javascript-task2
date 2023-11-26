/* Write a JavaScript function that takes an array of elements and uses the reduce
function to find the element with the maximum occurrence in the array. The
function should return an object with the element and its corresponding count.
*/
let array = [2, 2, 3, 4, 2, 6, 7, 8, 9, 1];
function maxOccurance(array) {
    let obj = {};
    let max = 0;
    let maxElement = array[0];
    array.reduce(function(prev, curr) {
        if (obj[curr]) {
        obj[curr]++;
        } else {
        obj[curr] = 1;
        }
        if (obj[curr] > max) {
        max = obj[curr];
        maxElement = curr;
        }
    }, 0);
    return {
        maxElement: maxElement,
        max: max
    };
    }
    console.log(maxOccurance(array));