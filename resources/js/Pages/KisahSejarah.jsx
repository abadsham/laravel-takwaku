import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import ArtikelContent from "@/Components/RelatedContent";
import RelatedContent from './../Components/RelatedContent';

export default function KisahSejarah() {
    
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
                                            {/* <!-- Article header --> */}
                                            <header className="mb-8">
                                                <div className="text-center text-3xl md:text-left">
                                                    <h1
                                                        className="h1 font-red-hat-display mb-4"
                                                        data-aos="fade-down"
                                                    >
                                                        Appy launches new
                                                        thematic solutions
                                                    </h1>
                                                </div>
                                                <div className="md:flex md:items-center md:justify-between mt-5">
                                                    <div className="">
                                                        <div>
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
                                                                · Jul 2, 2023
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" />

                                            {/* <!-- Article content --> */}
                                            <div className="text-lg text-gray-600 dark:text-gray-400">
                                                <figure className="mb-8">
                                                    <img
                                                        className="w-full"
                                                        src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                                        width="768"
                                                        height="432"
                                                        alt="News inner"
                                                    />
                                                    <figcaption className="text-sm text-center text-gray-500 mt-3">
                                                        Foto ilustrasi misal
                                                        sahabat umar
                                                    </figcaption>
                                                </figure>
                                                <p className="mb-8">
                                                    Ini adalah tentang
                                                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                                                        (Judul)
                                                    </strong>
                                                </p>
                                                <p className="mb-8">
                                                    Et leo duis ut diam quam
                                                    nulla porttitor porttitor
                                                    lacus luctus accumsan
                                                    tortor, lorem dolor sed
                                                    viverra ipsum nunc aliquet
                                                    bibendum enim eu augue ut{" "}
                                                    <a
                                                        className="font-medium text-teal-500 hover:underline"
                                                        href="#0"
                                                    >
                                                        lectus arcu bibendum
                                                    </a>{" "}
                                                    at. Non sodales neque
                                                    sodales ut etiam sit.
                                                    Venenatis urna cursus eget
                                                    nunc scelerisque viverra
                                                    mauris in aliquam.
                                                </p>
                                                <p className="mb-8">
                                                    Bibendum enim facilisis
                                                    gravida neque convallis.
                                                    Convallis posuere morbi leo
                                                    urna molestie turpis in eu
                                                    mi bibendum neque egestas.
                                                    Est ante in nibh mauris
                                                    cursus mattis molestie
                                                    aliquam purus sit amet
                                                    luctus vulputate sapien nec
                                                    sagittis aliquam enim nec
                                                    dui nunc mattis enim, sit
                                                    amet nulla facilisi morbi
                                                    tempus iaculis urna id.
                                                    Blandit cursus risus at
                                                    ultrices mi tempus imperdiet
                                                    nulla.
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <RelatedContent />
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