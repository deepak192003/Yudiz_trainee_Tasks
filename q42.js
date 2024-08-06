function checkSolution( x, y , z)
{
    // check for x is greater than 20 and less than y and z
    // check for y is greater than 20 and less than x and z 
    // check for z is greater than 20 and less than y and x

    return(
        ( x >= 20 && ( x < y || x < z)) || 
        ( y>= 20 &&  ( y<x || y<z)) ||
        ( z>= 20 &&  ( z<x || z<y ))
    )
}
console.log(checkSolution(23, 45 , 10)); // true
