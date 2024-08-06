// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  
let num1 = 40;
let num2 = 60;
function largestnumber( x , y )
{
    if( x >= 40 && x <= 60 && y >= 40 && y <=60)
    {
        if( x === y )
        {
            return "numbers are the same";
        }
        else if( x > y )
        {
            return x;
        }
        else {
            return y;
        }
    }
    else {
        return "doesn't match"
    }
}
console.log(largestnumber(45 , 60));
console.log(largestnumber(25 , 60));


