// program to find out first january will be sunday between 2014 to 2050
function first_January()
{
    for(let year = 2014 ; year<=2050 ; year++)
    {
        const d = new Date(year, 0 , 1);
        if(d.getDay()===0)
        {
            console.log("1st January is being sunday on " + year);
        }
    }
}
first_January();