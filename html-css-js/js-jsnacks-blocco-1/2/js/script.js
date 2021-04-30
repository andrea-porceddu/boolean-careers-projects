var firstWord = prompt('Inserisci prima parola');
var secondWord = prompt('Inserisci seconda parola');
// console.log(Math.max(primaParola.lenght, secondaParola.lenght));
var output;
if (firstWord.length > secondWord.length) {
  output = firstWord + ' ha una lunghezza maggiore di ' + secondWord;
} else if (firstWord.length === secondWord.length) {
  output = firstWord + ' e ' + secondWord + ' hanno una lunghezza equivalente';
} else {
  output = secondWord + ' ha una lunghezza maggiore di ' + firstWord;
};
console.log(output);
