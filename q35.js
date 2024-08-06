function checkChar( str , char )
{
    let charcter = 0;
    for( let i = 0 ; i < str.length ; i++)
    {
        if((str.charAt(i) == char) && (i>=1 && i<=3))
        {
            charcter=1;
            break;
        }
    }
    if(charcter==1)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkChar('Python' , 'y'));