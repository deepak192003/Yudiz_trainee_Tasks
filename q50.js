// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  
function capitalFirstLetter( str )
{
    let words = str.split(" ");  // [ 'the'] , 'quick' , 'brown' , 'is' , 'fox']
    
    for(let i = 0 ; i< words.length; i++)
    {
       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    console.log(words.join(" "));
}

capitalFirstLetter('the quick brown is fox');