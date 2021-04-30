// --------------------------------------- INIZIO PRIMA PARTE --------------------------------------- //
// Il calcolatore deve generare 16 numeri compresi tra 1 e 100 senza duplicati
// creo funzione che genera 16 numeri tra 1 e 100
// function randomNum(min, max) {
// 	return Math.floor(Math.random() * (max + 1 - min) + min);
// };

// riempio un array di 16 numeri generati casualmente
// var randomNumbers = [];
// var i = 0;
// var randomNumbersLength = 16;
// for (i = 0; i < randomNumbersLength; i++) {
// 	randomNumbers.push(randomNum(1, 100));
// }
// console.log(randomNumbers);
// console.log(i);

// per controllare che non ci siano numeri uguali all'interno dell'array utilizzo un secondo indice j con valore i + 1
// in modo da poter confrontare il numero in posizione i (fissa per un ciclo) e il secondo numero in posizione j = i + 1 (incrementata di 1 per un ciclo)

// es. primo valore array ha i = 0, e j = i + 1 (j = 1)
// 		 il primo valore dell'array viene confrontato con il secondo valore dell'array stesso ossia: array[i] === array[j] ??
//		 se il primo valore dell'array non è strettamente uguale al secondo incremento j di 1 per passare al valore successivo dell'array (i resta fisso a 0)
//     dopo aver ciclato l'array incremento i di 1 per passare al valore, di posizione successiva alla precedente, da confrontare
//     (una volta uscito dal ciclo j riassume il valore di i + 1)
// 		 dopo aver incrementato i di 1, i = 1 e j = i + 1 (j = 2) 
//     incrociare le dita!

// utilizzo nuovi indici
// ho creato un ciclo do while con all'interno un altro ciclo for
// per confrontare il valore di array[x] (sempre lo stesso valore dell'array)
// con array[j] (j = x + 1 e viene incrementato di 1 fino a quando raggiunge la lunghezza massima dell'array)
// il tutto fino a quando anche x non raggiunge lal lunghezza dell'array
// es. x = 0 - j = 1 ==> j = 2 ==> j = array.length
//		 x = 1 - j = 2 ==> j = 3 ==> j = array.length e cosi via
// var x = 0;
// var j;
// do {
// 	for (j = x + 1; j <= randomNumbers.length; j++) {
// 		if (randomNumbers[x] === randomNumbers[j]) {
// 			// console.log(randomNumbers[x] + ' ' + randomNumbers[j]); // quando trovo duplicati li stampo e qualche volta escono numeri dopra le centinaia ?_? ovvio facevo la somma console.log(randomNumbers[x] + randomNumbers[j]);
// 			randomNumbers.splice(x, 1, randomNum(1, 100)); // splice() https://www.javascripttutorial.net/javascript-array-splice/
// 		}
// 	}
// 	x++;
// } while (x < randomNumbers.length);

// controllo se effettivamente sto stampando l'array interessato
// var newRandomNumbers = randomNumbers;
// console.log(newRandomNumbers);

// console.log(randomNumbers);

// TODO: potrei fare una funzione per sostituire i duplicati nell'array - commento sopra e riscrivo sotto
// ---------------------------------------- FINE PRIMA PARTE ---------------------------------------- //

// -------------------------------------- INIZIO SECONDA PARTE -------------------------------------- //
// il calcolatore chiede all'utente 100 - 16 volte di inserire un numero compreso tra 1 e 100
// inizio nel chiedere un massimo di 10 numeri
// l'utente non può inserire duplicati (o due volte lo stesso numero ??)

// // controllo la lunghezza dell'array in caso sia vuoto e in caso ci sia un elemento all'interno
// console.log(userArray.length);
// var userNumber = parseInt(prompt('inserisci numero'));
// userArray.push(userNumber);
// console.log(userArray.length);

// // faccio un ulteriore prova
// console.log(userArray.length);
// console.log(userArray.length + 1);

