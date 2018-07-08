<?php

use App\menus;
use App\menuItems;


function show_menu($name) {
  $menus = new menus;
  $menu = $menus::where('menu_name',$name)->first();
  if ($menu) {
  	if ($menu->active !== 0) {
  		$menu_items = $menu->menuItems;
        if($menu_items->count() !== 0) {
        	echo "<ul class='navbar-nav mr-auto'>";  // Menu Opening
	        foreach($menu_items as $menu_item)
	        {
	          if($menu_item->hasSub && ! $menu_item->parent_id )
	          { // has Sub
	            echo '<li class="dropdown nav-item">'; // Item has sub Opening
	            echo '<a href="' .  $menu_item->url . '" class="dropdown-toggle nav-link" data-toggle="dropdown">' ; // item link opening
	            echo '<i class="material-icons"> ' . $menu_item->class . '</i>';
	            echo $menu_item->name ;  
	            echo '</a>'; // item link closing
	              $sub_menus = menuItems::where('parent_id',$menu_item->id)->orderBy('order','asc')->get();
	              if($sub_menus->count() !== 0){
	              echo '<div class="dropdown-menu dropdown-with-icons">'; // sub menu opening
	              // Sub links
	              foreach($sub_menus as $sub_menu){
	                echo '<a href="' .  $sub_menu->url . '" class="dropdown-item">'; // sub item opening
	                echo '<i class="material-icons"> ' . $sub_menu->class . '</i>'; // Class (icon)
	                echo $sub_menu->name;
	                echo '</a>'; // sub item closing
	              }
	              echo '</div>'; // sub menu closing
	            }
	            echo '</li>'; // item has sub closing
	          }
	          elseif(! $menu_item->hasSub)
	            { // Normal Links
	              if ( ! $menu_item->parent_id ){ 
	              echo '<li class="nav-item">';
	              echo '<a class="nav-link" href="' . $menu_item->url .  '">';
	              echo '<i class="material-icons"> ' . $menu_item->class . '</i>';
	              echo $menu_item->name;              
	              echo '</a>';
	              echo '</li>';
	            }
	          }
	        } 
        	echo "</ul>"; // closing menu
      	}
      	else
      	{
      		return 'Menu Does not Have items'; // No MenuItems Related to Asked Menu
      	}
  	}
  	else
  	{
  		return 'Menu is not Activated';  // Menu is not Active
  	}
  }
  else
  {
  	return 'No Menu Attached'; // No Menu Found with this name 
  }
}
function get_menu_id($name) {
  
  return $menu->id;
}