<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use App\RoleUser;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Logs;
use App\Role;
use App\options;
use App\attachments;

class forms extends Controller
{
   
    public function change_role(request $request) {
        
        $id = $request->input('id');
        $role = $request->input('role');
        if(Auth::user()->id == $id){
            return redirect('/Dashboard/members')->with('error','You cannot change your role');
        }
        else{
                // echo $new_role;
                DB::table('role_user')
                    ->where('user_id', $id)
                    ->update(['role_id' => $role]);
            return redirect('/Dashboard/members')->with('success','Role Changed Successfully');
        }
        
    }
    public function create_role(request $request) {
        
        $this->validate($request, [
            'name' => 'required|string|max:100|unique:roles',
            'description' => 'required|string|max:1000'
        ]);

        $role = new Role;
        $role->name = $request->input('name');
        $role->description = $request->input('description');
        $role->save();

        return redirect('/Dashboard/roles')->with('success','Role Added Successfully');
    }
    public function destroy(request $request, $id)
    {

          if(Auth::user()->id == $id){
            return redirect('/Dashboard/members')->with('error','You cannot delete yourself');
        }else{
            $user = User::find($id);
            Storage::delete('public/'. $user->image );

            $user->delete();
            return redirect('/Dashboard/members')->with('success','Member Removed');
        } 
    }
        
    public function storeUser(Request $request)
    {
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
    public function uploadPhoto(Request $request) {
            $old_image = Auth::user()->image;          
            Storage::delete('app/public/'.$old_image);
            $file = Input::file('image');

            $fileNameWithExt = $file->getClientOriginalName();
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extention = $file->getClientOriginalExtension();
            $FileNameToStore = $filename.'_'.time().'.'.$extention;
            $destinationPath ="storage";
            $file->move($destinationPath, $FileNameToStore);

            $user = Auth::user()->id ;  

            $the_user = User::find($user);
            $the_user->image = $FileNameToStore;
            $the_user->save();
            $log = new logs;
            $log->users_id = $the_user->id;
              $log->activity = "<i class='fa fa-hashtag'></i> $the_user->id  $the_user->name Changed His Profile Picture" ;
              $log->save();   

            return redirect('/profile')->with('success','Photo Changed Successfully');
    }
    public function uploadAttachment(Request $request) {
            $file = Input::file('file');
            $user = $request->input('user_id');
            $project = $request->input('project_id');
            $fileNameWithExt = $file->getClientOriginalName();
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extention = $file->getClientOriginalExtension();
            $FileNameToStore = $filename.'_'.time().'.'.$extention;
            $destinationPath ="storage/projectsUploads";
            $file->move($destinationPath, $FileNameToStore);

            $attachment = new attachments;
            $attachment->file_name = $FileNameToStore;
            $attachment->extention = $extention;
            $attachment->users_id = $user ;
            $attachment->projects_id = $project;
            $attachment->status = 1;
            $attachment->save();         
            
            $log = new logs;
            $log->users_id = $user;
            $log->activity = "Attachment Uploaded To project # $project" ;
            $log->save();   

            return 'Success';

    }
    
    public function removeAttachment(Request $request) {
            $attachment_id = $request->input('attachment_id');
            $attachment_name = $request->input('file_name');
            $user = $request->input('user_id');
            $project = $request->input('project_id');

            Storage::delete('public/projectsUploads/'.$attachment_name);

            $delete = attachments::findOrFail($attachment_id)->delete();   
            
            $log = new logs;
            $log->users_id = $user;
            $log->activity = "Attachment Removed from project # $project" ;
            $log->save();   

            return Redirect::back()->with('error',"Attachment Deleted Successfully");

        

    }
    // Settings forms
    public function createOption(Request $request) {
        
        $this->validate($request, [
            'option' => 'required|string|max:255|unique:options',
            'value' => 'required|string|max:255',
            'description' => 'required|string'
        ]);
        $options = new options;
        $options->option = $request['option'];
        $options->value = $request['value'];
        $options->type = $request['type'];
        $options->description = $request['description'];
        $options->save();

        return redirect('/settings')->with('success','Option Added Successfully');
    }

    public function updateOption(Request $request) {
        if ($request->user()->authorizeRoles(['manager']) == false){
            return rediret('/')->with('error','unauthorised page');
          }
        if( !empty($request['value']) ) {
        $this->validate($request, [
            'value' => 'required|string|max:255'
            ]);
        }else{
            $request['value'] = 'off';
        }
        $id = $request['option_id'];
        DB::table('options')
                    ->where('id', $id)
                    ->update([ 'value' => $request['value'] ]);
       
        return redirect('/settings')->with('success','Option Updated Successfully');

        
    }
    
}
