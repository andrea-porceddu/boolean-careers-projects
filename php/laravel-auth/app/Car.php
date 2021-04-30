<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'brand',
        'model',
        'generation',
        'start_of_production',
        'doors',
        'body_type',
        'fuel_type',
        'max_speed',
        'power',
        'url_img'
    ];
}
