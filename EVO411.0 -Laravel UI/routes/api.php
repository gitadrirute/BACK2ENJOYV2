<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\App;

/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware('auth:sanctum ')->get('/user', function (Request $request){
    return $request->user;
}); */


//NO HACE FALTA GENERAR EL TOKEN CSRF, YA LO GESTIONA EL PAQUETE SANCTUM
Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

//RUTAS ROLES DE USUARIO
Route::get('/rolesUsuario', 'App\Http\Controllers\RolesUsuarioController@index');
Route::post('/rolesUsuario', 'App\Http\Controllers\RolesUsuarioController@store');
Route::get('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@show');
Route::put('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@update');
Route::delete('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@destroy');
Route::post('/loginCRM', 'App\Http\Controllers\Auth\AuthController@loginCRM'); //CRM



//RUTAS USUARIOS
Route::get('/usuarios', 'App\Http\Controllers\UsuarioController@index');
Route::post('/usuarios', 'App\Http\Controllers\UsuarioController@store');
Route::get('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@show');
Route::put('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@update');
Route::delete('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@destroy'); //CRM
Route::get('/usuariosNoValidados', 'App\Http\Controllers\UsuarioController@mostrarUsuariosNoValidos'); //CRM
Route::get('/UsuariosNoValidadosConFotos', 'App\Http\Controllers\UsuarioController@UsuariosNoValidConFotos'); //CRM
Route::get('/UsuariosNoValidConOsinFotos', 'App\Http\Controllers\UsuarioController@UsuariosNoValidConOsinFotos'); //CRM
Route::put('/validarUsuario/{usuario}', 'App\Http\Controllers\UsuarioController@validarUsuario'); //CRM
Route::get('/usuariosTotales', 'App\Http\Controllers\UsuarioController@todosUsuariosConOSinFotos'); //CRM
Route::get('/detallesUsuario/{usuario}', 'App\Http\Controllers\UsuarioController@detallesUsuario'); //CRM



//RUTAS HISTORIAL PREMIUM
Route::get('/historialesPremium', 'App\Http\Controllers\HistorialPremiumController@index');
Route::post('/historialesPremium', 'App\Http\Controllers\HistorialPremiumController@store');
Route::get('/historialesPremium/{historial}', 'App\sHttp\Controllers\HistorialPremiumController@show');
Route::put('/historialesPremium/{historial}', 'App\Http\Controllers\HistorialPremiumController@update');
Route::delete('/historialesPremium/{historial}', 'App\Http\Controllers\HistorialPremiumController@destroy');

//RUTAS METODO DE PAGO
Route::get('/metodosPago', 'App\Http\Controllers\MetodoPagoController@index');
Route::post('/metodosPago', 'App\Http\Controllers\MetodoPagoController@store');
Route::get('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@show');
Route::put('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@update');
Route::delete('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@destroy');


//RUTAS VALORACIONES
Route::get('/valoraciones', 'App\Http\Controllers\ValoracionesController@index');
Route::post('/valoraciones', 'App\Http\Controllers\ValoracionesController@store');
Route::get('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@show');
Route::put('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@update');
Route::delete('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@destroy');
Route::get('/valoracionesDeUsuarios', 'App\Http\Controllers\ValoracionesController@mostrarValoConUserYNegocio');

//RUTAS  DE CATEGORIAS DE NEGOCIOS
Route::get('/categoriaNegocios', 'App\Http\Controllers\CategoriasNegocioController@index');
Route::post('/categoriaNegocios', 'App\Http\Controllers\CategoriasNegocioController@store');
Route::get('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@show');
Route::put('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@update');
Route::delete('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@destroy');
Route::post('/categoriaNegocios', 'App\Http\Controllers\CategoriasNegocioController@store');

//RUTAS DE NEGOCIOS
Route::get('/negocios', 'App\Http\Controllers\NegocioController@index');
/* Route::post('/negocios', 'App\Http\Controllers\NegocioController@store');
 */
