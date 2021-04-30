/* 3. ES5
Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri */

/*

function arrayOfUniqueNumbers(min, max, length) {
	var arr = []
	while(arr.length < length) {
		var num = Math.floor(Math.random() * (max + 1 - min) + min)
		if(!arr.includes(num)) {
			arr.push(num)
		}
	}
	return arr
}

function arrayMinPosMaxPos(arr, minPos, maxPos) { // uman positions not machine
	var newArr = []
	for (var i = minPos - 1; i < maxPos; i++) {
		newArr.push(arr[i])
	}
	return newArr
}

var arr = arrayOfUniqueNumbers(1, 100, 20)
console.log(arr)

var newArr = arrayMinPosMaxPos(arr, 4, 8)
console.log(newArr)
*/

/*
// after in classroom correction by Alfredo/Enrico

function arrayMinPosMaxPos2(arr, minPos, maxPos) {
  var newArr = []
  for (var j = 0; j < arr.length; j++) {
    if (j >= minPos && j <= maxPos) {
      newArr.push(arr[j]);
    }
  }
  return newArr
}

var arr2 = arrayOfUniqueNumbers(1, 100, 20)
console.log(arr2);

var minNum = parseInt(prompt('Inserisci posizione minima'))
var maxNum = parseInt(prompt('Inserisci posizione massima'))

var newArr2 = arrayMinPosMaxPos2(arr2, minNum, maxNum)
console.log(newArr2)

*/

/*

// forEach
var arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

var minPos = parseInt(prompt('Inserisci posizione minima'))
var maxPos = parseInt(prompt('Inserisci posizione massima'))
var newArr = []

arr.forEach(function(el, i) {
  if (i >= minPos - 1 && i <= maxPos - 1) { // uman position instead machine position
    newArr.push(el)
  }
});
console.log('forEach con min e max position: ' + newArr.join(' - '))

*/

/*

// arr.filter()
var arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

var minPosition = parseInt(prompt('Inserisci posizione minima'))
var maxPosition = parseInt(prompt('Inserisci posizione massima'))
var newArr2 = []

newArr2 = arr.filter(function(el, i) {
  return i >= minPosition - 1 && i <= maxPosition - 1
})
console.log('arr.filter(): ' + newArr2.join(' - '))

*/

// arrow function
var arr = ['Mario', 'Ennio', 'Annio', 'Maccio', 'Herbert', 'Mariottide', 'Oscar', 'Billy', 'Ektor', 'Piero',]
console.log('Array di stringhe: ' + arr.join(' - '))

var minPosition = parseInt(prompt('Inserisci posizione minima'))
var maxPosition = parseInt(prompt('Inserisci posizione massima'))
var newArr2 = []

newArr2 = arr.filter((el, i) => i >= minPosition - 1 && i <= maxPosition - 1)

console.log('arr.filter() with arrow function: ' + newArr2.join(' - '))
