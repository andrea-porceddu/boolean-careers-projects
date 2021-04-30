students = [
	{'nome': 'ciccio', 'cognome': 'cicci', 'anni': '15', 'classe': 2, 'promosso': false},
	{'nome': 'mastro', 'cognome': 'mastri', 'anni': '14', 'classe': 1, 'promosso': true},
	{'nome': 'ennio', 'cognome': 'annio', 'anni': '17', 'classe': 4, 'promosso': true},
	{'nome': 'fulvio', 'cognome': 'fulvi', 'anni': '16', 'classe': 3, 'promosso': false},
	{'nome': 'renzo', 'cognome': 'renzi', 'anni': '18', 'classe': 5, 'promosso': true},
]

/* ------------------- 1

function stampa(DOMelement, array) {
  array.forEach((el) => {
    DOMelement.innerHTML += `
    <li>${el.nome}</li>
    `
  })
}

const domElem = document.getElementsByClassName('students')[0]

const bocciati = students.filter((el) => {
	return !el.promosso
})

stampa(domElem, bocciati)

---------------------- */ 

/* ------------------- 2

const promossi = students.map((el) => {
	if (el.promosso) {
		return el.classe + 1
	}
	return el.classe
})

console.log(promossi);

// console.log(typeof(promossi[0]));

const newArr = promossi.filter((el) => {
	return el < 6
})

console.log(newArr);

---------------------- */

// ------------------- 3

let squadra = students.map((el) => { // destrutturare e creare nuovo oggetto
	if (el.promosso) {
		el.voto = Math.floor(Math.random() * (10 - 5 + 1) + 5)
	}
	return el
})

console.log(squadra);

const capitano = squadra.filter((el) => {
	return 
})

console.log(capitano);