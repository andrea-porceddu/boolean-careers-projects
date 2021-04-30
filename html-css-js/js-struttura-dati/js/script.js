const terre = [
	{'nome': 'pianura', 'simbolo': 'w', 'colore': 'bianco'},
	{'nome': 'isola', 'simbolo': 'u', 'colore': 'blu'},
	{'nome': 'palude', 'simbolo': 'b', 'colore': 'nero'},
	{'nome': 'montagna', 'simbolo': 'r', 'colore': 'rosso'},
	{'nome': 'foresta', 'simbolo': 'g', 'colore': 'verde'}
]

const tipoBase = ['terra', 'creatura', 'incantesimo', 'artefatto', 'istantaneo', 'stregoneria']

const valoriForza = [1, 2, 3, 4, 5]

const rarità = [
	{'nome': 'comune', 'colore': 'nero'},
	{'nome': 'non comune', 'colore': 'argento'},
	{'nome': 'rara', 'colore': 'oro'}
]

const carte = [
	{
		// carta 1#
		'nome': 'Abbey Griffin', 
		'costoMana': {
			'manaGenerico': 3,
			'manaTerreCosto': 1,
			'manaTerreSimbolo': terre[0].simbolo,
			'manaCostoConvertito': 4
		},

		'tipo': {
			'tipoBase': tipoBase[0],
			'tipoCreatura': 'Griggin'
		},
		
		'rarità': {
			'nome': rarità[0].nome,
			'colore': rarità[0].colore
		},

		'potenza': {
			'forza': valoriForza[1],
			'costituzione': 2
		}

	},

	{
		// carta 2#
		'nome': 'Aberrant Researcher', 
		'costoMana': {
			'manaGenerico': 3,
			'manaTerreCosto': 1,
			'manaTerreSimbolo': terre[1].simbolo,
			'manaCostoConvertito': 4
		},

		'tipo': {
			'tipoBase': tipoBase[1],
			'tipoCreatura': 'Human Insect'
		},
		
		'rarità': {
			'nome': rarità[1].nome,
			'colore': rarità[1].colore
		},

		'potenza': {
			'forza': valoriForza[2],
			'costituzione': 2
		}

	},

	{
		// carta 3#
		'nome': 'Abyssal Specter', 
		'costoMana': {
			'manaGenerico': 2,
			'manaTerreCosto': 2,
			'manaTerreSimbolo': terre[2].simbolo,
			'manaCostoConvertito': 4
		},

		'tipo': {
			'tipoBase': tipoBase[1],
			'tipoCreatura': 'Specter'
		},
		
		'rarità': {
			'nome': rarità[1].nome,
			'colore': rarità[1].colore
		},

		'potenza': {
			'forza': valoriForza[1],
			'costituzione': 3
		}

	},

	{
		// carta 4#
		'nome': 'Blaze Commando', 
		'costoMana': {
			'manaGenerico': 3,
			'manaTerreCosto': 2,
			'manaTerreSimbolo': terre[3].simbolo + ' ' + terre[0].simbolo,
			'manaCostoConvertito': 5
		},

		'tipo': {
			'tipoBase': tipoBase[1],
			'tipoCreatura': 'Minotaur Soldier'
		},
		
		'rarità': {
			'nome': rarità[1].nome,
			'colore': rarità[1].colore
		},

		'potenza': {
			'forza': valoriForza[4],
			'costituzione': 3
		}

	},

	{
		// carta 5#
		'nome': 'Raging Regisaur', 

		'costoMana': {
			'manaGenerico': 2,
			'manaTerreCosto': 2,
			'manaTerreSimbolo': terre[3].simbolo + ' ' + terre[2].simbolo,
			'manaCostoConvertito': 4
		},

		'tipo': {
			'tipoBase': tipoBase[1],
			'tipoCreatura': 'Dinosaur'
		},
		
		'rarità': {
			'nome': rarità[1].nome,
			'colore': rarità[1].colore
		},

		'potenza': {
			'forza': valoriForza[4],
			'costituzione': 3
		}

  }, 
  
  {
		// carta 6#
		'nome': 'Abolish', 

		'costoMana': {
			'manaGenerico': 1,
			'manaTerreCosto': 2,
			'manaTerreSimbolo': terre[0].simbolo + ' ' + terre[0].simbolo,
			'manaCostoConvertito': 3
		},

		'tipo': {
			'tipoBase': tipoBase[4],
			'tipoCreatura': ''
		},
		
		'rarità': {
			'nome': rarità[1].nome,
			'colore': rarità[1].colore
		},

		'potenza': {
			'forza': '',
			'costituzione': ''
		}

	}

]

// console.log(carte)

// console.log(typeof(carte[0].potenza.forza)) // l'evento change cambia il tipo di dato: da number a string

