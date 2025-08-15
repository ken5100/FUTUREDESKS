import { useState } from "react";
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
import "swiper/css";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Background Section */}
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/Bg2.png')",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />
      </div>

      {/* Features Section */}
      <Features />

      {/* Business Streamline Section */}
      <BusinessStreamline />

      {/* Social Platform Section */}
      <SocialPlatform />

<BestWork />
<MovingStrip />

<BestClient />

<DevTeam />

<FAQSection />

      {/* Footer Section */}

      <Footer />

    </>
  );  
}

export default App;
