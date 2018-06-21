<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\User;
class searchAutocomplete extends Controller
{
    //
    public function name(){

    	$results = array();
		$term = request('term');
        $queries = User::whereName($term)->orWhere('name', 'LIKE', '%' . $term . '%')->get();
        foreach ($queries as $query)
			{
			    $results[] = [ 'id' => $query->id, 'value' => $query->name ];
			}
        return response()->json($results);
	}
	public function view() {
		return view('admin.test.autocomplete');
	}
}


