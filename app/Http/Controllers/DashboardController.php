<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use App\Mail\passwordChanged;
use App\Role;
use App\User;
use App\Suppliers;
use App\Categories;
use App\Products;
use Artisan;
use App\logs;
use App\invoices;
use App\projects;
use App\tasks;
use App\items;
use App\options;
use Illuminate\Support\Facades\Auth;


class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
  
    public function index(Request $request)
    {
      // Users Objects
      $users = User::all();
      $the_users = new User;
      // Tasks Variables
      $tasksCount = tasks::where('status','1')->count();
      $totalTasks = count(tasks::all());
      $completedTasks = tasks::where('status','0')->count();
      $tasksPercentage = round($completedTasks / $totalTasks * 100,2) ; 
      // projects 
      $projectsCount = projects::where('status','1')->count();
      $totalprojects = count(projects::all());
      $completedprojects = projects::where('status','0')->count();
      $projectsPercentage = round($completedprojects / $totalprojects * 100,2) ; 

      $projectsData = array(
        'active' => $projectsCount,
        'completed' => $completedprojects,
        'percentage' => $projectsPercentage,
        'totalprojects' => $totalprojects
      );

      $passed_variables = array(
        'users','products','the_users','tasksCount','tasksPercentage','projectsData'
      );
        return view('admin.content.main')->with(compact($passed_variables));
    }
    public function roles(Request $request) {
      
        $role = new Role;
        $roles = $role::all();
        return view('members.roles')->with('roles',$roles);
    
    }
    public function members(Request $request) {
     
        $user = new User;
        $available_roles = Role::all();
        $users = $user::paginate(5);;
        return view('admin.content.members.users')->with(compact(['users','available_roles']));

    }
    public function view($user_id) {
      $user = User::find($user_id);
      $task = new tasks;
      return view('admin.content.members.single')->with(compact(['user','task']));
    }
    public function create(Request $request) {
      
        $role = new Role;
        $roles = $role::all();
        return view('admin.content.members.form')->with('roles',$roles);
      
    }
    
    /** 
     * Profile   /profile
     * Settings  /settings
     *  
    **/
    public function profile() {
      $users = new User;
      $user_id = Auth::user()->id;
      $log = logs::where('users_id',$user_id)->orderBy('id','desc')->paginate(5);
      $user = $users::find($user_id)->first();
      return view('profiles.profile')->with(compact('user','log'));
    }

    public function updateProfile(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            ]); 
            $user_id = $request['id'];
            $user = User::find($user_id);
            $log = new logs;
            $user->name = $request['name'];
            $user->email = $request['email'];
            $log->users_id = $user_id;
            $log->activity = "<i class='fa fa-hashtag'></i> $user->id  $user->name Updated Porfile Information" ;
            $user->save();
            $log->save();

            return redirect('profile')->with('success','Information Updated Successfully');   
        }
        public function updatePassword(Request $request)
    {
        $this->validate($request, [
            'oldPassword' => 'required|string|min:6',
            'password' => 'required|confirmed',
            ]); 
            // handle request parameters
            $user_id = $request['id'];
            $oldPassword = $request['oldPassword'];
            $newPassword = $request['password'];
            // Initiatie Models
            $log = new logs;
            $user = User::find($user_id);
            
            // Edited

            $current_password = Auth::User()->password;           
            if(Hash::check($oldPassword, $current_password))
            {                             
              
              $user->password = Hash::make($newPassword);;
              $log->users_id = $user_id;
              $log->activity = "<i class='fa fa-hashtag'></i> $user->id  $user->name Updated His Password" ;
              $user->save();
              $log->save();
              Mail::to(Auth::user()->email)->send(new passwordChanged('Password Changed Successfully..'));
            }
            else
            {   
              $log->users_id = $user_id;
              $log->activity = "<i class='fa fa-hashtag'></i> $user->id  $user->name tried to change his Password" ;
              $log->save();        
              $error = array('current-password' => 'Please enter correct current password');
              return redirect('profile')->with('error','Password was not changed');   
            }
            // END                       
            return redirect('profile')->with('success','passwrod Updated Successfully');   
        }
    public function settings()
    {
      $options = new options;
      return view('admin.content.options')->with('options',$options);
    }
    public function backup(){
      return view('admin.content.backup');
    }
   
    /*
    public function someAdminStuff(Request $request)
    {
      $request->user()->authorizeRoles('manager');
  
      return view(‘some.view’);
    }
    */
  
}
