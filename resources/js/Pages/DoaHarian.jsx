import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import DetailDoa from "@/Components/DetailDoa";

export default function DoaHarian({ doaharians }) {
    // const [doaharians, setDoaharians] = useState([]);

    // if (!doa) return null;
    return (
        <>
            <Head title="Do'a Harian" />
            {/* <DetailDoa /> */}
            <div className="min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-900">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        {/* <div className="flex text-center w-full mb-8">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="text-3xl font-medium md:font-semibold title-font mb-5 text-gray-300">
                                    Do'a Do'a Harian
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div> */}

                        {/* <div className="flex flex-col gap-4">
                            {doas.map((doa) => (
                                <li key={doa.id}>
                                    {doa.arab} - ${doa.judul}
                                </li>
                            ))}
                        </div> */}

                        <div className="flex flex-col items-center text-center">
                            <div className="sm:max-w-3xl w-full ">
                                <div className="w-full mb-6 lg:mb-14 text-start">
                                    <h1 className="text-3xl font-medium md:font-semibold title-font mb-5 text-gray-300">
                                        Do'a Do'a Harian
                                    </h1>
                                    <div className="h-1 w-52  bg-indigo-500 rounded"></div>
                                </div>

                                {doaharians.map(
                                    (doa, index) => (
                                        (<p key={index}></p>),
                                        (
                                            <>
                                                <div className="bg-[#526D82] rounded-sm my-4 p-3 xl:p-5">
                                                    <div className="flex justify-between focus:flex-none">
                                                        {/* <div className=""></div> */}
                                                        <button className="peer font-medium sm:text-2xl text-xl text-white ">
                                                            {doa.judul}
                                                        </button>
                                                        <div
                                                            class=" 
                                                            hidden peer-focus:inline-block after:inline-block after:flex-none 
                                                            after:-z-20 after:blur-[2px] after:rounded-lg
                                                            peer-focus: peer-focus:opacity-100 peer-focus:visible 
                                                            transition-all invisible 
                                                            "
                                                        >
                                                            <div class="py-6 px-3">
                                                                <p className="leading-relaxed text-gray-100 font-semibold mt-4">
                                                                    {doa.arab}
                                                                </p>
                                                                <p className="leading-relaxed text-gray-100 italic mt-4">
                                                                    {doa.latin}
                                                                </p>
                                                                <p className="leading-relaxed text-gray-100 italic mt-4">
                                                                    "{doa.arti}"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="hidden">
                                                        <p className="leading-relaxed text-gray-100 font-semibold mt-4">
                                                            {doa.arab}
                                                        </p>
                                                        <p className="leading-relaxed text-gray-100 italic mt-4">
                                                            {doa.latin}
                                                        </p>
                                                        <p className="leading-relaxed text-gray-100 italic mt-4">
                                                            "{doa.arti}"
                                                        </p>
                                                    </div> */}
                                            </>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
