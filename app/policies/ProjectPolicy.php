<?php

namespace App\Policies;

use App\User;
use App\projects;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
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
    public function view(User $user, projects $project)
    {
        if($user->id === $project->user_id)
        {
        return true;
        }
        if($user->hasRole('manager'))
        {
            return true;
        }
        Abort(404);    
    }
}
