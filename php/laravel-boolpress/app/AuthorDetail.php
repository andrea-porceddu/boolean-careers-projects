<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthorDetail extends Model
{
    public function detail() {
        return $this->belongsTo(Author::class);
    }
}
