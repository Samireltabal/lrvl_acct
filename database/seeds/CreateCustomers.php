<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class CreateCustomers extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
	  {
	    for ($i = 0 ; $i < 30 ; $i++ ){
	    $role_customer = Role::where('name', 'customer')->first();

	    $customer = new User();
	    $customer->name = str_random(6) . ' ' . str_random(6);
	    $customer->email = str_random(5) . '@example.com';
	    $customer->password = bcrypt('123456');
	    $customer->save();
	    $customer->roles()->attach($role_customer);
		}
	   
	  }
}
