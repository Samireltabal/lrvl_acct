<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\tasks;
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
    	return redirect("projects/id/$project_id")->with('success','Task added Successfully');
    }
    public function changeState(Request $request) {
    	$task_id = $request->input('task_id');
    	$project_id = $request->input('project_id');
    	$task = tasks::find($task_id);
    	$task->status = 0;
    	$task->save();
    	return Redirect::back()->with('success','Task Closed Successfully');
    }
}
