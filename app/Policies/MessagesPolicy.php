<?php

namespace App\Policies;

use App\User;
use App\threads;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagesPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //

    }
    public function view(User $user, threads $thread)
    {
        if($user->id === $thread->sender_id)
        {
            return true;
        }
        if($user->id === $thread->reciever_id)
        {
            return true;
        }
        if(isEmployee())
        {
            return true;
        }
        Abort(404);    
    }
}
