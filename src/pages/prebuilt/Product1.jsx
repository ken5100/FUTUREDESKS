import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/products/HeroSection";
import ContactForm from "@/components/products/Form";
import MovingString from "@/components/MovingStrip";
import VideoPage from "@/components/products/VideoPage"
import FeatureSection from "@/components/products/FeatureSection";
import TechStack from "@/components/products/TechStack";
import FAQSection from "@/components/FAQSection";
import WhyUs from "@/components/WhyUs";

function Product1() {
  return (
    <div className="w-full min-h-screen">

      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/Bg2.png')" }}
      >

        <Navbar />
        <HeroSection />


        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div id="contact" className=" md:pt-10">
        <ContactForm />
      </div>


      <div id="contact" className="pt-4 md:pt-10">
        <MovingString />
      </div>

      <div id="contact" className="pt-4 md:pt-10">
        <VideoPage />
      </div>


      <div id="contact" className="pt-4 md:pt-10">
        <FeatureSection />
      </div>

      <div id="contact" className="pt-4 md:pt-10">
        <WhyUs />
      </div>

      <div id="contact" className="pt-4 md:pt-10">
        <TechStack />
      </div>


      <div id="contact" className="pt-4 md:pt-10">
        <FAQSection />
      </div>




      {/* <div className="text-center py-4 min-h-[10vh]">
        <span className="text-gray-600 text-lg drop-shadow-md">
          © 2025 Futuredesks Services. All rights reserved.
        </span>
      </div> */}



      {/* <Routes>

        <Route path="/prebuilt" element={<h1 className="text-white text-4xl">Prebuilt Page</h1>} />
        <Route path="/customized" element={<h1 className="text-white text-4xl">Customized Page</h1>} />
        <Route path="/aboutUs" element={<h1 className="text-white text-4xl">About Us Page</h1>} />
        <Route path="/contact" element={<h1 className="text-white text-4xl">Contact Us Page</h1>} />
      </Routes> */}
    </div>
  );
}

export default Product1;
