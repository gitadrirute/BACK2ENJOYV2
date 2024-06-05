<?php

namespace App\Http\Controllers\Vistas;

use App\Http\Controllers\Controller;
use App\Models\GaleriaNegocios;
use App\Models\Negocio;
use App\Models\Oferta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Valoraciones;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;

use function Laravel\Prompts\select;
use function Laravel\Prompts\table;
use function Ramsey\Uuid\v1;

class VistasFrontController extends Controller
{
    public function topHosteleriaMejorValo()
    {

        $negocios = DB::table('negocios')
            ->join('valoraciones', 'valoraciones.negocio_id', '=', 'negocios.id')
            ->leftJoin('ofertas', function ($join) { //de esta manera se evita que el negocio aparezca mas de una vez , solo porque tenga mas de una oferta consigo
                $join->on('ofertas.negocio_id', '=', 'negocios.id')
                    ->whereRaw('ofertas.id = (SELECT MAX(id) FROM ofertas WHERE negocio_id = negocios.id)');
            })
            ->leftJoin('galeria_negocios', function ($join) {
                $join->on('galeria_negocios.negocio_id', '=', 'negocios.id')
                    ->whereRaw('galeria_negocios.id = (SELECT MIN(id) FROM galeria_negocios WHERE negocio_id = negocios.id)');
            })
            ->select(
                'negocios.id',
                'negocios.nombre',
                'ofertas.descuento',
                DB::raw('MIN(galeria_negocios.rutaImagen) as rutaImagen'),
                DB::raw('ROUND(AVG(valoraciones.valoracion), 1) as mediaPuntuacion')
            )->where('negocios.categoria_negocio_id', '=', 1)
            ->groupBy('negocios.id', 'negocios.nombre', 'ofertas.descuento')
            ->orderBy('mediaPuntuacion', 'DESC')
            ->limit(3)
            ->get();


        $resultado = [];


        foreach ($negocios as $negocio) {
            $resultado[] = [
                'id' => $negocio->id,
                'nombre' => $negocio->nombre,
                'descuento' => $negocio->descuento,
                'mediaPuntuacion' => $negocio->mediaPuntuacion,
                'rutaImagen' => $negocio->rutaImagen

            ];
        }



        return response()->json([
            'mensaje' => 'Top Hostelería mejor valorados y mejor oferta',
            'negocios' => $resultado

        ]);
    }

    public function topHotelesMejorValo()
    {
        $negocios = DB::table('negocios')
            ->join('valoraciones', 'valoraciones.negocio_id', '=', 'negocios.id')
            ->leftJoin('ofertas', function ($join) { //de esta manera se evita que el negocio aparezca mas de una vez , solo porque tenga mas de una oferta consigo
                $join->on('ofertas.negocio_id', '=', 'negocios.id')
                    ->whereRaw('ofertas.id = (SELECT MAX(id) FROM ofertas WHERE negocio_id = negocios.id)');
            })
            ->leftJoin('galeria_negocios', function ($join) {
                $join->on('galeria_negocios.negocio_id', '=', 'negocios.id')
                    ->whereRaw('galeria_negocios.id = (SELECT MIN(id) FROM galeria_negocios WHERE negocio_id = negocios.id)');
            })
            ->select(
                'negocios.id',
                'negocios.nombre',
                'ofertas.descuento',
                DB::raw('MIN(galeria_negocios.rutaImagen) as rutaImagen'),
                DB::raw('ROUND(AVG(valoraciones.valoracion), 1) as mediaPuntuacion')
            )->where('negocios.categoria_negocio_id', '=', 2)
            ->groupBy('negocios.id', 'negocios.nombre', 'ofertas.descuento')
            ->orderBy('mediaPuntuacion', 'DESC')
            ->limit(3)
            ->get();


        $resultado = [];


        foreach ($negocios as $negocio) {
            $resultado[] = [
                'id' => $negocio->id,
                'nombre' => $negocio->nombre,
                'descuento' => $negocio->descuento,
                'mediaPuntuacion' => $negocio->mediaPuntuacion,
                'rutaImagen' => $negocio->rutaImagen

            ];
        }



        return response()->json([
            'mensaje' => 'Top Hoteles mejor valorados y mejor oferta',
            'negocios' => $resultado

        ]);
    }

