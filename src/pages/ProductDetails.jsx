import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import dokraImg from "../assets/products/dokra.png";
import tussarImg from "../assets/products/tussar.png";
import bambooImg from "../assets/products/bamboo.png";
import paintingImg from "../assets/products/painting.png";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

const handleAuthRedirect = () => {
  navigate("/login");
};
  const products = [
    {
  id: 1,
  name: "Dokra Elephant",
  price: "₹1,499",
  image: dokraImg,
  category: "Tribal Craft",
  artisan: "Ramesh Kumar",
  description:
    "Traditional handcrafted Dokra metal art made by skilled tribal artisans of Jharkhand.",
},

{
  id: 2,
  name: "Tussar Silk Saree",
  price: "₹2,999",
  image: tussarImg,
  category: "Handloom",
  artisan: "Sunita Devi",
  description:
    "Authentic Tussar Silk Saree woven by experienced artisans using traditional techniques.",
},

{
  id: 3,
  name: "Bamboo Basket",
  price: "₹799",
  image: bambooImg,
  category: "Natural Fiber",
  artisan: "Mahesh Oraon",
  description:
    "Eco-friendly bamboo basket handcrafted by rural artisans from Jharkhand.",
},

{
  id: 4,
  name: "Tribal Painting",
  price: "₹1,299",
  image: paintingImg,
  category: "Tribal Art",
  artisan: "Anita Kumari",
  description:
    "Beautiful tribal painting inspired by Jharkhand's cultural heritage and traditions.",
},
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <>
      <Navbar />
    <div className="max-w-6xl mx-auto px-6 py-8">

      <div className="grid lg:grid-cols-[380px_1fr] gap-6 items-start">

        {/* Product Image */}
        <div className="bg-white rounded-2xl shadow-md p-4 h-105 flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-contain p-6"
  />
</div>

        {/* Product Information */}
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-175">

          <p className="text-gray-500 mb-2">
            Home / Products / {product.name}
          </p>

          <h1 className="text-2xl font-bold text-[#8B3A2A]">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            ⭐ ⭐ ⭐ ⭐ ⭐
            <span className="text-gray-500">
              (4.8 Rating)
            </span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-2xl text-[#D4A24C] font-bold">
              {product.price}
            </p>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              In Stock
            </span>
          </div>

          <p className="mt-3 text-gray-600 leading-7">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
  <p><strong>Category:</strong> {product.category}</p>
  <p><strong>Artisan:</strong> {product.artisan}</p>
</div>

<p className="mt-3">
  <strong>Origin:</strong> Jharkhand, India
</p>

          <div className="mt-3">
            <p className="text-green-600 font-medium">
              🚚 Free Delivery Across India
            </p>

            <p className="text-gray-500">
              Estimated Delivery: 3-5 Days
            </p>
          </div>

          <div className="flex gap-3 mt-4">

            <button
  onClick={handleAuthRedirect}
  className="bg-[#8B3A2A] text-white px-6 py-2 rounded-xl text-sm hover:bg-[#6d2d22] transition"
>
  Add To Cart
</button>

            <button
  onClick={handleAuthRedirect}
  className="border border-[#8B3A2A] text-[#8B3A2A] px-6 py-2 rounded-xl text-sm hover:bg-[#8B3A2A] hover:text-white transition"
>
  Buy Now
</button>

          </div>

          </div> {/* end product info */}
</div> {/* end grid */}

<div className="mt-16">   </div>

      <h2 className="text-2xl font-bold text-[#8B3A2A] mt-10 mb-4">
  Related Products
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {products
  .filter((item) => item.id !== product.id)
  .map((item) => (
    <div
      key={item.id}
      className="bg-white p-4 rounded-xl shadow-md text-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-contain mx-auto mb-3"
      />

      <h3 className="font-semibold text-[#8B3A2A]">
        {item.name}
      </h3>

      <p className="text-[#D4A24C] font-bold mt-1">
        {item.price}
      </p>

      <Link
        to={`/product-details/${item.id}`}
        className="block mt-3 bg-[#8B3A2A] text-white px-4 py-2 rounded-lg text-sm"
      >
        View Product
      </Link>
    </div>
  ))}
</div>

    </div>
    <Footer />
    </>
  );
}   
export default ProductDetails;