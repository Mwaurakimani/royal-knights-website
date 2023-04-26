<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function getAllMedia()
    {
        $directories = Storage::directories('public/frontEnd/images');
        $fileNames = [];

        foreach ($directories as $directory) {
            $directoryName = basename($directory);
            if ($directoryName !== 'MainPageImages') {
                $files = Storage::files($directory);
                foreach ($files as $file) {
                    $fileName = basename($file);
                    $fileNames[] = $directoryName . '/' . $fileName;
                }
            }
        }

        return Inertia::render('WebPages/Gallery', [
            'images' => $fileNames
        ]);
    }
}
