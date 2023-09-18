<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DoaController;
use App\Http\Controllers\DzikirController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KisahSejarahController;
use App\Http\Controllers\Api\SuratController;
use App\Http\Controllers\Api\DoaHarianController;
use App\Http\Controllers\Api\AsmaulHusnaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::get('surat', [SuratController::class, 'index'])->name('surat-all');
Route::get('surat/{nomor}', [SuratController::class, 'show'])->name('detail-surat');
Route::get('asmaul-husna', [AsmaulHusnaController::class, 'indexWeb'])->name('asmaul-husna');
Route::get('dzikir-pagi', [DzikirController::class, 'indexPagi'])->name('dzikir-pagi');
Route::get('dzikir-sore', [DzikirController::class, 'indexSore'])->name('dzikir-sore');
Route::get('doa-harian', [DoaController::class, 'index'])->name('doa-harian.index');

Route::resource('kisah-sejarah', KisahSejarahController::class);

require __DIR__.'/auth.php';
