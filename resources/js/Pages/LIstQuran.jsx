import React from "react";
import AudioPlayer from "@/Components/AudioQuran";
import { Link } from "@inertiajs/react";
import App from "@/Components/App";

export default function ListQuran({
    nama,
    nomor,
    namaLatin,
    jumlahAyat,
    tempatTurun,
    arti,
}) {
    return (
        <div className="bg-[#526D82] p-3 xl:p-4 hover:bg-slate-600">
            <Link href={`surat/${nomor}`}>
                <p className="flex justify-start leading-relaxed text-gray-100 font-bold">
                    {nomor}. {namaLatin}
                </p>
                <h2 className="flex justify-end font-medium sm:text-2xl text-2xl text-white">
                    <span className="flex items-center eading-relaxed text-gray-100 font-light text-sm italic pr-3">
                        ({arti})
                    </span>
                    <div>
                        <span className="text-xl"></span>
                        {nama}
                    </div>
                </h2>
                <div className="flex text-gray-200">
                    <p className="leading-relaxed font-medium pl-1">
                        {tempatTurun}
                    </p>
                    <span className=" pl-1">- {jumlahAyat} ayat</span>
                </div>
            </Link>
            <div className="pt-4">
                <App nomor={nomor} />
            </div>
        </div>
    );
}
