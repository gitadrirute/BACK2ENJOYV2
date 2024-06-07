<?php

namespace App\Http\Controllers;

use App\Models\GaleriaNegocios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class GaleriaNegociosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeriaNegocio = GaleriaNegocios::all();

        return response()->json($galeriaNegocio);
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
                    'rutaImagen.mimes' => 'Debes introducir una imagen que cumpla con el formato:jpg, png, jpeg o svg'
                ]
            );
    
            $galeriaNegocio = new GaleriaNegocios();
            //$galeriaNegocio->rutaImagen = $request->rutaImagen;
            $galeriaNegocio->rutaImagen = $request->file('rutaImagen')->store('public/ImagenesNegocios');
    
            $galeriaNegocio->negocio_id = $request->negocio_id;
    
            $galeriaNegocio->save();
            $data = [
                'mensaje' => 'Imagen subida correctamente',
                'ruta_imagen' => Storage::url($galeriaNegocio->rutaImagen)
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
        $galeriaNegocio = GaleriaNegocios::findOrFail($id);
        return response()->json($galeriaNegocio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GaleriaNegocios $galeriaNegocios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $usuario= auth()->user();
        $galeriaNegocio = GaleriaNegocios::findOrFail($id);

        $galeriaNegocio->rutaImagen = $request->rutaImagen;
        $galeriaNegocio->negocio_id = $request->negocio_id;
        $galeriaNegocio->save();
        $data = [
            'mensaje' => 'Imagen actualizada correctamente por el Administrador: '.$usuario->nombre,
            'tipo de oferta' => $galeriaNegocio
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario= auth()->user();

        $galeriaNegocio = GaleriaNegocios::findOrFail($id);
        $galeriaNegocio->delete();

        $data = [
            'mensaje' => 'Imagen eliminada correctamente por el Administrador: '.$usuario->nombre,
            'usuario' => $galeriaNegocio
        ];
        return response()->json($data);
    }
}
