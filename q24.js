function addFrontBack(str)
{
    let firstchar = str.substring(0,1);
    return firstchar+str+firstchar;
}
let str = 'Swift';
let ans = addFrontBack(str);
console.log(ans);
