<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Negocio;
use App\Models\RolesUsuario;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function registro(Request $request)
    {
        try {

            $validated = $request->validate(
                [
                    'nombre' => 'required|regex:/^[a-zA-Z\s]+$/|max:30', //no puedo escribir caracteres especiales
                    'apellidos' => 'required|regex:/^[a-zA-Z\s]+$/|max:40', //no puedo escribir caracteres especiales
                    'nombreUsuario' => 'required|max:13|min:5|unique:usuarios,nombreUsuario',
                    'DNI' => 'required|size:9|regex:/^[0-9]{8}[A-Za-z]$/|unique:usuarios,DNI', //asegura que el DNI consista en exactamente 8 números seguidos de una letra (puede ser mayúscula o minúscula).
                    'correo' => 'required|email|max:35|min:13|unique:usuarios,correo',
                    'contraseña' => 'required|confirmed|max:30|min:8|regex:/[A-Z]/|regex:/[a-z]/|regex:/[0-9]/|regex:/[_@$!%*?&]/', // la contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.
                    'contraseña_confirmation' => 'required'
                ],
                [
                    'nombre.required' => 'El campo nombre es obligatorio',
                    'nombre.regex' => 'El campo nombre no puede contener caracteres especiales',
                    'nombre.max' => 'El campo nombre no puede tener mas de 30 caracteres',
                    'apellidos.required' => 'El campo apellidos es obligatorio',
                    'apellidos.regex' => 'El campo apellidos no puede contener caracteres especiales',
                    'apellidos.max' => 'El campo apellidos no puede tener mas de 40 caracteres',
                    'nombreUsuario.required' => 'El campo nombre de usuario es obligatorio',
                    'nombreUsuario.max' => 'El nombre de usuario debe de tener 13 caracteres como maximo',
                    'nombreUsuario.min' => 'El nombre de usuario no debe de tener menos de 5 caracteres',
                    'nombreUsuario.unique' => 'Este nombre de usuario ya existe',
                    'DNI.required' => 'El campo DNI es obligatorio',
                    'DNI.size' => 'El DNI debe de tener 9 caracteres',
                    'DNI.regex' => 'El DNI debe de tener el formato correcto',
                    'DNI.unique' => 'Este DNI ya existe',
                    'correo.required' => 'El campo correo es obligatorio',
                    'correo.email' => 'El correo debe de tener el formato correcto',
                    'correo.max' => 'El campo correo supera el limite máximo de caracteres:35',
                    'correo.min' => 'El campo correo no supera el minimo de caracteres: 13',
                    'correo.unique' => 'Este correo ya existe',
                    'contraseña.required' => 'El campo contraseña es obligatorio',
                    'contraseña.confirmed' => 'La  confirmacion de la contraseña no coincide',
                    'contraseña.max' => 'El campo contraseña no puede tener mas de 30 caracteres',
                    'contraseña.min' => 'El campo contraseña no puede tener menos de 8 carcateres',
                    'contraseña.regex' => 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial',


                ]

            );

            $rolPredeterminado = 2;
            $validacionPredeterminada = 0;

            $usuario = new User();
            $usuario->nombre = $validated['nombre'];
            $usuario->apellidos =  $validated['apellidos'];
            $usuario->nombreUsuario =  $validated['nombreUsuario'];
            $usuario->DNI = $validated['DNI'];
            $usuario->correo =  $validated['correo'];
            $usuario->contraseña = Hash::make($validated['contraseña']);
            $usuario->validado =  $validacionPredeterminada;
            $usuario->rol_usuario_id = $rolPredeterminado; //rol con id 2 , usuario normal
            $usuario->save();

            //Mail::to($usuario->correo)->send(new WelcomeMail($usuario));

            //$token = JWTAuth::fromUser($usuario);

            $data = [
                'mensaje' => 'Usuario creado correctamente',
                'usuario' => $usuario,
                //'token'=> $token
            ];

            return response()->json($data, Response::HTTP_CREATED);
        } catch (ValidationException $errorValidacion) {

            return response()->json([
                'mensaje' => 'Error de validacion',
                'error' => $errorValidacion->errors()
            ], 422);
        }
    }

    public function login(Request $request)
    {

        $validated = $request->validate(
            [
                'nombreUsuario' => 'required',
                'contraseña' => 'required'
            ],
            [
                'nombreUsuario.required' => 'El campo nombre de usuario es obligatorio',
                'contraseña.required' => 'El campo contraseña es obligatoria',

            ]
        );

        $usuario = User::where("nombreUsuario", "=", $validated["nombreUsuario"])->first();

        if (isset($usuario->id)) {
            if (Hash::check($validated['contraseña'], $usuario->contraseña)) {

                if ($usuario->validado) {

                    $token = $usuario->createToken("auth_token")->plainTextToken;

                    return response()->json([
                        'status' => 1,
                        'mensaje' => 'Usuario logeado exitosamente',
                        'token de acceso' => $token
                    ], Response::HTTP_OK);
                } else {
                    return response()->json([
                        'status' => 0,
                        'mensaje' => 'Tu cuenta aún no ha sido validada',

                    ], Response::HTTP_FORBIDDEN);
                }
            } else {

                return response()->json([
                    'status' => 0,
                    'mensaje' => 'La contraseña o nombre de usuario son incorrectos',
                ], Response::HTTP_UNAUTHORIZED);
            }
        } else {

            return response()->json([
                'status' => 0,
                'mensaje' => "La contraseña o nombre de usuario son incorrectos" // darle pistas al usuario???
            ], 404);
        }
    }



    public function perfilUsuario()
    {
        $usuario = auth()->user();

        $resultado = [];

        if ($usuario->rol_usuario_id == 1) {
            $resultado = $usuario;
        } elseif ($usuario->rol_usuario_id == 2) {
            /*  $data = [
                'nombre' => $usuario->nombre,
                'apellidos' => $usuario->apellidos,
                'nombreUsuario' => $usuario->nombreUsuario,
                'DNI' => $usuario->DNI
            ]; */

            $usuarioPerfil = DB::table('usuarios')
                ->leftJoin('negocios', 'negocios.usuario_id', '=', 'usuarios.id')
                ->select('usuarios.nombre', 'usuarios.apellidos','usuarios.nombreUsuario' ,'usuarios.correo', 'negocios.nombre as negocio')
                ->where('usuarios.id', '=', $usuario->id)
                ->get();
        }

        foreach ($usuarioPerfil as $usuario) {
            $resultado = [
                'nombre' => $usuario->nombre,
                'apellidos' => $usuario->apellidos,
                'nombreUsuario' => $usuario->nombreUsuario,
                'correo' => $usuario->correo,
                'negocio' => $usuario->negocio
            ];
        }

        return response()->json([
            'mensaje' => "Acerca de mi perfil de usuario",
            'datos del usuario' => $resultado
        ]);
    }

    /*  public function cambiarContraseña(Request $request)
    {
        try {
            $validated = $request->validate([
                'contraseña' => 'required|confirmed|max:30|min:8|regex:/[A-Z]/|regex:/[a-z]/|regex:/[0-9]/|regex:/[@$!%*?&]/', // la contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.
                'contraseña_confirmation' => 'required'

            ], [
                'contraseña.required' => 'El campo contraseña es obligatorio',
                'contraseña.confirmed' => 'La  confirmacion de la contraseña no coincide',
                'contraseña.max' => 'El campo contraseña no puede tener mas de 30 caracteres',
                'contraseña.min' => 'El campo contraseña no puede tener menos de 8 carcateres',
                'contraseña.regex' => 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'

            ]);
            $usuario = Auth::user();

            if (Hash::check($validated['contraseña'], $usuario->contraseña)) {
                $usuario->contraseña = Hash::make($validated['contraseña']);
                $usuario->save();

                return response()->json([

                    'mensaje' => "La contraseña se ha cambiado con éxito",

                ], Response::HTTP_ACCEPTED);
            } else {
                // Si la contraseña actual no coincide, devuelve un mensaje de error
                return response()->json([
                    'mensaje' => 'La contraseña actual no es correcta',
                ], Response::HTTP_BAD_REQUEST);
            }
        } catch (ValidationException $errores) {

            return response()->json([
                'mensaje' => 'Errores de validacion',
                'error' => $errores
            ], 422);
        } 
    }*/



    public function logout()
    {
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([
            'mensaje' => "Sesión cerrada",
        ], Response::HTTP_OK);
    }


    public function registroNegocio(Request $request)
    {
        try {

            $validated = $request->validate(
                [
                    'nombre' => 'required|regex:/^[a-zA-Z\s]+$/|max:50|unique:negocios,nombre',
                    'NIF' => 'required|regex:/^[A-Za-z][0-9]{8}$/|unique:negocios,nif',
                    'direccion' => 'required|max:150',
                    'telefono' => 'required|regex:/^\d{9,15}$/|unique:negocios,telefono',
                    'sitioWeb' => 'required|url|max:120|unique:negocios,sitioWeb',
                    /* 'horario' => 'nullable|regex:/^([01]?[0-9]\|2[0-3]):(00\|15\|30\|45)-([01]?[0-9]\|2[0-3]):(00\|15\|30\|45)$/', */
                    'informacion' => 'max:250',
                    'ubicacion' => 'required',
                    'categoria_negocio_id' => 'required',
                    /* 'usuario_id' => 'required' */
                ],
                [
                    'nombre.required' => 'El campo nombre es obligatorio',
                    'nombre.regex' => 'El campo nombre no puede contener caracteres especiales',
                    'nombre.max' => 'El campo nombre no puede tener mas de 50 caracteres',
                    'nombre.unique' => 'Esta empresa ya esta registrada',
                    'NIF.required' => 'El campo NIF es obligatorio',
                    'NIF.regex' => 'El campo NIF debe de seguir el formato',
                    'NIF.unique' => 'Este NIF ya está en uso',
                    'direccion.required' => 'El campo dirección de usuario es obligatorio',
                    'direccion.max' =>  'La dirección no puede tener más de 150 caracteres',
                    'telefono.required' => 'El número de teléfono es obligatorio',
                    'telefono.regex' => 'El número de teléfono debe tener entre 9 y 15 dígitos',
                    'telefono.unique' => 'Este teléfono ya existe',
                    'sitioWeb.required' => 'El campo sitio web es obligatorio',
                    'sitioWeb.url' => 'El campo sitio web debe contener una URL válida',
                    'sitioWeb.max' => 'El campo sitio web no puede tener más de 120 caracteres',
                    'sitioWeb.unique' => 'Este sitio web ya está en uso',
                    //'horario.required' => 'El campo horario es obligatorio',
                    /*                     'horario.regex' => 'El horario debe estar en formato de HH:MM - HH:MM',
 */                    'informacion.max' => 'El campo de inofrmacion ha superado el limite de caracteres',
                    'ubicacion.required' => 'La ubicación es un campo obligatorio',

                    'ubicacion.regex' => 'La ubicación debe estar en formato de coordenadas geográficas (latitud, longitud)',
                    'categoria_negocio_id.required' => 'El campo categoría de negocio es obligatorio',
                    /* 'usuario_id.required' => 'El campo usuario es obligatorio', */

                ]
            );

            $usuario = auth()->user();

            $validacionPredeterminada = 0;

            $negocio = new Negocio;
            $negocio->nombre = $validated['nombre'];
            $negocio->NIF = $validated['NIF'];
            $negocio->direccion = $validated['direccion'];
            $negocio->telefono = $validated['telefono'];
            $negocio->sitioWeb = $validated['sitioWeb'];
            $negocio->horario =  $request->horario;
            $negocio->informacion = $validated['informacion'];
            $negocio->ubicacion = $validated['ubicacion'];
            $negocio->validado = $validacionPredeterminada;
            $negocio->categoria_negocio_id = $validated['categoria_negocio_id'];
            $negocio->usuario_id = $usuario->id;

            $negocio->save();

            $data = [
                'mensaje' => 'Negocio creado correctamente',
                'negocio' => $negocio
            ];

            return response()->json($data, Response::HTTP_CREATED);
        } catch (ValidationException $errores) {

            return response()->json([
                'mensaje' => 'Error de validacion',
                'error' => $errores->errors()
            ], 422);
        }
    }

    public function loginCRM(Request $request)
    {

        $validated = $request->validate(
            [
                'nombreRol' => 'required',
                'contraseña' => 'required'
            ],
            [
                'nombreRol.required' => 'El campo nombre de administrador es obligatorio',
                'contraseña.required' => 'El campo contraseña es obligatoria',

            ]
        );
        $admin = RolesUsuario::where("nombreRol", "=", $request["nombreRol"])->first();

        if (isset($admin->id)) {
            if (Hash::check($validated['contraseña'], $admin->contraseña)) {

                //$token = $admin->createToken("auth_token")->plainTextToken;

                return response()->json([
                    'mensaje' => "Bienvenido de nuevo Administrador: " . $admin->nombreRol,
                    //'token de acceso' => $token
                ], Response::HTTP_OK);
            } else {

                return response()->json([
                    'mensaje' => "Error al introducir las credenciales",

                ], Response::HTTP_UNAUTHORIZED);
            }
        } else {
            return response()->json([
                'mensaje' => "Error al introducir las credenciales",

            ], Response::HTTP_UNAUTHORIZED);
        }
    }
}
