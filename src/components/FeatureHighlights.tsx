// src/components/FeatureHighlights.tsx
import React from "react";

const features = [
    {
        icon: <img src="/diamond.svg" className="h-16 w-16" />,
        title: "Premium Quality",
        description:
            "Prints that last a long time. At GemCustom, we take product quality very seriously.",
    },
    {
        icon: <img src="/shipping.svg" className="h-16 w-16" />,
        title: "Free Delivery",
        description:
            "Spend from $50 to get free shipping worldwide with 24/7 order tracking.",
    },
    {
        icon: <img src="/refund.svg" className="h-16 w-16" />,
        title: "Easy Return",
        description:
            "If you’re not happy with the order, ship it back to us for an exchange - no extra cost.",
    },
    {
        icon: <img src="/eco.svg" className="h-16 w-16" />,
        title: "Green Packaging",
        description:
            "We care about our Planet, so your order will come plastic-free, recyclable & reusable!",
    },
];

export default function FeatureHighlights() {
    return (
        <section className="py-12 bg-[#FAFBFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(({ icon, title, description }) => (
                        <div key={title} className="text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-md ">
                                {icon}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
