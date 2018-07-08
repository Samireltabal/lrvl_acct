<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class menuItems extends Model
{
    //
    protected $table = 'menu_items';

    public function menus() {
    	return $this->belongsTo('App\menus','menu_id');
    }
    public function sub() {
        return $this->hasMany('App\menuItems','parent_id','id');
    }
    public function toggleSub() {
        $this->hasSub = !$this->hasSub;
        return $this;
    }
}
