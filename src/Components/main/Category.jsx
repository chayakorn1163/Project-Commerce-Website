    // eslint-disable-next-line no-unused-vars
    import React from "react";
    import ProductCard from "../main/ProductCard";
    import Syltherine from "../../../public/poto/product hero/image.png"
    import Lolito from "../../../public/poto/product hero/Images (1).png";
    import Respira from "../../../public/poto/product hero/Images (2).png";
    import Grifo from "../../../public/poto/product hero/Images (3).png";
    import Muggo from "../../../public/poto/product hero/Images (4).png";
    import Pingky from "../../../public/poto/product hero/Images (5).png";
    import Potty from "../../../public/poto/product hero/image 7.png"
    import Chair from "../../../public/poto/product hero/image 8.png"



    const Category = () => {
      return (
        <div className="p-8 md:mx-[120px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[120px]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Our Products</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              image={Syltherine}
              name="Syltherine"
              description="Stylish cafe chair"
              price="5958 Bath"
              originalPrice="8520 Bath"
              discount={30}
            />
            <ProductCard
              image={Lolito}
              name="Leviosa"
              description="Stylish cafe chair"
              price="6599 Bath"
            />
            <ProductCard
              image={Respira}
              name="Lolito"
              description="Luxury big sofa"
              price="6000 Bath"
              originalPrice="12000 Bath"
              discount={50}
            />
            <ProductCard
              image={Grifo}
              name="Respira"
              description="Outdoor bar table and stool"
              price="5230 Bath"
              isNew={true}
            />
            <ProductCard
              image={Muggo}
              name="Grifo"
              description="Night lamp"
              price="7890 Bath"
            />
            <ProductCard
              image={Pingky}
              name="Muggo"
              description="Small mug"
              price="32500 Bath"
              isNew={true}
            />
            <ProductCard
              image={Potty}
              name="Pingky"
              description="Cute bed set"
              price="7500 Bath"
              originalPrice="15000 Bath"
              discount={50}
            />
            <ProductCard
              image={Chair}
              name="Chair"
              description="Minimalist flower pot"
              price="2500 Bath"
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
