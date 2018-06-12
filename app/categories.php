<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    //
    protected $table = 'categories';

    public function products()
    {
        return $this->hasMany('App\Products');
        }
}
