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
    Route::get('profile','DashboardController@profile')->name('profile');
    Route::post('editUser', 'DashboardController@updateProfile')->name('editUser');
    Route::post('updatePassword', 'DashboardController@updatePassword')->name('updatePassword');
    Route::post('UpdateInfo', 'DashboardController@add_customer_info')->name('UpdateInfo');
        Route::post('uploadPhoto', 'forms@uploadPhoto')->name('uploadPhoto');

});
// Employee Routes
Route::group(['middleware' => 'employee' ], function () {
    //Profile Settings

    // Restricted Frontend
    Route::get('/Dashboard', 'DashboardController@index')->name('Dashboard');
    Route::get('/api/users','api@users')->name('users');
    Route::post('closeTask' , 'TasksController@changeState')->name('closeTask');




});

Route::group(['middleware' => 'admin'], function () {
    // Members Section 
        Route::get('customer/id/{id}','DashboardController@view');
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
    
    // Tasks Forms
    Route::post('storeTask' , 'TasksController@createTask')->name('storeTask');
    

    // Porjects Route
    Route::group(['prefix' => 'projects' , 'as' => 'projects'], function() {
        
        route::get('/','projectsController@index')->name('projects');
        route::get('/id/{id}','projectsController@show')->name('projects');
        route::get('list','projectsController@list')->name('list'); 
        route::get('create','projectsController@create')->name('create');
        route::post('store','projectsController@store')->name('store');
        route::post('updateName','projectsController@updateProjectName')->name('updateName');
        route::post('updateGithub','projectsController@updateGithub')->name('updateGithub');
        route::get('/id/{id}/delete','projectsController@destroy')->name('deleteProject');
        route::post('uploadAttachment','forms@uploadAttachment')->name('uploadAttachment');
        route::post('removeAttachment','forms@removeAttachment')->name('removeAttachment');

        
    });
    Route::group(['prefix' => 'task' , 'as' => 'task'], function() {
                    route::post('addMember','TasksController@addMember')->name('addMember');
        });
    // TEST ROUTES
    
    Route::get('testMail',function(){
        $user_name = 'Samir';
        $admin_name = 'Admin';
        $task_name = 'Task Name';
        $project_name = 'Project Name';
        $created_at = '01/01/1900 23:59';
        return view('emails.taskAssigned')->with(compact('user_name','admin_name','project_name','task_name','created_at'));
    });
    //Route::get('search', 'searchAutocomplete@view');
});
