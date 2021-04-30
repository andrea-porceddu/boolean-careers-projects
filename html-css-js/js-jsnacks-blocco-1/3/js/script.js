// var array = [];
//
// var i = 1;
// while (i <= 5) {
//   var input = prompt('Inserisci numero: ' + i);
//   array.push(input);
//   i++;
// };
//
// var sumElements = 0;
// for (i = 0; i < array.length; i++) {
//   sumElements = parseInt(array[i]) + sumElements;
// };
// console.log(sumElements);

// variant 1
// var i = 1;
// var sum = 0;
// for (i = 1; i <= 5; i++) {
//   sum = sum + parseInt(prompt('Inserisci ' + i + '° numero'));
//   // console.log(number);
// }
// console.log(sum);

// variant 2
var i = 1;
var sum = 0;
do {
  sum += parseInt(prompt('Inserisci ' + i + '° numero'));
  i++;
} while (i <= 5);
console.log('La somma dei numeri inseriti è: ' + sum);