/*

// mostra tutte le carte nel div card-name
const listaCarteHTML = document.getElementsByClassName('card-name')[0]
carte.forEach((el) => {
	listaCarteHTML.innerHTML += `
	<li>${el.nome}</li>
	`
})

// pusho in array forza tutti i valori (senza duplicati) della key forza presenti in carte
const arrayForza = []
carte.forEach((el) => {
	if (!arrayForza.includes(el.potenza.forza)) {
		arrayForza.push(el.potenza.forza)
	}
})

// metto nella select tutti i valori di array forza
const selectCarteForzaHTML = document.getElementsByClassName('cards-strengths-select')[0]
arrayForza.forEach((el) => {
	selectCarteForzaHTML.innerHTML += `
	<option value="${el}">${el}</option>
	`
})

selectCarteForzaHTML.addEventListener('change', (event) => {
  
  // parseInt di event.target.value che di default è stringa
  const value = parseInt(event.target.value)
  console.log(value) // isNaN se seleziono all
  console.log(typeof(value)) // sempre number perchè parsato

  listaCarteHTML.innerHTML = ''

  // creo nuovo array di oggetti dove pusho gli oggetti con proprietà potenza.forza = al valore della select
  // se all?
  const carteConForzaSelezionata = []
  carte.forEach((el) => {
    if (el.potenza.forza === value) {
      carteConForzaSelezionata.push(el)
      console.log(carteConForzaSelezionata);
    } else if (isNaN(value)) { // value isNaN però è un numero O_o
      carteConForzaSelezionata.push(el)
    }
  })

  // creo li da inserire all'interno del DOM per tutti gli oggetti all'interno dell'array di oggetti carteConForzaSelezionata
  // (che sono gli oggetti con proprietà potenza.forza = al valore della select) 
  carteConForzaSelezionata.forEach((el) => {
    listaCarteHTML.innerHTML += `
	  <li>${el.nome}</li>
	  `
  })
})

*/

/*

function stampaCarte(DOMelement, array) {
  array.forEach((el) => {
    DOMelement.innerHTML += `
    <li>${el.nome}</li>
    `
  })
}

function stampaValoriSelect(DOMelement, array) {
  array.forEach((el) => {
    DOMelement.innerHTML += `
    <option value="${el}">${el}</option>
    `
  })
}

const listaCarteHTML = document.getElementsByClassName('card-name')[0]
stampaCarte(listaCarteHTML, carte)
const selectCarteForzaHTML = document.getElementsByClassName('cards-strengths-select')[0]
stampaValoriSelect(selectCarteForzaHTML, valoriForza)
const selectCarteTipoHTML = document.getElementsByClassName('cards-type-select')[0]
stampaValoriSelect(selectCarteTipoHTML, tipoBase)


selectCarteForzaHTML.addEventListener('change', (ev) => {
  const strengthValue = selectCarteForzaHTML.value
  listaCarteHTML.innerHTML = ''
  const carteConForzaSelezionata = []
  carte.forEach((el) => {
    if (el.potenza.forza === +strengthValue) {
      carteConForzaSelezionata.push(el)
    } 
    if (strengthValue === 'all') {
      carteConForzaSelezionata.push(el)
    }
  })
  stampaCarte(listaCarteHTML, carteConForzaSelezionata)
})

selectCarteTipoHTML.addEventListener('change', (ev) => {
  const typeValue = selectCarteTipoHTML.value
  listaCarteHTML.innerHTML = ''
  const carteConTipoSelezionato = []
  carte.forEach((el) => {
    if (el.tipo.tipoBase === typeValue) {
      carteConTipoSelezionato.push(el)
    } 
    if (typeValue === 'all') {
      carteConTipoSelezionato.push(el)
    }
  })
  stampaCarte(listaCarteHTML, carteConTipoSelezionato)
})

*/

function stampaCarte(DOMelement, array) {
  array.forEach((el) => {
    DOMelement.innerHTML += `
    <li>${el.nome}</li>
    `
  })
}

function stampaValoriSelect(DOMelement, array) {
  array.forEach((el) => {
    DOMelement.innerHTML += `
    <option value="${el}">${el}</option>
    `
  })
}

const listaCarteHTML = document.getElementsByClassName('card-name')[0]
const selectCarteForzaHTML = document.getElementsByClassName('cards-strengths-select')[0]
const selectCarteTipoHTML = document.getElementsByClassName('cards-type-select')[0]
const resetButton = document.getElementsByClassName('rest-btn')[0]

stampaCarte(listaCarteHTML, carte)
stampaValoriSelect(selectCarteForzaHTML, valoriForza)
stampaValoriSelect(selectCarteTipoHTML, tipoBase)

resetButton.addEventListener('click', (ev) => {
  listaCarteHTML.innerHTML = ''
  stampaCarte(listaCarteHTML, carte)
})

selectCarteForzaHTML.addEventListener('change', (ev) => {
  const strengthValue = selectCarteForzaHTML.value
  listaCarteHTML.innerHTML = ''
  const carteConForzaSelezionata = carte.filter((el) => {  // creo nuovo array filtrato per el.potenza.forza = valore selects
    return el.potenza.forza === +strengthValue
  })
  stampaCarte(listaCarteHTML, carteConForzaSelezionata)
})

selectCarteTipoHTML.addEventListener('change', (ev) => {
  const typeValue = selectCarteTipoHTML.value
  listaCarteHTML.innerHTML = ''
  const carteConTipoSelezionato = carte.filter((el) => { // creo nuovo array filtrato per el.tipo.tipoBase = valore selects
    return el.tipo.tipoBase === typeValue
  })
  stampaCarte(listaCarteHTML, carteConTipoSelezionato)
})