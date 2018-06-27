<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class logs extends Model
{
    protected $table = 'logs';

    public function user() {
        return $this->belongsTo('App\User','users_id');
    }
}
