<?php

namespace App\Http\Controllers\Api;

use Inertia\Inertia;
use App\Models\DoaHarian;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class SuratController extends Controller
{
    public function index()
    {
        // ini diambil untuk route
        return Inertia::render('BacaQuran');
    }
    public function show($nomor)
    {
        $detailSurat = Http::get("https://equran.id/api/v2/surat/$nomor");

        // dd($detailSurat);
        return Inertia('DetailSurat', [
            'data' => $detailSurat,
            'nomor' => $nomor
        ]);
        // return $detailSurat->json();

    }
}
