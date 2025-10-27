import React, { useState, useEffect } from "react";

const BusinessStreamline = () => {
  const [embedBlocked, setEmbedBlocked] = useState(false);

  useEffect(() => {
    
    const testIframe = document.createElement("iframe");
    testIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1";
    testIframe.style.display = "none";
    testIframe.onload = () => setEmbedBlocked(false);
    testIframe.onerror = () => setEmbedBlocked(true);
    document.body.appendChild(testIframe);
    setTimeout(() => document.body.removeChild(testIframe), 1000);
  }, []);

  return (
    <div
      className="relative w-full sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Frame-4.png')", fontFamily: "Matter"
      }}
    >
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-6 sm:mb-8 text-white leading-snug">
        Streamline Business with our<br />
        <span className="block ml-4 sm:ml-8 md:ml-12">Flexible options</span>
      </h1>

      
      <div className="w-full max-w-4xl h-48 sm:h-90 md:h-126 relative">
        {!embedBlocked ? (
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-lg bg-black bg-opacity-70 text-white text-center p-4">
            <p className="mb-4">Video cannot be embedded in your region.</p>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessStreamline;
