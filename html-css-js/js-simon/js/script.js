// // console.log('ciao');

// /*
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// */

// /* 1. ho bisogno di 5 numeri casuali quindi ne genero uno per 5 volte */
// // funzione genera numero random compreso fra min max
// function randomNum(min, max) {
// 	return Math.floor(Math.random() * (max + 1 - min) + min);
// };

// // funzione genera numeri univoci da 1 a 50
// function arrayOfUniqueNumbers(length) {
// 	var arr = [];
// 	while(arr.length < length) {
// 		var i = randomNum(1, 50);
// 		if(arr.indexOf(i) === -1) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }

// var pcArr = (arrayOfUniqueNumbers(5))
// console.log(pcArr);

// // stampo i numeri generati causlamente all'interno dello span numeri-casuali
// document.getElementsByClassName('numeri-casuali')[0].innerText = pcArr;

// var element = document.getElementsByClassName('counter')[0];
// var secondsNum = 30;
// element.innerText = secondsNum;
// // funzione counter 30 secondi
// var countdown = setInterval(function() {
// 	secondsNum--;
// 	element.innerText = secondsNum;

// 	if (secondsNum === 0) {
// 		clearInterval(countdown);
// 	}

// }, 1000);

// // 2. alert('Hai 30 secondi per memorizzare questi numeri' + '\n' + arr);
// // l'alert mostra i numeri all'utente ma può chiudersi dopo tot secondi per dare all'utente il tempo di memorizzare i numeri ??

// // ho creato un div numeri 'numeri' con all'interno un altro div 'modal'.
// // all'interno di modal ci sono 3 span, uno con del semplice testo, uno con il counter dei secondi trascorsi ed l'ultimo vuoto dove inserisco l'arr dei numeri generati casualmente 
// // posso fare in modo che:
// // 1. il modal si nasconde dopo 30 secondi
// // 2. parte il prompt dopo 30 secondi

// // nascondo il div modal dopo 30 secondi
// // di default ha display: block;
// setTimeout(function() {
// 	document.getElementsByClassName('modal')[0].style.display = 'none';
// }, (30000));

// // 3. l'utente deve inserire i numeri in sequenza (per 5 volte come i numeri generati all'inizio)
// // se il numero inserito è presente in arr verrà salvato altrimenti scartato
// setTimeout(function() {
// 	var userArr = [];
// 	var userInput;
// 	var j = 0;
// 	for (j = 0; j < pcArr.length; j++) {
// 		userInput = parseInt(prompt('Inserisci numero'));
// 		if (pcArr.includes(userInput)) {
// 			userArr.push(userInput);
// 		}
// 	}

// 	// // output = quantità dei numeri ricordati - (userArr.length)
// 	// // output = i numeri ricordati - (userArr)
// 	// console.log('Hai ricordato ben ' + userArr.length + ' numeri');
// 	// console.log('I numeri ricordati sono:  ' + userArr);

// 	// se nessun numero ricordato
// 	if (userArr.length === 0) {
// 		document.getElementsByClassName('how-many')[0].innerText = 'Nessun numero ricordato';
// 	}	else {
// 		document.getElementsByClassName('how-many')[0].innerText = 'Hai ricordato ' + userArr.length + ' numeri!';
// 		document.getElementsByClassName('which-num')[0].innerText = 'I numeri ricordati sono: ' + userArr;
// 	}

// }, 30000);
// /* ---------------------------------------------------------------------------------- */

// funzione random num compreso tra min e max
function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
};

// funzione array of unique number (da min = 1 a max = 50) di lunghezza definita
function arrayOfUniqueNumbers(length) {
	var arr = [];
	while(arr.length < length) {
		var i = randomNum(1, 50);
		if(arr.indexOf(i) === -1) {
			arr.push(i);
		}
	}
	return arr;
}

// counter - prendo l'oggetto counter e mostro secondsNum a partire da 30
// il metodo setInterval continua a chiamare la funzione assegnata alla var countdown
// fino a quando secondsNum è = a 0 dopodichè clearInterval ferma la funzione setInterval 
var element = document.getElementsByClassName('counter')[0];
var secondsNum = 30;
element.innerText = secondsNum;
var countdown = setInterval(function() {
	secondsNum--;
	element.innerText = secondsNum;

	if (secondsNum === 0) {
		clearInterval(countdown);
	}

}, 1000);

// funzione timing - dopo 30 secondi il div modal passa da uno stato display block a display none
// poi partono i prompt per l'inserimento dei numeri, uno alla volta.
// l'utente inserisce tanti numeri quanti la lunghezza dell'array generato in partenza (pcArr)
// alla fine vengono mostrati gli output: quantità e quali numeri
setTimeout(function() {
  document.getElementsByClassName('modal')[0].style.display = 'none';
  
  var userArr = [];
	var userInput;
	var j = 0;
	for (j = 0; j < pcArr.length; j++) {
		userInput = parseInt(prompt('Inserisci numero'));
		if (pcArr.includes(userInput)) {
			userArr.push(userInput);
		}
  }
  
  // se array utente vuoto mostra stringa 'nessun numero ricordato'
  // altrimenti mostra output
	if (userArr.length === 0) {
		document.getElementsByClassName('how-many')[0].innerText = 'Nessun numero ricordato';
	}	else {
		document.getElementsByClassName('how-many')[0].innerText = 'Hai ricordato ' + userArr.length + ' numeri!';
		document.getElementsByClassName('which-num')[0].innerText = 'I numeri ricordati sono: ' + userArr.join(' - ');
	}

}, (30000));

// array di lunghezza 5 generato in partenza attraverso le due funzioni precedenti
// dopodichè viene mostrato all'utente
var pcArr = (arrayOfUniqueNumbers(5))
console.log(pcArr);
document.getElementsByClassName('numeri-casuali')[0].innerText = pcArr.join(' - ');