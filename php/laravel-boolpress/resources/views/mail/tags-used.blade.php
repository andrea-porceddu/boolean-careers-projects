@component('mail::message')
# Introduction

Categorie post utilizzate:

@foreach ($tags as $tag)
    - {{ $tag->title }};
@endforeach

@component('mail::button', ['url' => ''])
Clicca
@endcomponent

Grazie,<br>
{{ config('app.name') }}
@endcomponent
