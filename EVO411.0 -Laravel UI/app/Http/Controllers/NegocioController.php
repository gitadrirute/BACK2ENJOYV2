<?php

namespace App\Http\Controllers;

use App\Models\Negocio;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class NegocioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $negocio = Negocio::all();

        return response()->json($negocio);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $validated = $request->validate(
                [
                    'nombre' => 'required|regex:/^[a-zA-Z\s]+$/|max:50|unique:negocios,nombre',
                    'NIF' => 'required|regex:/^[0-9]{8}[A-Za-z]$/|unique:negocios,nif',
                    'direccion' => 'required|max:150',
                    'telefono' => 'required|regex:/^\d{9,15}$/|unique:negocios,telefono',
                    'sitioWeb' => 'required|url|max:120|unique:negocios,sitioWeb',
                    'horario' => 'nullable|regex:/^([01]?[0-9]\|2[0-3]):(00\|15\|30\|45)-([01]?[0-9]\|2[0-3]):(00\|15\|30\|45)$/',
                    'informacion' => 'max:250',
                    'ubicacion' => 'required|regex:/^([-+]?\d{1,2}\.\d+),\s*([-+]?\d{1,3}\.\d+)$/',
                    'categoria_negocio_id' => 'required',
                    'usuario_id' => 'required'
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
                    'horario.regex' => 'El horario debe estar en formato de HH:MM - HH:MM',
                    'informacion.max' => 'El campo de inofrmacion ha superado el limite de caracteres',
                    'ubicacion.regex' => 'La ubicación debe estar en formato de coordenadas geográficas (latitud, longitud)',
                    'categoria_negocio_id.required' => 'El campo categoría de negocio es obligatorio',
                    'usuario_id.required' => 'El campo usuario es obligatorio',

                ]
            );

            $validacionPredeterminada = 0;

        

            $negocio = new Negocio;
            $negocio->nombre = $validated['nombre'];
            $negocio->NIF = $validated['NIF'];
            $negocio->direccion = $validated['direccion'];
            $negocio->telefono = $validated['telefono'];
            $negocio->sitioWeb = $validated['sitioWeb'];
            $negocio->horario =  $validated['horario'];
            $negocio->informacion = $validated['informacion'];
            $negocio->ubicacion = $validated['ubicacion'];
            $negocio->validado = $validacionPredeterminada;
            $negocio->categoria_negocio_id = $validated['categoria_negocio_id'];
            $negocio->usuario_id = $validated['usuario_id'];

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


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $negocio = Negocio::findOrFail($id);
        return response()->json($negocio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Negocio $negocio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $negocio = Negocio::findOrFail($id);
        $negocio->nombre = $request->nombre;
        $negocio->NIF = $request->NIF;
        $negocio->direccion = $request->direccion;
        $negocio->telefono = $request->telefono;
        $negocio->sitioWeb = $request->sitioWeb;
        $negocio->horario = $request->horario;
        $negocio->informacion = $request->informacion;
        $negocio->ubicacion = $request->ubicacion;
        $negocio->validado = $request->validado;
        $negocio->categoria_negocio_id = $request->categoria_negocio_id;
        $negocio->usuario_id = $request->usuario_id;

        $negocio->save();

        $data = [
            'mensaje' => 'Negocio actualizado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $negocio = Negocio::findOrFail($id);
        $negocio->delete();

        $data = [
            'mensaje' => 'Negocio eliminado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);
    }

    public function NegociosNoValidConOSinFotos()
    {
        $NegociosNoValidFotos = DB::table('negocios')
            ->leftJoin('galeria_negocios', 'negocios.id', '=', 'galeria_negocios.negocio_id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->select('negocios.id', 'negocios.nombre', 'negocios.direccion', 'negocios.telefono', 'negocios.NIF', 'negocios.sitioWeb', 'galeria_negocios.rutaImagen', 'usuarios.nombreUsuario', 'categorias_negocios.nombreCategoria', 'usuarios.nombreUsuario', 'negocios.created_at', 'negocios.validado')
            ->where('negocios.validado', false)
            ->get();
        $resultado = [];

        foreach ($NegociosNoValidFotos as $negocio) {
            $idNegocio = $negocio->id;

            if (array_key_exists($idNegocio, $resultado)) {
                $resultado[$idNegocio]['rutaImagenes'][] = $negocio->rutaImagen;
            } else {

                $resultado[$idNegocio] = [
                    'id' => $negocio->id,
                    'nombre' => $negocio->nombre,
                    'direccion' => $negocio->direccion,
                    'telefono' => $negocio->telefono,
                    'sitioWeb' => $negocio->sitioWeb,
                    'NIF' => $negocio->NIF,
                    'propietario' => $negocio->nombreUsuario,
                    'rutaImagenes' => [$negocio->rutaImagen],
                    'categoria' => $negocio->nombreCategoria,
                    'fechaRegistro' => $negocio->created_at,
                    'validado' => $negocio->validado

                ];
            }
        }

        return response()->json([
            'mensaje' => 'Negocios no validados con sus fotos',
            'negocios' => array_values($resultado), // Convertir el array asociativo en un array indexado
        ]);
    }

    public function TodosNegociosConOSinFotos()
    {
        $negocios = DB::table('negocios')
            ->leftJoin('galeria_negocios', 'negocios.id', '=', 'galeria_negocios.negocio_id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->select('negocios.id', 'negocios.nombre', 'negocios.direccion', 'negocios.telefono', 'negocios.NIF', 'negocios.sitioWeb', 'galeria_negocios.rutaImagen', 'usuarios.nombreUsuario', 'categorias_negocios.nombreCategoria', 'usuarios.nombreUsuario', 'negocios.created_at', 'negocios.validado')

            ->get();
        $resultado = [];

        foreach ($negocios as $negocio) {
            $idNegocio = $negocio->id;

            if (array_key_exists($idNegocio, $resultado)) {
                $resultado[$idNegocio]['rutaImagenes'][] = $negocio->rutaImagen;
            } else {

                $resultado[$idNegocio] = [
                    'id' => $negocio->id,
                    'nombre' => $negocio->nombre,
                    'direccion' => $negocio->direccion,
                    'telefono' => $negocio->telefono,
                    'sitioWeb' => $negocio->sitioWeb,
                    'NIF' => $negocio->NIF,
                    'propietario' => $negocio->nombreUsuario,
                    'rutaImagenes' => [$negocio->rutaImagen],
                    'categoria' => $negocio->nombreCategoria,
                    'fechaRegistro' => $negocio->created_at,
                    'validado' => $negocio->validado

                ];
            }
        }

        return response()->json([
            'mensaje' => 'Negocios no validados con sus fotos',
            'negocios' => array_values($resultado), // Convertir el array asociativo en un array indexado
        ]);
    }


    public function validarNegocio($id)
    {

        $validarNegocio = Negocio::findOrFail($id);

        if ($validarNegocio) {
            $validarNegocio->validado = 1;

            $validarNegocio->save();
        }

        $data = [
            'mensaje' => "Negocio validado correctamente",
            'usuario' => $validarNegocio
        ];

        return response()->json($data);
    }

    //VISTA
    //Si la dejo así me mostrara una foto, si se hace en dos funciones: una qu eme de las fotos del negocio y otra que me de los demas
    public function listadoHosteleriaTF()
    {

        $NegociosValidFotos = DB::table('negocios')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->leftJoin('valoraciones', 'valoraciones.negocio_id', '=', 'negocios.id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->leftJoin('galeria_negocios', function ($join) {
                $join->on('galeria_negocios.negocio_id', '=', 'negocios.id')
                    ->whereRaw('galeria_negocios.id = (SELECT MIN(id) FROM galeria_negocios WHERE negocio_id = negocios.id)');
            })
            ->select(
                'negocios.id',
                'negocios.nombre',
                'categorias_negocios.nombreCategoria',
                'negocios.direccion',
                'usuarios.nombreUsuario',
                DB::raw('MIN(galeria_negocios.rutaImagen) as rutaImagen'),
                DB::raw('COUNT(DISTINCT valoraciones.id) as cantidadValoraciones'),
                DB::raw('(SELECT comentario FROM valoraciones WHERE negocio_id = negocios.id AND comentario IS NOT NULL ORDER BY RAND() LIMIT 1) as comentarioAleatorio'),
                DB::raw('ROUND(AVG(valoraciones.valoracion), 1) as mediaPuntuacion')

            )
            ->where('negocios.validado', true)->where('negocios.categoria_negocio_id', 1)
            ->groupBy('negocios.id')
            ->get();



        $data = [
            'mensaje' => 'VISTA DE LA LISTA DE NEGOCIOS',
            'negocios' => $NegociosValidFotos
        ];

        return response()->json($data);
    }


    public function listadoHotelesTF()
    {

        $NegociosValidFotos = DB::table('negocios')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->leftJoin('valoraciones', 'valoraciones.negocio_id', '=', 'negocios.id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->leftJoin('galeria_negocios', function ($join) {
                $join->on('galeria_negocios.negocio_id', '=', 'negocios.id')
                    ->whereRaw('galeria_negocios.id = (SELECT MIN(id) FROM galeria_negocios WHERE negocio_id = negocios.id)');
            })
            ->select(
                'negocios.id',
                'negocios.nombre',
                'categorias_negocios.nombreCategoria',
                'negocios.direccion',
                'usuarios.nombreUsuario',
                DB::raw('MIN(galeria_negocios.rutaImagen) as rutaImagen'),
                DB::raw('COUNT(DISTINCT valoraciones.id) as cantidadValoraciones'),
                DB::raw('(SELECT comentario FROM valoraciones WHERE negocio_id = negocios.id AND comentario IS NOT NULL ORDER BY RAND() LIMIT 1) as comentarioAleatorio'),
                DB::raw('ROUND(AVG(valoraciones.valoracion), 1) as mediaPuntuacion')

            )
            ->where('negocios.validado', true)->where('negocios.categoria_negocio_id', 2)
            ->groupBy('negocios.id')
            ->get();



        $data = [
            'mensaje' => 'VISTA DE LA LISTA DE NEGOCIOS',
            'negocios' => $NegociosValidFotos
        ];

        return response()->json($data);
    }

    public function detallesNegocio($id)
    {
        $detallesNegocio = DB::table('negocios')
            ->leftJoin('galeria_negocios', 'negocios.id', '=', 'galeria_negocios.negocio_id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->select('negocios.id', 'negocios.nombre', 'negocios.direccion', 'negocios.telefono', 'negocios.NIF', 'negocios.sitioWeb', 'galeria_negocios.rutaImagen', 'usuarios.nombreUsuario', 'categorias_negocios.nombreCategoria', 'usuarios.nombreUsuario', 'negocios.created_at', 'negocios.validado')
            ->where('negocios.id', $id)
            ->get();



            if ($detallesNegocio->isNotEmpty()) {
                $negocio = $detallesNegocio->first();
            
                $imagenes = $detallesNegocio->pluck('rutaImagen')->filter();
            
                $resultado = [
                    'id' => $negocio->id,
                    'nombre' => $negocio->nombre,
                    'direccion' => $negocio->direccion,
                    'telefono' => $negocio->telefono,
                    'sitioWeb' => $negocio->sitioWeb,
                    'NIF' => $negocio->NIF,
                    'propietario' => $negocio->nombreUsuario,
                    'categoria' => $negocio->nombreCategoria,
                    'fechaRegistro' => $negocio->created_at,
                    'validado' => $negocio->validado,
                    'imagenes' => $imagenes
                ];
            

            return response()->json([
                'mensaje' => 'Detalles del negocio',
                'negocio' => $resultado
            ]);
        } else {
            return response()->json([
                'mensaje' => 'Negocio no encontrado'
            ], 404);
        }
    }
}
