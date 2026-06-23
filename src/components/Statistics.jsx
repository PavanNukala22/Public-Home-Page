import {
  FaUsers,
  FaHandshake,
  FaBoxOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      number: "25K+",
      label: "Artisans",
      icon: <FaUsers />,
    },
    {
      number: "10K+",
      label: "SHGs",
      icon: <FaHandshake />,
    },
    {
      number: "100K+",
      label: "Products",
      icon: <FaBoxOpen />,
    },
    {
      number: "24",
      label: "Districts",
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <section className="bg-linear-to-r from-[#8B3A2A] to-[#A34834] py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-[#D4A24C] mx-auto mb-6 rounded-full"></div>
          <h2 className="heading-font text-3xl md:text-4xl text-white mb-2">
            Empowering Rural Artisans
          </h2>

          <p className="text-[#F5D8A5] text-base">
            Preserving Heritage • Creating Livelihoods • Connecting Globally
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border border-white/20
                rounded-3xl
                p-5
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center text-3xl text-[#D4A24C] mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-[#F5D8A5] text-lg mt-3">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;