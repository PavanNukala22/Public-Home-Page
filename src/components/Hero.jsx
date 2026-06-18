import artisan from "../assets/artisans.jpg";


function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[4px] text-[#D4A24C] mb-4">
            GOVERNMENT OF JHARKHAND INITIATIVE
          </p>

          <h1 className="text-6xl font-bold text-[#8B3A2A] leading-tight">
            Local Art To
            <br />
            Global Market
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover handcrafted treasures from Jharkhand artisans,
            tribal communities, self-help groups and rural enterprises.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-[#8B3A2A] text-white px-8 py-3 rounded-lg">
              Shop Now
            </button>

            <button className="border border-[#8B3A2A] px-8 py-3 rounded-lg">
              Meet Artisans
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <img
          src={artisan}
  alt="Artisan"
  className="w-full h-112.5 object-cover rounded-2xl shadow-lg"
/>
          


        </div>

      </div>

    </section>
  );
}

export default Hero;