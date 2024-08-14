function checkCityName(str)
{
    if(str.length>=3 && ((str.substring(0,3))=='Los') || (str.substring(0,3)=='New'))
    {
        return str;
    }
    return " ";
}
let str = "New York"
console.log(checkCityName(str));