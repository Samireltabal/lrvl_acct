<?php
use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
  public function run()
  {
    $role_customer = Role::where('name', 'customer')->first();

    $customer = new User();
    $customer->name = str_random(6) . ' ' . str_random(6);
    $customer->email = str_random(5) . '@example.com';
    $customer->password = bcrypt('123456');
    $customer->save();
    $customer->roles()->attach($role_customer);

   
  }
}
