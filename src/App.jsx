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

// New pages
import Prebuilt from "./pages/Prebuilt";


import "swiper/css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              {/* Background Section */}
              <div
                className="bg-cover bg-center min-h-screen"
                style={{ backgroundImage: "url('/Bg2.png')" }}
              >
                {/* Navbar stays inside background */}
                <Navbar />
                <HeroSection />
              </div>

              {/* Other landing sections */}
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

        {/* Other Pages */}
        <Route path="/prebuilt" element={<Prebuilt />} />
        {/* <Route path="/customized" element={<Customized />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
