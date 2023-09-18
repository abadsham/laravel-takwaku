import Api from "@/Pages/Api/index";
import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import AudioPlayer from "@/Components/AudioQuran";
import ListQuran from "./LIstQuran";

export default function BacaQuran({ nomor }) {
    const [surats, setSurat] = useState([]);

    React.useEffect(() => {
        Api.get("quran/surat/").then((response) => {
            console.log(response.data.data[0].nama);
            setSurat(response.data.data);
        });
    }, []);

    if (!surats) return null;
    return (
        <>
            <Head title="Qur'anku" />
            <div className="min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-900">
                <section className="max-w-5xl mx-auto text-gray-100 body-font">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-wrap w-full mb-8">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="text-3xl font-medium md:font-semibold title-font mb-5 text-gray-300">
                                    Qur'anku
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end mb-8">
                            <p>
                                مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ
                                بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ
                                أَمْثَالِهَا لاَ أَقُولُ الم حرْفٌ وَلَكِنْ
                                أَلِفٌ حَرْفٌ وَلاَمٌ حَرْفٌ وَمِيمٌ حَرْفٌ
                                <br />
                                <br />
                            </p>
                            <p>
                                “Abdullah bin Mas’ud radhiyallahu ‘anhu berkata:
                                “Rasulullah shallallahu ‘alaihi wasallam
                                bersabda: “Siapa yang membaca satu huruf dari Al
                                Quran maka baginya satu kebaikan dengan bacaan
                                tersebut, satu kebaikan dilipatkan menjadi 10
                                kebaikan semisalnya dan aku tidak mengatakan الم
                                satu huruf akan tetapi Alif satu huruf, Laam
                                satu huruf dan Miim satu huruf.” (HR. Tirmidzi
                                dan dishahihkan di dalam kitab Shahih Al Jami’,
                                no. 6469)
                            </p>
                        </div>
                        <div className="mb-10">
                            <div className="w-full">
                                <div className="p-4 border text-white text-center">
                                    بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ
                                    الرَّحِيْمِ
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
                            {surats.map((surat, index) => (
                                <ListQuran
                                    key={index}
                                    nama={surat.nama}
                                    nomor={surat.nomor}
                                    jumlahAyat={surat.jumlahAyat}
                                    namaLatin={surat.namaLatin}
                                    arti={surat.arti}
                                    tempatTurun={surat.tempatTurun}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
