        import imageLivingRoom from "../../../public/poto/Image-living room (1).png";
        import imageDining from "../../../public/poto/Mask Group (2).png";
        import imageBedroom from "../../../public/poto/Mask Group (3).png";

        const CategoryHighlights = () => {
        return (
        <div className="p-8 md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px]">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Browse The Range</h2>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border rounded-lg overflow-hidden">
                <img src={imageDining} alt="Dining" className="w-full h-auto" />
                <div className="p-4 text-center">
                <p className="text-lg font-semibold">Dining</p>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <img
                src={imageLivingRoom}
                alt="Living Room"
                className="w-full h-auto"
                />
                <div className="p-4 text-center">
                <p className="text-lg font-semibold">Living Room</p>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <img src={imageBedroom} alt="Bedroom" className="w-full h-auto" />
                <div className="p-4 text-center">
                <p className="text-lg font-semibold">Bedroom</p>
                </div>
            </div>
            </div>
        </div>
        );
        };

        export default CategoryHighlights;
