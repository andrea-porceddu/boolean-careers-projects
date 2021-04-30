/* 2. ES5
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
nomi e falli subiti e stampiamo tutto in console. */

// array footballClubs di oggetti
var footballClubs = [
	{'name': 'AC Milan', 'pt': '0', 'fs': '0'},
	{'name': 'Inter', 'pt': '0', 'fs': '0'},
	{'name': 'Napoli', 'pt': '0', 'fs': '0'},
	{'name': 'AS Roma', 'pt': '0', 'fs': '0'},
	{'name': 'Juventus', 'pt': '0', 'fs': '0'},
]
// console.log(footballClubs);

// funzione genera numero random
function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min)
}

/* scorro l'array di oggetti footballClubs e per ogni oggetto salvo in una variabile ogni singolo oggetto 
dell'array footballClubs e per ognuno di essi assegno alle keys pt e fs numeri random come valore */
for (var y = 0; y < footballClubs.length; y++) {
	var thisClub = footballClubs[y]
	thisClub.pt = randomNum(1, 200)
	thisClub.fs = randomNum(1, 200)
}

/* creo NUOVO array di oggetti e per la lunghezza dell'array di oggetti footballClubs salvo in una variabile 
ogni oggetto di footballClubs e per ognuno di essi pusho nel nuovo array il nome e i falli subiti di ogni 
oggetto dell'array footballClubs */
var arr = []
for (var z = 0; z < footballClubs.length; z++) {
	var thisClub2 = footballClubs[z]
	arr.push({'name': thisClub2.name}, {'fs': thisClub2.fs})
}

// stampa utilizzando backtick e template literal
for (var e = 0; e < footballClubs.length; e++) {
	console.log(`Nome squadra: ${footballClubs[e].name} - Falli subiti: ${footballClubs[e].fs}`)
}