<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles()
        {
          return $this->belongsToMany(Role::class);
        }

        /**

    * @param string|array $roles

    */

    public function authorizeRoles($roles)
        {
          if (is_array($roles)) {
              return $this->hasAnyRole($roles) || False ;
          }
          return $this->hasRole($roles) || False;
        }
    /**
     * 
     *
     * Check multiple roles
     * @param array $roles
     **/

    public function hasAnyRole($roles)
        {
          return null !== $this->roles()->whereIn('name', $roles)->first();
        }

    /**

    * Check one role

    * @param string $role

    */

    public function hasRole($role)
        {
          return null !== $this->roles()->where('name', $role)->first();
        }
    public function roleUser()
        {
          return $this->hasOne(RoleUser::class);
        }
    public function logs() 
        {
          return $this->hasMany('App\logs');
        }
    public function tasks() 
        {
          return $this->belongsToMany('App\tasks');
        }
        public function assignments() {
          return $this->hasMany('App\assignments','users_id');
        }
        public function projects() {
            return $this->hasMany('App\projects');
        } 
        public function info() {
            return $this->hasMany('App\customerInfo');
        }
}
