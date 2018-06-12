<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\passwordChanged;
use App\Role;
use App\User;
use App\Suppliers;
use App\Categories;
use App\Products;
use App\logs;
use App\invoices;
use app\items;
use Illuminate\Support\Facades\Auth;


class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
      $this->middleware('auth');
    }
  
    public function index(Request $request)
    {
      $users = User::all();
      $the_users = new User;
      $products = Products::all();
     if ($request->user()->authorizeRoles(['manager']) !== false) {
        return view('admin.content.main')->with(compact('users','products','the_users'));
     }
     else{
         return redirect('/');
     }
    }
    public function roles(Request $request) {
      if ($request->user()->authorizeRoles(['manager']) !== false) {
        $role = new Role;
        $roles = $role::all();
        return view('members.roles')->with('roles',$roles);
     }
     else{
         return redirect('/');
     }
    }
    public function members(Request $request) {
      if ($request->user()->authorizeRoles(['manager']) !== false) {
        $user = new User;
        $users = $user::paginate(5);;
        return view('admin.content.members.users')->with('users',$users);
     }
     else{
         return redirect('/');
     }
    }
    public function create(Request $request) {
      if ($request->user()->authorizeRoles(['manager']) !== false) {
        $role = new Role;
        $roles = $role::all();
        return view('admin.content.members.form')->with('roles',$roles);
      }else{
        return redirect('/');
      }
    }
    public function suppliers() {
      $suppliers = new Suppliers;
      return $suppliers::all();
    }
    public function categories() {
      $categories = new Categories;
      return $categories::all();
    }
    public function category($id) {
      $Categories = new Categories;
      $category = $Categories::find($id);
      return $category->products()->get();
    }
    public function products() {
      $products = new Products;
      return $products::all();
    }
    public function supplier($id) {
      $Suppliers = new Suppliers;
      $Supplier = $Suppliers::find($id);
      return $Supplier->products()->get();
    }
    public function invoices() {
      $invoices = new Invoices;
      return $invoices::all(); 
    }
    public function invoice($id) {
      $invoices = new Invoices;
      $invoice = $invoices::find($id);
      return $invoice->items()->get();
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
    public function settings() {

    }
   
    /*
    public function someAdminStuff(Request $request)
    {
      $request->user()->authorizeRoles('manager');
  
      return view(‘some.view’);
    }
    */
  
}
