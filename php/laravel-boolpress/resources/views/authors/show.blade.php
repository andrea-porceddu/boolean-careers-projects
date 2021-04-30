{{-- @dump($author);
@dump($author->detail); --}}

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <table class='table table-hover table-dark'>
            <tr>
                {{-- <th scope="col">#</th> --}}
                <th scope="col">bio</th>
                <th scope="col">e-mail</th>
                <th scope="col">telephone</th>
            </tr>
            <tr>
                {{-- <th scope="row">{{ $author->id }}</th> --}}
                <td>{{ $author->detail->bio }}</td>
                <td>{{ $author->detail->email }}</td>
                <td>{{ $author->detail->telephone }}</td>
            </tr>
        </table>
    </div>
</div>
@endsection
