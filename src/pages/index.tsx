
import Navbar from "../components/Navbar";
import LandingPage from "../components/landingpage";
import Collections from "../components/Collections";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import ProductCard from "../components/ProductCard"; 
import SignupForm from "../components/SignupForm";
import { sampleFAQs } from "../components/FAQ";
import LoginPage from "../pages/login"

export default function Home() {
  // Dummy product data
  const dummyProduct = {
    name: "Crop Top Crochet Lace Deep V Neck Spaghetti",
    description: "A black V-shaped crochet top is a stylish and versatile piece crafted with intricate crochet stitches. The V-neckline adds a touch of elegance, while the black color makes it a timeless and versatile addition to any wardrobe.",
    price: "2000.00",
    image: "/images/crochet-sweater.jpg", // Use one of your existing images
  };

  return (
    <div className="font-caveat">
      <LoginPage />
      <Navbar />
      <SignupForm />
      <ProductCard product={dummyProduct} />
      <LandingPage />
      <Collections/>
      <AboutUs/>
      {/* Add the ProductCard component with dummy data */}
   
      <FAQ
        items={sampleFAQs}
      />
      <ContactUs/>
    </div>
  );
}
