import { Link } from "react-router-dom";

function TrendingProducts() {
  const products = [
  {
    id: 1,
    emoji: "🏺",
    name: "Dhokra Art",
    price: "₹1,499",
    artisan: "Ramesh Kumar",
    rating: "4.8",
    reviews: "120",
  },
  {
    id: 4,
    emoji: "🎨",
    name: "Sohrai Painting",
    price: "₹999",
    artisan: "Anita Kumari",
    rating: "4.7",
    reviews: "85",
  },
  {
    id: 2,
    emoji: "🧵",
    name: "Tussar Silk",
    price: "₹2,499",
    artisan: "Sunita Devi",
    rating: "4.9",
    reviews: "140",
  },
  {
    id: 3,
    emoji: "🎋",
    name: "Bamboo Basket",
    price: "₹799",
    artisan: "Mahesh Oraon",
    rating: "4.6",
    reviews: "90",
  },
];

  return (
    <section
      id="products"
      className="scroll-mt-28 max-w-7xl mx-auto px-6 py-8 mb-20"
    >
      <div className="text-center mb-6">
        <p className="text-[#D4A24C] uppercase tracking-[4px]">
          Featured Collection
        </p>

        <h2 className="heading-font text-4xl md:text-5xl text-[#8B3A2A] mt-3">
          Trending Products
        </h2>

        <p className="text-gray-500 mt-4">
  Most loved handcrafted products from verified Jharkhand artisans
</p>

      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
  key={index}
  className="
    relative
    bg-white
    rounded-3xl
    p-4
    shadow-md
    hover:shadow-xl
    hover:-translate-y-2
    transition-all
    duration-300
    border
    border-gray-100
  "
>

  {index < 2 && (
  <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
    Bestseller
  </span>
)}

  <div className="text-4xl text-center mb-4">
    {product.emoji}
  </div>

  <h3 className="text-lg font-semibold text-center text-[#8B3A2A]">
    {product.name}
  </h3>

  <div className="text-center text-yellow-500 text-sm mt-2">
    ⭐ {product.rating}
    <span className="text-gray-500">
      {" "}({product.reviews} Reviews)
    </span>
  </div>

  <p className="text-center text-gray-500 mt-2">
    By {product.artisan}
  </p>

  <p className="text-center text-[#D4A24C] font-bold text-xl mt-4">
    {product.price}
  </p>

  <Link to={`/product-details/${product.id}`}>
  <button className="w-full mt-4 bg-[#8B3A2A] text-white py-1.5 text-sm rounded-xl hover:bg-[#6D2D22] transition cursor-pointer">
     View Details
  </button>
</Link>

</div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;