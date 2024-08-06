function takeLastthreeChar( str )
{
    let lastThreeChar = str.slice(-3);
    return lastThreeChar+str+lastThreeChar;
}
let str = "hellosani"
const ans = takeLastthreeChar(str);
console.log(ans);