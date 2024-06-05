<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class VerificationController extends Controller
{ public function verify(Request $request, $id, $hash)
    {
        if (! $request->hasValidSignature()) {
            return response()->json(['mensaje' => 'Enlace de verificación no válido o caducado.'], 401);
        }

        $user = User::findOrFail($id);

        if (! hash_equals((string) $hash, sha1($user->correo))) {
            return response()->json(['mensaje' => 'Enlace de verificación no válido o caducado.'], 401);
        }

        if ($user->email_verified_at) {
            return response()->json(['mensaje' => 'El correo electrónico ya ha sido verificado.'], 400);
        }

        $user->email_verified_at = now();
        $user->save();

        return response()->json(['mensaje' => 'Correo electrónico verificado correctamente.'], 200);
    }
}
