export default function DevTeam() {
  const teamMembers = [
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
    {
      name: "Aditya Agarwal",
      role: "Chief Design Head, Futuredesks",
      image: "/team1.png",
    },
  ];

  return (
    <section className="py-16">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
          Our Team
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
          Team Behind Wonders
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
              />

              {/* Light shadow overlay only on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

              {/* Text Section */}
              <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md py-3 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
