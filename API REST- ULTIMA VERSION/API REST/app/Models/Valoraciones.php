<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valoraciones extends Model
{
    use HasFactory;

    public function valoracionesUsuario()
    {

        return $this->belongsTo(User::class);
    }

    public function valoracionesNegocio()
    {

        return $this->belongsTo(Negocio::class);
    }
}
