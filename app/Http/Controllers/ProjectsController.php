<?php

namespace App\Http\Controllers;
use App\projects;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\tasks;
use App\logs;
use DB;
use Auth;
use App\customerInfo;
use App\attachments;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;




class ProjectsController extends Controller
{
    /*
    * List Projects
    */
    public function index()
	{
		
		$user = new User;
		$projects = projects::all();
    	return view('projects.sub.index')->with(compact( ['projects', 'user'] ));
	}
	/*
    * Show Single Project	
    */
	public function show($project_id) {
		$project = projects::find($project_id);
		
		if(count($project)){
			$customer = $project->customer;
			$tasks = $project->tasks;
			$attachments = $project->attachments;
			return view('projects.sub.single')->with(compact(['project']));	
		}else{
			abort(404);
		}		
	}
	/*
    *  Update Project Name Form	
    */
	public function updateProjectName(request $request) {
		
		$project_id = $request->input('project_id');
		$project_name = $request->input('project_name');
		$user_id = $request->input('user_id');
		$projects = new projects;
		$project = $projects::find($project_id);
		$project->name = $project_name;
		$project->save();
		
		$log = new logs;
        $log->users_id = $user_id;
        $log->activity = "Project Name Change : Project # $project_id to $project_name" ;
        $log->save();


		return Redirect::back()->with('success','Project Name Successfully Changed');

	}
	/*
    * Attach Github repository to project	
    */
	public function updateGithub(request $request) {
		
		$project_id = $request->input('project_id');
		$project_name = $request->input('github_repository');
		$user_id = $request->input('user_id');
		$projects = new projects;
		$project = $projects::find($project_id);
		$project->github_repository = $project_name;
		$project->save();
		
		$log = new logs;
        $log->users_id = $user_id;
        $log->activity = "Project github repository Change : Project # $project_id to $project_name" ;
        $log->save();


		return Redirect::back()->with('success','Project Github Repository Successfully Changed');

	}
	/*
    * Create New Project	
    */
	public function create() {
		return view('projects.sub.create');
	}
	/*
    * Create New Project FORM 	
    */
	public function store(Request $request) {
		$project = new projects;
		$project->name = $request->input('project_name');
		$project->user_id = $request->input('developer_id');
		$project->due_date = $request->input('Due_Date');
		$project->description = $request->input('description');
		$project->status = 1;
		$project->save();
		$user_id = $request->input('user_id');
		$user_name = User::find($user_id)->name;
		$log = new logs;
        $log->users_id = $user_id;
        $log->activity = "$user_name Created New Project" ;
        $log->save();
        return redirect('dashboard/projects')->with('success','Project Created Successfully');
	}
	/*
    *	Delete Project	
    */
	public function destroy($id)
    {

            $project = projects::find($id);

            $attachments = $project->attachments;
            $tasks = $project->tasks ;
            foreach ($attachments as $attachment ) 
            {
            	Storage::delete('public/projectsUploads/'. $attachment->file_name );
            	$attachment->delete();
            }
            foreach($tasks as $task) {
            	$task->users()->detach();
            	$task->delete();
            }

            $project->delete();
            $log = new logs;
	        $log->users_id = Auth::user()->id ;
	        $user_name = Auth::user()->name;
	        $log->activity = "$user_name removed Project $project->name " ;
	        $log->save();
            return redirect('dashboard/projects/')->with('success','Project Removed Successfully');

    }
    
}
