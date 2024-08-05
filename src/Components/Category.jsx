import React from "react";
import ProductCard from "./ProductCard";
import livingRoomImage from "../../public/poto/Image-living room (1).png";
import diningRoomImage from "../../public/poto/Mask Group (2).png";
import bedroomImage from "../../public/poto/Mask Group (3).png";

const Category = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          image={livingRoomImage}
          name="Syltherine"
          description="Stylish cafe chair"
          price="Rp 2.500.000"
          originalPrice="Rp 3.500.000"
          discount={30}
        />
        <ProductCard
          image={diningRoomImage}
          name="Leviosa"
          description="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <ProductCard
          image={bedroomImage}
          name="Lolito"
          description="Luxury big sofa"
          price="Rp 7.000.000"
          originalPrice="Rp 14.000.000"
          discount={50}
        />
        <ProductCard
          image={livingRoomImage}
          name="Respira"
          description="Outdoor bar table and stool"
          price="Rp 500.000"
          isNew={true}
        />
        <ProductCard
          image={diningRoomImage}
          name="Grifo"
          description="Night lamp"
          price="Rp 1.500.000"
        />
        <ProductCard
          image={bedroomImage}
          name="Muggo"
          description="Small mug"
          price="Rp 150.000"
          isNew={true}
        />
        <ProductCard
          image={livingRoomImage}
          name="Pingky"
          description="Cute bed set"
          price="Rp 7.000.000"
          originalPrice="Rp 14.000.000"
          discount={50}
        />
        <ProductCard
          image={diningRoomImage}
          name="Potty"
          description="Minimalist flower pot"
          price="Rp 500.000"
          isNew={true}
        />
      </div>
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Category;
