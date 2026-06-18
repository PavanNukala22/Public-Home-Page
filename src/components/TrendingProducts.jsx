function TrendingProducts() {
  const products = [
    {
      emoji: "🏺",
      name: "Dhokra Art",
      price: "₹1,499",
    },
    {
      emoji: "🎨",
      name: "Sohrai Painting",
      price: "₹999",
    },
    {
      emoji: "🧵",
      name: "Tussar Silk",
      price: "₹2,499",
    },
    {
      emoji: "🎋",
      name: "Bamboo Basket",
      price: "₹799",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Featured Collection
        </p>

        <h2 className="heading-font text-5xl text-[#8B3A2A] mt-3">
          Trending Products
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-7xl text-center mb-6">
              {product.emoji}
            </div>

            <h3 className="text-xl font-semibold text-center text-[#8B3A2A]">
              {product.name}
            </h3>

            <p className="text-center text-[#D4A24C] font-bold mt-2">
              {product.price}
            </p>

            <button className="w-full mt-6 bg-[#8B3A2A] text-white py-3 rounded-xl hover:bg-[#6D2D22] transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;