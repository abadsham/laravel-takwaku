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
        Schema::create('doa_harians', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('arab');
            $table->string('latin');
            $table->string('arti');
            $table->string('footnote');

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
        Schema::dropIfExists('doa_harians');
    }
};
