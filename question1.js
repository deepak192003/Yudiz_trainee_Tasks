var today = new Date();
var day = today.getDay();

var daylist = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
console.log( " Today is " + daylist[day] );

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

// to check the value of hours whether it is greater than 12 or not
var prepand = (hour>=12)?"PM":"AM";

// convert 24 hour format to 12 hour
hour = (hour>=12)?hour-12:hour;

if(hour === 0 && prepand === 'PM')
{
    if(minutes===0 && seconds === 0)
    {
        hour = 12 ;
        prepand = 'Noon'
    }
    else
    {
        hour = 12;
        prepand = 'PM';
    }
}
if(hour === 0 && prepand === 'AM')
{
    if(minutes === 0 && seconds === 0)
    {
        hour = 12;
        prepand = 'midnight';
    }
    else
    {
        hour = 12;
        prepand = 'AM'
    }

}

console.log("Current Time : " + hour + " : " + prepand + " : " + minutes + " : " + seconds)