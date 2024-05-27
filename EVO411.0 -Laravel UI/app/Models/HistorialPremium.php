<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistorialPremium extends Model
{
    use HasFactory;
    protected $table = "historial_premium";

    public function usuario()
    {

        $this->belongsTo(User::class);
    }

    /* public function metodoPago()
    {
        $this->hasOne(MetodoPago::class);
    } */
}
