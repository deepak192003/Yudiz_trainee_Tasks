// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function setOfthree( x , y , z)
{
    let isboolean = false;
    if( ( x == y) && ( y == z ) && (x == z))
    {
        isboolean = true;
        return 30;
    }
    if( ( x == y ) || (y == z) || ( x == z ) )
    {
        isboolean = true;
        return  40;
    }
    if(isboolean == false)
    {
        return 20;
    }
}
let check = setOfthree(1,2,3);
console.log(check);