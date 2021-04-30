<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/style.css">
	<title>Bonus</title>
</head>
<body>
	
	<?php 
		$string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi, explicabo omnis quaerat voluptatibus, pariatur sit recusandae amet minus ex ipsa quidem unde ut officia voluptatum vitae ullam rem laudantium!";
		$badWord = $_GET["bad-word"];
		$newWord = $_GET["new-word"];
		echo "Stringa originale: " . $string;
	?>

	<br/>

	<?php
		echo "Hai scelto di sostituire: " . $badWord . " con " . $newWord;
	?>

	<br/>

	<?php
		$newString = str_replace($badWord, $newWord, $string);
		echo "La nuova stringa è: " . $newString;
	?>

</body>
</html>