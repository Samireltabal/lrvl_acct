<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table = 'items';
    public function invoices() {
        return $this->belongsTo('App\Invoices');
    }
}
