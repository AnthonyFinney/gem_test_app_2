import { useState } from "react";
import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineInstagram,
} from "react-icons/ai";

// Replace these with your actual image URLs
const images = ["g_m_1.png", "g_m_2.png", "g_m_3.png", "g_m_4.png"];

export default function SocialGalleryCarousel() {
    const [startIdx, setStartIdx] = useState(0);
    const visibleCount = 4;
    const endIdx = startIdx + visibleCount;

    const prev = () => setStartIdx((idx) => Math.max(0, idx - 1));
    const next = () =>
        setStartIdx((idx) => Math.min(images.length - visibleCount, idx + 1));

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-900 text-center dm-serif-display-regular">
                    You Should Be The Next One Here!
                </h2>
                <p className="mt-2 text-gray-600 text-center">
                    Follow us at{" "}
                    <a
                        href="https://instagram.com/GemCustom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        @GemCustom
                    </a>{" "}
                    and use the hashtag <strong>#GemCustom</strong> to be
                    featured
                </p>

                {/* Carousel */}
                <div className="mt-8">
                    {/* Cards container */}
                    <div className="flex justify-center space-x-4 overflow-hidden">
                        {images.slice(startIdx, endIdx).map((src, idx) => (
                            <div
                                key={startIdx + idx}
                                className="relative w-64 h-64 flex-shrink-0 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${startIdx + idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Instagram icon on hover */}
                                <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 bg-[#00000053] transition-opacity">
                                    <AiOutlineInstagram className="text-white text-3xl" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prev/Next Arrows below */}
                    <div className="mt-6 flex justify-center space-x-6">
                        <button
                            onClick={prev}
                            disabled={startIdx === 0}
                            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
                            aria-label="Previous gallery"
                        >
                            <AiOutlineLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                            onClick={next}
                            disabled={endIdx >= images.length}
                            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
                            aria-label="Next gallery"
                        >
                            <AiOutlineRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
