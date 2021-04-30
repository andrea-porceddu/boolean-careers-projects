/* 1. ES5
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)*/

/* creo array negozio di oggetti
ogni oggetto ha proprietà nome e peso */
var negozio = [
	{
		'nome': 'bici01', 
		'peso': '12', 
	}, // 0
	{'nome': 'bici02', 'peso': '17', },	// 1
	{'nome': 'bici03', 'peso': '8', },	// 2
	{'nome': 'bici04', 'peso': '24', },	// 3
	{'nome': 'bici05', 'peso': '12', },	// 4
]
// console.log(negozio.length);

/* creo variabile inizializzata a 0 che mi servirà come variabile temporanea a cui assegnare il valore 
della key peso di ogni oggetto. pesoMin assume il valore minore confrontando il valore di peso di ogni oggetto */
var pesoMin = 0
for (var i = 0; i < negozio.length; i++) {
	for (var j = 0; j < negozio.length; j++) {
		// console.log(negozio[i].peso)
		if (parseInt(negozio[j].peso) < parseInt(negozio[i].peso)) {
			pesoMin = parseInt(negozio[j].peso)
		}
	}
}
// console.log(pesoMin)
// stampa utilizzando backtick e template literal
console.log(`La bici con peso minore ha un peso di ${pesoMin} kg`)

/* --- Ottavio correction --- io avevo messo apici su valori peso
// salvo l'oggetto in posizione 0 dell'array
var bici = negozio[0]
// console.log(negozio[0])

// parto da posizione 1 dell'array e confronto l'oggetto bici
for (var i = 1; i < negozio.length; i++) {
	if (negozio[i].peso < bici.peso) {
		bici = negozio[i]
	}
}
console.log(bici) */