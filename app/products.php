<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    protected $table = 'products';
    public $timestamps = true;

    public function categories() {
        return $this->belongsTo('App\products');
    }
}
