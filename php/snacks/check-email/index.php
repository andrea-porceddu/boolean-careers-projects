<?php
$dot = ".";
$at = "@";

$mail = $_GET["mail"];
 
// Check if string contains a dot
// if (strpos($mail, $dot)) {
//   echo "OK";
// } else if (strpos($mail, $snail)) {
//   echo "OK";
// } else {
// 	echo "OK";
// }

//strpos
// !== false (strettamente diverso da false perchè strpos controlla anche positione 0)
// la stringa è un array
if (strpos($mail, $dot) !== false && strpos($mail, $at) !== false) {
	echo "OK";
} else {
	echo "KO";
}

// str_contains - PHP 8
// if (str_contains($mail, 'breezer')) {
// 	echo "OK";
// } else {
// 	echo "OK";
// }
?>