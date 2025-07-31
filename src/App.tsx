import "./App.css";
import FAQAccordion from "./components/FAQAccordion";
import FeatureHighlights from "./components/FeatureHighlights";
import Footer from "./components/Footer";
import MatchingProductsCarousel from "./components/MatchingProductsCarousel";
import ProductDetail from "./components/ProductDetail";
import ProductDetailsTabs from "./components/ProductDetailsTabs";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SocialGalleryCarousel from "./components/SocialGalleryCarousel";

function App() {
    return (
        <main className="min-h-screen">
            <ProductDetail />
            <ProductDetailsTabs />
            <FeatureHighlights />
            <ReviewsCarousel />
            <MatchingProductsCarousel />
            <FAQAccordion />
            <SocialGalleryCarousel />
            <Footer />
        </main>
    );
}

export default App;
