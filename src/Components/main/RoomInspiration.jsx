/* eslint-disable no-unused-vars */
        import React from "react";
        import Room1 from "../../../public/poto/Roomlnspiration/Rectangle 24.png";
        import Room2 from "../../../public/poto/Roomlnspiration/Rectangle 25 (1).png";

        const RoomInspiration = () => {
        return (
            <div className="bg-gray-50 p-10 md:mx-[120px]">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-md rounded-md">
                <div className="w-full md:w-1/2 md:pr-10 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                    50+ Beautiful rooms inspiration
                </h2>
                <p className="text-gray-600 mb-6">
                    Our designer already made a lot of beautiful prototype of rooms that
                    inspire you
                </p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">
                    Explore More
                </button>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative w-full md:w-1/2">
                    <img
                    src={Room1}
                    alt="Room 1"
                    className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-lg">
                    <p className="text-gray-800 font-semibold">01 — Bed Room</p>
                    <p className="text-gray-600">Inner Peace</p>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2">
                    <img
                    src={Room2}
                    alt="Room 2"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
            </div>
            </div>
        );
        };

        export default RoomInspiration;
