// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.  
let firstname = "deepak";
function skipfirstLastchar( str )
{
    let newStr = '';
    let n = str.length;
    newStr =  str.slice(1,n-1);
    return newStr;
}
console.log(skipfirstLastchar(firstname));