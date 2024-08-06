// 38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. 
// The grading criteria are as follows:
// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater.
//  Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

function examStatus( totalmarks , is_exam)
{
    if( is_exam )
    {
        return  totalmarks>=90;
    }
    return totalmarks> 80 && totalmarks <= 100;

}
console.log(examStatus(10 , 'true')); // false
console.log(examStatus( 99 , 'true')); // true
console.log(examStatus(93 , 'false')) // true
