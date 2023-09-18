import React from "react";
import { Head } from "@inertiajs/react";

export default function AsmaulHusna({ asmaul }) {
    return (
        <>
            <Head title="Asma'ul Husna" />
            <div className="min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-900">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div
                            className="max-w-5xl flex flex-wrap -m-4 mx-auto"
                            style={{ flexDirection: "row-reverse" }}
                        >
                            <div className="w-full mb-6 lg:mb-8">
                                <h1 className="text-3xl font-medium md:font-semibold text-start title-font mb-5 text-gray-300">
                                    Asma'ul Husna
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>

                            <div className="flex flex-col text-right items-end mb-8 text-gray-200">
                                <p>
                                    وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ
                                    فَادْعُوهُ بِهَا ۖ وَذَرُوا الَّذِينَ
                                    يُلْحِدُونَ فِي أَسْمَائِهِ ۚ سَيُجْزَوْنَ
                                    مَا كَانُوا يَعْمَلُونَ
                                    <br />
                                    <br />
                                </p>
                                <p className="text-start">
                                    "Dan Allah memiliki Asma'ul-husna (nama-nama
                                    yang terbaik), maka bermohonlah kepada-Nya
                                    dengan menyebutnya Asma'ul-husna itu dan
                                    tinggalkanlah orang-orang yang
                                    menyalahartikan nama-nama-Nya. Mereka kelak
                                    akan mendapat balasan terhadap apa yang
                                    telah mereka kerjakan." Baca artikel
                                    detikedu, "4 Bukti Adanya Asmaul Husna dalam
                                    Al Quran dan Hadits" (QS Al A'raf ayat 180)
                                </p>
                            </div>

                            {asmaul.map(
                                (asmaulhusna, index) => (
                                    (<p key={index}></p>),
                                    (
                                        <div className="p-2 lg:w-1/3 w-1/2">
                                            <div className="bg-[#526D82] p-3 xl:p-4 h-full">
                                                <div className="flex items-center justify-end pb-3">
                                                    <p className="leading-relaxed text-gray-300 font-light">
                                                        ({asmaulhusna.latin})
                                                    </p>
                                                    <h2 className="title-font font-medium pl-3 sm:text-3xl text-2xl text-white">
                                                        {asmaulhusna.arab}
                                                    </h2>
                                                </div>
                                                <p className="leading-relaxed text-start text-gray-50 font-thin italic">
                                                    {asmaulhusna.arti}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
