function checkInteger( a, b)
{
    if( (a>0 && b<0 ) || ( a<0 && b>0 ))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkInteger(-2,2)); // true
console.log(checkInteger(1,2)); // false