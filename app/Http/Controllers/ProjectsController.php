<?php

namespace App\Http\Controllers;
use App\projects;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\tasks;
use DB;
use App\customerInfo;
use App\attachments;



class ProjectsController extends Controller
{
    //
    public function index()
	{
		$user = new User;
		$projects = projects::all();
		/**
		 * $client = new Client;
		 * $response = $client->request('GET', 'https://www.carrotapps.net/api/products');
		 * $products = json_decode($response->getBody());
	     * @include('projects.sub.test')	
		 * include this in the view. 
		 * add this to compact ,'products'
		**/

		//$result = new Request('GET', '');
		//return response()->json($response);
    	



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
