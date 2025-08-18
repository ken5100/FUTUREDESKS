"use client";
import Navbar from "../components/Navbar";
import MovingString from "../components/MovingStrip";

export default function Prebuilt() {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-top flex flex-col"
      style={{
        backgroundImage: "url('/bg_other.png')",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center text-center px-6">
        <div className="font-[Gilroy-Medium]">
          <h1 className="text-5xl md:text-7xl text-gray-900 leading-tight">
            Prebuilt Saas Software for <br /> Startups
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
            viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
          </p>
        </div>
      </section>

      {/* Moving String */}
      <div className="">
        <MovingString />
      </div>
    </div>
  );
}
