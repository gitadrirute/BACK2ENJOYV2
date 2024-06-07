<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\UsuarioNormalMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'Admin' => AdminMiddleware::class,
            'usuarioNormal'=> UsuarioNormalMiddleware::class
        ]);
    })
    
    ->withExceptions(function (Exceptions $exceptions) {
         $exceptions->report(function (AuthenticationException $e) {
            return response()->json([
              'mensaje' => 'Acceso denegado: debes estar autenticado para acceder al recurso',
              'error' => $e->getMessage()
            ],401);
        });
    
        $exceptions->report(function (AuthorizationException $e) {
            return response()->json([
                'mensaje' => 'Acceso denegado: no estas authorizado para acceder al recurso',
                'error' => $e->getMessage()
            ],403);

        
        });

         
        
    })->create();
