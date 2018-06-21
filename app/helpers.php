<?php 
use App\options;
function print_hello() {
    $options = new options;
    $return = $options::all();
    if (count($return) > 0) {
        return $return;
    }else{
        return 'No Options have been assigned';
    }
}
function get_option(string $key = null) {
    if($key == null) {
        return 'Error : No Key assigned';
    }else{
        $options = new options;
        if ( $options::where('option',$key)->exists() ) {
            $option = $options::where('option',$key)->first();
            return $option->value;
        }else{
            return 'key is not defined';
        }
    }
}
function get_option_desc(string $key = null) {
    if($key == null) {
        return 'Error : No Key assigned';
    }else{
        $options = new options;
        if ( $options::where('option',$key)->exists() ) {
            $option = $options::where('option',$key)->first();
            return $option->description;
        }else{
            return 'key is not defined';
        }
    }
}

?>