// src/components/FAQAccordion.tsx
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question:
            "Why do I have to choose a high-resolution image for my printed product?",
        answer: "Please understand that our print is entirely based on what image you share with us. Using an image with a resolution of at least 300dpi will make your product look its best.",
    },
    {
        question: "Can I make changes to my order once it has been placed?",
        answer: "Yes, you can request changes to your order within 24 hours of placing it. Please contact our support at gemcustom@gmail.com as soon as possible to make any adjustments.",
    },
    {
        question: "Can I cancel my order if I change my mind?",
        answer: "You may cancel your order within 12 hours of placing it for a full refund. After 12 hours, cancellations may incur a restocking fee of 10%.",
    },
    {
        question: "How do I track my order?",
        answer: "Once your order ships, you will receive an email with a tracking number and link. You can use that information to monitor your shipment until delivery.",
    },
    {
        question: "How long before I get my return refund?",
        answer: "After we receive and inspect your returned item, refunds are processed within 5–7 business days. You will receive a confirmation email once the refund is issued.",
    },
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column: heading & subtitle */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 dm-serif-display-regular">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-700 pr-10">
                        If you haven’t found the answer you need, email us at{" "}
                        <a
                            href="mailto:gemcustom@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            gemcustom@gmail.com
                        </a>
                        !
                    </p>
                </div>

                {/* Right column: accordion */}
                <div className="space-y-4">
                    {faqItems.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleIndex(idx)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                                >
                                    <span className="font-medium text-gray-900">
                                        {item.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-700">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
