// string declaration and operation
var myName = 'Peter'
var myName = new String('Peter')
var myName = String('Peter')

console.log({myName});

// string replace with ??
var str = "hello".replace("ello", "i");
console.log({ str });

// String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

console.log({ sln });

// Finding a String in a String
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log({ pos });

// Searching for a String
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

//convert string to array
var txt = "abcde"; // String
var chars = txt.split("");

console.log({ chars });
