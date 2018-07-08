<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Input;
use Auth;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\portfolio;
use App\User;
use Image;

class PortfolioController extends Controller
{
    //
    public function index() {
        $portfolio = portfolio::all();
        return view('admin.content.portfolio.main')->with(compact(['portfolio']));
    }
    public function create(Request $request) {
        $this->validate($request, [
                'item_name' => 'required|string|max:255',
                'url' => 'required|url|max:255',
                'description' => 'required|max:1000',
                'image' => 'image|required|dimensions:min_width=400,min_height=600',
            ]);

            $file = Input::file('image');
            $user = Auth::user()->id;
            $thumbnailImage = Image::make($file);
            $fileNameWithExt = $file->getClientOriginalName();
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extention = $file->getClientOriginalExtension();
            $FileNameToStore = $filename.'_'.time().'.'.$extention;
            $thumbnailPath = public_path().'/storage/portolioUploadsThumb/';
            $originalPath = public_path().'/storage/portolioUploads/';
            $thumbnailImage->insert(get_option('logo'), 'bottom-right', 10, 10);
            $thumbnailImage->save($originalPath.$FileNameToStore);
            $thumbnailImage->resize(400,400);
            $thumbnailImage->save($thumbnailPath.$FileNameToStore); 

            // $fileNameWithExt = $file->getClientOriginalName();
            // $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            // $extention = $file->getClientOriginalExtension();
            // $FileNameToStore = $filename.'_'.time().'.'.$extention;
            // $destinationPath ="storage/portolioUploads";
            // $ThumbPath ="storage/portolioUploadsThumb";
            

            if ($request->input('status'))
            {
                $status = true;
            }else{
                $status = false;
            }
            $dataset = array(
                'title' => $request->input('item_name'),
                'url' => $request->input('url'),
                'description' => $request->input('description'),
                'image' => $FileNameToStore,
                'created_at' => date('Y-m-d G:i:s'),
                'updated_at' => date('Y-m-d G:i:s'),
                'active' =>  $status,
                'ip_address' => $request->ip(),
                'agent' => $request->userAgent(),
                'user_id' => $user
            );
            // $file->move($destinationPath, $FileNameToStore);
            $id = DB::table('portfolio')->insertGetId($dataset);

   
            return Redirect::back()->with('success',"Successfully Added The Portfolio Item With id $id");        
    }
    function changeStat(Request $request) {
        $this->validate($request, [
                'portfolio_item_id' => 'required',
            ]);
        $change = $request->input('portfolio_item_id');
        $item = portfolio::find($change);
        $item->togglestat()->save();

        return Redirect::back()->with('success',"Status Changed Successfully");        

    }
    function remove(Request $request){
        $this->validate($request, [
            'portfolio_item_id' => 'required',
        ]);
        $item_id = $request->input('portfolio_item_id');
        $item = portfolio::findOrFail($item_id);
        $image = $item->image ;
        Storage::delete('public/portolioUploads/'.$image);

        $item->delete();

        return Redirect::back()->with('success',"Item Deleted Successfully");        

    }
    function ui() {
        $portfolio_items = portfolio::all();
        return view('ui.pages.portfolio')->with(compact(['portfolio_items']));
    }
}
