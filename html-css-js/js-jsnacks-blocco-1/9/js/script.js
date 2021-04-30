var array = [];
var i = 0; // array index
var number = 1;
var sum = 0;
do {
  array.push(number++);
} while (number <= 10);

for (i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log('La lista è composta dai seguenti numeri: ' + array);
console.log('La cui somma è: ' + sum);
console.log('E la media di ' + sum + ' per il numero dei numeri inseriti o_O ossia ' + array.length + ' è: ' + sum / array.length);
