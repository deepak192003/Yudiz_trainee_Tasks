const today = new Date();
const christmas = new Date(today.getFullYear() , 11 , 25);
console.log(christmas);
if(today.getMonth() == 11 && today.getDay() > 25){
    christmas.setFullYear(christmas.getFullYear() +1);
}
const one_day = 1000 * 60*60*24;
const diff = Math.ceil((christmas.getTime() - today.getTime())/(one_day));
console.log(diff);