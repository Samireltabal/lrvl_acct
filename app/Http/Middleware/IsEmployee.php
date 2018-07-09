<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Redirect;
class IsEmployee
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::user() &&  Auth::user()->authorizeRoles(['employee']) !== false || Auth::user() &&  Auth::user()->authorizeRoles(['manager']) !== false) {
                    return $next($request);
            }

        return Redirect::back()->with('error','You are not authorised to view this page');
    }
}
