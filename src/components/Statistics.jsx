function Statistics() {
  const stats = [
    {
      number: "25K+",
      label: "Artisans",
    },
    {
      number: "10K+",
      label: "SHGs",
    },
    {
      number: "100K+",
      label: "Products",
    },
    {
      number: "24",
      label: "Districts",
    },
  ];

  return (
    <section className="bg-[#8B3A2A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <div key={index}>

              <h2 className="text-5xl font-bold text-[#D4A24C]">
                {item.number}
              </h2>

              <p className="text-white text-lg mt-3">
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