<?php

namespace App\Http\Controllers\Api;

use Inertia\Inertia;
use App\Models\DoaHarian;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DoaHarianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ambil semua data
        $doaharian = DoaHarian::all();
        // respons
        return response()->json([ 'data' => $doaharian ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return Inertia::render('Doaharian');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validasi input
        $validatedData = $request->validate([
            'judul' => 'required|string|max:255',
            'arab' => 'required|string|max:255',
            'latin' => 'required|string|max:255',
            'arti' => 'required|string|max:255',
            'footnote' => 'required|string|max:255',
        ]);
        // Simpan data pengguna ke database
        $doaharian = DoaHarian::create([
            'judul' => $validatedData['judul'],
            'arab' => $validatedData['arab'],
            'latin' => $validatedData['latin'],
            'arti' => $validatedData['arti'],
            'footnote' => $validatedData['footnote'],
        ]);

        // respons & redirect
        return response()->json(['message' => 'Doa sukses ditambah'],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DoaHarian  $doaHarian
     * @return \Illuminate\Http\Response
     */
    public function show(DoaHarian $doaHarian)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DoaHarian  $doaHarian
     * @return \Illuminate\Http\Response
     */
    public function edit(DoaHarian $doaHarian)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DoaHarian  $doaHarian
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DoaHarian $doaharian, $id)
    {
        // Validasi input
        $validatedData = $request->validate([
            'judul' => 'required|string|max:255',
            'arab' => 'required|string|max:255',
            'latin' => 'required|string|max:255',
            'footnote' => 'required|string|max:255',
        ]);
        // Temukan pengguna berdasarkan ID
        $doaharian = DoaHarian::findOrFail($id);

        // Perbarui data pengguna
        $doaharian->judul = $validatedData['judul'];
        $doaharian->arab = $validatedData['arab'];
        $doaharian->latin = $validatedData['latin'];
        $doaharian->footnote = $validatedData['footnote'];


        // Simpan perubahan ke database
        $doaharian->save();

        // Berikan respons atau lakukan redirect
        return response()->json(['message' => 'Doa berhasil diupdate'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DoaHarian  $doaHarian
     * @return \Illuminate\Http\Response
     */
    public function destroy(DoaHarian $doaharian)
    {
        $doaharian->delete();
        return response()->json(['massage' => 'Doa berhasil dihapus!'],204);
    }
}
