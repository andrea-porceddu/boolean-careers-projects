{{-- @dump($post); --}}

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <table class='table table-hover table-dark'>
            <tr>
                {{-- <th scope="col">author id</th> --}}
                {{-- <th scope="col">post id</th> --}}
                <th scope="col">author</th>
                <th scope="col">post title</th>
                <th scope="col">post body</th>
                <th scope="col">post body</th>
                <th scope="col">created at</th>
            </tr>
            <tr>
                {{-- <th scope="row">{{ $post->author_id }}</th> --}}
                {{-- <th>{{ $post->id }}</th> --}}
                <th>{{ $post->author->name }} <br> {{ $post->author->last_name }}</th>
                <td>{{ $post->title }}</td>
                <td>{{ $post->body }}</td>
                <td>{{ $post->created_at }}</td>
            </tr>
        </table>

        {{-- @dump($post->comment); --}}

        <table class='table table-hover table-dark'>
            <tr>
                <th scope="col">author comment</th>
                <th scope="col">comment body</th>
                <th scope="col">created at</th>
            </tr>
            @foreach ($post->comment as $comment)
                <tr>
                    <td>{{ $comment->author_comment }}</td>
                    <td>{{ $comment->body }}</td>
                    <td>{{ $comment->created_at }}</td>
                </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection
