// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  

function checkMultiple( a , b )
{
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    } 
    else {
        return false;
    }
}
console.log(checkMultiple(14,21));
console.log(checkMultiple(14 , 23));