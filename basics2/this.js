// this -every has it's own scope

function Person() {
  this.age = 0;
  setInterval(function() {
    this.age++; // won't work
  }, 1000); // this refer to window object
}

// solution 1
function Person() {
  this.age = 0;
  var that = this;
  setInterval(function() {
    that.age++;
  }, 1000); // this refer to window object
}

// solution 2
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
  }, 1000); // this refer to window object
}

// Trap: most confusing part of JS

var obj = {
  foo: function() {
    console.log(this); // What is this refer to
    function bar() {
      console.log(this); // What is this refer to
    }
    bar();
  }
};

obj.foo();
