function checkLastDigit( x , y , z ) 
{
    if( (x%10 === 0) && (y%10 === 0) && (z %10 === 0))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkLastDigit(20 , 30 , 300));  // true
console.log(checkLastDigit(20 , 23 , 12));  // false