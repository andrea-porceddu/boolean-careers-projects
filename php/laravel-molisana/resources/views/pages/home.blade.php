@php

// dump($pastas);

$types = [];
foreach ($pastas as $pasta) {
	if (!in_array($pasta["tipo"], $types)) {
		$types[] = $pasta["tipo"];
	}
}
// dump($types);

@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Home</title>

	{{-- main css --}}
	<link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body>

	<div id="app">

		@include('partials.header')
	
		<main class="products">

			@foreach ($types as $type)
				<div class="row-boxed">
					<div class="box title">
						<h1>{{ $type }}</h1>
					</div>
				</div>
			
				<div class="row-boxed">
					@foreach ($pastas as $id => $pasta)
						@if ($pasta["tipo"] === $type)
						<div class="box pasta">
							<a href="products/{{ $id }}"><img src="{{ $pasta["src"] }}" alt=""></a>
							{{-- <a href="/products"><img src="{{ $pasta["src"] }}" alt=""></a> --}}
						</div>
						@endif
					@endforeach
				</div>
			@endforeach
			
		</main>
	
		@include('partials.footer')

	</div>

	
</body>
</html>