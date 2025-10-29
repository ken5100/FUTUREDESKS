import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const works = [
  {
    id: 1,
    title: "Lal Sweets Ecom Website",
    description:
      "Modern sweets store with responsive design for smooth shopping.",
    img: "/project1.png",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Custom-built storefront solution for scalable online shopping experiences.",
    img: "/cards.png",
  },
  {
    id: 3,
    title: "Music Distribution Dashboard",
    description:
      "Manage artists, releases, and revenue analytics all in one sleek dashboard.",
    img: "/cards.png",
  },
  {
    id: 4,
    title: "Hospital Appointment System",
    description:
      "Streamlined online patient bookings with doctor-side scheduling tools.",
    img: "/cards.png",
  },
  {
    id: 5,
    title: "Event Ticketing Portal",
    description:
      "End-to-end event management and ticket booking with live analytics.",
    img: "/cards.png",
  },
  {
    id: 6,
    title: "Food Delivery SaaS",
    description:
      "Multi-restaurant delivery solution with live order tracking and analytics.",
    img: "/cards.png",
  },
  {
    id: 7,
    title: "Portfolio Builder",
    description:
      "A drag-and-drop personal portfolio builder for freelancers and creators.",
    img: "/cards.png",
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description:
      "Track workouts, calories, and progress with AI-powered insights.",
    img: "/cards.png",
  },
];

export default function BestWork() {
  const navigate = useNavigate();
  const displayedWorks = works.slice(0, 6); 

  const handleViewAll = () => {
    
    navigate("/customized");

    
    setTimeout(() => {
      const scrollPosition = window.innerHeight * 1.1; 
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 500); 
  };

  return (
    <section
      className="py-16"
      style={{
        fontFamily: "Matter",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
          Social Presence
        </div>
        <h2 className="text-2xl sm:text-4xl text-gray-900 mb-12">
          Turning Visions Into Digital Reality
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`
            grid gap-x-8 gap-y-8 justify-center
            sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            grid-cols-1
            transition-all duration-700 ease-in-out
          `}
        >
          {displayedWorks.map((work, index) => (
            <div
              key={work.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 w-80 max-w-full mx-auto opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <img
                src={work.img}
                alt={work.title}
                className="rounded-xl w-full h-44 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={handleViewAll}
          className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
        >
          View All
        </button>
      </div>

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
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
