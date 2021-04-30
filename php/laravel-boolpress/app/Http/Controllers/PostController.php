<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Author;
use App\Mail\PostCreated;
use App\Mail\TagsUsed;
use App\Tag;
use Illuminate\Support\Facades\Mail;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $authors = Author::all();
        $tags = Tag::all();
        return view('posts.create', compact('authors', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        // dd($data);

        $post = new Post();
        $post->fill($data);
        $post->save();
        $post->tag()->attach($data['tags']);
        // dd($data['tags']);

        // $tagsUsedId = [];
        // foreach ($data['tags'] as $usedTagId) {
        //     $tagsUsedId[] = $usedTagId;
        // }
        // // dd($tagsUsedId);

        // $tagsUsedTitle = [];
        // $tags = Tag::all();
        // foreach ($tags as $tag) {
        //     if (in_array($tag->id, $data['tags'])) {
        //         $tagsUsedTitle[] = $tag->title;
        //     }
        // }
        // // dd($tagsUsedTitle);

        $tagsUsedTitle = [];
        $tags = Tag::all();
        foreach ($tags as $tag) {
            if (in_array($tag->id, $data['tags'])) {
                $tagsUsedTitle[] = $tag; // salvo l'oggetto invece che l'array
            }
        }
        // dd($tagsUsedTitle);

        $tagsMail = new TagsUsed($tagsUsedTitle);
        Mail::to('lollable@example.mail')->send($tagsMail);
        // dd($tagsMail);

        // Mail::to('lollable@example.mail')->send(new PostCreated($post)); // dipendenza passata
        $mailableObj = new PostCreated($post);
        Mail::to('lollable@example.mail')->send($mailableObj);

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  Post  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);
        return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
