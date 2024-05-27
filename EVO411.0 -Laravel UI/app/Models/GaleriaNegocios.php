<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GaleriaNegocios extends Model
{
    use HasFactory;

    public function negocio(){

        return $this->belongsTo(Negocio::class);
    }
}
