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
            $table->text('konten1');
            $table->text('konten2')->nullable();
            $table->text('konten3')->nullable();
            $table->text('konten4')->nullable();
            $table->text('konten5')->nullable();
            $table->text('konten6')->nullable();
            $table->text('konten7')->nullable();
            $table->text('konten8')->nullable();

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
