<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\menus;
use App\menuItems;
use DB;

class MenusController extends Controller
{
    //
    public function index()
    {
        $menus = new menus;
        $menus = $menus::all();
        return view('menu.main')->with(compact(['menus']));
    }
    public function addMenu(Request $request) 
    {
        $this->validate($request, [
                'name' => 'required|string|max:255',
            ]);
        $menu_name = $request->input('name');
        $menu = new menus;
        $menu->menu_name = $menu_name;
        $menu->active = 1;
        $menu->save();
        $result = array(
        'status' => 'success',
        'data' => array(
            'id' => $menu->id,
        )
        );
        return response()->json($result,200);

    }    
    public function addItem(Request $request) 
    {
        $this->validate($request, [
                'name' => 'required|string|max:100',
                'url' => 'required',
                'order' => 'required',
                'menu_id' => 'required',                
            ]);
        if($request->input('hasSub')){
            $hasSub = true;
        }else{
            $hasSub = false;
        }
        $dataset = array(
            'name' => $request->input('name'),
            'url' => $request->input('url') ,
            'order' => $request->input('order') ,
            'hasSub' => $hasSub,
            'parent_id' => $request->input('parent_id') ,
            'menu_id' => $request->input('menu_id'),
            'class' => $request->input('class') ,
        );
        DB::table("menu_items")->insert($dataset);
        return response('true',200);
    }
    public function changeState(Request $request) 
    {
        
    }
    public function updateItem(Request $request) 
    {
        
    }
    public function updateMenu(Request $request) 
    {
        
    }
    public function removeMenu(Request $request) 
    {
        $menu_id = $request->input('menu_id');
        $item = menus::find($menu_id);
        $menuItems = $item->menuItems;
        foreach ($menuItems as $subItem) {
            $subItem->delete();
        }
        $item->delete();
        return response('True',200);
    }
    public function removeMenuItem(Request $request) 
    {
        $menu_id = $request->input('id');
        $item = menuItems::find($menu_id);
        $SubmenuItems = $item->sub;
        if($SubmenuItems)
        {
            foreach ($SubmenuItems as $subItem) {
                $subItem->delete();
            }
        }
        $item->delete();
        return response('True',200);

    }
    public function toggleSub(Request $request){
        $menuItemId = $request->input('id');
        $menu = menuItems::find($menuItemId);
        $menu->toggleSub()->save();
        return response()->json('True',200);
    }
    public function ajaxMenu() {
        $results = array();
		$term = request('id');
        $menus = menus::find($term);
        if($menus) {
            return view('menu.response')->with(compact(['menus']));
        }else {
            return response('No Data');
        }
        
    }
}
