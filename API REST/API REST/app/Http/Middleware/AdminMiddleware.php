<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        
            // echo auth()->user()->rol_usuario_id;
         if (auth()->check() && auth()->user()->rol_usuario_id == 1) {
            return $next($request);
        }

        return response()->json([
            'mensaje' => 'Acceso prohibido: No tienes permiso para acceder a este recurso.',
        ], 403);

        
       
    }

   
    
        
}
