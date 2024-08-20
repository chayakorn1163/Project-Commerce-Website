        /* eslint-disable no-unused-vars */
        import React from "react";
        import sofa1 from "../../../public/poto/AddProduct/Sofa/sofa1.png";
        import sofa2 from "../../../public/poto/AddProduct/Sofa/sofa2.png";
        import sofa3 from "../../../public/poto/AddProduct/Sofa/sofa3.png";
        import sofa4 from "../../../public/poto/AddProduct/Sofa/sofa4.png";
        import sofa5 from "../../../public/poto/AddProduct/Sofa/sofa5.png";

        const ProductDetail = () => {
        return (
        <div className="bg-gray-100 min-h-screen">
            {/* Breadcrumb */}
            <div className="container mx-auto py-6">
            <div className="flex items-center text-gray-600 space-x-2">
                <a href="#" className="hover:text-gray-800">
                Home
                </a>
                <span>›</span>
                <a href="#" className="hover:text-gray-800">
                Shop
                </a>
                <span>›</span>
                <span className="text-gray-800">EKTORP เอียคทอร์ป</span>
            </div>
            </div>

            {/* Product Details */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Images */}
            <div>
                <img src={sofa1} alt="Asgaard sofa" className="w-full rounded-lg" />
                <div className="flex mt-4 space-x-2">
                <img src={sofa2} alt="Thumb 1" className="w-1/5 cursor-pointer" />
                <img src={sofa3} alt="Thumb 2" className="w-1/5 cursor-pointer" />
                <img src={sofa4} alt="Thumb 3" className="w-1/5 cursor-pointer" />
                <img src={sofa5} alt="Thumb 4" className="w-1/5 cursor-pointer" />
                </div>
            </div>

            {/* Product Info */}
            <div>
                <h1 className="text-3xl font-semibold text-gray-800">
                EKTORP เอียคทอร์ป
                </h1>
                <p className="text-2xl text-gray-800 mt-2 font-semibold">
                15,990 บาท
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                <span className="text-yellow-500">★★★★★</span>
                <p className="text-gray-600 ml-2">(5 Customer Review)</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-4">
                โซฟา3ที่นั่ง+เก้าอี้นวมยาว, Kilanda ไลท์เบจ
                </p>

                {/* Size and Color */}
                <div className="flex mt-4">
                <div className="mr-6">
                    <h3 className="text-gray-800">Size</h3>
                    <div className="mt-2 space-x-2">
                    <button className="px-3 py-1 border rounded-lg">L</button>
                    <button className="px-3 py-1 border rounded-lg">XL</button>
                    <button className="px-3 py-1 border rounded-lg">XS</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-800">Color</h3>
                    <div className="mt-2 space-x-2">
                    <button className="w-8 h-8 bg-purple-500 rounded-full"></button>
                    <button className="w-8 h-8 bg-yellow-500 rounded-full"></button>
                    <button className="w-8 h-8 bg-black rounded-full"></button>
                    </div>
                </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center mt-6 space-x-4">
                <div className="flex items-center border rounded-lg">
                    <button className="px-3 py-1">-</button>
                    <input
                    type="text"
                    value="1"
                    className="w-12 text-center border-none focus:ring-0"
                    readOnly
                    />
                    <button className="px-3 py-1">+</button>
                </div>
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg">
                    Add To Cart
                </button>
                <button className="px-6 py-2 border rounded-lg">+ Compare</button>
                </div>

                {/* SKU, Category, Tags */}
                <div className="mt-6">
                <p>
                    <span className="font-semibold">SKU:</span> SS001
                </p>
                <p>
                    <span className="font-semibold">Category:</span> Sofas
                </p>
                <p>
                    <span className="font-semibold">Tags:</span> Sofa, Chair, Home,
                    Shop
                </p>
                </div>
            </div>
            </div>

            {/* Product Description Tabs */}
            <div className="container mx-auto px-4 py-6">
            <div className="border-b">
                <ul className="flex space-x-4 text-gray-600">
                <li className="pb-2 border-b-2 border-gray-800">Description</li>
                <li className="pb-2 cursor-pointer hover:text-gray-800">
                    Additional Information
                </li>
                <li className="pb-2 cursor-pointer hover:text-gray-800">
                    Reviews [5]
                </li>
                </ul>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">
                    พนักพิงบรรจุเส้นใยโพลีเอสเตอร์ รองรับแผ่นหลังได้อย่างนุ่มสบาย
                    และสามารถสลับใช้ได้ทั้ง 2 ด้าน เบาะนั่งบุโฟมความยืดหยุ่นสูง
                    และแผ่นใยโพลีเอสเตอร์ไฟเบอร์ นั่งสบายเป็นพิเศษ
                    และเบาะกลับคืนรูปได้ง่ายเมื่อลุกขึ้น
                    เลือกประกอบเก้าอี้นวมยาวทางซ้ายหรือขวาของชุดโซฟาได้
                    และสลับข้างได้ตามต้องการ ผ้าหุ้มถอดซักในเครื่องซักผ้าได้
                    จึงรักษาความสะอาดได้ง่าย ผ้าหุ้มมีให้เลือกหลายสี
                    จึงเลือกใช้ได้ตามความชอบและตามที่เหมาะกับบ้านของคุณ รับประกันนาน
                    10 ปี อ่านเงื่อนไขการรับประกันได้ ในโบรชัวร์รับประกันสินค้า
                </p>
            </div>
            </div>
        </div>
        );
        };

        export default ProductDetail;