    public function añadirValoracion(Request $request) //necesito que me paseis el token del user y el id del negocio al que hace la reseña
    {
        try {
            $validated = $request->validate([

                'valoracion' => 'required|numeric|regex:/^[1-5]{1}$/',
                'comentario' => 'required|max:350',
                'negocio_id' => 'required|exists:negocios,id'
            ]);

            $usuario = auth()->user(); //hay que mirarlo

            if ($usuario) {

                $reseña = new Valoraciones;
                $reseña->valoracion = $validated['valoracion'];
                $reseña->comentario =  $validated['comentario'];
                $reseña->usuario_id =  $usuario->id;
                $reseña->negocio_id = $validated['negocio_id'];

                $reseña->save();

                $data = [
                    'mensaje' => 'Valoracion de usuario creada correctamente',
                    'valoracion' => $reseña
                ];
                return response()->json($data);
            }
        } catch (ValidationException $errores) {

            return response()->json([
                'mensaje' => 'Erroes de validacion',
                'Errores' => $errores->errors()
            ], 422);
        }
    }

    ////////////////PAGINA PRINCIPAL NEGOCIO HOSTELERIA//////////////////////////////////

    public function paginaPrincipalNegocio($id)
    {

        $pagPrincipal = DB::table('negocios')
            ->join('categorias_negocios', 'categorias_negocios.id', '=', 'negocios.categoria_negocio_id')
            ->leftJoin('valoraciones', 'valoraciones.negocio_id', '=', 'negocios.id')
            ->join('usuarios', 'usuarios.id', '=', 'negocios.usuario_id')
            ->leftJoin('ofertas', function ($join) {
                $join->on('ofertas.negocio_id', '=', 'negocios.id')
                    ->whereRaw('ofertas.id = (SELECT id FROM ofertas WHERE ofertas.negocio_id = negocios.id ORDER BY ofertas.id LIMIT 1)');
            })
            ->leftJoin('galeria_negocios', 'galeria_negocios.negocio_id', '=', 'negocios.id')

            ->select(
                'negocios.id',
                'negocios.nombre',
                'negocios.direccion',
                'negocios.telefono',
                'negocios.sitioWeb',
                'usuarios.nombreUsuario',
                'negocios.informacion',
                'categorias_negocios.nombreCategoria',
                'ofertas.titulo',
                'ofertas.descuento',
                'galeria_negocios.rutaImagen',
                DB::raw('ROUND(AVG(valoraciones.valoracion), 1) as mediaPuntuacion'),
            )->where('negocios.validado', true)->where('negocios.id', $id)
            ->groupBy(
                'negocios.id',
                'negocios.nombre',
                'negocios.direccion',
                'negocios.telefono',
                'negocios.sitioWeb',
                'usuarios.nombreUsuario',
                'negocios.informacion',
                'ofertas.titulo',
                'ofertas.descuento',
                'galeria_negocios.rutaImagen',
                'categorias_negocios.nombreCategoria'
            )
            /*  ->toSql(); */
            ->get();
        $resultado = [];

        foreach ($pagPrincipal as $negocio) {
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
                    'propietario' => $negocio->nombreUsuario,
                    'informacion' => $negocio->informacion,
                    'categoria' => $negocio->nombreCategoria,
                    'nombreOferta' => $negocio->titulo,
                    'descuento' => $negocio->descuento,
                    'rutaImagenes' => [$negocio->rutaImagen],
                    'puntuacionMedia' => $negocio->mediaPuntuacion

                ];
            }
        }

        return response()->json([
            'mensaje' => 'VISTA DE LA PAGINA PRINCIPAL DEL NEGOCIO',
            'negocios' => array_values($resultado), // Convertir el array asociativo en un array indexado
        ]);
    }

    public function valoracionesNegocio($id)
    {
        $valoracionesNegocio = DB::table('valoraciones')
            ->join('usuarios', 'usuarios.id', '=', 'valoraciones.usuario_id')
            ->join('negocios', 'negocios.id', '=', 'valoraciones.negocio_id')
            ->select('usuarios.nombreUsuario', 'valoraciones.valoracion as puntuacion', 'valoraciones.comentario', 'valoraciones.created_at')
            ->where('negocios.id', $id)
            ->orderBy('valoraciones.created_at', 'desc')
            ->get();

        $resultado = [];
        foreach ($valoracionesNegocio as $valoracion) {
            $resultado[] = [
                'nombreUsuario' => $valoracion->nombreUsuario,
                'puntuacion' => $valoracion->puntuacion,
                'comentario' => $valoracion->comentario,
                'fechaCreacion' => $valoracion->created_at
            ];
        }

        return response()->json([
            'mensaje' => 'VISTA DE LA PAGINA DEL NEGOCIO: SUS RESEÑAS',
            'valoraciones de usuarios' => $resultado
        ]);
    }


    //////////////////////////////////FIN///////////////////////////////////////////////////////

    public function subirFotoNegocio(Request $request)
    {
        try {
            $request->validate(
                [
                    'rutaImagen.*' => 'required|image|mimes:jpg,png,jpeg,svg|max:2048'
                ],
                [
                    'rutaImagen.*.required' => 'La foto es obligatoria',
                    'rutaImagen.*.image' => 'Debes introducir una imagen',
                    'rutaImagen.*.mimes' => 'Debes introducir una imagen que cumpla con el formato: jpg, png, jpeg o svg'
                ]
            );

            $usuario = auth()->user();
            $recogerNegocioId = DB::table('negocios')
                ->where('usuario_id', $usuario->id)
                ->select('negocios.id')
                ->first();

            if (!$recogerNegocioId) {
                return response()->json([
                    'mensaje' => 'Este usuario no tiene asociado un negocio'
                ], 404);
            }

            $imagenes = $request->file('rutaImagen');
            $rutasImagenes = [];

            foreach ($imagenes as $imagen) {
                $rutaImagen = $imagen->store('public/ImagenesNegocios');
                $foto = new GaleriaNegocios();
                $foto->rutaImagen = '/' . str_replace('public/', 'storage/', $rutaImagen);
                $foto->negocio_id = $recogerNegocioId->id;
                $foto->save();
                $rutasImagenes[] = $foto->rutaImagen;
            }

            $resultado = [
                'mensaje' => 'Imagen(es) subida(s) correctamente',
                'rutasImagenes' => $rutasImagenes
            ];
            return response()->json($resultado, Response::HTTP_OK);
        } catch (ValidationException $errores) {
            return response()->json([
                'mensaje' => 'Errores de validación',
                'errores' => $errores->errors()
            ], 422);
        }
    }

    public function perfilEmpresa()
    {

        $usuario = auth()->user();

        $negocioDelUsuario = Negocio::where($usuario->id, '=', 'negocios.usuario_id')->first();

        if (!$negocioDelUsuario) {

            return response()->json([

                'mensaje' => 'Error, este usuario no tiene asociado un negocio aún'

            ], Response::HTTP_NOT_FOUND);
        }

        //POR AHORA PARADO, NO TENGOCLARO QUE QUIERO MOSTRAR EN EL PERFIL DEL NEGOCIO
        /*  $pagGestionEmpresa = table('') */
    }


    public function subirOferta(Request $request)
    {
        try {

            $validated =  $request->validate(
                [

                    'titulo' => 'required|max:35',
                    'descripción' => 'required|max:100',
                    'descuento' => 'required|numeric|regex:/^[1-9]{1,2}$/', //descuento acepta 2 digitos del 0 al 99
                    'fechaInicio' => 'required|date',
                    'fechaFin' => 'required|date',
                    'tipoOferta' => 'required|max:20'
                ],
                [

                    'titulo.required' => 'El campo titulo es obligatorio',
                    'titulo.max' => 'Introduce una titulo más corto (max 35 caracteres',
                    'descripcion.required' => 'El campo descripcion es obligatorio',
                    'descripcion.max' => 'Introduce una descripción más corta (max 100 caracteres)',
                    'descuento.required' => 'El campo descuento es obligatorio',
                    'descuento.numeric' => 'El campo descuento es numérico',
                    'descuento.regex' => 'El descuento puede ir desde 1% a 99%',
                    'fechaInicio.required' => 'La fecha de inicio de la oferta es obligatoria',
                    'fechaInicio.date' => 'El campo de la fecha de inicio debe de estar en formato fecha',
                    'fechaFin.required' => 'La fecha de fin de la oferta es obligatoria',
                    'fechaFin.date' => 'El campo de la fecha de fin debe de estar en formato fecha',
                    'tipoOferta.required' => 'El tipo de oferta es obligatorio',
                    'tipoOferta.max' => 'El campo de tipo de oferta no debe superar los 20 caracteres'

                ]
            );



            $usuario = auth()->user();
            $negocioDelUsuario = Negocio::where($usuario->id, '=', 'negocios.usuario_id')->first();

            if (!$negocioDelUsuario) {

                return response()->json([

                    'mensaje' => 'Error, este usuario no tiene asociado un negocio aún'

                ], Response::HTTP_NOT_FOUND);
            }

            $oferta = new Oferta();
            $oferta->titulo = $validated['titulo'];
            $oferta->descripcion = $validated['descripcion'];
            $oferta->descuento = $validated['descuento'];
            $oferta->fechaInicio = $validated['fechaInicio'];
            $oferta->fechaFin = $validated['fechaFin'];
            $oferta->tipoOferta = $validated['tipoOferta'];
            $oferta->negocio_id = $negocioDelUsuario;
            $oferta->save();
        } catch (ValidationException $error) {

            return response()->json([

                'mensaje' => 'Errores de validación',
                'errores' => $error->errors()

            ], 422);
        }
    }

    public function subirFotoPerfilUsuario(Request $request)
    { //ahora habra que hacer una ruta para mostrar la foto de perfil

        try {
            $request->validate(
                [
                    'rutaImagen.*' => 'required|image|mimes:jpg,png,jpeg,svg|max:2048'
                ],
                [
                    'rutaImagen.*.required' => 'La foto es obligatoria',
                    'rutaImagen.*.image' => 'Debes introducir una imagen',
                    'rutaImagen.*.mimes' => 'Debes introducir una imagen que cumpla con el formato: jpg, png, jpeg o svg'
                ]
            );

            $usuario = auth()->user();

            $imagenes = $request->file('rutaImagen');
            $rutasImagenes = [];

            foreach ($imagenes as $imagen) {
                $rutaImagen = $imagen->store('public/ImagenesUsuarios');
                $foto = new GaleriaNegocios();
                $foto->rutaImagen = '/' . str_replace('public/', 'storage/', $rutaImagen);
                $foto->usuario_id = $usuario->id;
                $foto->save();
                $rutasImagenes[] = $foto->rutaImagen;
            }

            $resultado = [
                'mensaje' => 'Imagen(es) subida(s) correctamente',
                'rutasImagenes' => $rutasImagenes
            ];
            return response()->json($resultado, Response::HTTP_OK);
        } catch (ValidationException $errores) {
            return response()->json([
                'mensaje' => 'Errores de validación',
                'errores' => $errores->errors()
            ], 422);
        }
    }

    public function mostrarFotoPerfil()
    {

        $usuario = auth()->user();

        $fotoPerfil = GaleriaNegocios::select('rutaImagen')
            ->where('usuario_id', '=', $usuario->id)
            ->first();

        if (!$fotoPerfil) {
            return response()->json([
                'mensaje' => '¿Aún no tienes foto de perfil?'
            ], 204); //204 significa que no hay contenido


        }

        return response()->json([
            'mensaje' => 'Foto de perfil del usuario: '.$usuario->nombre.' ('.$usuario->nombreUsuario.')',
            'fotoPerfil' => $fotoPerfil->rutaImagen
        ], Response::HTTP_OK);
    }
}
