// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array




const fruits = ['apple' , 'banana' , 'papaya' , 'mango', 'watermelon'];

console.log(fruits);
console.log(fruits[3]);
fruits[2]='jambura'
console.log(fruits);





// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


const places =['bandarban','syhlet','kuakata']
console.log(places);

places.push('coxs-bazar');
console.log(places);

places.push('rangamati','sajek');
console.log(places);

places.pop('sajek');
console.log(places);







// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


const bookNames =['himu','micir ali','paradoxical sajid','programming hero'];

console.log(bookNames);

const print =bookNames.includes('programming hero');
console.log('present this array element ');




// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const name = ['abul','babul','kabul','rahim','shabbir'];
const age = 23 ;
const weight =58 ;
const number = 'sabbir'
const friends ="[]";

console.log(Array.isArray(name));
console.log(Array.isArray(age));
console.log(Array.isArray(weight));
console.log(Array.isArray(friends));





// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().



const name1 = ['abul','rahim','karim','jamal','shabbir']
const name2 = ['rabbi','oshi','anik']


const addedValue = name1.concat(name2);
console.log(addedValue);