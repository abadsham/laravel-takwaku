<?php

namespace App\Http\Controllers\Api;

use App\Models\KisahSejarah;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KisahSejarahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ambil data terakhir
        $kisahsejarah = KisahSejarah::latest()->get();
        // response json
        return response()->json(['data' => $kisahsejarah]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Menu');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'judul'   => 'required',
            'text'   => 'required',
        ]);

        $image = $request->file('image');
        $image->storeAs('public/menus', $image->hashName());

        //create post
        KisahSejarah::create([
            'judul'     => $request->judul,
            'nama'     => $request->nama,
            'image'    => $image->hashName(),
            'text'     => $request->text
        ]);

        //redirect
        // return redirect()->route('#')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KisahSejarah  $kisahSejarah
     * @return \Illuminate\Http\Response
     */
    public function show(KisahSejarah $kisahSejarah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KisahSejarah  $kisahSejarah
     * @return \Illuminate\Http\Response
     */
    public function edit(KisahSejarah $kisahSejarah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KisahSejarah  $kisahSejarah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KisahSejarah $kisahSejarah)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KisahSejarah  $kisahSejarah
     * @return \Illuminate\Http\Response
     */
    public function destroy(KisahSejarah $kisahSejarah)
    {
        //
    }
}
