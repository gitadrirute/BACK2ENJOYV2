<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolesUsuario extends Model
{
    use HasFactory;
    public function rolesUsuario()
    {
        return $this->hasMany(User::class);
    }
}
