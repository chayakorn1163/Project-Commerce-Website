/* eslint-disable no-unused-vars */
    import React from "react";
    import RoomFurniture1 from "../../public/poto/FuniroFurniture/Rectangle 39 (1).png";
    import RoomFurniture2 from "../../public/poto/FuniroFurniture/Rectangle 40.png";
    import RoomFurniture3 from "../../public/poto/FuniroFurniture/Rectangle 41.png";
    import RoomFurniture4 from "../../public/poto/FuniroFurniture/Rectangle 43.png";
    import RoomFurniture5 from "../../public/poto/FuniroFurniture/Rectangle 44.png";
    import RoomFurniture6 from "../../public/poto/FuniroFurniture/Rectangle 45.png";
    import RoomFurniture7 from "../../public/poto/FuniroFurniture/Rectangle 37.png";
    import RoomFurniture8 from "../../public/poto/FuniroFurniture/Rectangle 38.png";

    const FuniroFurniture = () => {
    return (
        <div className="mx-[50px] sm:mx-[100px] md:mx-[120px] lg:mx-[150px] xl:mx-[200px]">
        <h2 className="text-center text-2xl">Share your setup with</h2>
        <h1 className="text-center text-4xl font-bold">#FuniroFurniture</h1>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture1}
                alt="Room1"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture2}
                alt="Room2"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture3}
                alt="Room3"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture4}
                alt="Room4"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture5}
                alt="Room5"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture6}
                alt="Room6"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture7}
                alt="Room7"
                className="absolute w-full h-full object-cover"
            />
            </div>
            <div className="relative pb-[100%]">
            <img
                src={RoomFurniture8}
                alt="Room8"
                className="absolute w-full h-full object-cover"
            />
            </div>
        </div>
        </div>
    );
    };

    export default FuniroFurniture;
