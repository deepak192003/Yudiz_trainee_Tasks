// iterator and generator comes to customize the behaviour of for-of loop
function createIterator(array)
{
    let index = 0;
    return{
        // next function is implemented
        next: function()
        {   
            if(index<array.length)
            {
                return {value : array[index++] , done : false};
            }
            else{
                return {value : undefined , done : true};
            }
        }
    }
}
const arr = [1,2,3];
const iterator = createIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());