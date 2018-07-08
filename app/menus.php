<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class menus extends Model
{
    //
    protected $table = 'menus';
    
    public function menuItems() {
    	return $this->hasMany('App\menuItems','menu_id')->orderBy('order','asc');
    }
}
