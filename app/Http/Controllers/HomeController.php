<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Illuminate\Support\Facades\Redirect;
use App\customerInfo;
use App\projects;
use App\countriesList;


class HomeController extends Controller
{
    public function index() 
    {
    	return view('ui.index');
    }
    public function profile() 
    {
      	$users = new User;
      	$user_id = Auth::user()->id;
      	$user = $users::find($user_id)->first();
      	$users_info = customerInfo::firstOrCreate(['user_id' => $user_id ], []);
      	$countries = countriesList::all();
      	return view('ui.pages.profile')->with(compact('user','countries','users_info'));
    }
    public function projects() {
      $projects = projects::where('user_id',Auth::user()->id)->get();
      return view('ui.pages.projects')->with(compact('projects'));
      
    }
    public function project($id) {
      $project = projects::find($id);

      if($this->authorizeForUser(Auth::user(), 'view', [$project]))
      
      return view('ui.pages.projectSingle')->with(compact('project'));
      
          

    }
}
