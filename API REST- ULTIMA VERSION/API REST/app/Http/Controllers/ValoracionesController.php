<?php

namespace App\Http\Controllers;

use App\Models\Valoraciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ValoracionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $valoracion =  Valoraciones::all();
        return response()->json($valoracion);
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
        $usuario = auth()->user();
        $valoracion = new Valoraciones;
        $valoracion->valoracion = $request->valoracion;
        $valoracion->comentario = $request->comentario;
        $valoracion->usuario_id = $request->usuario_id;
        $valoracion->negocio_id = $request->negocio_id;

        $valoracion->save();

        $data = [
            'mensaje' => 'Valoracion de usuario creada correctamente por el Adminisrador: '.$usuario->nombre,
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $valoracion = Valoraciones::findOrFail($id);
        $data = [
            'mensaje' => 'Detalles de la valoracion del usuario',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Valoraciones $valoracion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = auth()->user();

        $valoracion = Valoraciones::findOrFail($id);
        $valoracion->valoracion = $request->valoracion;
        $valoracion->comentario = $request->comentario;
        $valoracion->usuario_id = $request->usuario_id;
        $valoracion->negocio_id = $request->negocio_id;
        $valoracion->save();

        $data = [
            'mensaje' => 'Valoracion de usuario actualizada correctamente por el Adminisrador: '.$usuario->nombre,
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $usuario = auth()->user();

        $valoracion = Valoraciones::findOrFail($id);
        $valoracion->delete();
        $data = [
            'mensaje' => 'Valoracion de usuario eliminadacorrectamente por el Adminisrador: '.$usuario->nombre,
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }


    public function mostrarValoConUserYNegocio(){

        $valoraciones = DB::table('valoraciones')
        ->join('negocios', 'negocios.id', '=', 'valoraciones.negocio_id')
        ->join('usuarios', 'usuarios.id', '=', 'valoraciones.usuario_id')
        ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
        ->select('usuarios.nombreUsuario', 'valoraciones.valoracion','valoraciones.comentario' ,'negocios.nombre','categorias_negocios.nombreCategoria', 'valoraciones.created_at') 
        ->orderBy('valoraciones.created_at', 'DESC')->get();
        return response()->json([
            'mensaje' => "Todas las valoraciones de ususarios y todo slos negocios",
            'valoraciones' => $valoraciones
        ], Response::HTTP_OK);
       
    }
}
