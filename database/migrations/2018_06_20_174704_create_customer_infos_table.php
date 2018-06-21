<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->char('name',100);
            $table->char('address',255);
            $table->char('country',100);
            $table->char('city',100);
            $table->integer('user_id');
            $table->char('phone',100);
            $table->char('website',200);
            $table->date('birth');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_infos');
    }
}
