{{-- @dump($author->post); --}}

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <table class='table table-hover table-dark'>
            <tr>
                {{-- <th scope="col">#</th> --}}
                <th scope="col">author</th>
                <th scope="col">website</th>
                <th scope="col">posts</th>
                <th scope="col">logo</th>
            </tr>
            @foreach ($authors as $author)
            <tr>
                {{-- <th scope="row">{{ $author->id }}</th> --}}
                <td><a href="{{ route('authors.show', compact('author')) }}">{{ $author->name }} <br> {{ $author->last_name }}</a></td>
                <td>{{ $author->detail->website_url }}</td>
                <td>
                {{-- <td>{{ $author->post }}</td> --}}
                    <ol>
                    @foreach ($author->post as $post)
                        <li>
                            <a href="posts/{{ $post->id }}">{{ $post->title }}</a>
                            <br>
                        </li>
                    @endforeach
                    </ol>
                </td>
                <td><img src="{{ $author->detail->logo_url }}" alt=""></td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection
