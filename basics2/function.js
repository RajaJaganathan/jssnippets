// Function:  each function is instance of function type and it has properties and method just like any other reference type

// Function Declaration
function sum(num1, num2) {
  return num1 + num2;
}

// Function Expression
var sum = function(num1, num2) {
  return num1 + num2;
};

// difference
sum(1, 3);
function sum(num1, num2) {
  return num1 + num2;
}

sum(1, 3);

// sum2(1,3) // Error
// Function Expression
var sum2 = function(num1, num2) {
  return num1 + num2;
};

sum2(1, 3);

// length, prototype inspect with chrome

// Different way of calling

// (), call(), apply(),

sum2(1, 3);
sum2.call(null, 1, 3);
sum2.apply(null, [1, 3]);
