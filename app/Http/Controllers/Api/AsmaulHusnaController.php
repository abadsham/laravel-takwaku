<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AsmaulHusna;
use Inertia\Inertia;

class AsmaulHusnaController extends Controller
{
    public function index()
    {
        // ambil semua data
        $asmaulhusna = AsmaulHusna::all();
        // response json
        return response()->json(['data' => $asmaulhusna ]);
    }

    public function indexWeb()
    {
        $asmaulhusna = AsmaulHusna::all();
        return Inertia('AsmaulHusna', ['asmaul' => $asmaulhusna]);
    }
}
