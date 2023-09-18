import React from "react";
import { Link } from "@inertiajs/react";

export default function MainContent() {
    return (
        <>
            <div className="max-w-[1640px] mx-auto p-">
                <div className="max-h-[500px] relative">
                    {/* Overlay */}
                    <div className="absolute w-full h-full text-center text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                        <p className=" text-3xl">
                            فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا
                            تَكْفُرُونِ
                        </p>

                        <h1 className="pt-4 text-lg sm:text-lg md:text-xl lg:text-3xl font-medium">
                            "Maka ingatlah{" "}
                            <span className="text-orange-500">kepada-Ku</span>,
                            Aku pun akan ingat kepadamu.
                        </h1>
                        <h1 className="px-4 text-lg sm:text-lg md:text-xl lg:text-3xl font-medium">
                            Bersyukurlah{" "}
                            <span className="text-orange-500">kepada-Ku</span> ,
                            dan janganlah kamu ingkar kepada-Ku.""
                        </h1>
                        <p className=" text-lg pt-3">
                            [ QS. Al-Baqarah : 152 ]
                        </p>
                    </div>
                    <img
                        className="w-full max-h-[500px] object-cover"
                        src="https://images.pexels.com/photos/5988922/pexels-photo-5988922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="/"
                    />
                </div>
            </div>
            <div
                id="content"
                className="flex min-h-screen items-center justify-center bg-gradient-to-t from-zinc-800 to-zinc-700 p-16 z-0"
            >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1613752557137-80d06802ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Baca Qur'an
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Artinya: "Siapa saja yang membaca satu huruf
                                dari Kitabullah (Alquran) maka dia akan mendapat
                                satu kebaikan. Sedangkan satu kebaikan
                                dilipatkan kepada sepuluh
                                semisalnya..(HR.Tirmidzi)
                            </p>
                            <Link href={route("surat-all")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Asmaul Husna
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                “Sesunguhnya Allah memiliki 99 nama, seratus
                                kurang satu, siapa yang menjaganya maka dia
                                masuk surga.” (HR. Bukhorii, no. 2736, Muslim,
                                no.2677 dan Ahmad, no.7493).
                            </p>
                            <Link href={route("asmaul-husna")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1577561426384-62154a1e9457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 mb-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-semibold text-white">
                                <span className="font-bold text-2xl">
                                    Doa & Dzikir
                                </span>
                                <br />
                                Harian
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                "Hai orang-orang yang beriman, berdzikirlah
                                (dengan menyebut nama) Allah, zikir yang
                                sebanyak-banyaknya. Dan bertasbihlah kepada-Nya
                                diwaktu pagi dan petang." (QS. Al Ahzab: 41-42)
                            </p>
                            <Link href={route("doa-harian.index")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Dzikir Pagi
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Dari Anas bin Malik ia berkata: “Rasulullah صلي
                                الله عليه وسلم bersabda: 'Aku duduk bersama
                                orang-orang yang berdzikir.."
                            </p>
                            <Link href={route("dzikir-pagi")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1616336018513-b7e2404fdc63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Dzikir Petang
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                "Rasulullah صلي الله عليه وسلم bersabda: aku
                                duduk bersama orang-orang yang berdzikir kepada
                                Allah dari mulai shalat 'Ashar sampai terbenam
                                matahari.."
                            </p>
                            <Link href={route("dzikir-sore")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1597329084427-64a6518d0445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Kisah Islami
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                “Sebaik-baik manusia ialah pada generasiku,
                                kemudian generasi berikutnya, kemudian generasi
                                berikutnya.” (Hadits Bukhari, no.3651)
                            </p>
                            <Link href={route("kisah-sejarah.index")}>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bottom-5">
                <p className=" text-sm bg-slate-900 opacity-70 p-2 px-5 font-semibold text-white shadow">
                    jika anda mempunyai pertanyaan, hubungi kami
                    <a
                        href="https://wa.me/6282133460786"
                        className="text-teal-400 hover:underline pl-1"
                        target={"_blank"}
                    >
                        disini
                    </a>
                </p>
            </div>
            {/* <script src={`https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js`}></script> */}
        </>
    );
}
