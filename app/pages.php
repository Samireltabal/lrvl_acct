<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pages extends Model
{
    //
    protected $table = 'pages';
    public $timestamps = true;

public function toggle(){
    $this->active = !$this->active ;
    return $this;
}
}
