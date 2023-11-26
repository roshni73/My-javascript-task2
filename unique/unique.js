/*Write a JavaScript function that takes an array of person objects, where each
object has properties name, age, and city. Utilize the reduce method to group
the objects by the city property, returning an object where each unique city
becomes a key, and the corresponding value is an array of objects with that
city.*/

let people = [
    {
        name: 'rami',
        age: 21,
        city: 'kathmandu'
    },
    {
        name: 'hari',
        age: 20,
        city: 'Nepaljung'
    },
    {
        name: 'sitaram',
        age: 20,
        city: 'pokhara'
    },
];

function groupByCity(people) {
    return people.reduce(function(prev, curr) {
        if (prev[curr.city]) {
            prev[curr.city].push(curr);
        } else {
            prev[curr.city] = [curr];
        }
        return prev;
    }, {});
}
console.log(groupByCity(people));
