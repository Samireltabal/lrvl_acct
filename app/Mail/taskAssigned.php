<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class taskAssigned extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

        public $user_name ;
        public $admin_name;
        public $project_name;
        public $task_name;
        public $created_at;


    public function __construct($user_name,$admin_name,$project_name,$task_name,$created_at)
    {
        //
        $this->user_name = $user_name;
        $this->admin_name = $admin_name;
        $this->project_name = $project_name;
        $this->task_name = $task_name;
        $this->created_at = $created_at;
        
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@carrotapps.net')
                ->view('emails.taskAssigned');
    }
}
