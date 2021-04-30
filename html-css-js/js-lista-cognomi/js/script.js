var stringArray = [
  'Pippo',
  'Franco',
  'Franchi',
  'Pluto',
  'Ingrassia',
  'Alloro',
  'Brasile',
  'Bibbio',
  'Gubbio',
  'Rosa',
];

// // sort() works with uppercase first character and strings - no numbers
// var input = prompt('Inserisci qualcosa');
// console.log(array);
// if (input) {
//   stringArray.push(input);
//   stringArray.sort();
// }
// console.log(stringArray);

// // lowercase first character - toUpperCase()/toLowerCase() methods does not change the original string
// // trying to put each stringArray element, and transform it to lowercase, inside another Array. After sort() it
// var input = prompt('Inserisci qualcosa');
// if (input) {
//   stringArray.push(input);
// }
// // stringArray lowercase transform
// var lowerCaseArray = [];
// for (i = 0; i < stringArray.length; i++) {
//   lowerCaseArray.push(stringArray[i].toLowerCase());
// };
// lowerCaseArray.sort();
// console.log(lowerCaseArray);

// // while variant
// var i = 0;
// var lowerCaseArray = [];
// var input = prompt('Inserisci qualcosa');
// stringArray.push(input);
// while (i < stringArray.length) {
//   lowerCaseArray.push(stringArray[i].toLowerCase());
//   i++;
// }
// lowerCaseArray.sort();
// console.log(lowerCaseArray);

//tring to capitalize firt character of each array alement - done with CSS
var i = 0;
var lowerCaseArray = [];
var input = prompt('Inserisci qualcosa');
stringArray.push(input);
while (i < stringArray.length) {
  lowerCaseArray.push(stringArray[i].toLowerCase());
  i++;
};
//sort lowerCaseArray array
lowerCaseArray.sort();
// console.log(lowerCaseArray);
// put inside array-list ul each array alement inside list items
var listaOutput = document.getElementById('array-list');
for (i = 0; i < lowerCaseArray.length; i++) {
  listaOutput.innerHTML += '<li>' + lowerCaseArray[i] + '</li>'
};
// searching uman position ,array index + 1, for input inside lowerCaseArray
var umanPosition = lowerCaseArray.indexOf(input) + 1;
// console.log(umanPosition);
var inputPosition = document.getElementById('input-position');
inputPosition.innerHTML += '<span>' +
'L\'elemento aggiunto si trova nella posizione: ' +
umanPosition + '</span>';
