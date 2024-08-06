function areaOfTriangle(a,b,c)
{
    // first find out the semi parameter of triangle
    let s = (a+b+c)/2;

    // second find out the sqrt of s-a , s-b , s-c
    let area = Math.sqrt(s * ((s-a) * (s-b) * (s-c)));


    console.log((area));
}
areaOfTriangle(5,6,7);