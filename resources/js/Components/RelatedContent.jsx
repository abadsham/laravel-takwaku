import React from "react";

export default function RelatedContent() {
    return (
        <aside>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    <div className="max-w-3xl mx-auto">
                        <h4 className="h4 font-red-hat-display mb-8">
                            Postingan Terkait
                        </h4>

                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                            <article className="relative group p-6 text-white">
                                <figure>
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                                        src="https://images.unsplash.com/photo-1522219406764-db207f1f7640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                        width="372"
                                        height="182"
                                        alt="Related post 01"
                                    />
                                    <div
                                        className="absolute inset-0 bg-teal-500 opacity-60 group-hover:opacity-30 transition duration-700 ease-out"
                                        aria-hidden="true"
                                    ></div>
                                </figure>
                                <div className="relative flex flex-col h-full">
                                    <header className="grow">
                                        <a
                                            className="hover:underline"
                                            href="blog-post.html"
                                        >
                                            <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                                                How to talk about yourself in
                                                the best possible way
                                            </h3>
                                        </a>
                                        <div className="text-sm opacity-80">
                                            Nov 16, 2020
                                        </div>
                                    </header>
                                    <footer>
                                        <div className="text-sm mt-5">
                                            <div>
                                                <span className="opacity-75">
                                                    By{" "}
                                                </span>
                                                <a
                                                    className="font-medium hover:underline"
                                                    href="#0"
                                                >
                                                    Mari Champ
                                                </a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </article>

                            <article
                                className="relative group p-6 text-white"
                            >
                                <figure>
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                                        src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                        width="372"
                                        height="182"
                                        alt="Related post 02"
                                    />
                                    <div
                                        className="absolute inset-0 bg-purple-500 opacity-60 group-hover:opacity-30 transition duration-700 ease-out"
                                        aria-hidden="true"
                                    ></div>
                                </figure>
                                <div className="relative flex flex-col h-full">
                                    <header className="grow">
                                        <a
                                            className="hover:underline"
                                            href="blog-post.html"
                                        >
                                            <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                                                How I Park Inc make $5,000 every
                                                month by sellings gifts
                                            </h3>
                                        </a>
                                        <div className="text-sm opacity-80">
                                            Nov 12, 2020
                                        </div>
                                    </header>
                                    <footer>
                                        <div className="text-sm mt-5">
                                            <div>
                                                <span className="opacity-75">
                                                    By{" "}
                                                </span>
                                                <a
                                                    className="font-medium hover:underline"
                                                    href="#0"
                                                >
                                                    Lisa Allison Champ
                                                </a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}