// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 

function copyLast( str )
{
    let newStr = '';
    if(str.length<3)
    {
        return false;
    }
    if( str.length > 3)
    {
        newStr += str.slice(-3);
    }
    return newStr+newStr+newStr+newStr;
}
console.log(copyLast('hellojs'))