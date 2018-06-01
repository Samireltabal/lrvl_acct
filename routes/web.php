<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/Dashboard', 'HomeController@index')->name('Dashboard');
Route::get('Dashboard/roles', 'HomeController@roles')->name('roles');
Route::get('Dashboard/members', 'HomeController@members')->name('members');
