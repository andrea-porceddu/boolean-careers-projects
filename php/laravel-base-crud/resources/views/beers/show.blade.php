<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		{{-- css style --}}
		<link rel="stylesheet" href="{{ asset('/css/app.css') }}">
		<title>Beer</title>
	</head>
	<body>

        <div class="container">
            <div class="row">
                <table class="table table-responsive-sm table-hover table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">style</th>
                            <th scope="col">nation</th>
                            <th scope="col">alcohol volume</th>
                            <th scope="col">vote</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{{ $beer->id }}</th>
                            <td>{{ $beer->beer_name }}</td>
                            <td>{{ $beer->style }}</td>
                            <td>{{ $beer->nation }}</td>
                            <td>{{ $beer->alcohol_volume }}</td>
                            <td>{{ $beer->vote }}</td>
                            <td> <img src="{{ $beer->url_img }}" alt="{{ $beer->beer_name }}" class="img-thumbnail" style="width: 100px"></td>
                            <td><a href="/beers/{{ $beer->id }}/edit" class="btn btn-secondary" role="button">Edit</a></td>
                            <td>
                                <form action="{{ route('beers.destroy', compact('beer')) }}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger" type="submit">Delete</button>
                                </form>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


	</body>
</html>
