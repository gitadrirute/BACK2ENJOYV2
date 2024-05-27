<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginUsuariosController extends Controller
{

    function Login(Request $request)
    {

        $validated = $request->validate(
            [
                'nombreUsuario' => 'required',
                'contraseña' => 'required'
            ],
            [
                'nombre.required' => 'El campo nombre de usuario es obligatorio',
                'contraseña.required' => 'El campo contraseña es obligatorio',


            ]
        );
    }
}
