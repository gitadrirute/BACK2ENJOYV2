<?php

namespace App\Http\Controllers;

use App\Models\MetodoPago;
use Illuminate\Http\Request;

class MetodoPagoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $metodoPago = MetodoPago::all();

        return response()->json($metodoPago);
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
        $metodoPago = new MetodoPago;
        $metodoPago->tipo = $request->tipo;
        $metodoPago->numeroTarjeta = $request->numeroTarjeta;
        $metodoPago->usuario_id = $request->usuario_id;
        
        $metodoPago->save();

        $data = [
            'mensaje' => 'Metodo de pago creado correctamente',
            'metodoPago' => $metodoPago
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(MetodoPago $metodoPago, $id)
    {
        $metodoPago = $metodoPago::findOrFail($id);
        return response()->json($metodoPago);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MetodoPago $metodoPago)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MetodoPago $metodoPago, $id)
    {
        $metodoPago = $metodoPago::findOrFail($id);
        $metodoPago->tipo = $request->tipo;
        $metodoPago->numeroTarjeta = $request->numeroTarjeta;
        $metodoPago->usuario_id = $request->usuario_id;

        $metodoPago->save();

        $data = [
            'mensaje' => 'Metodo de pago actualizado correctamente',
            'metodoPago' => $metodoPago
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MetodoPago $metodoPago, $id)
    {
        $metodoPago = $metodoPago::findOrFail($id);
        $metodoPago->delete();
        $data = [
            'mensaje' => 'Metodo de pago eliminado correctamente',
            'metodoPago' => $metodoPago

        ];

        return response()->json($data);
    }
}
