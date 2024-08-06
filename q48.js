// 48. Write a JavaScript program to reverse a given string.  

let str = 'welcome';
let n = str.length;
let newStr = '';
for(let i = n-1;i>=0;i--)
{
    newStr += str[i];
}
console.log(newStr);