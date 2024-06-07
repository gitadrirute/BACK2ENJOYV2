<?php

namespace App\Http\Controllers;

use App\Models\GaleriaUsuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class GaleriaUsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeriaUsuario = GaleriaUsuarios::all();

        return response()->json($galeriaUsuario);
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
            $request->validate(
                [
                    'rutaImagen' => 'required|image|mimes:jpg,png,jpeg,svg|max:2048'
                ],
                [
                    'rutaImagen.required '=> 'La foto es obligatoria',
                    'rutaImagen.image' => 'Debes introducir una imagen',
                    'rutaImagen.mimes:jpg,png,jpeg,svg' => 'Debes introducir una imagen que cumpla con el formato:jpg, png, jpeg o svg'
                ]
            );
    
            $galeriaUsuario = new GaleriaUsuarios();
            //$galeriaNegocio->rutaImagen = $request->rutaImagen;
             $galeriaUsuario->rutaImagen = $request->file('rutaImagen')->store('public/ImagenesUsuarios');
    
            $galeriaUsuario->usuario_id = $request->usuario_id;
    
            $galeriaUsuario->save();
            $data = [
                'mensaje' => 'Imagen subida correctamente',
                'ruta_imagen' => Storage::url($galeriaUsuario->rutaImagen)
            ];
    
            return response()->json($data);
        } catch (ValidationException $errores) {

            return response()->json([
                'mensaje'=> 'Errores de validación',
                'errores'=> $errores->errors()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);
        return response()->json($galeriaUsuario);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GaleriaUsuarios $galeriaUsuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario= auth()->user();

        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);

        $galeriaUsuario->rutaImagen = $request->rutaImagen;
        $galeriaUsuario->usuario_id = $request->usuario_id;

        $galeriaUsuario->save();
        $data = [
            'mensaje' => 'Imagen actualizada correctamente por el Administrador: '.$usuario->nombre,
            'galeria' => $galeriaUsuario
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario= auth()->user();

        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);
        $galeriaUsuario->delete();

        $data = [
            'mensaje' => 'galeria eliminada correctamente por el Administrador: '.$usuario->nombre,
            'galeria' => $galeriaUsuario
        ];
        return response()->json($data);
    }

   
}
