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

Route::get('/', 'HomeController@index');
Route::get('/restricted', 'MainController@restricted');

Auth::routes();

Route::get('/Dashboard', 'DashboardController@index')->name('Dashboard');
Route::get('Dashboard/roles', 'DashboardController@roles')->name('roles');
Route::get('Dashboard/members', 'DashboardController@members')->name('members');
Route::get('Dashboard/Create', 'DashboardController@create');
Route::post('forms/changerole', 'forms@change_role');
Route::post('storeUser', 'forms@storeUser')->name('createUser');
Route::get("forms/deleteUser/{user_id}", 'forms@destroy');