// // ancora una prova ...
// var userArrayLength = userArray.length + 10;
// console.log(userArrayLength);

// creo un'array per l'utente dove salvo i numeri inseriti uno alla volta e uno alla volta lo confronto con gli altri elementi dell'array
// uso .includes() per verificare che il numero inserito dall'utente non sia presente all'interno dell'array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// se così fosse decremento y di 1 per tornare allo step precente in cui l'utente inserisci il numero
// eseguo anche un controllo sul numero se uguale a 0 dato che all'interno dell'array del calcolatore sono presenti solo numeri compresi tra 1 e 100 escluso lo 0
/* var userArray = [];
var userNumber;
var userMaxNumbers = 10;
var y = 1;
do {
	userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
	if (userArray.includes(userNumber)) {
		alert('ATTENZIONE! Inserisci un numero diverso da ' + userNumber);
		y--;
	} else if (userNumber === 0) {
		alert('ATTENZIONE! Inserisci un numero diverso da 0');
		y--;
	}	else {
		userArray.push(userNumber);
	}
	y++;
} while (y <= userMaxNumbers);
console.log(userArray); */

// l'algorito di sopra funziona - adesso però devo confrontare i numeri inseriti dall'utente con i numeri presenti nell'array del calcolatore 
// (ad ogni numero inserito) e fermare il gioco nel momento un solo numero sia presente nell'array del calcolatore
// devo utilizzare anche un contatore per il punteggio dell'utente (il punteggio potrebbe essere la lunghezza dell'array utente)

// utilizzo l'algoritmo di sopra e lo modifico
// var userArray = [];
// var userNumber;
// var userMaxNumbers = 10;
// var y = 1;
// // var points = 0;
// do {
// 	userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
// 	if (userArray.includes(userNumber)) {
// 		alert('ATTENZIONE! Inserisci un numero diverso da ' + userNumber);
// 		y--;
// 	} else if (userNumber === 0 || !userNumber) {
// 		alert('ATTENZIONE! Inserisci un numero valido e diverso da 0');
// 		y--;
// 	}	else if (randomNumbers.includes(userNumber)) {
// 		alert('BUM! Il numero bomba è ' + userNumber + '. Hai totalizzato ' + userArray.length +' punto/i!');
// 		break;
// 	} else {
// 		userArray.push(userNumber);
// 	}
// 	y++;
// 	if (y === userMaxNumbers + 1) {
// 		alert('OTTIMO! Hai raggiunto il massimo punteggio: ' + userMaxNumbers + ' punti');
// 		break;
// 	}
// 	// points++;
// } while (y <= userMaxNumbers);
// console.log(userArray);

// se l'utente non inserisce nulla al primo prompt il primo risultato dell'array è NaN
// risolto con (|| !userNumber)
// --------------------------------------- FINE SECONDA PARTE --------------------------------------- //

// -------------------------- COMMENTO TUTTO SOPRA E LAVORO SULLE FUNZIONI -------------------------- //

// 1. funzione per generare un numero random
// function randomNum(min, max) {
// 	return Math.floor(Math.random() * (max + 1 - min) + min);
// };

// // 2. funzione per eliminare duplicati in un array 
// // utilizzo la funzione precedente per randomizzare un nuovo numero e sostituirlo al duplicato
// function delDuplicates(arrayToCheck) {
// 	var x = 0;
// 	var j;
// 	do {
// 		for (j = x + 1; j <= arrayToCheck.length; j++) {
// 			if (arrayToCheck[x] === arrayToCheck[j]) {
// 				arrayToCheck.splice(x, 1, randomNum(1, 100));
// 			}
// 		}
// 		x++;
// 	} while (x < arrayToCheck.length);
// 	return arrayToCheck;
// }

