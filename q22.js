function removeCharacter(str , position)
{
    if(position < 0 || str.length < position)
    {
        return 'Invalid Position'
    }
    
        var part1 = str.slice(0,position);
        var part2 = str.slice(position + 1);
        return part1+part2;
}
let originalString = 'Hello World';
let str = removeCharacter(originalString , 6);
console.log(str)