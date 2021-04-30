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
        <div class="container">
            <div class="row">
                <table class="table table-responsive-sm table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">style</th>
                            <th scope="col">nation</th>
                            <th scope="col">alcohol volume</th>
                            <th scope="col">vote</th>
                            <th scope="col"></th>
                            <th scope="col">
                                <a href="{{ route('beers.create') }}" class="btn btn-primary">Add New</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($beers as $beer)
                        <tr>
                            <th scope="row">{{ $beer->id }}</th>
                            <td>{{ $beer->beer_name }}</td>
                            <td>{{ $beer->style }}</td>
                            <td>{{ $beer->nation }}</td>
                            <td>{{ $beer->alcohol_volume }}</td>
                            <td>{{ $beer->vote }}</td>
                            <td><img src="{{ $beer->url_img }}" alt="{{ $beer->beer_name }}" class="img-thumbnail" style="width: 100px"></td>
                            <td>
                                <a href="/beers/{{ $beer->id }}" class="btn btn-info" role="button">Info</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>


	</body>
</html>
