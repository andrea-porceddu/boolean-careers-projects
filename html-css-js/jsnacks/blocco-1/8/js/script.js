var array = [];
var i = 0;
var string = prompt('Inserisci un numero di 4 cifre');
if (string.length !== 4) {
  alert('Devi inserire un numero di 4 cifre!');
} else {
  array.push(parseInt(string));
}
// console.log(array);
for (i = 0; i < array.length; i++) {
  var sum = array[i] + array[i + 1]; // errore nel ciclo
}
console.log(sum);
