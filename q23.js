function createNewString( str )
{
    let individualString = [...str];
    let firstChar = individualString[0];
    let lastchar = individualString[str.length -1];
    let midstring = str.substring(1,str.length-1);
    return lastchar+midstring+firstChar;
}
let str = 'Welcome';
let result = createNewString(str);
console.log(result);