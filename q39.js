// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  

function computeSum( x , y )
{
    let sum = x + y;
    
    return (sum>=50 && sum<=80)?65 :80;    
}

console.log(computeSum(34 , 43));
