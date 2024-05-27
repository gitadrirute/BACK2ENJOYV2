<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriasNegocio extends Model
{
    use HasFactory;

    public function negocios()
    {
        return $this->hasMany(Negocio::class);
    }

    /* public function usuarios()
    {
        return $this->belongsToMany(Usuario::class);
    } */
}
