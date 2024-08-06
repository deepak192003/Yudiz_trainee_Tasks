function checkJava( str )
{
    let first4char = str.substring(0,4);
    if(first4char == 'Java')
    {
        return true;
    }
    else{
        return false;
    }
}
let str = "JavaScript";
console.log(checkJava(str));