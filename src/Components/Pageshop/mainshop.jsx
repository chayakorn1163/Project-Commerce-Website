        import HeroPage2 from "../../../public/poto/Page_Shop/imagehero.png";

        const Heroshop = () => {
        return (
        <div
            className="bg-cover bg-center py-16 md:mx-[120px] xl:mx-[120px] lg:mx-[120px] 2xl:mx-[120px]"
            style={{ backgroundImage: `url(${HeroPage2})` }}
        >
            <div className="bg-white bg-opacity-70 py-6 md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px]">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-semibold text-gray-800">Shop</h1>
                <nav className="mt-2">
                <ul className="flex justify-center space-x-2 text-gray-600">
                    <li>Home</li>
                    <li>›</li>
                    <li className="text-gray-800">Shop</li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        );
        };

        export default Heroshop;
