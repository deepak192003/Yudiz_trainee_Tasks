// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  


// how i think to solve this question using debugging also so go efficiently


let givenString = 'Candles'

// n = length of the givenString
let n = givenString.length;
console.log(n)

// finding the middlevalue from the string
let middlevalue = Math.floor(n/2);
console.log(middlevalue);

// to know which character is the middle value
console.log(givenString[middlevalue]);

// slice the value from back middle value to next 2 character and assign to a new String
let newString =  givenString.slice(middlevalue-1 , middlevalue +2);
console.log(newString);