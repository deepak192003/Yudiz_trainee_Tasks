// 52. Write a JavaScript program to convert letters of a given string alphabetically.  
function alphabeticalSort( str )
{
    return  str.split("").sort().join("");
}
console.log(alphabeticalSort('DSA'))