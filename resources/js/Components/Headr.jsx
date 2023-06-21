import React from "react";
import Dropdown from "@/Components/Dropdown";
import taqwa from "../assets/logo/taqwa2.png";
import { Link } from "@inertiajs/react";

export default function Headr() {
    return (
        <header className="fixed bg-black bg-opacity-70 shadow-lg w-full py-2 z-10">
            <nav className="flex md:flex-row justify-between items-center w-[90%] mx-auto">
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div>
                    <img
                        className="w-20 cursor-pointer"
                        src={taqwa}
                        alt="..."
                    />
                </div>
                <div className="nav-links duration-500 md:static absolute text-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a
                                className="hover:text-gray-300 font-semibold"
                                href="#content"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-gray-300 font-semibold"
                                href="#"
                            >
                                Artikel
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-gray-300 font-semibold"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-0 text-gray-50">
                    <p>
                        Are you admin?
                        <button className="text-blue-300 px-1 py-2 hover:text-blue-200">
                            Sign in{" "}
                        </button>
                    </p>
                    <ion-icon
                        onClick="onToggleMenu(this)"
                        name="menu"
                        className="text-3xl cursor-pointer md:hidden"
                    ></ion-icon>
                </div>
            </nav>
        </header>
    );
}