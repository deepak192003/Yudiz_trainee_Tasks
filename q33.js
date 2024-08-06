function check_Numbers( x , y )
{
    if((x>=40 && x<=60 &&  y>=40 && y<=60 ) || ( x>=70 && x<=100 && y>=70 && y<=100 ))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(check_Numbers(78 , 87)); // true
console.log(check_Numbers(23 , 12)); // false