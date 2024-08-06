// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  
function checkIntegerValue( x , y )
{
    if( x == 15 || y == 15)
    {
        return true;
    }
    else{
        return Math.abs( x - y );
    }
}
console.log(checkIntegerValue(1, 1)); // 0