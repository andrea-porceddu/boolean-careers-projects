/*
1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
*/

/* 1. --------------------------------------------------------------*/

// creo oggetto studente con keys: nome, cognome, anni
var studente = {
	'nome': 'Felice',
	'cognome': 'Mastro',
	'anni': '42',
}
console.log(studente)

/*
// ciclo for per stampare in console i valori dell'oggetto studente
for (key in studente) {
	console.log(studente[key]);
}
*/

/* 
// lunghezza oggetto studente 'undefined'
console.log('lunghezza oggetto studente: ' + studente.length);
*/

// proprietà = key e valore
for (key in studente) {
	console.log(key + ' - ' + studente[key])
}

/* 1. --------------------------------------------------------------*/

/* 2. --------------------------------------------------------------*/
// creo array studenti di oggetti
var studenti = [
	{ 'nome': 'Santa', 'cognome': 'Pazienza', },
	{ 'nome': 'Bigo', 'cognome': 'Lino', 'anni': '23' }, // aggiunta key anni per evitare di stamparla insieme a nome e cognome
	{	'nome': 'Salsa', 'cognome': 'Rosa',	},
	{	'nome': 'Era', 'cognome': 'Natale', },
	{ 'nome': 'Primo', 'cognome': 'Decimo', }
]

/*
// lunghezza array srudenti '5'
console.log('lunghezza array studenti: ' + studenti.length);
*/

/*
// ciclo l'array e per ogni oggetto stampo nome e cognome - stampa anche anni di Bigo Lino
for (key in studenti) {
	console.log(studenti[key]);
}
*/


for (key in studenti) {

	console.log(studenti[key].nome + ' - ' + studenti[key].cognome)

	// for (var i = 0; i < studenti.length; i++) {
	// 	console.log(studenti[i].nome + ' - ' + studenti[i].cognome);
	// }

}

/* 2. --------------------------------------------------------------*/

/* 3. --------------------------------------------------------------*/

// aggiungo all'array di oggetti studenti
for (var i = 0; i < 3; i++) {

	var nuovoStudente = {}

	nuovoStudente.nome = prompt('Come ti chiami?')
	nuovoStudente.cognome = prompt('Qual\'è il tuo cognome')
	nuovoStudente.anni = prompt('Quanti anni hai?')

	studenti.push(nuovoStudente)

}

console.log(studenti);

/* 3. --------------------------------------------------------------*/
