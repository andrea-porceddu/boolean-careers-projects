<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
	// assegnazione variabile nome qualsiasi
	$pastas = config('pastas');
	// dump($pastas);
	return view('pages.home', ['pastas' => $pastas]);
});

// Route::get('/products', function () {
// 	return view('pages.products');
// });

Route::get('/products/{id}', function($id = null) {
  $pastas = config('pastas');
  return view('pages.products', ['idProduct' => $id, 'pastas' => $pastas]);
});
