function showNumerical( totalminutes )
{
    let hour = Math.floor(totalminutes / 60);
    let minnutes = totalminutes % 60;
    console.log(`${hour} hours ${minnutes} minutes`);
}
showNumerical(140);