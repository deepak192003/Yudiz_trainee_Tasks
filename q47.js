// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000

function checkRange( x )
{
    if( x >= 40 && x <= 4000)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkRange(4));  // false