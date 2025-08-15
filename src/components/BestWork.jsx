import { useState } from "react";

const works = [
  { id: 1, title: "Emergency Application", img: "/cards.png" },
  { id: 2, title: "Emergency Application", img: "/cards.png" },
  { id: 3, title: "Emergency Application", img: "/cards.png" },
  { id: 4, title: "Emergency Application", img: "/cards.png" },
  { id: 5, title: "Emergency Application", img: "/cards.png" },
  { id: 6, title: "Emergency Application", img: "/cards.png" },
  { id: 7, title: "Emergency Application", img: "/cards.png" },
  { id: 8, title: "Emergency Application", img: "/cards.png" },
];

export default function BestWork() {
  const [viewAll, setViewAll] = useState(false);

  // Show only 4 cards if not view all
  const displayedWorks = viewAll ? works : works.slice(0, 4);

  return (
    <section className="py-16">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
          Social Presence
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-12">
          Some of Our Best Work
        </h2>
      </div>

      {/* Cards */}
    <div className="max-w-6xl mx-auto px-4">
  <div
    className={`
      grid gap-x-8 gap-y-6 justify-center
      sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      grid-cols-1
      transition-all duration-700 ease-in-out
    `}
  >
    {displayedWorks.map((work, index) => (
      <div
        key={work.id}
        className="bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300 w-80 max-w-full mx-auto opacity-0 animate-fadeIn relative z-10"
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: "forwards",
        }}
      >
        <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
        <p className="text-gray-500 text-sm mb-4">
          Apart from a car, a main work tool for your driver that helps to make money.
        </p>
        <img
          src={work.img}
          alt={work.title}
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>
    ))}
  </div>
</div>


      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setViewAll(!viewAll)}
          className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
        >
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
