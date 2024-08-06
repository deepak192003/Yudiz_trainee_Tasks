// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  
function checkDifference( x , y )
{
    if( x == 8 || y == 8 )
    {
        return true;
    }
    if( x+y == 8)
    {
        return true;
    }
    if( Math.abs( x - y ) == 8)
    {
        return true;
    }
    return false;
}
console.log(checkDifference( 4 , 12));
console.log(checkDifference(1,2));
