import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import BusinessStreamline from "./components/YoutubeSetup";
import SocialPlatform from "./components/SocialPlatform";
import BestWork from "./components/BestWork";
import MovingStrip from "./components/MovingStrip";
import BestClient from "./components/BestClient";
import DevTeam from "./components/DevTeam";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import Prebuilt from "./pages/prebuilt/Prebuilt";
import Customized from "./pages/customized/Customized";
import ProductDetails from "./pages/prebuilt/ProductDetails";
import Product1 from "./pages/prebuilt/Product1";
import ScrollToTop from "./components/ScrollToTop";
import "swiper/css";
import "./App.css";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
       
        <Route
          path="/"
          element={
            <>
             
              <div
                className="bg-cover bg-center min-h-screen"
                style={{ backgroundImage: "url('/Bg2.png')" }}
              >
                
                <Navbar />
                <HeroSection />
              </div>

            
              <Features />
              <BusinessStreamline />
              <SocialPlatform />
              <BestWork />
              <MovingStrip />
              <BestClient />
              <DevTeam />
              <FAQSection />
              <Footer />
            </>
          }
        />

       
        <Route path="/prebuilt" element={<Prebuilt />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/customized" element={<Customized />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
