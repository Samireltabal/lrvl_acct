<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\pages;
use Illuminate\Support\Facades\Redirect;
use DB;
class PagesController extends Controller
{
    //
    /*
    *    route('page.main) -> GET
    */
    public function index() {
        $pages = pages::all();
        return view('pages.list')->with('pages',$pages);
    }
    /*
    *    route('page.create) -> GET
    */
    public function create() {
        return view('pages.create');
    }
    /*
    *    route('page.store) -> POST
    */
    public function store(Request $request) {
        $this->validate($request, [
                'title' => 'required|string|max:255|unique:pages',
                'body' => 'required|min:20|max:5000',                
            ]);
        $status = $request->input('active') ? true : false ;
        $dataset = array(
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'active' => $status ,
            'user_id' => $request->input('user_id'),
            'tags' => $request->input('tags'),
            'slug' => str_slug($request->input('title'),'-'),     
        );
        $page = new pages;
        foreach($dataset as $key => $value){
            $page->$key = $value;
        }
        $page->save();

        return redirect(route('page.main'))->with('success','page added successfully');
    }
    /*
    *    route('page.update) -> Get
    */
    public function Edit($id) {
        $page = pages::find($id);
        return view('pages.edit')->with('page',$page);
    }
    /*
    *    route('page.update) -> POST
    */
    public function EditForm(Request $request) {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'body' => 'required|min:20|max:5000',                
        ]);
        $status = $request->input('active') ? true : false ;
        $dataset = array(
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'active' => $status ,
            'updated_by' => $request->input('user_id'),
            'tags' => $request->input('tags'),
        );
        $page = pages::find($request->input('page_id'));
        foreach($dataset as $key => $value){
            $page->$key = $value;
        }
        $page->save();

        return Redirect::back()->with('success','Page Updated Successfully');
    }
    /*
    *    route('page.remove) -> DELETE
    */
    public function remove(Request $request) {
        $id =  $request->input('id');
        $page = pages::find($id);
        $page->delete();
        return Redirect::back()->with('success','Page Deleted Successfully');

    }
    /*
    *   route('ui.page') -> GET
    */
    public function show($slug){
        $page = pages::where('slug',$slug)->get();
        if ($page->count())
        {
            $page = $page[0];

            if ($page->active){
                return view('pages.ui')->with('page',$page);
            }else{
                abort(404);
            }
        }
        abort(404);
        
    }
    /*
    *   route('page.toggle') -> post
    */
    public function activation(Request $request) {
        $id = $request->input('id');
        $page = pages::find($id);
        $page->toggle()->save();
        return Redirect::back()->with('success','Page Status Updated Successfully');
    }
}
