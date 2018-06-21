<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tasks extends Model
{
    //
    public function project()
    {
        return $this->belongsTo('App\projects','projects_id');
    }
    public function users() 
    {
    	return $this->belongsToMany('App\User');
    }
    public function creater() {
        return $this->belongsTo('App\User','users_id');
    }
    public function attachments() {
    	return $this->hasMany('App\attachments');
    }

}
