<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Car extends Controller
{
    public function index() {
			return view('cars' );
		}
}
