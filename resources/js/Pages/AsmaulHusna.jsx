import React from "react";

export default function AsmaulHusna(props) {
    
    return (
        <>
            <Head title="Asma'ul Husna" />
            <div className="min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-900">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-8">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="text-3xl font-medium md:font-semibold title-font mb-5 text-gray-300">
                                    Asma'ul Husna
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            {/* {surats.map((surat, index) => (
                                <div key={index}>{surat}</div>
                            ))} */}

                            <div className="p-4 sm:w-1/4 w-1/2">
                                <div className="bg-[#526D82] rounded-lg p-2 xl:p-6">
                                    <h2 className="title-font font-medium sm:text-3xl text-3xl text-white">
                                        2.7K
                                    </h2>
                                    <p className="leading-relaxed text-gray-100 font-bold">
                                        Users
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}