Route::get('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@show');
Route::put('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@update');
Route::delete('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@destroy'); //CRM
Route::get('/NegociosNoValidConOSinFotos', 'App\Http\Controllers\NegocioController@NegociosNoValidConOSinFotos'); //CRM
Route::put('validarNegocio/{negocio}', 'App\Http\Controllers\NegocioController@validarNegocio'); //CRM
Route::get('/TodosNegociosConOSinFotos', 'App\Http\Controllers\NegocioController@TodosNegociosConOSinFotos'); //CRM
Route::get('/detallesNegocio/{negocio}', 'App\Http\Controllers\NegocioController@detallesNegocio'); //CRM
Route::get('/paginaPrincipalNegocio/{negocio}', 'App\Http\Controllers\Vistas\VistasFrontController@paginaPrincipalNegocio');

//RUTAS DE OFERTAS
Route::get('/ofertas', 'App\Http\Controllers\OfertaController@index');
Route::post('/ofertas', 'App\Http\Controllers\OfertaController@store');
Route::get('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@show');
Route::put('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@update');
Route::delete('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@destroy');

//RUTAS DE GaleriasNegocio
Route::get('/galeriaNegocios', 'App\Http\Controllers\GaleriaNegociosController@index');
Route::post('/galeriaNegocios', 'App\Http\Controllers\GaleriaNegociosController@store');
Route::get('/galeriaNegocios/{galeria}', 'App\Http\Controllers\GaleriaNegociosController@show');
Route::put('/galeriaNegocios/{galeria}', 'App\Http\Controllers\GaleriaNegociosController@update');
Route::delete('/galeriaNegocios/{galeria}', 'App\Http\Controllers\GaleriaNegociosController@destroy');


//RUTAS DE GaleriasUsuario
Route::get('/galeriaUsuarios', 'App\Http\Controllers\GaleriaUsuariosController@index');
Route::post('/galeriaUsuarios', 'App\Http\Controllers\GaleriaUsuariosController@store');
Route::get('/galeriaUsuarios/{galeria}', 'App\Http\Controllers\GaleriaUsuariosController@show');
Route::put('/galeriaUsuarios/{galeria}', 'App\Http\Controllers\GaleriaUsuariosController@update');
Route::delete('/galeriaUsuarios/{galeria}', 'App\Http\Controllers\GaleriaUsuariosController@destroy');

//VISTAS
Route::get('/topNegociosMejorValo', 'App\Http\Controllers\Vistas\VistasFrontController@topNegociosMejorValo');
Route::get('/valoracionesNegocio/{negocio}', 'App\Http\Controllers\Vistas\VistasFrontController@valoracionesNegocio');
Route::get('/listadoHosteleriaTF', 'App\Http\Controllers\NegocioController@listadoHosteleriaTF');
Route::get('/listadoHotelesTF', 'App\Http\Controllers\NegocioController@listadoHotelesTF');
Route::post('/subirFotoNegocio', 'App\Http\Controllers\Vistas\VistasFrontController@subirFotoNegocio');


//AUTH

//Registro
Route::post('/registro', 'App\Http\Controllers\Auth\AuthController@registro');

//Login
Route::post('/login', 'App\Http\Controllers\Auth\AuthController@login');

//ESTE ES EL QUE FUNCIONABA, HAY QUE ESTAR AUTENTICADO PARA ACCEDER A DICHAS

Route::group(['middleware' => ['auth:sanctum']], function () { // pueden acceder aquellos que estan autenticados pero da igualsi es admin o normal

    Route::get('/logout', 'App\Http\Controllers\Auth\AuthController@logout');
});


Route::group(['middleware' =>  ['auth:sanctum', 'Admin']], function () { // pueden acceder aquellos que esten autenticados y que admas solo sean admins
    //Route::get('/admin/usuarios', 'App\Http\Controllers\UsuarioController@index'); 

});


Route::group(['middleware' => ['auth:sanctum', 'usuarioNormal']], function () {
    //Route::get('/usuarios', 'App\Http\Controllers\UsuarioController@index');
    Route::post('/registroNegocio', 'App\Http\Controllers\Auth\AuthController@registroNegocio');
    Route::get('/perfilUsuario', 'App\Http\Controllers\Auth\AuthController@perfilUsuario');
    Route::post('/añadirValoracion', 'App\Http\Controllers\Vistas\VistasFrontController@añadirValoracion');
    Route::post('/subirFotoNegocio', 'App\Http\Controllers\Vistas\VistasFrontController@subirFotoNegocio');

});
