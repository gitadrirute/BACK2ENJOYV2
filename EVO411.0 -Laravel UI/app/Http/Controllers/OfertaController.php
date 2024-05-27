<?php

namespace App\Http\Controllers;

use App\Models\Oferta;
use Illuminate\Http\Request;

class OfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $oferta = Oferta::all();
        return response()->json($oferta);
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
        $oferta = new Oferta;
        $oferta->titulo = $request->titulo;
        $oferta->descripcion = $request->descripcion;
        $oferta->descuento = $request->descuento;
        $oferta->fechaInicio = $request->fechaInicio;
        $oferta->fechaFin = $request->fechaFin;
        $oferta->estado = $request->estado;
        $oferta->tipoOferta = $request->tipoOferta;
        $oferta->negocio_id = $request->negocio_id;
        $oferta->save();

        $data = [
            'mensaje' => 'oferta creada correctamente',
            'oferta' => $oferta
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $oferta = Oferta::findOrFail($id);
        return response()->json($oferta);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Oferta $oferta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $oferta = Oferta::findOrFail($id);
        $oferta->titulo = $request->titulo;
        $oferta->descripcion = $request->descripcion;
        $oferta->descuento = $request->descuento;
        $oferta->fechaInicio = $request->fechaInicio;
        $oferta->fechaFin = $request->fechaFin;
        $oferta->estado = $request->estado;
        $oferta->tipoOferta = $request->tipoOferta;
        $oferta->negocio_id = $request->negocio_id;

        $oferta->save();

        $data = [
            'mensaje' => 'oferta actualizada correctamente',
            'oferta' => $oferta
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $oferta = Oferta::findOrFail($id);
        $oferta->delete();
        $data = [
            'mensaje' => 'oferta eliminada correctamente',
            'oferta' => $oferta
        ];
        return response()->json($data);

    }
}
