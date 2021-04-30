<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('brand', 50);
            $table->string('model', 50);
            $table->string('generation', 50);
            $table->unsignedSmallInteger('start_of_production');
            $table->unsignedTinyInteger('doors');
            $table->string('body_type', 50);
            $table->string('fuel_type', 50);
            $table->unsignedSmallInteger('max_speed');
            $table->unsignedSmallInteger('power');
            $table->string('url_img', 2048);
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
        Schema::dropIfExists('cars');
    }
}
