/* 1. Milestone */

const cats = [
	{'name': 'pinco', 'anni': 8, 'color': 'red', 'gender': 'm'},
	{'name': 'pallina', 'anni': 5, 'color': 'orange', 'gender': 'f'},
	{'name': 'violet', 'anni': 12, 'color': 'violet', 'gender': 'f'},
	{'name': 'ciccia', 'anni': 18, 'color': 'purple', 'gender': 'f'},
	{'name': 'mariottide', 'anni': 18, 'color': 'brown', 'gender': 'm'}
]

// cats.forEach( (el) => {
// 	console.log(`Nome: ${cats[i].name} colore: ${cats[i].colore}`);
// });


/* 2. Milestone

const container = document.getElementById('container')

cats.forEach((el) => {

	const {color, name} = el

	container.innerHTML += `
	<div>
		<i class="fas fa-cat" style="color:${color}"></i> ${name}
	</div>
	`
})

const containerFemale = document.getElementById('female')
const containerMale = document.getElementById('male')
const maxAge = 20;

cats.forEach((el) => {

	const {name, color, anni, gender} = el

	if (gender === 'f') {
		containerFemale.innerHTML += `
		<div>
			<i class="fas fa-cat" style="color:${color}"></i>
			<i class="fas fa-ribbon" style="color:pink; opacity:${anni / maxAge};"></i>
			${name}
		</div>
		`
	} else {
		containerMale.innerHTML += `
		<div>
			<i class="fas fa-cat" style="color:${color}"></i>
			<i class="fas fa-ribbon" style="color:blue; opacity:${anni / maxAge};"></i>
			${name}
		</div>
		`
	}
})

*/

/* 3. Milestone */
const maxAge = 20

const femaleMaleCats = [...femaleCats, ...maleCats]

const containerSpreadRest = document.getElementById('spread-rest')

femaleMaleCats.forEach((el) => {

	const {name, color, anni, gender} = el

	const opacity = maxAge / anni

	if (gender === 'f') {
		containerSpreadRest.innerHTML += `
		<div>
			<i class="fas fa-cat" style="color:${color}"></i>
			<i class="fas fa-ribbon" style="color:pink; opacity:${opacity};"></i>
			${name}
		</div>
		`
	} else {
		containerSpreadRest.innerHTML += `
		<div>
			<i class="fas fa-cat" style="color:${color}"></i>
			<i class="fas fa-ribbon" style="color:blue; opacity:${opacity};"></i>
			${name}
		</div>
		`
	}
})