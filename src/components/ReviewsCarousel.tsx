import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";

interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    title: string;
    message: string;
    productName: string;
    productLink: string;
    productPrice: string;
    productOriginal?: string;
    image: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Heather Watson",
        avatar: "/heather_a.jpg",
        rating: 5,
        title: "I got one for myself and one for my daughter, they’re so stinking adorable.",
        message:
            "Such a cute way to match my baby when it gets cold again. The hoodies are true to size, I ordered a youth medium and it fits PERFECTLY! Overall, 100% satisfied and will definitely order again.",
        productName: "Personalized Photo and Slogan Text Hoodie",
        productLink: "/products/custom-hoodie",
        productPrice: "$39.99",
        productOriginal: "$44.44",
        image: "/heather.jpg",
    },
    {
        id: 2,
        name: "Blanca Watts",
        avatar: "/blanca_a.jpg",
        rating: 5,
        title: "LOVE IT! So cute and arrived even faster than expected.",
        message:
            "I absolutely love this shirt! I bought one for my whole family. We are surprising the boys with Disney shirts while we travel to Disney next month.",
        productName: "Personalized Photo and Slogan Text T-Shirt",
        productLink: "/products/custom-tshirt",
        productPrice: "$24.99",
        productOriginal: "$29.99",
        image: "/blanca.jpg",
    },
    {
        id: 2,
        name: "Gavin Preston",
        avatar: "/gavin_a.jpg",
        rating: 5,
        title: "Perfect! The shipping time was perfect and the shirts are so soft",
        message:
            "My wife loved them and we had alot of people compliments on our shirts. Great quality, fast shipping, true to size. Love that you can choose your own colors. Thanks guys",
        productName: "Personalized Photo and Slogan Text T-Shirt",
        productLink: "/products/custom-tshirt",
        productPrice: "$24.99",
        productOriginal: "$29.99",
        image: "/gavin.jpg",
    },
];

export default function ReviewsCarousel() {
    const [index, setIndex] = useState(0);
    const total = reviews.length;

    const prev = () => setIndex((idx) => (idx - 1 + total) % total);
    const next = () => setIndex((idx) => (idx + 1) % total);

    const r = reviews[index];

    return (
        <section className="py-12 bg-[#FAFBFC]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dm-serif-display-regular">
                        From Our Hoodie & Tees Lovers
                    </h2>
                    <p className="mt-2 text-gray-600">
                        What customers have been saying!
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-8">
                    <div className="flex flex-col md:flex-row items-start">
                        {/* Left content */}
                        <div className="md:w-2/3">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={r.avatar}
                                    alt={r.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {r.name}
                                    </p>
                                    <div className="flex items-center">
                                        {Array.from({ length: r.rating }).map(
                                            (_, i) => (
                                                <AiFillStar
                                                    key={i}
                                                    className="h-5 w-5 text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="font-semibold text-gray-800 mb-2">
                                {r.title}
                            </p>
                            <p className="text-gray-700 mb-4">{r.message}</p>
                            <p className="text-sm text-gray-500 mb-1">
                                Purchased item:
                            </p>
                            <div className="flex items-start space-x-4 mb-4">
                                <img
                                    src="/review_m.png"
                                    alt={r.productName}
                                    className="h-12 w-12 rounded-md object-cover flex-shrink-0"
                                />
                                <div>
                                    <a
                                        href={r.productLink}
                                        className="text-sm font-medium text-blue-600 hover:underline"
                                    >
                                        {r.productName}
                                    </a>
                                    <div className="text-sm text-gray-900">
                                        {r.productPrice}{" "}
                                        {r.productOriginal && (
                                            <span className="line-through text-gray-400">
                                                {r.productOriginal}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-8">
                            {/* cropped container showing top only */}
                            <div className="overflow-hidden rounded-lg h-72">
                                <img
                                    src={r.image}
                                    alt={`${r.name} review`}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <div className="mt-6 flex justify-center space-x-6">
                        <button
                            onClick={prev}
                            className="text-gray-400 hover:text-gray-600"
                            aria-label="Previous review"
                        >
                            <AiOutlineLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={next}
                            className="text-gray-400 hover:text-gray-600"
                            aria-label="Next review"
                        >
                            <AiOutlineRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
