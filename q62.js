// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  
let givenString = 'python'; // output : honpyt

let newStr = givenString.slice(-3);

 // skip last three character from a given string
let skiplastthree = givenString.substring(0 , givenString.length-3)
console.log(newStr + skiplastthree);
