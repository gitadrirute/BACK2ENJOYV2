<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use function Laravel\Prompts\error;

class UsuarioNormalMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     // un campo en la tabla usuarios que sea booleano , si ha pagado o no
     //un endpoint para modificar ese campo
    public function handle(Request $request, Closure $next): Response
    {

        try{

        
        
            if (Auth::check() && Auth::user()->rol_usuario_id == 2) {
                return $next($request);
            }

            return response()->json([
                'mensaje' => 'Acceso prohibido: No tienes permiso para acceder a este recurso.',
            ], 403);

        }catch (AuthenticationException $e) {
                return response()->json([
                    'mensaje' => 'Acceso denegado: debes estar autenticado para acceder al recurso',
                ], 401);
            } catch (AuthorizationException $e) {
                return response()->json([
                    'mensaje' => 'Acceso denegado: no estás autorizado para acceder al recurso',
                ], 403);
            } catch (RouteNotFoundException $e) {
                return response()->json([
                    'mensaje' => 'Error en la ruta: la ruta solicitada no está definida',
                ], 404);
            }
    }
}
