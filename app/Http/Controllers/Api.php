<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class Api extends Controller
{
    //
    public function users() {
    	return response()->json(User::all(),'200');
    }
}
