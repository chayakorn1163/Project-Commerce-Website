    import HeroPage2 from "../../../public/poto/Page_Shop/imagehero.png";

    const HeroBlog = () => {
    return (
        <div
        className=" bg-cover bg-center py-16 md:mx-[120px] xl:mx-[120px] lg:mx-[120px] 2xl:mx-[120px]"
        style={{ backgroundImage: `url(${HeroPage2})` }}
        >
        <div className="  py-6 md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px] bg-white bg-opacity-50">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-semibold text-gray-800">Blog</h1>
            <nav className="mt-2">
                <ul className="flex justify-center space-x-2 text-gray-600">
                <li>Home</li>
                <li>›</li>
                <li className="text-gray-800">Blog</li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    );
    };

    export default HeroBlog;
