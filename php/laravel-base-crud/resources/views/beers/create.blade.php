<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		{{-- css style --}}
		<link rel="stylesheet" href="{{ asset('/css/app.css') }}">
		<title>Add</title>
	</head>
	<body>

        <div class="container">
            <div class="row">
                <form action="{{ route('beers.store') }}" method="post">
                    @csrf {{-- è un token che genera Laravel per
                    assicurarsi che la chiamata post
                    avvenga tramite un form del sito. --}}
                    @method('POST')
                    <div class="form-group">
                        <label for="beer_name">Beer Name</label>
                        <input type="text" class="form-control {{ $errors->has('beer_name') ? 'is-invalid' : '' }}" name="beer_name" placeholder="">
                        <div class="invalid-feedback">
                            {{ $errors->first('beer_name') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="style">Beer Style</label>
                        <input type="text" class="form-control" name="style" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="nation">Origin</label>
                        <input type="text" class="form-control" name="nation" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="url_img">Image URL</label>
                        <input type="text" class="form-control" name="url_img" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="alcohol_volume">Alcohol Volume</label>
                        <input type="text" class="form-control {{ $errors->has('alcohol_volume') ? 'is-invalid' : '' }}" name="alcohol_volume" placeholder="">
                        <div class="invalid-feedback">
                            {{ $errors->first('alcohol_volume') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="vote">Vote</label>
                        <input type="text" class="form-control {{ $errors->has('vote') ? 'is-invalid' : '' }}" name="vote" placeholder="">
                        <div class="invalid-feedback">
                            {{ $errors->first('vote') }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>




	</body>
</html>
