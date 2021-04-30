/* Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
*/


// Array di oggetti icone
const iconsObj = [
	{'name': 'frog', 'prefix': 'fa', 'type': 'animal', 'family': 'fas'},
	{'name': 'crow', 'prefix': 'fa', 'type': 'animal', 'family': 'fas'},
	{'name': 'spider', 'prefix': 'fa', 'type': 'animal', 'family': 'fas'},
	{'name': 'carrot', 'prefix': 'fa', 'type': 'vegetable', 'family': 'fas'},
	{'name': 'pepper-hot', 'prefix': 'fa', 'type': 'vegetable', 'family': 'fas'},
	{'name': 'apple-alt', 'prefix': 'fa', 'type': 'vegetable', 'family': 'fas'},
	{'name': 'fighter-jet', 'prefix': 'fa', 'type': 'aircraft', 'family': 'fas'},
	{'name': 'helicopter', 'prefix': 'fa', 'type': 'aircraft', 'family': 'fas'},
	{'name': 'plane', 'prefix': 'fa', 'type': 'aircraft', 'family': 'fas'}
]

/*
// salvo in una variabile l'oggetto icons-container
const iconsEl = document.getElementsByClassName('icons-container')[0]
// console.log(iconsEl);

// per ogni oggetto di iconsObj scrivo all'interno di icons-container un div che contiene l'icona ( la classe del tag i formata dal valore della key family e prefix-name ) e il valore della key name
iconsObj.forEach((ob) => {

	// destrutturare
	const {family, prefix, name} = ob

	iconsEl.innerHTML += `
	<div>
		<i class="${family} ${prefix}-${name}"></i>
		<span>${name}</span>
	</div>
	`
})
*/


/*
Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.
*/

/*
// assegno ad ogni oggetto icona una nuova proprietà 'color': 'color'
iconsObj.forEach((el, i) => {
	const {type} = el
	if (type === 'animal') {
		iconsObj[i].color = 'orange'
	}
	if (type === 'vegetable') {
		iconsObj[i].color = 'red'
	}
	if (type === 'aircraft') {
		iconsObj[i].color = 'blue'
	}
})
*/

/*
// after in class room correction by Alfredo
const iconsColor = ['orange', 'red', 'blue']
const iconsType = []
const iconsDiv = document.getElementsByClassName('icons-container')[0]

// per ogni oggetto, di array di oggetti iconObj, se la lista iconsType iniziallizzata sopra non include la key type
// dell'oggeto allora la pusho nella lista stessa (quindi in iconstype verranno pushati: animal, vegetable e aircraft)
iconsObj.forEach((el) => {
  // destrutturo
  const {type, name, prefix, family} = el
  // popolo array iconsType con la key type di el
	if (!iconsType.includes(el.type)) {
		iconsType.push(el.type)
  }
  // indexOf della key type = valore !== da -1
  // quindi 0 per animal; 1 per vegetable; 2 per aircraft *
  const indexType = iconsType.indexOf(el['type'])
  // console.log(indexType);

  // [animal, vegetable, aircraft] = [orange, red, blue]
  //    0         1         2      =    0      1    2
  if (indexType !== -1) {
    // console.log(iconsColor[indexType]);
    el.color = iconsColor[indexType]
  }
  iconsDiv.innerHTML += `
	<div>
		<i class="${family} ${prefix}-${name}" style="color: ${el.color};"></i>
		<span>${name}</span>
	</div>
	`
})
// console.log(`iconsType Array: ${iconsType}`);
// console.log(`iconsColor Array: ${iconsColor}`);
// console.log(`iconsObj Object con nuova key color:`, iconsObj);
// after in class room correction by Alfredo
*/

/*
Milestone 3:
- Aggiungere una select per filtrare le icone in base al tipo.
- Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
*/

/*
// Ottavio in classroom code
const boxFiltered = document.getElementById('box-filtered')
const colorSelect = document.getElementsByClassName('color-select')[0]
// array nel quale viene pushato il valore della key color dell'oggetto dentro l'array di oggetti iconsObj
const colorList = []

// popolo array colorList con il valore della key color dell'array di oggetti iconsObj
iconsObj.forEach((element) => {
  if(!colorList.includes(element.color)) {
    colorList.push(element.color)
  }
})

// inserisco i valori (colori) dell'array popolato prima (colorList) nelle options della select
colorSelect.innerHTML = `<option value="all">all</option>`
colorList.forEach((element) => {
  colorSelect.innerHTML += `
    <option value="${element}">${element}</option>
	`
})
// Ottavio in classroom code
*/

const optionsType = []
const colorSelect = document.getElementsByClassName('color-select')[0]
const iconsDiv = document.getElementsByClassName('icons-container')[0]

iconsObj.filter((el) => {
	if(!optionsType.includes(el.type)) {
    optionsType.push(el.type)
  }
})
console.log(`Types di iconsObj: ${optionsType}`);

optionsType.forEach((el) => {
	colorSelect.innerHTML += `
    <option value="${el}">${el}</option>
	`
})

colorSelect.addEventListener('change', (event) => {
	// console.log(`${event.target.value}`);

	iconsDiv.innerHTML = ''

	const typeSelected = `${event.target.value}`

	let filteredArr = iconsObj
	if (typeSelected.length > 0) {
		filteredArr = iconsObj.filter((el) => {
			return el.type === typeSelected
		})
	}
	
	// console.log(filteredArr);

	filteredArr.forEach((el) => {

		iconsDiv.innerHTML += `
		<div>
		<i class="${el.family} ${el.prefix}-${el.name}" style="color: ${el.color};"></i>
		<span>${el.name}</span>
		</div>
		`
	})

})