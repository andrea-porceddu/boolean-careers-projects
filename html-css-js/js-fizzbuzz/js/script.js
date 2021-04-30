// // generate 100 numbers - starting from 1 to 100
// var arrayString = []; // Starting array
// var arrayNumber = []; // Last Array to splice and switch numbers
// var i = 0; // Array Index
// var number = 0; // Starting value
// do {
//   // push number + 1 inside arrayString
//   arrayString.push(number++);
//   // check if number is not multiple of 3 and 5
//   if (number % 3 !== 0 && number % 5 !== 0) {
//     arrayNumber.push(number);
//   }
//   // check if number is multiple of 3 and not of 5
//   if (number % 3 === 0 && number % 5 !== 0) {
//     arrayNumber.push('Fizz');
//   }
//   // check if number is multiple of 5 and not of 3
//   if (number % 5 === 0 && number % 3 !== 0) {
//     arrayNumber.push('Buzz');
//   }
//   // check if number is multiple of 3 and 5
//   if (number % 3 === 0 && number % 5 === 0) {
//     arrayNumber.push('FizzBuzz');
//   }
//   i++;
// } while (i < 100);
// console.log(arrayNumber);

// looking for variant
var array = [];
var i = 0; // array index
do {
  i++ // array index increment so i can start from 1 and put value inside the array (strings if conditions) 
  //check if number is not multiple of 3 and 5
  if (i % 3 !== 0 && i % 5 !== 0) {
    array.push(i);
  }
  // check if number is multiple of 3 and not of 5
  if (i % 3 === 0 && i % 5 !== 0) {
    array.push('Fizz');
  }
  // check if number is multiple of 5 and not of 3
  if (i % 5 === 0 && i % 3 !== 0) {
    array.push('Buzz');
  }
  // check if number is multiple of 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    array.push('FizzBuzz');
  }
} while (i < 100);
console.log(array);

// variant 2
