// Default Arguments:
function calculateTotal(subtotal, tax, shipping) {
    return subtotal + shipping + (subtotal * tax)
}

function calculateTotal(subtotal, tax, shipping) {
    if(tax === undefined) {
        tax = 0.07
    }
    if(shipping === undefined) {
        shipping = 10
    }
    
    return subtotal + shipping + (subtotal * tax)
}

function calculateTotal(subtotal, tax, shipping) {
    tax = tax || 0.07
    shipping = shipping || 0.07
    return subtotal + shipping + (subtotal * tax)
}

function calculateTotal(subtotal, tax = 0.07, shipping = 100) {
    return subtotal + shipping + (subtotal * tax)
}

calculateTotal(100)
calculateTotal(100, 0.10)
calculateTotal(100, 0.10, 10)

// Destructuring object:
const person = {
    first: 'Raj'
    last: 'Kumar',
    location: {
        city: 'cbe',
        state: 'tn'
    }
}

const first = person.fist
const last = person.last

const {first, last} = person
const {city, state} = person.location

// Rename:

const {first:firstName, last:lastName} = person
const {city:locationCity, state:locationState} = person.location

// What if I tried to destruct a property that doesn’t exist?

const {first, last, height} = person

// height === undefined

// Default in Destructuring:

const settings = {color: 'red', height:500}

const  {color = 'black', width=200, height = 300 } = settings


// Destructuring Array:

const person = ['Raj', 'Kumar', '21']

const [fname, lname, age] = person


// Spread and Rest:

const args = [0,1,2]

function sum(num1, num2, num3) {
    return num1 +num2 +num3
}

sum(...args)


// spread at any point

let array = [2,3, 4]
let array2 = [1, ...array, 5, 6]

console.log(array2)


// Destructuring with spread:

const players = [
    'Virat Kohli', 'Shikhar Dhawan', 'K. L. Rahul', 
    'Rishabh Pant', 'Shivam Dube', 'Ravindra Jadeja'
]

const [first, second, ...remainingPlayer] = players


// Rest: Rest will handle n number of function parameters

function doSomeOperation(operation, ...numbers) {
    console.log(operation);
    console.log(numbers);
}

doSomeOperation('add', 1, 2, 3, 4)

// Template Literal:

const name = 'JavaScript'

const greeting = 'Hello' + name + '!' // Hello JavaScript!

const greeting = 'Hello ${name}!' // Hello JavaScript!


// Evaluation with template literal:

const price = 100
const tax = 0.10
const total = ` The total price is ${price + (price * tax)}`


// Multiline string:

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    
</body>
</html>`


// String operations:

'hello'.startsWith('he')
'hello'.endsWith('lo')
'hello'.repeat(3)
'hello'.includes('ll')


// Enhanced Object Literal:

const first = 'Don'
const last = 'Joe'
const age = 23

const person = {
    first: first,
    last: last,
    age: age
}

const person = {
    first,
    last,
    age
}


// Short method initializer:

const tesla = {
    getSpeed: function() {
        return '5700 kmph'
    },
    getMileage: function() {
        return '100 kmpl'
    }
}

const tesla = {
    getSpeed() {
        return '5700 kmph'
    },
    getMileage() {
        return '100 kmpl'
    }
}

// Computed Properties:
 
let i = 0
const obj = {
    ['prop' + ++i]: i, 
    ['prop' + ++i]: i,
    ['prop' + ++i]: i 
}

console.log(obj.prop1)
console.log(obj.prop2)
console.log(obj.prop3)

let i = 0
const obj = {
    [`prop${++i}`]: i, 
    [`prop${++i}`]: i,
    [`prop${++i}`]: i 
}

console.log(obj.prop1)
console.log(obj.prop2)
console.log(obj.prop3)

