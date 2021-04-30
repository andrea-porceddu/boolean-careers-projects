// 1. ES6
const negozio2 = [
	{'nome': 'bici01', 'peso': '23',}, // 0
	{'nome': 'bici02', 'peso': '25', },	// 1
	{'nome': 'bici03', 'peso': '12', },	// 2
	{'nome': 'bici04', 'peso': '7', },	// 3
	{'nome': 'bici05', 'peso': '9', },	// 4
]

let pesoMin2 = 0
for (let i = 0; i < negozio2.length; i++) {
	for (let j = 0; j < negozio2.length; j++) {
		// console.log(negozio[i].peso)
		if (parseInt(negozio2[j].peso) < parseInt(negozio2[i].peso)) {
			pesoMin2 = parseInt(negozio2[j].peso)
		}
	}
}
// console.log(pesoMin2)
// stampa
console.log(`La bici con peso minore ha un peso di ${pesoMin2} kg`)