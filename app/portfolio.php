<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class portfolio extends Model
{
    //
    protected $table = 'portfolio';
    protected $fillable = [
        'title', 'description', 'url', 'active', 'image'
    ];

    public function user() {
        return $this->belongsTo('App\User','user_id');
    }
    public function togglestat() {
        $this->active = !$this->active;
        return $this;
    }
}
