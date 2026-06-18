function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      review:
        "Beautiful handcrafted products. The quality exceeded my expectations.",
    },
    {
      name: "Rahul Verma",
      review:
        "Fast delivery and authentic tribal crafts. Highly recommended.",
    },
    {
      name: "Ananya Singh",
      review:
        "A wonderful initiative supporting local artisans and rural communities.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-14">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Customer Feedback
        </p>

        <h2 className="heading-font text-5xl text-[#8B3A2A] mt-3">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((item, index) => (
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
            "
          >

            <div className="text-[#D4A24C] text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 italic mb-6">
              "{item.review}"
            </p>

            <h3 className="font-semibold text-[#8B3A2A]">
              {item.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;