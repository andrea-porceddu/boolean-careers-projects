<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Beer;

class ApiController extends Controller
{
    public function firstEl(){
        $firstBeer= Beer::orderBy('id','ASC')->first();
        return response()->json($firstBeer);
    }
}
