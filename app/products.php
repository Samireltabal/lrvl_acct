<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    protected $table = 'products';
    public function categories() {
        return $this->belongsTo('App\Categories');
    }
}
