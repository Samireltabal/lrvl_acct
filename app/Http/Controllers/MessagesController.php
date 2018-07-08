<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\messages;
use App\threads;
use App\User;
use DB;
use Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Mail;
use App\Mail\newMessage;

class MessagesController extends Controller
{
    //
    public function index(){
    	$threads = threads::
    				  where('sender_id',Auth::user()->id)
    				->orWhere('reciever_id',Auth::user()->id)
    				->orderBy('updated_at','desc')
    				->get();
    	return view('ui.messages.index')->with(compact(['threads']));
    }
    public function thread($id) {
    	$thread = threads::find($id);
			if($this->authorizeForUser(Auth::user(), 'view', [$thread]))
			{    
				$messages = $thread->messages;					
	    		if ($messages)
	    		{
	    			$the_response = $messages;
	    		}	
	    		else{
	    			$the_response = null;
	    		}    	
	    		return view('ui.messages.messageSingle')->with(compact(['the_response','thread']));

    	}
    }
    public function reply(Request $request) {
        $this->validate($request, [
            'response' => 'required|string|max:1000',
            'thread_id' => 'required',
            'reciever_id' => 'required',
        ]);
        

        $message = new messages;
        $message->body = $request->input('response');
        $message->thread_id = $request->input('thread_id');
        $message->reciever_id = $request->input('reciever_id');
        $message->sender_id = Auth::user()->id;
        $message->sender_ip = $request->ip();
        $message->sender_agent = $request->userAgent();
        $message->status = 1;
        $message->save();
        $thread = threads::find($request->input('thread_id'));
        $thread->updated_at = date('Y-m-d G:i:s');
        $thread->save();

        return Redirect::back()->with('Sent',$message->thread_id);

    }
    public function msgRead($thread_id) {
        
        $messages = messages::
                              where('thread_id',$thread_id)
                            ->where('reciever_id',Auth::user()->id)
                            ->get();
        foreach ($messages as $message) {
            $message->status = 0;
            $message->save();
        }
        return response()->json('success',200);
    }
    public function admin() {
        $threads_obj = new threads;
        $threads = $threads_obj::all()->sortByDesc('updated_at');
        
        return view('admin.content.messages.index')->with(compact(['threads']));
    }
    public function adminSend() {    
           return view('admin.content.messages.compose'); 
    }
    public function adminSendForm(Request $request) {
        $this->validate($request, [
            'message' => 'required|string|max:1000',
            'reciever_id' => 'required',
            ]);
            $thread = new threads;
            $thread->sender_id = Auth::user()->id;
            $thread->reciever_id = $request->input('reciever_id');
            $thread->status = 1;
            $thread->type = "Message";
            $thread->save();

            $message = new messages;
            $message->sender_id = Auth::user()->id;
            $message->body = $request->input('message');
            $message->reciever_id = $request->input('reciever_id');
            $message->thread_id = $thread->id;
            $message->sender_ip = $request->ip();
            $message->sender_agent = $request->userAgent();
            $message->status = 1;
            $message->save();
            
            Mail::to($thread->reciever->email)->send( new newMessage($thread->reciever->name,$thread->created_at));

            return redirect('/dashboard/messages')->with('Sent',$thread->id);

    }
}
