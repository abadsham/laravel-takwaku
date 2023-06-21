<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kisah_sejarahs', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('nama')->default('hamba Allah');
            $table->string('image')->nullable();
            $table->text('konten');

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
        Schema::dropIfExists('kisah_sejarahs');
    }
};
