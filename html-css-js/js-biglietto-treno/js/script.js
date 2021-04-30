var km = 0.21;
var kmToGo = prompt('Quanti km vuoi percorrere?');
if (isNaN(kmToGo)) {
    alert('Kilometraggio non valido, inserisci un numero.');
};
var age = prompt('Inserisci la tua età');
if (isNaN(age)) {
    alert('Età non valida, inserisci un numero.');
};
// console.log(kmToGo);
// console.log(age);
if (age < 18) {
    var ticketPrice = ((km * kmToGo) * 20) / 100;
} else if (age > 65) {
    var ticketPrice = ((km * kmToGo) * 40) / 100;
} else {
    var ticketPrice = ((km * kmToGo));
};
// console.log(ticketPrice);
document.getElementById('result').innerText = 'Il prezzo del tuo biglietto è di ' +
    ticketPrice + ' €';