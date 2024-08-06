function celsiusToF(celsius)
{
    // formula =  c = (5/9) * (F-32);

    var cTemp = celsius;
    var cToF = cTemp * 9/5 + 32;
    const message = `${cTemp}\xB0C is ${cToF} \xB0F.`;
    console.log(message);
}
celsiusToF(3);

function farhnToC(fahrenheit)
{
    // formula = ( farenheit - 32 ) * 5/9;
    var fTemp = fahrenheit;
    var fToC = (fTemp - 32 ) * 5/9;
    const message = `${fTemp}\xB0F is ${fToC} \xB0C.`;
    console.log(message);
}
farhnToC(45);