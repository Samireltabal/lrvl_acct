<?php 
use App\options;
use GuzzleHttp\Client;
// Github Apis Handling
function get_repo_url($repo_name = null) {
    if(isset($repo_name)){
          $client = new Client;
          $response = $client->request('GET', 'https://api.github.com/repos/'.$repo_name);
          $products = json_decode($response->getBody());
          echo '<a href="' . $products->html_url . '" target="_blank" ><i class="fa fa-link"></i> ' . $products->name . '</a>';
    }else{
        echo "No Repo Attached";
    }
}
function get_repo_description($repo_name = null) {
    if(isset($repo_name)){
          $client = new Client;
          $response = $client->request('GET', 'https://api.github.com/repos/'.$repo_name);
          $products = json_decode($response->getBody());
          echo $products->description;
    }else{
        echo "No Repo Attached";
    }
}
//  End Github
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