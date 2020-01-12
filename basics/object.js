// object

// Different way of creation object:
'use strict'
var person = {
    name: 'Peter',
    age: 23,
}

var person = new Object()
person.name = 'Peter';
person.age = 23;


// Mutation
var person = {
    name: 'Peter',
    age: 23,
}

delete person.name
person.age = 45


// Object.seal - prevent addition of properties, however defined properties still value can be changed.

// Mutation
var person = {
    name: 'Peter',
    age: 23,
}

Object.seal(person)
person.age = 33; // allow
// person.age2 = 33; //Error in strict mode

// Object.freeze - prevent addition of properties, however defined properties still can be changed.
const obj = {
    prop: 42
};

Object.freeze(obj);

// obj.prop = 33; // Throws an error in strict mode


console.log(obj.prop);


// Perf problem these 2 methods


// Object with method, common
var person = {
    firstName: 'Kevin',
    lastName: 'Peter',
    age: 23,
    getFullName(){
        console.log(this.firstName + ' ' +  this.lastName);
    }
}

console.log(person.getFullName());

// Object.keys()
var person = {
    firstName: 'Kevin',
    lastName: 'Peter',
    age: 23   
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// Object.assign()

var person = {
    firstName: 'Kevin',
    lastName: 'Peter',
    age: 23   
}

var location = {
    city: 'cbe',
    state: 'tn'
}

var result = Object.assign({}, person, location)
console.log(result);
