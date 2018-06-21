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

Route::group(['middleware' => 'web'], function () {
    Auth::routes();
    Route::get('/', 'HomeController@index');
    Route::get('search/autocomplete', 'searchAutocomplete@name')->name('search/autocomplete');
});

// Customer Routes 
Route::group(['middleware' => 'auth' ], function() {
    Route::get('/restricted', 'MainController@restricted');
});
// Employee Routes
Route::group(['middleware' => 'employee' ], function () {
    //Profile Settings
    Route::get('profile','DashboardController@profile')->name('profile');
    Route::post('editUser', 'DashboardController@updateProfile')->name('editUser');
    Route::post('updatePassword', 'DashboardController@updatePassword')->name('updatePassword');
    Route::post('uploadPhoto', 'forms@uploadPhoto')->name('uploadPhoto');
    Route::get('customer/id/{id}','DashboardController@view');
    // Restricted Frontend
    Route::get('/Dashboard', 'DashboardController@index')->name('Dashboard');
        Route::get('/api/users','api@users')->name('users');



});

Route::group(['middleware' => 'admin'], function () {
    // Members Section 
    Route::get('Dashboard/roles', 'DashboardController@roles')->name('roles');
    Route::get('Dashboard/members', 'DashboardController@members')->name('members');
    // Settings Section
    Route::get('settings','DashboardController@settings')->name('settings');
    Route::post('createOption','forms@createOption')->name('createOption');
    Route::post('updateOption','forms@updateOption')->name('updateOption');
    Route::get('deleteOption/{id}','forms@deleteOption')->name('deleteOptopm');
    //Members Routes
    Route::get('Dashboard/Create', 'DashboardController@create');
    Route::post('forms/changerole', 'forms@change_role');
    Route::post('storeUser', 'forms@storeUser')->name('createUser');
    Route::get("forms/deleteUser/{user_id}", 'forms@destroy');
    Route::post('add_role','forms@create_role')->name('add_role');
    // List Backups 
    Route::get('backup','DashboardController@backup')->name('backup');
    // Porjects Route
    Route::group(['prefix' => 'projects' , 'as' => 'projects'], function() {
        
        route::get('/','projectsController@index')->name('projects');
        route::get('/id/{id}','projectsController@show')->name('projects');
        route::get('list','projectsController@list')->name('list'); 
        route::get('create','projectsController@create')->name('create');
        route::post('store','projectsController@store')->name('store');

        Route::group(['prefix' => 'task' , 'as' => 'task'], function() {
            route::get('/' , 'tasksController@list');   
            route::get('/{p_id}' , 'tasksController@index')->name('task');
        });
    });
    
    // TEST ROUTES
    
    Route::get('testMail',function(){
        return view('emails.password');
    });
    Route::get('search', 'searchAutocomplete@view');
});
