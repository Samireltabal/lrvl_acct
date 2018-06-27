<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\tasks;
use App\User;
use App\projects;
use Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\taskAssigned;

class TasksController extends Controller
{
    //
    public function createTask(Request $request) {
    	// insert task in db
    	$task = new tasks;
    	$task->weight = $request->input('task_weight') ;
    	$task->name = $request->input('task_name');
    	$task->description = $request->input('description');
    	$task->users_id = $request->input('user_id');
    	$task->projects_id = $request->input('project_id');
    	$task->status = 1 ;
    	$task->save();
    	$task->users()->attach($request->input('developer_id'));
		$project_id = $request->input('project_id');
        $developer_id = $request->input('developer_id');
        $developer = User::find($developer_id);
        $project = projects::find($task->projects_id);
        $user_name = $developer->name;
        $admin_name = Auth::user()->name;
        $user_mail = $developer->email;
        $project_name = $project->name;
        $task_name = $task->name ;
        $created_at = $task->created_at;
          //            Mail::to(Auth::user()->email)->send(new passwordChanged('Password Changed Successfully..'));

        Mail::to($developer->email)->send( new taskAssigned($user_name,$admin_name,$project_name,$task_name,$created_at));
        //Mail::to(Auth::user()->email)->send(new passwordChanged('Password Changed Successfully..'));

    	return redirect("projects/id/$project_id")->with('success','Task added Successfully');
        //return $request;
    }
    public function changeState(Request $request) {
    	$task_id = $request->input('task_id');
    	$project_id = $request->input('project_id');
    	$task = tasks::find($task_id);
    	$task->status = 0;
    	$task->save();
    	return Redirect::back()->with('success','Task Closed Successfully');
    }
    public function addMember(Request $request) {
        $task = new tasks;
        $the_task = $task::find($request->input('task_id'));
        $the_task->users()->attach($request->input('developer_id'));
        return Redirect::back()->with('success','Task Closed Successfully');
        //return $request;
    }
}
