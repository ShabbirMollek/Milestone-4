// problem -1
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/



var burgerPrice = 450 ;
var cokePrice =30 ;

if (burgerPrice > 500){

    // console.log("Free coke");

}
else {
    totalPrice=  burgerPrice + cokePrice ;
    // console.log(totalPrice);
}






// problem-2
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


var weight = 40 ;
var height = 1.75 ;

var bmi = weight / (height)^2 ;

if (bmi < 18.5 ){
    // console.log("You are underweight")
}
else if(bmi>=18.5 && bmi <= 24.9){
    // console.log("You are normal")
}
else if (bmi>=25 && bmi<=29.9){
    // console.log("You are overweight")
}
else{
    // console.log("You are obese")
}






// problem -3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var score =50;

if (score >=90 && score <=100){
    // console.log("A grade")
}
else if (score >=80 && score<=89){
    // console.log("B grade")
}
else if (score >= 70 && score<=79){
    // console.log("C grade")
}
else if (score>=60 && score <=69){
    // console.log("C grade")
}
else {
    // console.log("Fail")
}




// problem -4
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var friendScore =67 ;


if (friendScore > 80) {
        // console.log("Go for a lunch with your friend.");
} 
else if (friendScore >= 60) {
        // console.log("Tell your friend, good luck next time.");
} 
else if (friendScore >= 40) {
        // console.log("Keep your friend's message unseen.");
} else
{
        // console.log("Block your friend.");
}







// problem-5
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 =10 ;
var num2=12;


if (num1> num2){
         var result = num1*2
        //  console.log(result);
}
else{
    var result= num1 + num2 ;
    // console.log(result);
}



// ternary operation
num1 > num2 ?  console.log( result = num1*2):console.log(result= num1 + num2 )














// problem-6
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketPrice =800 ;
var childrenAge = 12 ;
var studentAge = 34 ;
var seniorCitizen = 63;

if (childrenAge < 10 ) {
    console.log("Free")
}
else if ( studentAge >= 18) {
    var discountPrice = ticketPrice * 50/100
    console.log(discountPrice);

}
else if (age >= 60 ){
    var discountPrice = ticketPrice * 15/100
    console.log(discountPrice);
}
else{
    consol.log("Regular Price : 800tk")
}