/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// solved by for loop

// for (let i = 1 ; i <=60 ; i++){
//                 // console.log("I will invest at least 6 hrs every single day for next 60 days!" , i);
// }


// solved by while loop

// let i=1;
// while (i<=60){
               
//         i++ ;
// //         console.log("I will invest at least 6 hrs every single day for next 60 days!" , i);

// }



// Find all the odd numbers from 61 to 100.

// solved by for loop

// for (i=61 ; i<=100;i=i+2){

// //     console.log(i);

// }


// solved by while loop

let n = 61 ;
while(n<=100){
               if (n % 2 !=0){
                // console.log(n);
               }
               n++ ;
                
}

// Find all the even numbers from 78 to 98.

// solved by for loop

for (let n =78 ;n<=98;n++){
          if (n % 2 ===0){
                // console.log(n);
          } 
               
}

// solved by while loop

let m = 78 ;

while (m<=98){
        if (m%2 === 0)  {
                // console.log(m);
        }   
        m++ ;   
}


// Display sum of all the odd numbers from 91 to 129.

// solved by for loop

// let sum = 0 ;

// for (let i = 91 ; i<=129; i++){

//            if (i%2 != 0){
//                 // console.log(i);
//            }  
//            sum = sum + i;
              
// }
// console.log("Sum of all the odd numbers from 91 to 129 :" ,sum);

// solved by while loop 


// let i =91 ;
// let sum = 0 ;

// while (i<=129){
//           if (i%2 !==0 ){
//                 console.log(i);
//           } 
//           sum=sum+i;   
//           i++ ;  
// }

// console.log("Sum of all the odd numbers from 91 to 129 :" ,sum);





// Display sum of all the even numbers from 51 to 85.

// solved by for loop

//***********

//  let sum = 0 ;
// for(let i=51 ; i <=85 ; i++ ){
//                 // console.log(i);
//                 if (i%2 === 0){
                      
//                     console.log(i);          
//                 }
//                 sum=sum+ i;
// }
// console.log("Sum of all the even numbers from 51 to 85:", sum);





// solved by while loop

// let i = 51;
// let sum =0 ;

// while(i<=85){
//       if (i%2 === 0){
//                 console.log(i);
               
//       }
//       sum=sum+i;
//       i++ ;
// }

// console.log("Sum of all the even numbers from 51 to 85:", sum);


// Generate a multiplication table for number 9

// solved by for loop

// let multiplier = 9 ;
// for (let i = 1 ; i <=10 ; i ++){
// //          console.log(i);       
//          let result = multiplier * i ;
//          console.log(result);       
// }
// solved by while loop

// let i = 1;
// let multiplier =9 ;
// while(i<=10){
//         let result = multiplier*i;
//         console.log(result); 
//         i++ ;       
// }





// Implement a countdown timer that counts down from 81 to 65.

// solved by for loop


// for (let i = 81; i >= 65; i--) {
//              console.log(i);
// }

// solved by while loop


// let i = 81;

// while (i >= 65) {
//       console.log(i);
//       i--;
// }







/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


for (let i = 1; i <= 40; i++) {
              
if (i % 2 !== 0) {
           continue;
        }                            //problem//
            
               
console.log(i);
}
