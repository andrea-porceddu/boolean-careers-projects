@extends('layouts.app')

@section('content')
{{-- {{ dd($cars) }} --}}
<div class="container-fluid">
    <div class="row justify-content-center">
        <table class='table table-hover table-dark'>
            <tr>
                <th scope="col">#</th>
                <th scope="col">brand</th>
                <th scope="col">model</th>
                <th scope="col">generation</th>
                <th scope="col">start of production</th>
                <th scope="col">doors</th>
                <th scope="col">body type</th>
                <th scope="col">fuel type</th>
                <th scope="col">max speed</th>
                <th scope="col">power</th>
                <th scope="col">pic</th>
                @if (auth()->check())
                    <td><button type="submit" class="btn btn-primary btn-sm">Add</button></td>
                @endif
            </tr>
            @foreach ($cars as $car)
            <tr>
                <th scope="row">{{ $car->id }}</th>
                <td>{{ $car->brand }}</td>
                <td>{{ $car->model }}</td>
                <td>{{ $car->generation }}</td>
                <td>{{ $car->start_of_production }}</td>
                <td>{{ $car->doors }}</td>
                <td>{{ $car->body_type }}</td>
                <td>{{ $car->fuel_type }}</td>
                <td>{{ $car->max_speed }}</td>
                <td>{{ $car->power }}</td>
                <td><img src="{{ $car->url_img }}" alt="" style="width: 150px"></td>
                <td>
                    <button type="submit" class="btn btn-info btn-sm">Info</button>
                    @if (auth()->check())
                        <button type="submit" class="btn btn-light btn-sm">Edit</button>
                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                    @endif
                </td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection
