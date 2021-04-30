<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    protected $fillable = [
        'beer_name',
        'style',
        'nation',
        'url_img',
        'alcohol_volume',
        'vote'
    ];
}
