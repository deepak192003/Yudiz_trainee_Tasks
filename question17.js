function computeAbsoluteDiff(specified_Number)
{
    let a = 19;
    if(specified_Number>19)
    {
        return (specified_Number - 19) * 3;
    }
    else
    {
        return Math.abs(19-specified_Number)
    }

}
let a = 20;
let ans =computeAbsoluteDiff(a);
console.log(ans)
