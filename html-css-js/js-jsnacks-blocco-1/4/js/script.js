var array = [
  'Pippo',
  'Ciccio',
  'Eolo',
  'Paolo',
  'Ricky',
];

var input = prompt('inserisci il tuo nome');

for (var i = 0; i < array.length; i++) {

  if (input === array[i]) {
    var output = 'E in lista, può entrare';
  } else {
    var output = 'Non è in lista, non può entrare';
  }

}

console.log(output);
