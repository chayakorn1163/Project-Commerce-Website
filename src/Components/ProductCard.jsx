    import React from "react";

    const ProductCard = ({
    image,
    name,
    description,
    price,
    originalPrice,
    discount,
    isNew,
    }) => {
    return (
        <div className="border rounded-lg overflow-hidden relative group">
        <img src={image} alt={name} className="w-full h-auto" />
        <div className="p-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold">{price}</span>
            {originalPrice && (
                <span className="text-gray-500 line-through">{originalPrice}</span>
            )}
            </div>
        </div>
        {discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
            -{discount}%
            </div>
        )}
        {isNew && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
            New
            </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
            Add to cart
            </button>
        </div>
        </div>
    );
    };

    export default ProductCard;
