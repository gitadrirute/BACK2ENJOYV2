<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    public function getToken()
    {
        $token = csrf_token();
        return response()->json(['csrf_token' => $token]);
    }
}

