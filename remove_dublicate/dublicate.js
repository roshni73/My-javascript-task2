/*Create a function that takes an array of numbers and returns a new array with
only the unique numbers (remove duplicates).?*/

let arr=[11,22,33,11,33,44,33,22,55,66,77,88,22,77]

function removeDublicate(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
       if (a.indexOf(arr[i]) === -1) {
           a.push(arr[i]);
       }
    }
    return a;
}
console.log(removeDublicate(arr));
