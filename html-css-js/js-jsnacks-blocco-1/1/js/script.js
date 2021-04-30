var num1 = prompt('Inserisci il primo numero');
var num2 = prompt('Inserisci il secondo numero');
// console.log(Math.max(num1, num2));
// if equal
if (num1 === num2) {
  console.log(num1 + ' e ' + num2 + ' sono due numeri uguali');
} else {
  console.log('Il numero più grande è ' + Math.max(num1, num2));
}
