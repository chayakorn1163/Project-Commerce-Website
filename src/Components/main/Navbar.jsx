        import "boxicons/css/boxicons.min.css";

        const Navbar = () => {
        return (
        <nav className="bg-white shadow md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Furniro"
                />
                <span className="ml-3 text-xl font-bold">Furniro</span>
                </div>
                <div className="hidden sm:block">
                <div className="flex space-x-4">
                    <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black"
                    aria-current="page"
                    >
                    Home
                    </a>
                    <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black"
                    >
                    Shop
                    </a>
                    <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black "
                    >
                    About
                    </a>
                    <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black"
                    >
                    Contact
                    </a>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <i className="bx bx-user text-2xl"></i>
                <i className="bx bx-search text-2xl"></i>
                <i className="bx bx-heart text-2xl"></i>
                <i className="bx bx-cart text-2xl"></i>
                </div>
            </div>
            </div>
        </nav>
        );
        };

        export default Navbar;
