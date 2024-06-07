<?php

namespace App\Http\Controllers;

use App\Models\CategoriasNegocio;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoriasNegocioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoriasNegocio = CategoriasNegocio::all();
        return response()->json($categoriasNegocio);
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
            $categoriaNegocio = new CategoriasNegocio;
            $categoriaNegocio->nombreCategoria = $request->nombreCategoria;
            $categoriaNegocio->save();
            $data = [
                'mensaje' => 'Categoria del negocio creada correctamente por el Adminsitrador: '.$usuario->nombre,
                'categoria' => $categoriaNegocio
            ];

            return response()->json($data, Response::HTTP_OK);
        }

    

    /**
     * Display the specified resource.
     */
    public function show(CategoriasNegocio $categoriaNegocio, $id)
    {
        
        $categoriaNegocio = CategoriasNegocio::findOrFail($id);
        return response()->json($categoriaNegocio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoriasNegocio $categoriasNegocio)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CategoriasNegocio $categoriaNegocio, $id)
    {
        $usuario = auth()->user();
        $categoriaNegocio = CategoriasNegocio::findOrFail($id);
        $categoriaNegocio->nombreCategoria = $request->nombreCategoria;
        $categoriaNegocio->save();
        $data = [
            'mensaje' => 'Categoria del negocio actualizada correctamente por el Administrador: '.$usuario->nombress,
            'categoria' => $categoriaNegocio
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoriasNegocio $categoriaNegocio, $id)
    {
        $usuario = auth()->user();
        $categoriaNegocio = CategoriasNegocio::findOrFail($id);

        $categoriaNegocio->delete();

        $data = [
            'mensaje' => 'Categoria del negocio eliminada correctamente por el administrador: '.$usuario->nombre,
            'categoria' => $categoriaNegocio
        ];

        return  response()->json($data);
    }
}
