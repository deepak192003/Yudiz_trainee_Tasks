// js program to print date in the format mm-dd-yyyy
var date = new Date();
var month = date.getMonth();
var d = date.getDate();
var year = date.getFullYear();
console.log("Today's Date is " + d + "-" + month + "-" + year);
