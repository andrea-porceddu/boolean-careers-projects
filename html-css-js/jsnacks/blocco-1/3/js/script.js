var array = [];

var i = 1;
while (i <= 5) {
  var input = prompt('Inserisci numero: ' + i);
  array.push(input);
  i++;
};

var sumElements = 0;
for (i = 0; i < array.length; i++) {
  sumElements = parseInt(array[i]) + sumElements;
};
console.log(sumElements);
