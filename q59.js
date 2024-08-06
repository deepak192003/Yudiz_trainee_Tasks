// 59. Write a JavaScript program to extract the first half of a even string.  

let str = 'hellos'
function firstHalf( str )
{
    let strLength = str.length;
    if(strLength % 2 !=0 )
    {
        return false;
    }
    
        let halflength = strLength/2;
        return str.slice(0,halflength);
}
console.log(firstHalf(str));