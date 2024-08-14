function checkElematFirstLast(array)
{
    let n = array.length -1;
    if(array[0] == array[n])
    {
        return true;
    }
    return false;
}
let array = [1,2,3,3,1];
console.log(checkElematFirstLast(array));