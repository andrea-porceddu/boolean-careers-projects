<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Cars</title>
</head>
<body>
	
	<h1>Cars List</h1>
	@foreach ($cars as $car)
	<ul>
		<li> ID: {{ $car->car_id }}  </li>
		<li> Brand: {{ $car->car_brand }} </li>
		<li> Modello: {{ $car->car_model }} </li>
	</ul>
	@endforeach

</body>
</html>