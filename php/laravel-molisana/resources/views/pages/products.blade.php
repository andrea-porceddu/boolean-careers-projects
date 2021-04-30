<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Products</title>

	{{-- main css --}}
	<link rel="stylesheet" href="{{ asset('/css/app.css') }}">

	<!-- fontawesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>

</head>
<body>

	<div id="app">

		@include('partials.header')
	
		<main class="product">
			<div class="row bg-tertiary">

				<div class="row-boxed">

					<div class="box d-flex direction-col content-centered pasta-title">
						<h1>{{ $pastas[$idProduct]['titolo'] }}</h1>
						<img src="{{ $pastas[$idProduct]["src-h"] }}" alt="">
					</div>
					<div class="box pasta-slider">
						
						<img src="{{ $pastas[$idProduct]["src-p"] }}" alt="">

					</div>

					<div class="box pasta-desc">
						<p> @php echo $pastas[$idProduct]["descrizione"] @endphp </p>
					</div>

				</div>

			</div>	
		</main>
	
		@include('partials.footer')

	</div>

	
</body>
</html>

