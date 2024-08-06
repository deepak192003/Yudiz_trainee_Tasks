function newString(str)
{
    let newStr = '';
    if(str.length<3)
    {
        return str.toUpperCase();
    }
    let c = 1;
    for(let i = 0 ;i<str.length ; i++)
    {
        if(c<4)
        {
            newStr+= str[i];
            c++;
        }
        if(c==4)
        {
            break;
        }
    }
    return newStr.toLowerCase();
}
console.log(newString('he')) // HE
console.log(newString("HELLOSAM"))