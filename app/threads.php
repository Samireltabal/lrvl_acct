<?php

namespace App;

use App\User;
use App\messages;

use Illuminate\Database\Eloquent\Model;

class threads extends Model
{
    //
    protected $table = 'threads';
    public $timestamps = true;


    public function sender() {
    	return $this->belongsTo('App\User','sender_id');
    }
    public function reciever() {
    	return $this->belongsTo('App\User','reciever_id');
    }
    public function messages() {
    	return $this->hasMany('App\messages','thread_id');
    }
    public function lastMessage() {
        return $this->hasMany('App\messages','thread_id')->orderBy('updated_at','desc')->first();
    }
}
