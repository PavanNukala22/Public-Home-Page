function CraftSection() {
  const crafts = [
    {
      icon: "🏺",
      title: "Tribal & Heritage Crafts",
      desc: "Dokra, Sohrai and Tribal Art",
    },
    {
      icon: "🎋",
      title: "Natural Fiber Products",
      desc: "Bamboo, Cane and Jute Products",
    },
    {
      icon: "🧵",
      title: "Handloom Products",
      desc: "Tussar Silk and Traditional Textiles",
    },
    {
      icon: "🛍️",
      title: "Rural Enterprise",
      desc: "SHG Products and Handmade Decor",
    },
  ];

  return (
    <section
  id="crafts"
  className="max-w-7xl mx-auto px-6 py-20 scroll-mt-32"
>
      <div className="text-center mb-12">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Explore Crafts
        </p>

        <h2 className="heading-font text-5xl text-[#8B3A2A] mt-3">
          Shop By Craft Type
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {crafts.map((craft, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-300
              border
              border-transparent
              hover:border-[#D4A24C]
              cursor-pointer
              group
            "
          >
            <div className="text-6xl mb-5 text-center group-hover:scale-110 transition duration-300">
              {craft.icon}
            </div>

            <h3 className="font-semibold text-xl mb-3 text-[#8B3A2A]">
              {craft.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {craft.desc}
            </p>

            <p className="mt-6 text-[#D4A24C] font-semibold">
              Explore →
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default CraftSection;