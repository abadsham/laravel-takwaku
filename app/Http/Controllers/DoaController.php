<?php

namespace App\Http\Controllers;

use App\Models\DoaHarian;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoaController extends Controller
{
    public function index()
    {
        $doaharians = DoaHarian::all();
        return Inertia::render('DoaHarian', [
            'doaharians' => $doaharians
        ]);
    }
}
