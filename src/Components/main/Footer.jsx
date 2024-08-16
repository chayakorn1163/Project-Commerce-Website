        // eslint-disable-next-line no-unused-vars
        import React from "react";

        const Footer = () => {
        return (
        <footer className="bg-orange-300 text-gray-800 py-10 mt-20 ">
            <div className="container mx-auto px-4 md:px-20 lg:px-28 xl:px-32 2xl:px-40 ">
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="mb-6 md:mb-0">
                <h2 className="text-lg font-bold">Funiro.</h2>
                <p className="text-sm">
                    400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
                </div>
                <div className="flex flex-col md:flex-row">
                <div className="mb-6 md:mb-0 md:mr-10 ">
                    <h3 className="font-semibold">Links</h3>
                    <ul className="sm:mt-4">
                    <li className="sm:mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Home
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Shop
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        About
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Contact
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0 md:mr-10">
                    <h3 className="font-semibold">Help</h3>
                    <ul>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Payment Options
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Returns
                        </a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                        Privacy Policies
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="flex flex-col ">
                <h3 className="font-semibold">Newsletter</h3>
                <form className="flex flex-col mt-7">
                    <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="border border-gray-300 p-2 mb-4 rounded"
                    />
                    <button className="bg-purple-600 text-white py-2 rounded mt-4">
                    SUBSCRIBE
                    </button>
                </form>
                </div>
            </div>
            </div>
            <div className="text-center mt-10">
            <p className="text-sm">2023 Funiro. All rights reserved.</p>
            </div>
        </footer>
        );
        };

        export default Footer;
