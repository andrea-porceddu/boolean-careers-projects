// 2. ES6
let footballClubs3 = [
	{'name': 'Atalanta', 'pt': '0', 'fs': '0'},
	{'name': 'SS Lazio', 'pt': '0', 'fs': '0'},
	{'name': 'Sassuolo', 'pt': '0', 'fs': '0'},
	{'name': 'Verona', 'pt': '0', 'fs': '0'},
	{'name': 'Sampdoria', 'pt': '0', 'fs': '0'},
]
// console.log(footballClubs3)

function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min)
}

for (let x = 0; x < footballClubs3.length; x++) {
	let thisClub3 = footballClubs3[x]
	thisClub3.pt = randomNum(1, 200)
	thisClub3.fs = randomNum(1, 200)
}
// console.log(footballClubs3)

let newArr = []
for (let k = 0; k < footballClubs3.length; k++) {
	let thisClub3 = footballClubs3[k]
	newArr.push({'name': thisClub3.name}, {'fs': thisClub3.fs})
}

// stampa
for (let g = 0; g < footballClubs3.length; g++) {
	console.log(`Nome squadra: ${footballClubs3[g].name} - Falli subiti: ${footballClubs3[g].fs}`)
}