<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;

class projects extends Model
{
    //
	protected $table = 'projects';
    public function tasks() {
    	return $this->hasMany('App\tasks');
    }
    public function customer() {
    	return $this->belongsTo('App\User' ,'user_id');
    }
    public function attachments() {
    	return $this->hasMany('App\attachments', 'projects_id');
    }
}
