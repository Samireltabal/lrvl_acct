<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class messages extends Model
{
    //
    protected $table = 'messages';

    public function sender() {
    	return $this->belongsTo('App\User','sender_id');
    }
    public function reciever() {
    	return $this->belongsTo('App\User','reciever_id');
    }
    public function thread() {
    	return $this->belongsTo('App\threads','thread_id');
    }
}