/* ----------------------------------------------------------
var pcRandomNumbers = [];
var pcNumbers = [];
var pcMaxNumbers = 16;
var i = 0;
for (i = 0; i < pcMaxNumbers; i++) {
	pcRandomNumbers.push(randomNum(1, 100));
}
console.log(pcRandomNumbers);
pcNumbers = delDuplicates(pcRandomNumbers);
console.log(pcNumbers);
// nella console visualizzo in orizzontale due array
// alcune volte ci sono numeri diversi nella stessa posizione per entrambe gli array
// penso che la funzione per eliminare i duplicati funzioni
// come apro gli array dal menu a tendina della console i due array hanno esattamente gli stessi elementi o_O 
---------------------------------------------------------- */

// // 3. funzione per generare un array di N numeri senza duplicati
// // il campominato
// function generateMineField(arrayMineField, mines) {
// 	var arrayMineField = [];
// 	var mines;
// 	var i = 0;
// 	for (i = 0; i < mines; i++) {
// 		arrayMineField.push(randomNum(1, 100));
// 	}
// 	return delDuplicates(arrayMineField);
// }

// // contorta sta cosa ...
// var pcMineField = [];
// var pcMines = 16;
// pcMineField = generateMineField(pcMineField, pcMines);
// console.log(pcMineField);

// // 3. funzione per generare array di N numeri
// function generateArray(length) {
// 	var array = [];
// 	var i = 0;
// 	for (i = 0; i < length; i++) {
// 		array.push(randomNum(1, 100));
// 	}
// 	return array;
// }

// var mineField = generateArray(16);
// // mineField.push(generateArray(16));
// console.log('mineField with duplicates:       ' + mineField + ' length: ' + mineField.length);
// // non elimina i duplicati :(
// // mineField = delDuplicates(mineField);
// // console.log(mineField);
// var pcMineField = delDuplicates(mineField);
// console.log('pcMineField without duplicates:  ' + pcMineField + ' length: ' + pcMineField.length);
// // adesso funziona -- non è vero

// // 2. controllo se effivamente la funzione funziona :D
// function delDuplicates(arrayToCheck) {
// 	var x = 0;
// 	var j;
// 	do {
// 		for (j = x + 1; j <= arrayToCheck.length; j++) {
// 			if (arrayToCheck[x] === arrayToCheck[j]) {
// 				console.log('trovato duplicato: ' + arrayToCheck[x] + ' = ' + arrayToCheck[j] );
// 				arrayToCheck.splice(x, 1, 5); // metto valore fisso
// 			}
// 		}
// 		x++;
// 	} while (x < arrayToCheck.length);
// 	return arrayToCheck;
// } // non funzia

// var prova = generateArray(20);
// console.log('prova:  ' + prova);
// var prova2 = delDuplicates(prova);
// console.log('prova2: ' + prova2);

// 2. provo funzione per generare array di N numeri da 1 a 100 univoci
// https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
};

function arrayOfUniqueNumbers(length) {
	var arr = [];
	while(arr.length < length) {
		var i = Math.floor(randomNum(1, 100));
		if(arr.indexOf(i) === -1) {
			arr.push(i);
		}
	}
	return arr;
}

// campo minato
var pcMineField = arrayOfUniqueNumbers(16);
// console.log('pcMineField: ' + pcMineField);

// gioco
var userArray = [];
var y = 1;
var userNumber;
var userChances = 10;
do {
	userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
	if (userArray.includes(userNumber)) {
		alert('ATTENZIONE! Inserisci un numero diverso da ' + userNumber);
		y--;
	} else if (userNumber === 0 || !userNumber) {
		alert('ATTENZIONE! Inserisci un numero valido e diverso da 0');
		y--;
	}	else if (pcMineField.includes(userNumber)) {
		alert('BUM! Il numero bomba è ' + userNumber + '. Hai totalizzato ' + userArray.length +' punto/i!');
		break;
	} else {
		userArray.push(userNumber);
	}
	y++;
	if (y === userChances + 1) {
		alert('OTTIMO! Hai raggiunto il massimo punteggio: ' + userArray.length + ' punti');
		break;
	}
} while (y <= userChances);
// console.log(userArray);