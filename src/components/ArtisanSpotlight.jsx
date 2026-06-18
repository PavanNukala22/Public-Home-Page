function ArtisanSpotlight() {
  const artisans = [
    {
      emoji: "👨‍🎨",
      name: "Ramesh Kumar",
      craft: "Dokra Art Specialist",
      district: "Ranchi",
    },
    {
      emoji: "👩‍🎨",
      name: "Sunita Devi",
      craft: "Tussar Silk Weaver",
      district: "Dumka",
    },
    {
      emoji: "👨‍🏭",
      name: "Mahesh Oraon",
      craft: "Bamboo Craftsman",
      district: "Khunti",
    },
  ];

  return (
    <section
  id="artisans"
  className="scroll-mt-32"
>

      <div className="text-center mb-14">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Meet Our Creators
        </p>

        <h2 className="heading-font text-5xl text-[#8B3A2A] mt-3">
          Artisan Spotlight
        </h2>

        <p className="text-gray-600 mt-4">
          Empowering local artisans and taking their crafts to the world.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {artisans.map((artisan, index) => (
          <div
            key={index}
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            text-center
            "
          >

            <div className="text-7xl mb-4">
              {artisan.emoji}
            </div>

            <h3 className="text-2xl font-semibold text-[#8B3A2A]">
              {artisan.name}
            </h3>

            <p className="text-[#D4A24C] mt-2">
              {artisan.craft}
            </p>

            <p className="text-gray-600 mt-2">
              📍 {artisan.district}
            </p>

            <button className="mt-6 border border-[#8B3A2A] px-6 py-2 rounded-xl hover:bg-[#8B3A2A] hover:text-white transition">
              View Profile
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ArtisanSpotlight;