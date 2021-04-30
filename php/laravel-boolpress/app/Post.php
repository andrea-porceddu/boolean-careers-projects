<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $fillable = ['author_id', 'title', 'body'];

    public function author() {
        return $this->belongsTo(Author::class);
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function tag() {
        return $this->belongsToMany(Tag::class, 'post_tag');
    }
}
