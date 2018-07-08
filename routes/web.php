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
    Route::get('page/{slug}','PagesController@show')->name('ui.page');
    Route::get('/portfolio', 'PortfolioController@ui')->name('ui.portfolio');
    
    // TEST 




});

// Customer Routes 
Route::group(['middleware' => 'auth' ], function() {
    Route::get('/restricted', 'MainController@restricted');
    Route::get('profile','HomeController@profile')->name('profile');
    Route::post('editUser', 'DashboardController@updateProfile')->name('editUser');
    Route::post('updatePassword', 'DashboardController@updatePassword')->name('updatePassword');
    Route::post('UpdateInfo', 'DashboardController@add_customer_info')->name('UpdateInfo');
    Route::post('uploadPhoto', 'forms@uploadPhoto')->name('uploadPhoto');
    Route::get('user/projects','HomeController@projects')->name('projects');
    Route::get('user/project/{id}','HomeController@project')->name('project');

    Route::get('/contact','contactController@index')->name('contact.page');
    Route::post('/contact','contactController@send')->name('contact.form');

    // Pages Routes

    Route::get('dashboard/pages','PagesController@index')->name('page.main');
    Route::get('dashboard/pages/create','PagesController@create')->name('page.create');
    Route::post('dashboard/pages/store','PagesController@store')->name('page.store');
    Route::get('dashboard/pages/update/{id}','PagesController@Edit')->name('page.update');
    Route::post('dashboard/pages/update','PagesController@EditForm')->name('page.update');
    Route::post('dashboard/pages/toggle','PagesController@activation')->name('page.toggle');
    Route::delete('dashboard/pages/remove','PagesController@remove')->name('page.remove');
    
    
    Route::group(['prefix' => 'messages' , 'as' => 'Messages'], function() {
        route::get('/', 'MessagesController@index')->name('Messages');
        route::get('/{id}','MessagesController@thread')->name('message');
        route::post('/reply','MessagesController@reply')->name('reply');
        route::get('/markAsRead/{thread_id}','MessagesController@msgRead')->name('msgRead');
    });
});
// Employee Routes
Route::group(['middleware' => 'employee' ], function () {
    //Profile Settings

    // Restricted Frontend
    Route::get('/dashboard', 'DashboardController@index')->name('Dashboard');
    Route::get('/api/users','api@users')->name('users');
    Route::post('closeTask' , 'TasksController@changeState')->name('closeTask');
    Route::get('/dashboard/projects','projectsController@index')->name('projects');
    Route::get('dashboard/messages','MessagesController@admin')->name('adminMessages');
    route::get('compose','MessagesController@adminSend')->name('compose');
    route::post('composeMsg','MessagesController@adminSendForm')->name('compose');
                
                route::get('projects/id/{id}','projectsController@show')->name('Single Project');
                route::get('projects/list','projectsController@list')->name('list'); 
                route::post('projects/uploadAttachment','forms@uploadAttachment')->name('uploadAttachment');

});

Route::group(['middleware' => 'admin'], function () {
    // Members Section 
        Route::post('createOption','forms@createOption')->name('create Option');
        Route::post('updateOption','forms@updateOption')->name('update Option');
        Route::post('forms/changerole', 'forms@change_role');
        Route::post('storeUser', 'forms@storeUser')->name('createUser');
        Route::post('storeTask' , 'TasksController@createTask')->name('storeTask');
        Route::get('deleteOption/{id}','forms@deleteOption')->name('delete Option');
        Route::get("forms/deleteUser/{user_id}", 'forms@destroy');
        Route::post('add_role','forms@create_role')->name('add_role');
        
        // Portfolio
        Route::get('dashboard/portfolio','PortfolioController@index')->name('portfolio');
        Route::post('addPorftolioItem','PortfolioController@create')->name('portfolio.create');
        Route::post('ChangeStatusPorftolioItem','PortfolioController@changeStat')->name('portfolio.change');
        Route::post('removePorftolioItem','PortfolioController@remove')->name('portfolio.remove');
        // Menu Manager
        Route::get('dashboard/menus','MenusController@index')->name('menu.main');
        Route::post('addMenu','MenusController@addMenu')->name('menu.add');
        Route::post('addMenuItem','MenusController@addItem')->name('menu.addItem');
        Route::post('changeMenuItemState','MenusController@changeState')->name('menu.change');
        Route::post('updateMenuItem','MenusController@updateItem')->name('menu.updateItem');
        Route::post('updateMenu','MenusController@updateMenu')->name('menu.update');
        Route::post('toggleItem','MenusController@toggleSub')->name('menu.toggleItem');
        Route::delete('removeMenu','MenusController@removeMenu')->name('menu.remove');
        Route::delete('removeMenuItem','MenusController@removeMenuItem')->name('menu.removeItem');
        Route::get('changeMenu','MenusController@ajaxMenu')->name('changeMenu');
        Route::get('order-menu',function(){
            $menu = DB::table('menu_items')->orderBy('order','ASC')->get();
            $itemID = request('itemID');
            $itemIndex = request('itemIndex');
     
            foreach($menu as $value){
                return DB::table('menu_items')->where('id','=',$itemID)->update(array('order'=> $itemIndex));
            }
         });

    Route::group(['prefix' => 'dashboard' , 'as' => 'dashboard'], function() {
        Route::get('/profile','DashboardController@profile')->name('profile');
        Route::get('/customer/id/{id}','DashboardController@view');
        Route::get('/roles', 'DashboardController@roles')->name('roles');
        Route::get('/members', 'DashboardController@members')->name('members');
        // Settings Section
        Route::get('settings','DashboardController@settings')->name('settings');
        //Members Routes
        Route::get('create', 'DashboardController@create');
        
        // List Backups 
        Route::get('backup','DashboardController@backup')->name('backup');
        
    }); // end dashboard prefix
    // Porjects Route
                
                route::get('projects/create','projectsController@create')->name('create');
                route::post('projects/store','projectsController@store')->name('store');
                route::post('projects/updateName','projectsController@updateProjectName')->name('updateName');
                route::post('projects/updateGithub','projectsController@updateGithub')->name('updateGithub');
                route::get('projects/id/{id}/delete','projectsController@destroy')->name('deleteProject');
                route::post('projects/removeAttachment','forms@removeAttachment')->name('removeAttachment');
             // End Projects Prefix
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
