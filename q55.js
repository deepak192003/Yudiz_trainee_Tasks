// . Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

let str = 'paatpaat'
let count_p = 0;
let count_t = 0;

for( let i = 0 ; i < str .length ; i++)
{
    if( str[i] == 'p')
    {
        count_p++;
    }
    if(str[i] == 't')
    {
        count_t++;
    }
}
if(count_p == count_t)
{
    console.log("true");
}
else
{
    console.log("false");
}

// output - true
