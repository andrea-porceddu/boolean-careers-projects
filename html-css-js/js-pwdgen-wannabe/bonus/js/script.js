//Trying to decrease lines of code.

// document.getElementById('result').innerText =
// prompt('Inserisci Nome') + 
// prompt('Inserisci Cognome') + 
// prompt('Inserisci Colore Preferito');

//Trying number input validation

// var name = prompt('Inserisci Nome');
// if (name === '') {
//     alert('Il campo è vuoto');
// } else {
//     var name = name;
// }
// var age = prompt('Inserisci età');
// if (age === '') {
//     alert('Il campo è vuoto');
// } else if (isNaN(age)) {
//     alert('Inserisci età valida');  //isNaN(variable)
// } else
// var age = age;
// var output = name + ' ' + age;
// document.getElementById('result').innerText = output; //null if empty

// Trying arrays

var output = [
    prompt('Inserisci il tuo nome'),
    prompt('Inserisci la tua età'),
    prompt('Inserisci il tuo colore preferito')
];
document.getElementById('result').innerText = output;