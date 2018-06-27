<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class attachments extends Model
{
    //
    public function tasks() {
    	return $this->belongsTo('App\tasks');
    }
    public function projects() {
    	return $this->belongsTo('App\projects','projects_id');
    }
    public function user() {
    	return $this->belongsTo('App\User','users_id');
    }
}
