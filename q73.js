// Write a JavaScript program to reverse the elements of a given array of integers of length 3.  

let array = [1,2,3];

function reverseArray(array)
{
    for( let i = array.length -1 ; i>=0 ; i--)
    {
        console.log(array[i]);
    }
}
reverseArray(array)
