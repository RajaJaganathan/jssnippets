// Array

// Declaration

var person = ["peter", "kevin", "Eric"]; //preferred
var person = new Array("peter", "kevin", "Eric");
var person = new Array();
person[0] = "peter";
person[1] = "kevin";
person[4] = "Eric";

console.log({ person });

//  length
let fruits = ["Apple", "Banana"];

console.log(fruits.length);


// Access (index into) an Array item
let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana


// Loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

// Add to the end of an Array
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]


// Remove from the end of an Array
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

// Remove from the front of an Array
let first = fruits.shift() // remove Apple from the front
// ["Banana"]

// Add to the front of an Array
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]


// Find the index of an item in the Array
var fruits = ["Strawberry", "Banana", "Mango"]
var pos = fruits.indexOf('Banana')
console.log({pos}); // 1


// Copy an Array
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Banana", "Mango"]


// Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]


// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

const array1 = [5, 12, 8, 130, 44];


const found = array1.find(elem => elem > 10);

console.log(found);
// expected output: 12

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true


// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
