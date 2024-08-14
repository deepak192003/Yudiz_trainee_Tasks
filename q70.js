// rotate the array of element to the left side 
// input - 3 ,4 5  output - 4 , 5 , 3
let array = [3 ,4  , 5];

function rotateElement(array)
{
    return [array[1] , array[2] , array[0]];
}
console.log(rotateElement(array));