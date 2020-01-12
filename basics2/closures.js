// Closures is functions that are have access to variable from another function scopes

var fruits = ["banana", "jackfruit", "cherry", "apple", "orange"];

console.log(fruits.sort());

var fruit2 = [
  {
    name: "banana",
    color: "yellow"
  },
  {
    name: "jackfruit",
    color: "green"
  },
  {
    name: "cherry",
    color: "red"
  },
  {
    name: "apple",
    color: "red"
  },
  {
    name: "orange",
    color: "orange"
  }
];

console.log(fruit2.sort()); // won;t work

// How do sort by fruit name
// fruit2.sort(function(fruit1, fruit2)) // ? How do specify prop that want to sort

function sortBy(propName) {
    
  return function(f1, f2) {
    const value1 = f1[propName];
    const value2 = f2[propName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

// fruit2.sort(sortBy('color'))
// console.log({fruit2});

// fruit2.sort(sortBy('name'))
// console.log({fruit2});
