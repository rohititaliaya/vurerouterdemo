<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('parent_id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->text('phone_no');
            $table->string('customer_group')->default('1');               // have def value general
            $table->integer('country_id')->default(1);
            $table->integer('state_id')->default(1);
            $table->integer('city_id')->default(1);                 
            $table->integer('language_id')->default(1);
            $table->integer('currency_id')->default(1);         
            $table->string('password');    
            $table->integer('user_type_id')->default(1);            // have def value customer
            $table->integer('role_id')->default(1);                 // have def value
            $table->integer('vendor_type_id')->default(1);         // have def value 
            $table->string('status')->default(1);            // have def value
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
