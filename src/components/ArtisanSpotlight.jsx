import { Link } from "react-router-dom";
import ramesh from "../assets/artisans/ramesh.png";
import sunita from "../assets/artisans/sunita.png";
import mahesh from "../assets/artisans/mahesh.png";

function ArtisanSpotlight() {
  const artisans = [
    {
      image: ramesh,
      name: "Ramesh Kumar",
      craft: "Dokra Art Specialist",
      district: "Ranchi",
      rating: "4.8",
      experience: "15+ Years",
      products: "120+",
      id: "ramesh",
    },
    {
      image: sunita,
      name: "Sunita Devi",
      craft: "Tussar Silk Weaver",
      district: "Dumka",
      rating: "4.9",
      experience: "12+ Years",
      products: "95+",
      id: "sunita",
    },
    {
      image: mahesh,
      name: "Mahesh Oraon",
      craft: "Bamboo Craftsman",
      district: "Khunti",
      rating: "4.7",
      experience: "10+ Years",
      products: "80+",
      id: "mahesh",
    },
  ];

  return (
    <section
      id="artisans"
      className="scroll-mt-32 max-w-6xl mx-auto px-6 pt-6 pb-16"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Meet Our Creators
        </p>

        <h2 className="heading-font text-5xl md:text-6xl text-[#8B3A2A] mt-3">
          Artisan Spotlight
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          Discover the skilled artisans preserving Jharkhand's rich cultural
          heritage through handmade crafts, handloom textiles, bamboo products
          and traditional artwork.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {artisans.map((artisan, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-5
              max-w-70
              mx-auto
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              text-center
              border
              border-transparent
              hover:border-[#D4A24C]
              flex
              flex-col
            "
          >
            {/* Image */}
            <div className="relative flex justify-center mb-5">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="
                  w-28 h-28
                  rounded-full
                  object-cover
                  border-4 border-[#D4A24C]
                "
              />

              <div
                className="
                  absolute
                  -bottom-3
                  bg-green-500
                  text-white
                  text-xs
                  px-4
                  py-1
                  rounded-full
                  shadow-md
                "
              >
                ✓ Verified
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-[#8B3A2A] mt-3">
              {artisan.name}
            </h3>

            {/* Craft */}
            <p className="text-[#D4A24C] text-base mt-2">
              {artisan.craft}
            </p>

            {/* District */}
            <div className="mt-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                📍 {artisan.district}
              </span>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ {artisan.rating}
              </span>

              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                🏆 {artisan.experience}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              📦 {artisan.products} Products
            </p>

            {/* Button */}
            <Link
              to={`/artisan/${artisan.id}`}
              className="mt-auto pt-6"
            >
              <button
                className="
                  w-full
                  bg-[#8B3A2A]
                  text-white
                  py-2.5
                  rounded-xl
                  font-semibold
                  cursor-pointer
                  hover:bg-[#6D2D22]
                  transition-all
                  duration-300
                "
              >
                Explore Profile →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtisanSpotlight;