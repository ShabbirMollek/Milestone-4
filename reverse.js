const sentence ="I am learning web dev";
// type one
let reverse ="";
for (const letter of sentence){
                reverse = letter + reverse ;
}
// console.log(reverse);

// type two 

const reversed =sentence.split('').reverse().join('');
console.log(reversed);