import React from "react";
import logodoa from "@/assets/logo/open-hands.png";

export default function DetailDoa() {
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div className="w-full md:w-1/4 bg-gray-500 rounded-lg grid place-items-center">
                    <img src={logodoa} alt="tailwind logo" className="w-32" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-2xl text-xl">
                        Doa Sebelum Makan
                    </h3>
                    <p className="md:text-lg text-gray-500 font-medium text-base">
                        Doanya Lorem ipsum dolor sit amet consectetur, adipisi
                        it. Deserunt repellendus fuga nisi dolorum reiciendis
                        neque, eius provident? Atque architecto quia nisi maxime
                        laboriosam cum. Lor
                    </p>
                </div>
            </div>
        </div>
    );
}