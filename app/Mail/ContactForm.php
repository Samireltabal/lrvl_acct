<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
        
        public $the_name ;
        public $the_mail;
        public $the_message;


    public function __construct($sender_name,$sender_email,$the_message)
    {
        //
        $this->the_name = $sender_name ;
        $this->the_mail = $sender_email;
        $this->the_message = $the_message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@carrotapps.xyz')
                    ->view('emails.contactForm');
    }
}
