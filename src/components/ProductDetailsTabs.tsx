// src/components/ProductDetailsTabs.tsx
import { useState } from "react";

const tabs = [
    { key: "overview", label: "Overview" },
    { key: "sizing", label: "Sizing" },
    { key: "packaging", label: "Packaging" },
    { key: "shipping", label: "Shipping & Free Returns" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ProductDetailsTabs() {
    const [active, setActive] = useState<TabKey>("overview");

    return (
        <div className="mx-20 my-14">
            {/* Tab list */}
            <nav className="flex space-x-8 border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActive(tab.key)}
                        className={`pb-2 font-semibold text-sm ${
                            active === tab.key
                                ? "text-gray-900 border-b-2 border-blue-600"
                                : "text-gray-600 hover:text-gray-800"
                        }`}
                    >
                        <span className="text-xl font-bold">{tab.label}</span>
                    </button>
                ))}
            </nav>

            {/* Panels */}
            <div className="pt-6">
                {active === "overview" && <OverviewPanel />}
                {active === "sizing" && <SizingPanel />}
                {active === "packaging" && <PackagingPanel />}
                {active === "shipping" && <ShippingPanel />}
            </div>
        </div>
    );
}

function OverviewPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            {/* Column 1: Overview text */}
            <div>
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="mb-4">
                    One of our most popular t-shirts for direct-to-garment
                    printing.
                </p>
                <p className="mb-4">
                    It’s eco-friendly, unisex, and available in plenty of colour
                    options. And it’s manufactured not only to high quality
                    standards but with garment decoration in mind. It’s made for
                    DTG, made for embroidery. There’s a reason why countless
                    online clothing brands use it as their staple hoodie! Find
                    yours below.
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Unisex style, medium fit. It’s for everyone.</li>
                    <li>Round drawcords in matching body color.</li>
                    <li>1x1 rib at sleeve hem and bottom hem.</li>
                    <li>Flatlock topstitch on all seams.</li>
                    <li>Kangaroo pocket with flatlock topstitch.</li>
                </ul>
            </div>

            {/* Column 2: Material & Weight */}
            <div>
                <h3 className="font-semibold mb-2">Material</h3>
                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>85% Organic ring-spun Combed Cotton</li>
                    <li>15% Recycled Polyester</li>
                </ul>

                <h3 className="font-semibold mb-2">Weight</h3>
                <p>270 gsm.</p>
            </div>

            {/* Column 3: Color information */}
            <div>
                <h3 className="font-semibold mb-2">Color information</h3>
                <p>
                    Color representation is only as accurate as the web design
                    process allows.
                </p>
            </div>
        </div>
    );
}

function SizingPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            {/* Images: Front & Back */}
            <div>
                <h3 className="font-semibold mb-4">Front and Back</h3>
                <div className="flex space-x-4">
                    <img src="/front.png" alt="Front view" className="w-1/2" />
                    <img src="/back.png" alt="Back view" className="w-1/2" />
                </div>
            </div>

            {/* Size chart table */}
            <div>
                <h3 className="font-semibold mb-4">Size Chart</h3>
                <table className="w-full text-sm text-gray-700 border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-2 text-left font-medium">
                                Measurement
                            </th>
                            <th className="p-2 text-center">XS</th>
                            <th className="p-2 text-center">S</th>
                            <th className="p-2 text-center">M</th>
                            <th className="p-2 text-center">L</th>
                            <th className="p-2 text-center">XL</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="p-2">Body Chest (inches)</td>
                            <td className="p-2 text-center">34</td>
                            <td className="p-2 text-center">36</td>
                            <td className="p-2 text-center">38</td>
                            <td className="p-2 text-center">40</td>
                            <td className="p-2 text-center">42</td>
                        </tr>
                        <tr>
                            <td className="p-2">Body Length (inches)</td>
                            <td className="p-2 text-center">20</td>
                            <td className="p-2 text-center">21</td>
                            <td className="p-2 text-center">22</td>
                            <td className="p-2 text-center">23</td>
                            <td className="p-2 text-center">24</td>
                        </tr>
                        <tr>
                            <td className="p-2">Sleeve Length (inches)</td>
                            <td className="p-2 text-center">8.5</td>
                            <td className="p-2 text-center">9</td>
                            <td className="p-2 text-center">9.5</td>
                            <td className="p-2 text-center">10</td>
                            <td className="p-2 text-center">10.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PackagingPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            {/* Eco-friendly Packaging section */}
            <div>
                <h3 className="font-semibold mb-2">Eco-friendly Packaging</h3>
                <p className="mb-4">
                    All orders are shipped in 100% plastic-free packaging.
                    Hoodies are folded neatly into these bags, to save on
                    packing materials and reduce waste we do not pack items into
                    individual bags before they are shipped in these mailers.
                </p>
                <p>
                    Our paper postal mailing bags are manufactured from
                    responsible, sustainable sources to comply with FSC
                    certification. The paper is both compostable and degradable,
                    and paper mailers can be easily recycled, making this an
                    extremely eco-friendly option. The weather-proof parcel
                    protects its contents during transit.
                </p>
            </div>

            {/* Free Gift Wrapping section */}
            <div>
                <h3 className="font-semibold mb-2">Free Gift Wrapping</h3>
                <p className="mb-4">
                    If you need extra help wrapping your order as a gift for
                    your friends and loved ones, here we are at your service.
                    And it’s totally FREE!
                </p>
                <p>
                    Just don’t forget to add a note to us for any request when
                    you check out, and we’ll make it the most perfect gift ever.
                </p>
            </div>
        </div>
    );
}

function ShippingPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            {/* Shipping section */}
            <div>
                <h3 className="font-semibold mb-2">Shipping</h3>
                <p className="mb-4">
                    The products are printed and shipped via a third party
                    printing company, with times that vary due to order volume.
                </p>
                <p className="mb-4">
                    We would currently allow up to 3 weeks for your order to
                    arrive just to be safe, though it could take much less time!
                </p>
                <p>
                    If you need the hoodie immediately than the estimated time,
                    please upgrade shipping in the cart.
                </p>
            </div>

            {/* Free Returns section */}
            <div>
                <h3 className="font-semibold mb-2">Free Returns</h3>
                <p className="mb-4">
                    If you are not 100% satisfied with your items, you may
                    return your order for a refund on all eligible merchandise
                    (Original shipping charges are non-refundable). Our return
                    policy is effective for up to 60 days from when the order is
                    fulfilled.
                </p>
                <p>
                    We want you to have the best experience when shopping online
                    with us, so if for whatever reason you’re not happy with
                    your purchase, please let us know via: gemcustom@gmail.com
                </p>
            </div>
        </div>
    );
}
