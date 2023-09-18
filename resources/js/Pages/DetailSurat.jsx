import { useParams } from "react-router-dom";
import Api from "@/Pages/Api/index";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Head, usePage } from "@inertiajs/react";

export default function DetailSurat() {
    const [nama, setNama] = useState([]);
    const [arti, setArti] = useState([]);
    const [ayat, setAyat] = useState([]);
    const [deskripsi, setDeskripsi] = useState([]);
    const [jumlahAyat, setJumlahAyat] = useState([]);
    const [namaLatin, setNamaLatin] = useState([]);
    const [surats, setSurat] = useState([]);
    // const { nomor } = useParams();
    const { nomor } = usePage().props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get(`quran/surat/${nomor}`);
                console.log(response.data);
                setNama(response.data.nama);
                setArti(response.data.arti);
                setAyat(response.data.ayat);
                setDeskripsi(response.data.deskripsi);
                setJumlahAyat(response.data.jumlah_ayat);
                setNamaLatin(response.data.nama_latin);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [nomor]);

    // if (!surats) return null;
    return (
        <>
            <Head title="Qur'anku" />
            <div className="min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-900">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-8">
                            <div className="w-full mb-4 lg:mb-0">
                                <h1 className="text-3xl font-medium md:font-semibold title-font mb-5 text-gray-300">
                                    {/* {nama}
                                    {arti}
                                    {deskripsi}
                                    {jumlahAyat} */}
                                    Surat {namaLatin}
                                    <div className="text-slate-400 text-lg md:text-xl font-light pt-1 italic">
                                        ({arti})
                                    </div>
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-col text-slate-100 gap-3 ">
                            {ayat.map((item, index) => (
                                <div className="bg-[#526D82] p-5 lg:p-7  hover:bg-slate-600">
                                    <div className="text-xl md:text-2xl text-right flex justify-end mb-6 md:mb-5   ">
                                        {item.ar}
                                    </div>
                                    <div className="flex justify-start text-lg">
                                        <div key={index}>{index + 1} </div>
                                        <div className="italic ">
                                            . {item.idn}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
