let array = [1 , 2 , 4 , 5];

let newArray = [];

newArray.push(array[0]);
newArray.push(array[array.length-1])

for(let i = 0 ; i<newArray.length ; i++)
{
    console.log(newArray[i]);
}
