<?php

namespace App\Http\Controllers;
use NoCaptcha;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use App\Mail\ContactForm;
use App\Mail\TaskAssigned;

class contactController extends Controller
{
    //
    public function index() {
        $cap = new NoCaptcha;
        return view('pages.contact')->with('cap',$cap);
    }
    public function send(Request $request) {
        $this->validate($request, [
                'g-recaptcha-response' => 'captcha|required',
                'email' => 'required|string|email|max:255',
                'name' => 'required|string|max:255',
                'message' => 'required|string|min:20|max:1000'
            ]);
            $name = $request->input('name');
            $mail = $request->input('email');
            $message = $request->input('message');
            Mail::to('info@carrotapps.xyz')->send( new ContactForm($name,$mail,$message) );
            return response('Message Sent Successfully',200);
            //return back()->with('success', 'Thanks for contacting us!'); 
        }
}
