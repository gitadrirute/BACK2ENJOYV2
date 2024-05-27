<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
    use HasFactory;

    public function negocio()
    {

        $this->belongsTo(Negocio::class);
    }

    public function tipoOferta()
    {

        $this->belongsTo(Oferta::class);
    }
}
