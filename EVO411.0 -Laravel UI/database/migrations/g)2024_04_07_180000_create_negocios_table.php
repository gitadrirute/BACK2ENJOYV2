<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('negocios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->string('NIF')->unique();
            $table->string('direccion');
            $table->integer('telefono')->unique();
            $table->string('sitioWeb')->unique();
            $table->string('horario')->nullable();
            $table->string('informacion')->nullable();
            $table->string('ubicacion');
            $table->boolean('validado');
            $table->unsignedBigInteger('categoria_negocio_id');
            $table->foreign('categoria_negocio_id')->references('id')->on('categorias_negocios');
            $table->unsignedBigInteger('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios')->onDelete('cascade'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negocios');
    }
};
