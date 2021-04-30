<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthorDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author_details', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('author_id'); // FK

            $table->string('bio', 500);
            $table->string('website_url', 2048);
            $table->string('logo_url', 2048);
            $table->string('email', 320);
            $table->string('telephone', 15);
            $table->timestamps();

            $table->foreign('author_id')
                  ->references('id')
                  ->on('authors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('author_details');
    }
}
