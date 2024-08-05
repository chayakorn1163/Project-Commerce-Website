        import heroImage from "../../public/poto/scandinavian-interior-mockup-wall-decal-background 1.png"; // Correct path to the image

        const Hero1 = () => {
        return (
        <div className="relative h-[550px] bg-orange-500 flex items-center justify-center p-4 sm:p-12 outline outline-2 outline-offset-2 md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px]">
            <img
            src={heroImage}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="text-center z-10 bg-orange-100 p-4 sm:p-8 md:h-[40%] md:w-[35%] absolute inset-y-1/3 sm:inset-y-auto right-4 sm:right-16 w-3/4 sm:w-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-400 ">
                Discover Our
                <br /> New Collection
            </h2>
            <p className="text-base sm:text-lg mb-6 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-950">
                BUY NOW
            </button>
            </div>
        </div>
        );
        };

        export default Hero1;
