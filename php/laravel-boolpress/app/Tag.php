<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function post() {
        return $this->belongsToMany(Post::class, 'post_tag');
    }
}
