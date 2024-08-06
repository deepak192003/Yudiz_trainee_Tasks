function checkThree( a, b , c)
{
    if( ( a >= 50 && a <= 99) || ( b>= 50 && b<=99 ) || ( c>=50 && c<=99 ))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checkThree(7 , 6 , 9)); // false
console.log(checkThree(77 , 66 , 88)); // true