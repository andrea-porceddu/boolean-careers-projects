// var array = [];
// var i = 1;
// var number = 0;
// for (i = 0; i < 6; i++) {
//   number = prompt('Inserisci un numero');
//   if (number % 2 !== 0) {
//     array.push(number);
//   }
// }
// console.log(array);

var array = [];
var i = 1;
// unica dichiarazione
var number;
do {
  number = parseInt(prompt('Inserisci un numero'));
  if (number % 2 !== 0) {
    array.push(number);
  }
  i++;
} while (i <= 6);
console.log(array);
