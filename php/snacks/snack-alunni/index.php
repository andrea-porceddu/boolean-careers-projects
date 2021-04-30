<?php 

$students = [
	[
		"name" => "Bigo",
		"surname" => "Lino",
		"votes" => ['5', '5.5', '6', '6', '6.5']
		// "average" => 5.8
	],
	[
		"name" => "Santa",
		"surname" => "Pazienza",
		"votes" => ['7', '7.5', '6.5', '6.5', '7']
	],
	[
		"name" => "Era",
		"surname" => "Natale",
		"votes" => ['2.5', '2.5', '3', '2.5', '2.5']
	]
];

// foreach($students as $student) {
// 	$average = array_sum($student["votes"]) / count($student["votes"]);
// 	// echo $average . "<br/>";
// 	echo $student["name"] . " " . $student["surname"] . " " . $average . "<br/>";
// }

foreach($students as $student) {
	$average = array_sum($student["votes"]) / count($student["votes"]);
	echo $student["name"] . " " . $student["surname"] . " " . $average . "<br/>";
}

echo "<br/><br/>";

