<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

class QuranController extends Controller
{
    public function index()
    {
        // daftar surat
        $response = Http::get('https://equran.id/api/v2/surat');
        return $response->json();
        
    }

    public function getSurat($nomor)
    {
        // detail surat
        $response = Http::get('https://equran.id/api/v2/surat/' . $nomor);
        return $response->json();
    }

    public function getTafsir($nomor)
    {
        // detail.tafsir
        $response = Http::get('https://equran.id/api/v2/tafsir/' . $nomor);
        return $response->json();
    }

    public function getAudio()
    {
        $audioUrl = 'https://api.quran.com/api/v4/chapter_recitations/';

        return Response::redirectTo($audioUrl);
    }

    public function getAudioAwwad($nomor)
    {
        $audioUrl = 'https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/'.$nomor. '.mp3';

        return Response::redirectTo($audioUrl);
    }

    public function getAudioMishary($id)
    {
        $audioUrl = 'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/'.$id. '.mp3';

        return Response::redirectTo($audioUrl);
    }
}
