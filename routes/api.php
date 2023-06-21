<?php

use App\Http\Controllers\Api\AsmaulHusnaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\QuranController;
use App\Http\Controllers\Api\DoaHarianController;
use App\Http\Controllers\Api\KisahSejarahController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// api quran
Route::prefix('quran')->group(function () {
    Route::get('surat', [QuranController::class, 'index'])->name('surat');
    // Route::get('surat/{nomor}', [QuranController::class, 'getSurat'])->name('nomorsurat');
    // Route::get('tafsir/{nomor}', QuranController::class);
    // Route::get('audio', QuranController::class);
    // Route::get('audio/1/{nomor}', QuranController::class);
    // Route::get('audio/2/{id}', QuranController::class);
});

Route::apiResource('asmaul-husna', AsmaulHusnaController::class);
Route::apiResource('doa-harian', DoaHarianController::class);
Route::apiResource('kisah-sejarah', KisahSejarahController::class);
