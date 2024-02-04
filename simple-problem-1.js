
// inch to feet :

// 1.
// function inchToft(inches){
//                 const feet =inches /12 ;
//                 return feet ;
// }

// const output =inchToft(64);
// console.log(output);

// 2.
// function inchToft(inches){
//                 const feet =inches /12 ;
//                 const feetFraction =parseInt(feet);
//                 const inchFraction = inches % 12 ;
//                 const finalOutput=feetFraction + " ft " + inchFraction + " inch" ;
//                 return finalOutput ;
// }

// const output =inchToft(64);
// console.log(output);

// first time :



// function inchToft(inches){
//              const feet=inches/12 ;
//              const feetFraction=parseInt(feet);
//              const inchFraction= inches%12;
//              const finalOutput=feetFraction+ " feet " + inchFraction  + " inches" ;
//              return finalOutput;

// }

// const output = inchToft(67);
// console.log(output);



                // now 100% done //





// 2.


// function milesTokm (mile){

//        const km = mile* 1.60934 ;
//        return km ;         
// }

// const kiloMeter = milesTokm(30);
// console.log(kiloMeter);


// function kiloMeterTomiles (km){

//           const miles= km *  0.621371 ;
//           return miles ;    
// }

// const miles = kiloMeterTomiles(2000);
// console.log(miles);





               // now 100 % done 



               
// 3.



// function isleapYear(year){
//         if (year % 4===0  && year % 100 !=0 ){
//                 return true ;
//         }   
//         else{
//                 return false ;
//         }     
// }


// const leapYear1 =isleapYear(2930);
// const leapYear2 =isleapYear(2931);
// const leapYear3 =isleapYear(2332);
// const leapYear4 =isleapYear(2130);
// const leapYear5 =isleapYear(2529);
// console.log(leapYear1,leapYear2,leapYear3,leapYear4,leapYear5);





              //   now 100% done    



// 4.         



// function averageOdd(numbers){
//         const odd = [];
//         for (const number of numbers) {
//                 if (number % 2 ===1 ){
//                    odd.push(number);             
//                 }
//         }

//         //         problem      //
        
//         let sum = 0 ;
//         for (const number of odd){
//                 sum =sum+number ;
//         }
//         const count  = odd.length ;
//         console.log(sum, count) ;
//         const avg = sum / count ;
//         return avg ;
                

// }

// const numbers =[23,45,66,77,88,48,33,445,61,12,33];
// const avg=averageOdd(numbers);

// console.log(avg);


// 5.

// const names = ['abul','babul','kabul','abul','rahim','babul','rahim','kabul'];


// const numbers= [12,34,33,44,34,12,33,23,45,23,45];


// function noDuplicate(array){
//         const unique =[ ];
//         for(const item of array){
//                if(unique.includes(item)===false){
//                 unique.push(item);
//                } 

//         }
//         return unique ;
// }

// const uniqueArray =noDuplicate(numbers);
// console.log(uniqueArray);





// const names = ['abul','babul','kabul','abul','rahim','babul','rahim','kabul'];

// // find out a duplicate value of array 
// // first of all declare a blank variable 
// // second for of loop run
// // third includes (item ) compare to unique 
// // fourth push (item)

// function noDuplicate (array){

//         const unique =[ ];
//         for(const item of array){
//                 if(unique.includes(item)===false){
//                         unique.push(item);
//                 }
//         }
//         return unique;

// }

// const uniqueName = noDuplicate(names);
// console.log(uniqueName);
