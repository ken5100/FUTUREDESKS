function Features() {
  const featuresData = [
    {
      img: "/features1.png",
      title: "Custom Development",
      description:
        "Monitor your finances live with clear, intuitive dashboards.",
    },
    {
      img: "/features2.png",
      title: "SaaS Prebuilt @ 50,000 /-",
      description:
        "Monitor your finances live with clear, intuitive dashboards.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-transparent">
      {/* Tag */}
      <div className="px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
        Features
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-semibold text-center text-gray-800 mb-10">
        Streamline Business with our <br className="hidden sm:block" />
        Flexible options
      </h2>

      {/* Cards */}
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 justify-center">
        {featuresData.map((feature, idx) => (
          <article
            key={idx}
            className="bg-[url('/paper-texture.png')] bg-cover bg-white flex flex-col items-center rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200 p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] max-w-[500px] mx-auto opacity-0 animate-fadeInUp"
          >
            {/* Image */}
            <div className="flex justify-center items-center h-[200px] sm:h-[250px] w-full mb-4 overflow-hidden">
              <img
                src={feature.img}
                alt={feature.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {/* Text */}
            <div className="w-full text-left px-2">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default Features;
