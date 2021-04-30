// var array = [];
// var arrayMaxIndex = 4;

// wanted to use stringLength as array index
// var stringLength = prompt('Inserisci un numero di 4 cifre').length;
// console.log(stringLength); // 4
// console.log(typeof(stringLength)); // number
// var inputNumber = parseInt(stringLength);
// console.log(inputNumber); // 4
// console.log(typeof(inputNumber)); // number

// var stringToNumber = parseInt(prompt('Inserisci un numero di 4 cifre'));
// console.log(stringToNumber);
// console.log(typeof(stringToNumber));

// var i = 0; //string index
// var sum = 0;
// var input = prompt('Inserisci un numero di 4 cifre e calcolerò la somma delle cifre che lo compongono');
// // console.log(typeof(input[i])); // string input
// // console.log(typeof(parseInt(input[i]))); // int parsed input
//
// // if input = length = 4 else
// if (input.length === 4) {
//   for (i = 0; i < input.length; i++) {
//     sum += parseInt(input[i]);
//   }
// } else {
//   alert('Il numero deve essere di 4 cifre!');
// }
// console.log('La somma delle cifre che compongono il numero inserito è: ' + sum);

// variant with array
var array= [];
var i = 0; // string index
var sum = 0;
var input = prompt('Inserisci un numero di 4 cifre e calcolerò la somma delle cifre che lo compongono'); // input as string

if (input.length === 4) {
  for (i = 0; i < input.length; i++) {
    array.push(parseInt(input[i])); // each input string pushed inside array and parsed as int
    sum += array[i]; // each parsed string added
  };
} else {
  alert('Il numero deve essere di 4 cifre!');
};

console.log('La lista è composta dai seguenti numeri: ' + array);
console.log('La somma delle cifre che compongono il numero inserito è: ' + sum);
