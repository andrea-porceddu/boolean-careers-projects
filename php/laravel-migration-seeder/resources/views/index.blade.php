<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- css style --}}
		<link rel="stylesheet" href="{{ asset('/css/app.css') }}">
		<title>Beers</title>
	</head>
	<body>

        {{-- {{ dd($beers) }} --}}
        <table>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>style</th>
                <th>sub_style</th>
                <th>nation</th>
                <th>alcohol volume</th>
                <th>vote</th>
                <th></th>
            </tr>
            @foreach ($beers as $beer)
            <tr>
                <td>{{ $beer->id }}</td>
                <td>{{ $beer->beer_name }}</td>
                <td>{{ $beer->style }}</td>
                <td>{{ $beer->sub_style }}</td>
                <td>{{ $beer->nation }}</td>
                <td>{{ $beer->alcohol_volume }}</td>
                <td>{{ $beer->vote }}</td>
                <td>{{ $beer->url_img }}</td>
            </tr>
            @endforeach
        </table>


	</body>
</html>
