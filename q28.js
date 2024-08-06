function checkRange( a, b )
{
    if((a >= 50 && a <= 99)|| ( b>= 50 && b<=99))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checkRange(12,101))