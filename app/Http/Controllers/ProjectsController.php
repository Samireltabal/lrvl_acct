<?php

namespace App\Http\Controllers;
use App\projects;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\tasks;
use App\customerInfo;
use App\attachments;

class ProjectsController extends Controller
{
    //
    public function index()
	{
		$user = new User;
		$projects = projects::all();
    	return view('projects.sub.index')->with(compact( ['projects', 'user'] ));
	}
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
    
}
