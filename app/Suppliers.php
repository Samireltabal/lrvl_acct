<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suppliers extends Model
{
    protected $table = 'suppliers';
    public function products()
    {
        return $this->hasMany('App\Products');
        }
}
