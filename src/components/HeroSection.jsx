  import React from "react";

  function HeroSection() {
    return (
      <div className="flex flex-col items-center px-4 text-center mt-4 sm:mt-0 justify-center min-h-[calc(70vh-80px)] sm:min-h-[calc(100vh-80px)] bg-transparent">
        
        
        <img
          src="/home.png"
          alt="Hero"
          className="
            w-full max-w-[600px] 
            sm:w-3/4 sm:max-w-[500px] 
            h-auto mb-6 bg-transparent
            scale-110 sm:scale-100
          "
        />

        
        <div className="flex space-x-3 sm:space-x-4 bg-transparent">
          <button className="w-28 py-2 text-xs sm:w-44 sm:py-3 sm:text-base bg-black text-white rounded-full transition-transform transform hover:scale-105 hover:bg-gray-900" style={{
            fontFamily : "Gilroy", fontWeight: "500"
          }}>
            Let's Explore
          </button>
          <button className="w-28 py-2 text-xs sm:w-44 sm:py-3 sm:text-base bg-white text-black rounded-full border border-gray-300 transition-transform transform hover:scale-105 hover:bg-gray-100"
          
          style={{
            fontFamily : "Gilroy", fontWeight: "500"
          }}
          >
            Contact Us
          </button>
        </div>

        
        <div className="flex items-center space-x-3 sm:space-x-4 mt-5 bg-transparent">
          <div className="flex -space-x-3 bg-transparent">
            <img src="/prof1.png" alt="User 1" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-transparent" />
            <img src="/prof2.png" alt="User 2" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-transparent" />
            <img src="/prof3.png" alt="User 3" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-transparent" />
          </div>
          <p className="text-gray-700 text-xs sm:text-lg"   style={{
            fontFamily : "Matter"
          }}>
            Trusted by <span className="text-blue-500 font-semibold">10,000+</span> Clients
          </p>
        </div>

        
        <div className="flex flex-col items-center space-y-3 sm:space-y-6 w-full bg-transparent mt-36 sm:mt-14">
          
          <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-transparent">
            <div className="flex gap-x-6 sm:gap-x-8 animate-slide bg-transparent">
              <img src="/strip-1.png" alt="Logo" className="h-14 sm:h-16 w-auto bg-transparent" />
              <img src="/strip-1.png" alt="Logo" className="h-14 sm:h-16 w-auto bg-transparent" />
            </div>
          </div>

          
          <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-transparent">
            <div className="flex gap-x-6 sm:gap-x-8 animate-slide-reverse bg-transparent">
              <img src="/strip-2.png" alt="Logo" className="h-14 sm:h-16 w-auto bg-transparent" />
              <img src="/strip-2.png" alt="Logo" className="h-14 sm:h-16 w-auto bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default HeroSection;
