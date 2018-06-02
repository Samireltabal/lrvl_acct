<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\User;

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
     if ($request->user()->authorizeRoles(['manager']) !== false) {
        return view('home');
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
        return view('members.members')->with('users',$users);
     }
     else{
         return redirect('/');
     }
    }
    public function create(Request $request) {
      if ($request->user()->authorizeRoles(['manager']) !== false) {
        $role = new Role;
        $roles = $role::all();
        return view('members.create')->with('roles',$roles);
      }else{
        return redirect('/');
      }
    }
  
    /*
    public function someAdminStuff(Request $request)
    {
      $request->user()->authorizeRoles('manager');
  
      return view(‘some.view’);
    }
    */
  
}
