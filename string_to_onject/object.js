/*Given an array of strings, write a function that transforms it into an object
where each string is a property, and the value is the length of the string*/

let arr = ['apple', 'banana', 'orange', 'strawberry'];

function transform(arr) {
    if (arr.length === 0) {
        return {};
    }
    return arr.reduce(function(prev, curr) {
        prev[curr] = curr.length;
        return prev;
    }, {});
}
console.log(transform(arr));