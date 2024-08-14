
function checkLargest(array)
{
    let max_val = array[0] > array[2] ? array[0] : array[2];
    array[0] = max_val;
    array[1] = max_val;
    array[2] = max_val;
    return array;
}


console.log(checkLargest([1,2,3]));