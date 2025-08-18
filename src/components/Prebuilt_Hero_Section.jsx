"use client";

export default function Hero() {
  return (
    <section
      className="
        flex flex-1 
        items-start md:items-center 
        justify-start md:justify-center 
        text-center px-4 sm:px-6 
        pt-12 sm:pt-14 md:pt-0

        h-[70vh] sm:h-[75vh] md:h-screen  /* shorter height on mobile */
      "
    >
      <div className="font-[Gilroy-Medium] w-full">
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
            text-gray-900
            leading-snug sm:leading-tight
          "
        >
          Prebuilt Saas Software for <br /> Startups
        </h1>
        <p
          className="
            mt-4 sm:mt-6 
            text-sm sm:text-base md:text-lg 
            text-gray-600 
            max-w-md sm:max-w-xl md:max-w-2xl mx-auto
          "
        >
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </div>
    </section>
  );
}
