<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DzikirController extends Controller
{
    public function indexPagi()
    {
        return Inertia::render('DzikirPagi');
    }

    public function indexSore()
    {
        return Inertia::render('DzikirSore');
    }
}
