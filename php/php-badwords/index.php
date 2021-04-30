<?php 
	$string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
	echo $string;
?>

<br/>

<?php 
	echo "Questa stringa è composta da " . strlen($string) . " caratteri";
?>

<br/>

<!-- <?php
	var_dump($string); // restituisce anche la lunghezza della stringa contenuta nella variabile $string
?> -->

<br/>

<?php
	if(isset($_GET['bad-word'])){
		$badWord = $_GET["bad-word"];
	}
	echo "Hai scelto di sostuire la parola: " . $badWord;
?>

<br/>

<?php 
	$string = str_replace($badWord, "***", $string);
	echo $string;
?>


