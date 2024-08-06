function checkLeapYear(year)
{
    if((year%4==0) && (year%100 !=0)|| (year%400==0))
    {
        console.log("yes this is leap year");
    }
    else
    {
        console.log("No this is not a leap year");
    }

}
checkLeapYear(2000);
