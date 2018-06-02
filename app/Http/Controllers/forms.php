<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\RoleUser;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Role;
class forms extends Controller
{
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function change_role(request $request) {
        if ($request->user()->authorizeRoles(['manager']) == false){
            return rediret('/')->with('error','unauthorised page');
          }
        $id = $request->input('id');
        $role = $request->input('role');
        if(Auth::user()->id == $id){
            return redirect('/Dashboard/members')->with('error','You cannot change your role');
        }
        else{
            $role == 1 ? $new_role = 2 : $new_role = 1;
                // echo $new_role;
                DB::table('role_user')
                    ->where('user_id', $id)
                    ->update(['role_id' => $new_role]);
            return redirect('/Dashboard/members')->with('success','Role Changed Successfully');
        }
        
    }
    public function destroy(request $request, $id)
    {
        if ($request->user()->authorizeRoles(['manager']) == false){
            return rediret('/')->with('error','unauthorised page');
          }
          if(Auth::user()->id == $id){
            return redirect('/Dashboard/members')->with('error','You cannot delete yourself');
        }else{
            $user = User::find($id);
            $user->delete();
            return redirect('/Dashboard/members')->with('success','Member Removed');
        } 
    }
        
    public function storeUser(Request $request)
    {
        if ($request->user()->authorizeRoles(['manager']) == false){
            return rediret('/')->with('error','unauthorised page');
          }
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'role-select' => 'required'
        ]);
        
        $user = User::create([
            'name'     => $request['name'],
            'email'    => $request['email'],
            'password' => bcrypt($request['password']),
          ]);
          $the_role = $request['role-select'];
          $user
             ->roles()
             ->attach(Role::where('name', $the_role)->first());
      
          return redirect('Dashboard/members');
    }

    
}
