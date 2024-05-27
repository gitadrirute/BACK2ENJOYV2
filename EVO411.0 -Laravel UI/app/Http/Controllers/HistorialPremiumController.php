<?php

namespace App\Http\Controllers;

use App\Models\HistorialPremium;
use Illuminate\Http\Request;

class HistorialPremiumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $historialPremium = HistorialPremium::all();

        return response()->json($historialPremium);
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
        $historialPremium = new HistorialPremium;
        $historialPremium->fechaAlta = $request->fechaAlta;
        $historialPremium->fechaBaja = $request->fechaBaja;
        $historialPremium->usuario_id = $request->usuario_id;
/*         $historialPremium->metodo_pago_id = $request->metodo_pago_id;
 */        $historialPremium->save();

        $data =[
            'mensaje'=> 'HistorialPremiun creado correctamente',
            'historialPremium'=> $historialPremium
        ];

        return response()->json($data);

    }

    /**
     * Display the specified resource.
     */
    public function show(HistorialPremium $historialPremium, $id)
    {
        $historialPremium = HistorialPremium::findOrFail($id);
        return response()->json($historialPremium);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HistorialPremium $historialPremium)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HistorialPremium $historialPremium, $id)
    {
        $historialPremium = HistorialPremium::findOrFail($id);
        $historialPremium->fechaAlta = $request->fechaAlta;
        $historialPremium->fechaBaja = $request->fechaBaja;
        $historialPremium->usuario_id = $request->usuario_id;

        $historialPremium->save();

        $data =[
            'mensaje'=> 'HistorialPremiun actualizado correctamente',
            'historialPremium'=> $historialPremium
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HistorialPremium $historialPremium, $id)
    {
        $historialPremium = HistorialPremium::findOrFail($id);
        $historialPremium->delete();
        $data =[
            'mensaje'=> 'HistorialPremiun eliminado correctamente',
            'historialPremium'=> $historialPremium
        ];

        return response()->json($data);

    }
}
