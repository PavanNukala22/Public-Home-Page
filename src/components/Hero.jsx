import artisan from "../assets/artisans.jpg";


function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[4px] text-[#D4A24C] mb-4">
            GOVERNMENT OF JHARKHAND INITIATIVE
          </p>

          <h1 className="text-5xl font-bold text-[#8B3A2A] leading-tight">
            Local Art To
            <br />
            Global Market
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-xl leading-8">
  Discover authentic handcrafted treasures created by tribal
  artisans, self-help groups and rural entrepreneurs of
  Jharkhand. Supporting local communities while preserving
  traditional heritage.
</p>

          <div className="flex flex-wrap gap-4 mt-2">

     <a
  href="#crafts"
  className="border bg-[#8B3A2A] text-[white] w-30 text-center py-3 rounded-lg inline-block hover:bg-[#6d2d22] transition duration-300"
>
  Shop Now
</a>

<button
  onClick={() => {
    document
      .getElementById("artisans")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-[#8B3A2A] text-[#8B3A2A] w-30 py-3 rounded-lg hover:bg-[#8B3A2A] hover:text-white transition duration-300 cursor-pointer"
>
  Meet Artisans
</button>

          </div>
          
<div className="flex flex-wrap gap-2 mt-3">

  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
    ✓ Government Certified
  </span>

  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
    ✓ 1000+ Products
  </span>

  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
    ✓ Trusted Artisans
  </span>

</div>

        </div>
        

        {/* RIGHT SIDE */}
        <div className="mt-6">

          <img
          src={artisan}
  alt="Artisan"
  className="w-full max-h-112.5 object-cover rounded-3xl shadow-xl -mt-10"
/>
          


        </div>

      </div>

    </section>
  );
}

export default Hero;