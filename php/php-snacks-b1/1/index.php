<?php
/*
PHP Snack 1:
Creiamo un array 'matches' contenente altri array i quali rappresentano delle
partite di basket di un’ipotetica tappa del calendario.
Ogni array della partita avrà una squadra di casa e una squadra ospite,
punti fatti dalla squadra di casa e punti fatti dalla squadra ospite.
Stampiamo a schermo tutte le partite con questo schema:
Olimpia Milano - Cantù | 55 - 60
*/

/*
HT: home team;
AT: away team;
HP: home points;
AP: away points;
*/


$matches = [
	/* 
	match1 => [
		"HT" => "Reggiana",
		"AT" => "Virtus Bologna",
		"HP" => 62,
		"AP" => 89
	],

	// metto indice numerico dato che devo scorrere un array
	// con un for e non con un foreach

	// toglo indice come suggerito da Alfredo
	*/
	[
		"HT" => "Reggiana",
		"AT" => "Virtus Bologna",
		"HP" => 62,
		"AP" => 89
	],
	[
		"HT" => "Treviso",
		"AT" => "Brindisi",
		"HP" => 90,
		"AP" => 108
	],
	[
		"HT" => "Venezia",
		"AT" => "Cantu",
		"HP" => 80,
		"AP" => 75
	],
	[
		"HT" => "Trento",
		"AT" => "Pesaro",
		"HP" => 70,
		"AP" => 81
	],
	[
		"HT" => "Varese",
		"AT" => "Cremona",
		"HP" => 110,
		"AP" => 105
	],
	[
		"HT" => "Trieste",
		"AT" => "Brescia",
		"HP" => 78,
		"AP" => 81
	],
	[
		"HT" => "Fortitudo Bologna",
		"AT" => "Sassari",
		"HP" => 79,
		"AP" => 89
	]
];

// var_dump($matches);
// print_r($matches);

// print_r($matches["match1"]);
// print_r($matches["match2"]);

// var_dump($matches["match1"]);
// echo $matches[0]["HT"];

// per scorrere un array mi serve sapere la sua lunghezza
// in JS è array.length in PHP count/sizeof - https://www.jquery-az.com/php-count-vs-sizeof-get-array-length/

// echo count($matches); // ritorna 7
for ($i = 0; $i < count($matches); $i++){
	echo $matches[$i]["HT"] . " - " . $matches[$i]["AT"] . " | " .
			 $matches[$i]["HP"] . " - " . $matches[$i]["AP"] . "<br/>";
}

