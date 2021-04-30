// var sum = 0;
//
// for (var i = 1; i <= 5; i++) {
//   var numberInput = parseFloat(prompt('Inserisci numero'));
//   sum += numberInput;
// }
//
// console.log(sum);

var numberInput;
var sum = 0;
var i = 1;
do {
  numberInput = parseFloat(prompt('Inserisci numero'));
  sum += numberInput;
  i++;
} while (i <= 5);

console.log(sum);
