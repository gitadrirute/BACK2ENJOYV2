<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Negocio extends Model
{
    use HasFactory;

    public function categoria()
    {
        return $this->belongsTo(CategoriasNegocio::class);
    }

    public function valoracionesNegocio()
    {
        return $this->hasMany(Valoraciones::class);
    }

    public function ofertas()
    {

        $this->hasMany(Oferta::class);
    }

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function galeriasNegocio(){

        return $this->hasMany(GaleriaNegocios::class);
    }
}
