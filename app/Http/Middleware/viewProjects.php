<?php

namespace App\Http\Middleware;

use Closure;

class viewProjects
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
        if ($request->id == Auth::user()->id ||  Auth::user()->authorizeRoles(['manager']) !== false) {
                    return $next($request);
            }

            return redirect('/')->with('error','You are not authorised to view this page');
    }
}
