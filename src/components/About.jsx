function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-32"
    >
      <div className="bg-[#FFF8F0] rounded-3xl shadow-xl p-12 border border-[#D4A24C]">

        <div className="text-center mb-10">
          <p className="text-[#D4A24C] uppercase tracking-[4px]">
            About Jharcraft
          </p>

          <h2 className="text-5xl font-bold text-[#8B3A2A] mt-3">
            Empowering Local Artisans
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-8 text-center">
          Jharcraft Global Mart is a platform dedicated to promoting
          handcrafted products created by artisans, tribal communities,
          self-help groups and rural enterprises across Jharkhand.
        </p>

        <p className="text-gray-700 text-lg leading-8 text-center mt-6">
          Our mission is to connect local craftsmanship with global
          customers while preserving traditional art forms and creating
          sustainable livelihoods for rural communities.
        </p>

      </div>
    </section>
  );
}

export default About;