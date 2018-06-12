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

// Accounting System

Route::get('Suppliers','DashboardController@suppliers')->name('suppliers');
Route::get('Categories','DashboardController@categories')->name('Categories');
Route::get('Category/{id}','DashboardController@category')->name('Category');
Route::get('Supplier/{id}','DashboardController@supplier')->name('Supplier');
Route::get('invoices','DashboardController@invoices')->name('invoices');
Route::get('invoice/{id}','DashboardController@invoice')->name('invoice');
Route::get('products','DashboardController@products')->name('products');

//Members Routes


Route::get('Dashboard/Create', 'DashboardController@create');
Route::post('forms/changerole', 'forms@change_role');
Route::post('storeUser', 'forms@storeUser')->name('createUser');
Route::get("forms/deleteUser/{user_id}", 'forms@destroy');


// Porifle & Settings 

Route::get('profile','DashboardController@profile')->name('profile');
Route::post('editUser', 'DashboardController@updateProfile')->name('editUser');
Route::post('updatePassword', 'DashboardController@updatePassword')->name('updatePassword');



Route::get('settings','DashboardController@settings')->name('settings');