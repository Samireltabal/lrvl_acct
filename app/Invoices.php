<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    //
    protected $table = 'invoices';

    public function items()
    {
        return $this->hasMany('App\Items');
        }
}
