<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beers', function (Blueprint $table) {
            $table->id();
            $table->string('beer_name', 50);
            $table->string('style', 50);
            $table->string('nation', 50);
            $table->string('url_img', 2048);
            $table->float('alcohol_volume', 3, 1)->unsigned();
            $table->float('vote', 3, 1)->unsigned();
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
        Schema::dropIfExists('beers');
    }
}
