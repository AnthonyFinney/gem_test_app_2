// src/components/ProductDetail.tsx
import React, { useRef, useState } from "react";
import { FaChevronUp, FaChevronDown, FaStar, FaBell } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillStar, AiFillGift, AiFillHeart } from "react-icons/ai";

const thumbnailImgs = ["/img1.png", "/img2.png", "/img3.png"];

const colorOptions = [
    {
        name: "White",
        value: "white",
        bg: "bg-white",
        border: "border-gray-300",
    },
    {
        name: "Black",
        value: "black",
        bg: "bg-black",
        border: "border-gray-800",
    },
    {
        name: "Blue",
        value: "blue",
        bg: "bg-blue-500",
        border: "border-blue-700",
    },
    {
        name: "Navy",
        value: "navy",
        bg: "bg-blue-900",
        border: "border-blue-900",
    },
    {
        name: "Tan",
        value: "tan",
        bg: "bg-yellow-700",
        border: "border-yellow-800",
    },
];

const sizeOptions = ["S", "M", "L", "XL"];

const featureList = [
    { icon: <AiFillStar />, text: "Dress yourself up" },
    { icon: <AiFillGift />, text: "Anniversary gifts for your loved one" },
    {
        icon: <AiFillHeart />,
        text: "Birthday or celebration gifts for friends and family",
    },
];

const ProductDetail: React.FC = () => {
    const [thumbIndex, setThumbIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(thumbnailImgs[0]);
    const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
    const [selectedSize, setSelectedSize] = useState("XL");
    const [customText, setCustomText] = useState("");
    const [quantity, setQuantity] = useState(1);

    const thumbListRef = useRef<HTMLDivElement>(null);

    const selectAt = (newIndex: number) => {
        const idx = Math.max(0, Math.min(thumbnailImgs.length - 1, newIndex));
        setThumbIndex(idx);
        setSelectedImage(thumbnailImgs[idx]);
        // scroll the chosen thumbnail into view
        const btn = thumbListRef.current?.children[idx] as HTMLElement;
        btn?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const scrollUp = () => selectAt(thumbIndex - 1);
    const scrollDown = () => selectAt(thumbIndex + 1);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: thumbnails + main image */}
            <div className="flex items-start">
                <div className="flex flex-col items-center">
                    {/* Up arrow */}
                    <button
                        onClick={scrollUp}
                        className="p-2 text-gray-500 hover:text-gray-700 bg-gray-100 px-6"
                    >
                        <FaChevronUp className="w-5 h-5" />
                    </button>

                    {/* Scrollable thumbnail list */}
                    <div
                        ref={thumbListRef}
                        className="flex flex-col space-y-4 overflow-y-auto h-[144px] my-2"
                    >
                        {thumbnailImgs.map((src, idx) => (
                            <button
                                key={src}
                                onClick={() => selectAt(idx)}
                                className={`w-16 h-16 rounded overflow-hidden focus:outline-none transition-transform ${
                                    thumbIndex === idx
                                        ? "ring-2 ring-orange-500"
                                        : "border border-gray-200"
                                }`}
                            >
                                <img
                                    src={src}
                                    alt="Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Down arrow */}
                    <button
                        onClick={scrollDown}
                        className="p-2 text-gray-500 hover:text-gray-700 bg-gray-100 px-6"
                    >
                        <FaChevronDown className="w-5 h-5" />
                    </button>
                </div>

                {/* Main image */}
                <div className="relative ml-6 w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={selectedImage}
                        alt="Main product"
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* Right: product details */}
            <div className="flex flex-col justify-start">
                {/* Status */}
                <div className="flex items-center text-base text-blue-600 font-medium mb-2">
                    <FaBell className="w-5 h-5 mr-2" />
                    <span>
                        Selling fast! 5 people have this in their carts.
                    </span>
                </div>

                {/* Title & price */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 dm-serif-display-regular">
                    Personalized Photo and Slogan Text Hoodie
                </h1>
                <div className="flex items-baseline space-x-4 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                        $39.99
                    </span>
                    <span className="text-gray-500 line-through">$44.44</span>
                    <span className="ml-auto mr-8 relative inline-flex items-center text-sm font-medium">
                        {/* 1) Red circle */}
                        <span className="absolute left-0 flex items-center justify-center w-10 h-10 bg-[#EA3335] rounded-full">
                            <RiShoppingBag3Fill className="w-6 h-6 text-white" />
                        </span>
                        {/* 2) White pill for text, no left border */}
                        <span className="ml-7 inline-flex items-center h-6 px-4 bg-white border border-[#EA3335] border-l-0 rounded-full text-[#EA3335]">
                            In stock
                        </span>
                    </span>
                </div>

                {/* Review */}
                <div className="bg-gray-100 p-4 rounded mb-6">
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className="text-yellow-400 w-5 h-5"
                            />
                        ))}
                    </div>
                    <p className="text-gray-700">
                        I love this! When I saw this hoodie, I knew I had to get
                        it. It makes me so confident every time I wear it.
                        Thanks
                    </p>
                    <p className="font-bold">Wendy N.</p>
                </div>

                {/* Color */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
                    <div className="flex space-x-3">
                        {colorOptions.map(({ name, value, bg, border }) => (
                            <button
                                key={value}
                                onClick={() => setSelectedColor(value)}
                                className={`${bg} ${border} w-8 h-8 rounded-full focus:outline-none transform hover:scale-110 transition ${
                                    selectedColor === value
                                        ? "ring-2 ring-offset-2 ring-orange-400"
                                        : ""
                                }`}
                                aria-label={name}
                            />
                        ))}
                    </div>
                </div>

                {/* Size */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Size</h3>
                    <div className="flex space-x-3">
                        {sizeOptions.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSelectedSize(s)}
                                className={`px-3 py-1 border rounded-full focus:outline-none transition ${
                                    selectedSize === s
                                        ? "border-orange-500 text-orange-500"
                                        : "border-gray-300 text-gray-700 hover:border-gray-500"
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom text */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-1">
                        Type your custom text
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                        Please note the font size and color in parentheses after
                        your text. E.g. My BFF (30, Black)
                    </p>
                    <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="My custom hoodie"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                </div>

                {/* Perfect to */}
                <div className="mb-6 space-y-2">
                    {featureList.map(({ icon, text }) => (
                        <div
                            key={text}
                            className="flex items-center space-x-2 text-gray-700"
                        >
                            <span className="text-xl text-blue-700">
                                {icon}
                            </span>
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center border rounded overflow-hidden">
                        <button
                            onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                            }
                            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition"
                        >
                            −
                        </button>
                        <span className="px-4 py-1">{quantity}</span>
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition"
                        >
                            +
                        </button>
                    </div>
                    <button className="flex-1 bg-blue-800 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
                        GET MY HOODIE
                    </button>
                </div>

                {/* Payments */}
                <div className="mb-6">
                    {/* 1) Text with lines */}
                    <div className="flex items-center mb-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-sm font-semibold text-gray-700">
                            Guaranteed SAFE Checkout
                        </span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* 2) Icons */}
                    <div className="flex justify-center items-center space-x-4">
                        <img
                            src="/aecard.png"
                            alt="American Express"
                            className="h-6"
                        />
                        <img src="/visacard.svg" alt="Visa" className="h-6" />
                        <img
                            src="/mastercard.svg"
                            alt="MasterCard"
                            className="h-6"
                        />
                        <img
                            src="/apple-pay.svg"
                            alt="Apple Pay"
                            className="h-6"
                        />
                        <img
                            src="/google-pay.svg"
                            alt="Google Pay"
                            className="h-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
