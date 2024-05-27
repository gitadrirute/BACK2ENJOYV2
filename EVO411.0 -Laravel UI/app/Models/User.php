<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'usuarios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
   

    public function historialPremium()
    {

        return $this->hasMany(HistorialPremium::class);
    }

    public function metodosDePago(){
        return $this->hasMany(MetodoPago::class);
    }

    public function roles()
    {
        return $this->belongsTo(RolesUsuario::class);
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoraciones::class);
    }

    

    public function negocio()
    {

        return $this->hasOne(Negocio::class);
    }

    public function galeriasUsuario()
    {

        return $this->hasMany(GaleriaUsuarios::class);
    }
}
