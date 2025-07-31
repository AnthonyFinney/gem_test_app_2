import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    originalPrice?: string;
    discountPct?: number;
    colors: { label: string; value: string; bgClass: string }[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Personalized Photo & Slogan Text T-shirt",
        image: "/m_c_1.png",
        price: "$24.99",
        originalPrice: "$27.77",
        discountPct: 10,
        colors: [
            { label: "White", value: "white", bgClass: "bg-white border" },
            { label: "Black", value: "black", bgClass: "bg-black" },
            { label: "Blue", value: "blue", bgClass: "bg-blue-500" },
            { label: "Tan", value: "tan", bgClass: "bg-yellow-200" },
        ],
    },
    {
        id: 2,
        name: "Personalized Slogan Text Baseball Cap",
        image: "/m_c_2.png",
        price: "$19.99",
        originalPrice: "$22.22",
        discountPct: 10,
        colors: [
            { label: "Blue", value: "blue", bgClass: "bg-blue-500" },
            { label: "White", value: "white", bgClass: "bg-white border" },
            { label: "Tan", value: "tan", bgClass: "bg-yellow-200" },
        ],
    },
    {
        id: 3,
        name: "Personalized Photo & Text Tote Bag",
        image: "/m_c_3.png",
        price: "$20.99",
        originalPrice: "$23.33",
        discountPct: 10,
        colors: [
            { label: "Black", value: "black", bgClass: "bg-black" },
            { label: "White", value: "white", bgClass: "bg-white border" },
            { label: "Gray", value: "gray", bgClass: "bg-gray-300" },
        ],
    },
    // add more products if desired
];

export default function MatchingProductsCarousel() {
    const [startIdx, setStartIdx] = useState(0);
    const visibleCount = 3;
    const endIdx = startIdx + visibleCount;

    const prev = () => setStartIdx((idx) => Math.max(0, idx - 1));
    const next = () =>
        setStartIdx((idx) => Math.min(products.length - visibleCount, idx + 1));

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dm-serif-display-regular">
                        For Head-to-Toe Matching
                    </h2>
                    <p className="mt-2 text-gray-600">
                        The collection that goes perfectly with your hoodie!
                    </p>
                </div>

                <div className="relative overflow-visible">
                    {/* Cards container */}
                    <div className="flex justify-center space-x-2 overflow-hidden">
                        {products.slice(startIdx, endIdx).map((product) => (
                            <div
                                key={product.id}
                                className="w-96 flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 flex flex-row items-start"
                            >
                                {/* Image container */}
                                <div className="relative bg-gray-50 rounded-lg overflow-hidden w-32 h-32 flex items-center justify-center flex-shrink-0">
                                    {product.discountPct && (
                                        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-bl">
                                            -{product.discountPct}%
                                        </span>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                {/* Text content */}
                                <div className="ml-4 flex flex-col flex-1">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-baseline space-x-2 mb-3">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2 mt-auto">
                                        {product.colors.map((color) => (
                                            <button
                                                key={color.value}
                                                className={`${color.bgClass} w-5 h-5 rounded-full border-2 border-gray-300 focus:outline-none`}
                                                aria-label={color.label}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prev}
                        disabled={startIdx === 0}
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50 z-10"
                        aria-label="Previous products"
                    >
                        <AiOutlineLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                        onClick={next}
                        disabled={endIdx >= products.length}
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50 z-10"
                        aria-label="Next products"
                    >
                        <AiOutlineRight className="h-5 w-5 text-gray-700" />
                    </button>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                    <a
                        href="/products"
                        className="inline-block px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded hover:bg-blue-50"
                    >
                        View All Custom Products
                    </a>
                </div>
            </div>
        </section>
    );
}
