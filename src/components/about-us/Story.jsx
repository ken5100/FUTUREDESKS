import React from "react";

const OurStorySection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/our-story.jpg" // 👈 your image in public/images/
            alt="Our Story"
            className="w-full h-[300px] md:h-[350px] lg:h-[380px] object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus
            cursus praesent. Commodo id amet mi. Dignissim ipsum quisque mauris
            diam. Amet odio purus orci cursus cursus praesent. Commodo id amet
            mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus
            cursus praesent. Commodo id amet mi.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus
            cursus praesent. Commodo id amet mi. Dignissim ipsum quisque mauris
            diam. Amet odio purus orci cursus cursus praesent. Commodo id amet
            mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus
            cursus praesent. Commodo id amet mi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
