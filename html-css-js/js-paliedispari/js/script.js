// ------------ FIRST EXERCISE BASIC REASONING ------------ //
/*

// inserisco parola
var inputString = prompt('Inserisci una parola');
console.log(inputString);

// 1. metodo
// inverto la stringa di caratteri - split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split (Reversing a String using split())
//																		split ritorna un array: array = ["p", "a", "r", "o", "l", "a"]
//                                 - reverse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// 																	reverse ritorna l'inverso dell'array: array = ["a", "l", "o", "r", "a", "p"]
//                                 - join() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 																  join ritorna la concatenazione degli elementi all'interno dell'array
var reverseString = inputString.split('').reverse().join(''); // ('' => separatore, ossia nessun separatore)
console.log(reverseString);

// 2. metodo - provo a fare le stesse operazioni che fanno i metodi split() reverse() e join() o almeno in parte
// l'intenzione è quella di avere una stringa e utilizzarla come se fosse un'array in modo da poter ciclare l'indice della stringa e conoscere la posizione dei singoli caratteri
// es. stringa = 'parola' => indice di p = 0, indice di a = 1 e via dicendo
// per conoscere la posizione dei caratteri della stringa utilizzo charAt(indice)
var stringMaxLength = inputString.length; // lunghezza massima della stringa
console.log(stringMaxLength);
var i = 0; // indice della stringa
for (i = 0; i < stringMaxLength; i++) {
	console.log(inputString.charAt(i) + ' posizione ' + i);
}

// modifico il ciclo, scorro la stringa partendo dall'ultimo carattere e creo un un array, successivamente una nuova variabile,  con la stringa al contrario
var stringMaxLength = inputString.length - 1; // decremento di 1 la lunghezza massima della stringa altrimenti l'elemento con indice 0 dell'array risulta vuoto
var i;
var reverseArray = [];
var reverseString;
for (i = stringMaxLength; i >= 0; i--) {
	reverseArray.push(inputString.charAt(i));
	// console.log(i);
}
reverseString = reverseArray.join('') // riutilizzo join('') per concatenare i caratteri all'interno dell'array reverseStringArray
console.log(reverseString);


// controllo se palindroma
if (inputString === reverseString) {
	console.log('La parola inserita è palindroma');
} else {
	console.log('La parola inserita non è palindroma');
}

*/
// ------------ FIRST EXERCISE BASIC REASONING ------------ //



// FIRST EXERCISE -------------- WITH FUNCTIONS ----------------------------------- //

// string to string-reverse function - la stringa può essere ciclata come fosse un array
function strReverse(str) {
	strReversed = '';
	for (var i = str.length - 1; i >= 0; i--) {
		strReversed += str[i];
	}
	return strReversed;
};

// two strings compare function
function compareTwoStr(str1, str2) {
	if (str1 === str2) {
		return true;
	} else {
		return false
	}
}

var inputStr = prompt('Inserisci parola');
console.log('La parola inserita è: ' + inputStr);
console.log('La parola invertita è: ' + strReverse(inputStr));
if (compareTwoStr(inputStr, strReverse(inputStr))) {
	console.log('La parola è palindroma' );
} else {
	console.log('La parola non è palindroma');
};

// FIRST EXERCISE -------------- WITH FUNCTIONS ----------------------------------- //



// ------------ SECOND EXERCISE BASIC REASONING ------------ //
/*
var userChoise = parseInt(prompt('Inserisci un numero da 1 a 5'));
alert('Hai inserito il numero: ' + userChoise);
if (userChoise < 1 || userChoise > 5) {
	alert('Devi inserire un numero compreso tra 1 a 5');
} else {
	var min = 1;
	var max = 5;
	var randomNumber = Math.floor(Math.random() * (min + 1 - min) + min);
	alert('Il calcolatore ha randomizzato il numero: ' + randomNumber);
	var sum = userChoise + randomNumber;
	if (sum % 2 === 0) {
		alert('La somma è: ' + sum + ' pari');
	} else {
		alert('La somma è: ' + sum + ' dispari');
	}
}
*/
// ------------ SECOND EXERCISE BASIC REASONING ------------ //

// SECOND EXERCISE -------------- WITH FUNCTIONS ---------------------------------- //

function generateRandomNumber(min, max) {
	randomNum = Math.floor(Math.random() * (max + 1 - min) + min);
	return randomNum;
};

function sumTwoNumbers(a, b) {
	return a + b;
}

function isEven (num) {
	if (num% 2 === 0) {
		return true;
	} else {
		return false;
	}
}

var userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));

if (userNumber < 1 || userNumber > 5) {
	alert('Il numero inserito deve essere compreso tra 1 a 5');
} else {
	console.log('Il numero inserito è: ' + userNumber);
	calculatorNumber = generateRandomNumber(1, 5);
	console.log('Il calcolatore ha randomizzato il numero: ' + calculatorNumber);
	sum = sumTwoNumbers(userNumber, calculatorNumber)
	if (isEven(sum)) {
		console.log('La somma è: ' + sum + ' pari');
	} else {
		console.log('La somma è: ' + sum + ' dispari');
	}
}

/* checking if vscode tab size if fixed
for (var index = 0; index < array.length; index++) {
	const element = arvar[i	dex];
}
*/

// SECOND EXERCISE -------------- WITH FUNCTIONS ---------------------------------- //


