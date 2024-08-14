//Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  

let array = [3,4,5,1];

function checkArrayPos(array)
{
    let n = array.length-1;
    if(array[0] ==1 || array[n] ==1)
    {
        return true;
    }
    return false;
}
console.log(checkArrayPos(array))