<?php
/*
PHP Snack 2:
Passare come parametri GET name, mail e age e verificare (cercando i metodi che non
conosciamo nella documentazione) che:
1. name sia più lungo di 3 caratteri,
2. mail contenga un punto e una chiocciola
3. age sia un numero.
Se tutto è ok stampare “Accesso riuscito”, altrimenti “Accesso negato”
*/

// if ((strlen($_GET["name"]) > 3) && (strpos($_GET["mail"], ".") !== false && strpos($_GET["mail"], "@") !== false) && (intval($_GET["age"]))) { 
// 	echo 'Accesso consentito';
// } else {
// 	echo 'Accesso negato';
// }

// index.php?name=lollo&mail=mail@mail.com&age=43

if (empty($_GET["name"]) || empty($_GET["mail"]) || empty($_GET["age"])) {
	echo 'Inserisci Query in URI';
} else if ((strlen($_GET["name"]) > 3) && (strpos($_GET["mail"], ".") !== false && strpos($_GET["mail"], "@") !== false) && ctype_digit($_GET["age"])) {
	echo 'Accesso Consentito';
} else {
	echo 'Accesso Negato';
}

/*

// strlen restituisce la lunghezza di una stringa
// (il numero dei caratteri che compongono la stringa)

// strpos resituisce la posizione (numerica) della prima occorrenza di una sottostringa in una stringa
// esempio:
$string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
echo strpos($string, "sit");
//echo strpos($string, "Lorem");
// restituisce 18 ossia la posizione della prima occorrenza ("sit") trovata nella stringa 
// restituisce false se non viene trovato (ma false è anche uguale a 0)
// 0 è una posizione valida quindi in una condizione si mette anche lo strettamente diverso
// da false (!== false)

// is_numeric determina se una variabile è un numero o una stringa numerica
// (per l'età non va bene dato che l'età solitamente si esprime in numero intero)
// esempio se in un input (come nell'url inserissi 34.5 la stringa sarebbe comunque un numero ma non intero)

// is_int resituisce un booleano

// intval sembra quello più appropriato (restituisce il valore intero di una variabile) 
*/

/*
if (strlen($name) > 3) {
	echo "Nome valido";
} else {
	echo "Nome non valido";
}

echo "<br/>";

if (strpos($mail, ".") !== false && strpos($mail, "@") !== false) {
	echo "Mail valida";
} else {
	echo "Mail non valida";
}

echo "<br/>";

// var_dump($age); // age è stringa uso intval

if (intval($age)) {
	echo "Età valida";
} else {
	echo "Età non valida";
}
*/
