import { Link, Head } from "@inertiajs/react";
import Swiper from "swiper";
import gambar1 from "../assets/image/carousel-item-01.jpg"
import gambar2 from "../assets/image/carousel-item-02.jpg"
import gambar3 from "../assets/image/carousel-item-03.jpg"
import gambar4 from "../assets/image/carousel-item-04.jpg"
import gambar5 from "../assets/image/carousel-item-05.jpg"
import "swiper/swiper-bundle.css";

export default function MainPage(props, items) {
    return (
        <>
            <Head title="Main Page" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <section className="border-t border-transparent dark:border-gray-800">
                            <div className="py-12 md:py-20">
                                {/* <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                        <h1 className="h2 font-red-hat-display mb-4">From rough design files, to powerful products</h1>
                                        <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                                    </div>
                                </div> */}
                                <div className="carousel swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide max-w-lg">
                                            <img className="transition-opacity duration-300" src={gambar1} width="540" height="460" alt="Carousel item 01" />
                                            <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                                                <div className="flex grow">
                                                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">Learn more</a>
                                                </div>
                                                <div className="absolute bottom-0 right-0 p-6">
                                                    <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide max-w-lg">
                                            <img className="transition-opacity duration-300" src={gambar2} width="540" height="460" alt="Carousel item 02" />
                                            <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                                                <div className="flex grow">
                                                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">Learn more</a>
                                                </div>
                                                <div className="absolute bottom-0 right-0 p-6">
                                                    <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide max-w-lg">
                                            <img className="transition-opacity duration-300" src={gambar3} width="540" height="460" alt="Carousel item 03" />
                                            <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                                                <div className="flex grow">
                                                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">Learn more</a>
                                                </div>
                                                <div className="absolute bottom-0 right-0 p-6">
                                                    <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide max-w-lg">
                                            <img className="transition-opacity duration-300" src={gambar4} width="540" height="460" alt="Carousel item 04" />
                                            <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                                                <div className="flex grow">
                                                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">Learn more</a>
                                                </div>
                                                <div className="absolute bottom-0 right-0 p-6">
                                                    <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide max-w-lg">
                                            <img className="transition-opacity duration-300" src={gambar5} width="540" height="460" alt="Carousel item 05" />
                                            <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                                                <div className="flex grow">
                                                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">Learn more</a>
                                                </div>
                                                <div className="absolute bottom-0 right-0 p-6">
                                                    <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                    <div className="flex items-center justify-between mt-12 md:mt-16">
                                        <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
                                            <span className="sr-only">Previous</span>
                                            <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                                            </svg>
                                        </button>
                                        <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
                                            <span className="sr-only">Next</span>
                                            <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                                            </svg>
                                        </button>
                                    </div>        
                                </div> */}

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}