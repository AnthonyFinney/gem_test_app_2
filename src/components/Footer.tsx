export default function Footer() {
    return (
        <footer className="py-16 bg-[#FAFBFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-center space-x-8">
                    <a
                        href="/about"
                        className="text-gray-600 hover:text-gray-800 text-sm"
                    >
                        About Us
                    </a>
                    <a
                        href="/privacy"
                        className="text-gray-600 hover:text-gray-800 text-sm"
                    >
                        Privacy
                    </a>
                    <a
                        href="/faqs"
                        className="text-gray-600 hover:text-gray-800 text-sm"
                    >
                        FAQs
                    </a>
                    <a
                        href="/return"
                        className="text-gray-600 hover:text-gray-800 text-sm"
                    >
                        Return
                    </a>
                </nav>
            </div>
        </footer>
    );
}
