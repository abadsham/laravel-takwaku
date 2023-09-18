import React from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";
import taqwa from "../assets/logo/taqwaku.png";

export default function Header() {
    return (
        <div
            className="bg-gray-50 shadow-md
          fixed top-0 left-0 w-full z-20"
        >
            {/* <header className="font-poppins container lg:px-16 px-6 flex flex-wrap items-center py-2 mx-auto justify-between"> */}
            <header className="font-poppins fixed bg-white bg-opacity-70 shadow-lg w-full py-3 lg:py-0 z-10">
                <nav className="flex md:flex-row justify-between items-center w-[90%] mx-auto">
                    <div>
                        <a href="/">
                            <img
                                className="w-24 cursor-pointer"
                                src={taqwa}
                                alt="..."
                            />
                        </a>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <svg
                                    className="fill-current text-gray-900 lg:hidden block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <title>menu hamburger</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href="/">Home</Dropdown.Link>
                            <Dropdown.Link href="">
                                Artikel Sejarah
                            </Dropdown.Link>
                            <hr className="m-3 border border-stone-300" />
                            <Dropdown.Link href="">Login(admin)</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                    <input
                        className="hidden"
                        type="checkbox"
                        id="menu-toggle"
                    />

                    <div
                        className="hidden lg:flex lg:items-center lg:w-auto w-full"
                        id="menu"
                    >
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                <li>
                                    <Link
                                        href="#content"
                                        className="text-gray-800 font-medium lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-500"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("kisah-sejarah.index")}
                                        className="text-gray-800 font-medium lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-500"
                                    >
                                        Artikel Islam
                                    </Link>
                                </li>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            {/* <Dropdown.Link href="">
                                                Lain-lain
                                            </Dropdown.Link> */}
                                            <Dropdown.Link href="login">
                                                Login(admin)
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </header>
        </div>
    );
}
