import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import RelatedContent from './../Components/RelatedContent';

export default function KisahSejarah({ sejarah }) {
    return (
        <>
            <Head title="Kisah Sejarah" />

            <div className="font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight">
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <main className="grow">
                        <section className="relative">
                            <div className="absolute inset-0 h-128 pt-16 box-content">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                                    src="https://images.unsplash.com/photo-1603127047787-f7919173149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    width="1440"
                                    height="577"
                                    alt="About"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                                    aria-hidden="true"
                                ></div>
                            </div>

                            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                                    <div className="max-w-3xl mx-auto">
                                        <article>

                                            <div className="text-lg text-gray-600 dark:text-gray-400">
                                                {sejarah.map(
                                                    (sejah, index) => (
                                                        (<p key={index}></p>),
                                                        (
                                                            <>
                                                                <div className="mb-8">
                                                                    <h1 className="title-font font-medium sm:text-3xl text-3xl text-white">
                                                                        <div>
                                                                            {
                                                                                sejah.judul
                                                                            }
                                                                        </div>
                                                                    </h1>
                                                                </div>
                                                                <span className="text-gray-600 dark:text-gray-400">
                                                                    By{" "}
                                                                </span>
                                                                <a
                                                                    className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                                                                    href="#0"
                                                                >
                                                                    Abad Hisham
                                                                </a>
                                                                <span className="text-gray-600 dark:text-gray-400">
                                                                    {" "}
                                                                    · Jul 2,
                                                                    2023
                                                                </span>
                                                                <hr className="w-28 h-px pt-px my-5 bg-gray-400 dark:bg-gray-500 border-0 mb-5" />
                                                                <figure className="mb-8">
                                                                    <img
                                                                        className="w-full"
                                                                        src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                                                        width="768"
                                                                        height="432"
                                                                        alt="News inner"
                                                                    />
                                                                    <figcaption className="text-sm text-center text-gray-500 mt-3">
                                                                        Foto
                                                                        ilustrasi
                                                                        misal
                                                                        sahabat
                                                                        umar
                                                                    </figcaption>
                                                                </figure>
                                                                <p className="mb-8 ">
                                                                    Ini adalah
                                                                    tentang
                                                                    <strong className="font-medium px-1 text-gray-900 dark:text-gray-100">
                                                                        {
                                                                            sejah.judul
                                                                        }
                                                                    </strong>
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten1
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten2
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten3
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten4
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten5
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten6
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten7
                                                                    }
                                                                </p>
                                                                <p className="mb-8">
                                                                    {
                                                                        sejah.konten8
                                                                    }
                                                                </p>
                                                            </>
                                                        )
                                                    )
                                                )}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            {/* <div className="">
                <section className="">
                        
                </section>
            </div> */}
        </>
    );
}