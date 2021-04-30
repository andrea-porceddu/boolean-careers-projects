{{-- @dump($posts); --}}

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <table class='table table-hover table-dark'>
            <tr>
                <th scope="col">author</th>
                <th scope="col">post title</th>
                <th scope="col">post body</th>
            </tr>
            @foreach ($posts as $post)
            <tr>
                <td>{{ $post->author->name }} <br> {{ $post->author->last_name }}</td>
                <td>{{ $post->title }}</td>
                <td>{{ $post->body }}</td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection

