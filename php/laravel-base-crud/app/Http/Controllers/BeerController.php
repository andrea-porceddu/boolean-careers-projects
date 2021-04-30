<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Beer;

class BeerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
            $beers = Beer::all();
            return view('beers.index', compact('beers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
            return view('beers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // dd($request);
        // validazione
        $request->validate([
            'beer_name' => 'required|string|max:255',
            'alcohol_volume' => 'required|numeric|between:0,14.00',
            'vote' => 'required|numeric|between:0,10.00'
        ]);

        $data = $request->all();

        // $beer = new Beer();
        // $beer->beer_name = $data['beer_name'];
        // $beer->style = $data['style'];
        // $beer->nation = $data['nation'];
        // $beer->url_img = $data['url_img'];
        // $beer->alcohol_volume = $data['alcohol_volume'];
        // $beer->vote = $data['vote'];
        // $beer->save();

        $beer = new Beer();
        $beer->fill($data);
        $beer->save();

        $newBeer = Beer::orderBy('id', 'desc')->first();
        return redirect()->route('beers.show', $newBeer);
    }

    /**
     * Display the specified resource.
     *
     * @param  Beer  $beer
     * @return \Illuminate\Http\Response
     */

    // public function show($id) // versione lunga - long version
    // {
    //         $beer = Beer::find($id);
    //         // dd($beer);
    //         return view('beer', compact('beer'));
    // }

    public function show(Beer $beer) // versione corta - short version
    {
			return view('beers.show', compact('beer'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Beer  $beer
     * @return \Illuminate\Http\Response
     */
    public function edit(Beer $beer)
    {
        // dd($beer);
        return view('beers.edit', compact('beer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Beer $beer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Beer $beer)
    {
        // dd($beer);
        $data = $request->all();

        //validare
        $beer->update($data);

        return redirect()->route('beers.show', compact('beer'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Beer  $beer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Beer $beer)
    {
        $beer->delete();

        return redirect()->route('beers.index');
    }
}
