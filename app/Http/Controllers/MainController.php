<?php

namespace App\Http\Controllers;
use App\Role;
use App\User;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }
   public function index() {
    return view('welcome');
   }
   public function restricted() {
    return view('restricted');
   }
}
