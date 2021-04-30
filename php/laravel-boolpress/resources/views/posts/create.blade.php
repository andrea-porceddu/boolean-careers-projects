@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-6">
            <form action="{{ route('posts.store') }}" method="post">
                @csrf
                @method('POST')
                <div class="form-group">
                    <label for="author_id">Author</label>
                    <select class="form-control" name="author_id">
                    @foreach ($authors as $author)
                        <option value="{{ $author->id }}">{{ $author->name }} {{ $author->last_name }}</option>
                    @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="title">Post Title</label>
                    <textarea class="form-control" name="title" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="tags[]">Category</label>  {{-- tags[] --}}
                    <select multiple class="form-control" name="tags[]">
                    @foreach ($tags as $tag)
                        <option value="{{ $tag->id }}">{{ $tag->title }}</option>
                    @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="body">Post Body</label>
                    <textarea class="form-control" name="body" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
@endsection
