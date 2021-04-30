// Mat.pow() - // choose number than pow for itself
// var number = parseInt(prompt('Inserisci numero'));
// console.log(Math.pow(number, number));

// correction
// var inputNumber = parseInt(prompt('Per quanti numeri vuoi che calcolo il cuBo di ognuno di essi? o_O'));
// var firstNumber = (inputNumber - inputNumber) + 1; // what a mind >_<
// // console.log(firstNumber);
// var elevatedNumber;
// do {
//   elevatedNumber = Math.pow(firstNumber, 3);
//   console.log(elevatedNumber);
//   firstNumber++;
// } while (firstNumber <= inputNumber);

// variant
var inputNumber = parseInt(prompt('Per quanti numeri vuoi che calcolo il cuBo di ognuno di essi? o_O'));
var i = 1;
for (i = 1; i <= inputNumber; i++) {
  console.log(Math.pow(i, 3));
}
