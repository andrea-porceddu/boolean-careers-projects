/* 3. ES6 */

/*

function arrayOfUniqueNumbers(min, max, length) {
	const arr = []
	while(arr.length < length) {
		let num = Math.floor(Math.random() * (max + 1 - min) + min)
		if(!arr.includes(num)) {
			arr.push(num)
		}
	}
	return arr
}

const arr = arrayOfUniqueNumbers(1, 100, 20)
console.log(`Array di numeri senza duplicati: ${arr}`)

function arrayMinPosMaxPos(arr, minPos, maxPos) { // uman positions not machine
	const newArr = []
	for (let i = minPos - 1; i < maxPos; i++) {
		newArr.push(arr[i])
	}
	return newArr
}

const newArr = arrayMinPosMaxPos(arr, 4, 8)
console.log(`Valori array da posizione (umana) minima 4 e massima 8: ${newArr}`)
*/

/*
// after in classroom correction by Alfredo/Enrico

function arrayMinPosMaxPos2(arr, minPos, maxPos) {
  const newArr = []
  for (let j = 0; j < arr.length; j++) {
    if (j >= minPos - 1 && j < maxPos) {
      newArr.push(arr[j]);
    }
  }
  return newArr
}

const arr2 = arrayOfUniqueNumbers(1, 100, 20)
console.log(`Altro array di numeri senza duplicati: ${arr2}`)

const minNum = parseInt(prompt('Inserisci posizione minima'))
const maxNum = parseInt(prompt('Inserisci posizione massima'))

const newArr2 = arrayMinPosMaxPos2(arr2, minNum, maxNum)
console.log(`Valori di altro array da posizione (umana) minima ${minNum} e massima ${maxNum}: ${newArr2}`)

*/

/*

// forEach
const arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

const minPos = parseInt(prompt('Inserisci posizione minima'))
const maxPos = parseInt(prompt('Inserisci posizione massima'))
const newArr = []

arr.forEach(function(el, i) {
  if (i >= minPos - 1 && i <= maxPos - 1) { // uman position instead machine position
    newArr.push(el)
  }
});
console.log(`forEach: Valori da posizione (umana) minima ${minPos} e massima ${maxPos}: ${newArr.join(' - ')}`);

*/

/*

// arr.filter()
const arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

const minPosition = parseInt(prompt('Inserisci posizione minima'))
const maxPosition = parseInt(prompt('Inserisci posizione massima'))
let newArr2 = []

newArr2 = arr.filter(function(el, i) {
  return i >= minPosition - 1 && i <= maxPosition - 1
})
console.log(`arr.filter(): Valori da posizione (umana) minima ${minPosition} e massima ${maxPosition}: ${newArr2.join(' - ')}`);

*/

// arrow function
const arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

const minPosition = parseInt(prompt('Inserisci posizione minima'))
const maxPosition = parseInt(prompt('Inserisci posizione massima'))
let newArr2 = []

newArr2 = arr.filter((el, i) => i >= minPosition - 1 && i <= maxPosition - 1)

console.log(`arr.filter(): Valori da posizione (umana) minima ${minPosition} e massima ${maxPosition}: ${newArr2.join(' - ')}`);