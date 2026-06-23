import { useNavigate } from "react-router-dom";

function CraftSection() {
  const navigate = useNavigate();

 const crafts = [
  {
    icon: "🏺",
    title: "Tribal & Heritage Crafts",
    desc: "Dokra, Sohrai and Tribal Art",
    count: "250+ Products",
  },
  {
    icon: "🎋",
    title: "Natural Fiber Products",
    desc: "Bamboo, Cane and Jute Products",
    count: "180+ Products",
  },
  {
    icon: "🧵",
    title: "Handloom Products",
    desc: "Tussar Silk and Traditional Textiles",
    count: "320+ Products",
  },
  {
    icon: "🛍️",
    title: "Rural Enterprise",
    desc: "SHG Products and Handmade Decor",
    count: "150+ Products",
  },
];

  return (
    <section
  id="crafts"
  className="scroll-mt-16 max-w-7xl mx-auto px-6 py-22"
>
      <div className="text-center mb-6">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Explore Crafts
        </p>

        <h2 className="heading-font text-4xl md:text-5xl text-[#8B3A2A] mt-3">
          Shop By Craft Type
        </h2>

        <p className="mt-4 text-gray-500">
  Discover 900+ authentic handmade products from verified artisans across Jharkhand
</p>

      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {crafts.map((craft, index) => (
          <div
  key={index}
  onClick={() => {
    navigate("/products");
    window.scrollTo(0, 0);
  }}
  className="
    bg-white
    rounded-3xl
    p-5
    shadow-md
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-300
    border border-gray-100 border-t-4 border-t-[#D4A24C]
    hover:border-[#D4A24C]
    cursor-pointer
    group
    text-center
  "
>
  <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">
    {craft.icon}
  </div>

  <h3 className="font-bold text-xl text-[#8B3A2A] mb-2">
    {craft.title}
  </h3>

  <p className="text-gray-600 text-sm mb-4">
    {craft.desc}
  </p>

  <div className="inline-block bg-[#FBF7F2] px-4 py-1 rounded-full text-[#D4A24C] font-semibold text-sm">
    {craft.count}
  </div>

  <p className="mt-3 font-semibold text-[#8B3A2A]">
    Explore →
  </p>
</div>
        ))}
      </div>
    </section>
  );
}

export default CraftSection;