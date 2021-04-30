<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>DB connection</title>
</head>
<body>
	
	@php
	if(DB::connection()->getPdo()) {
		echo 'Sei connesso al DB - ' . DB::connection()->getDatabaseName() . '<br/>';
		echo 'Ora, nell\'address bar, scrivi in nome della view /cars';
	}
	@endphp


</body>
</html>