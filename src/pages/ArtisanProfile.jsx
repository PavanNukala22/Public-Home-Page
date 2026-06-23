import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import rameshImg from "../assets/artisans/ramesh.png";
import sunitaImg from "../assets/artisans/sunita.png";
import maheshImg from "../assets/artisans/mahesh.png";

function ArtisanProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

const handleAuthRedirect = () => {
  navigate("/login");
};

  const artisans = {
    ramesh: {
  name: "Ramesh Kumar",
  role: "Dokra Art Specialist",
  location: "Ranchi, Jharkhand",
  experience: "15+ Years",
  products: "1200+",
  rating: "4.8",
  photo: rameshImg,
  about:
    "Ramesh Kumar is a traditional Dokra artisan specializing in handcrafted metal sculptures, tribal figurines and heritage artifacts using ancient lost-wax casting techniques.",

  productsList: [
  {
    id: 1,
    name: "Dokra Statue",
    price: "₹1,499",
    image: "🏺",
  },
  {
    id: 8,
    name: "Tribal Deer Art",
    price: "₹1,999",
    image: "🦌",
  },
  {
    id: 5,
    name: "Wall Hanging",
    price: "₹899",
    image: "🎭",
  },
],
},

sunita: {
  name: "Sunita Devi",
  role: "Tussar Silk Weaver",
  location: "Dumka, Jharkhand",
  experience: "12+ Years",
  products: "900+",
  rating: "4.9",
  photo: sunitaImg,
  about:
    "Sunita Devi is a skilled handloom artisan creating authentic Tussar silk sarees, scarves and handcrafted textiles that showcase Jharkhand's weaving heritage.",

  productsList: [
  {
    id: 2,
    name: "Tussar Silk Saree",
    price: "₹2,999",
    image: "🧣",
  },
  {
    id: 7,
    name: "Handwoven Scarf",
    price: "₹799",
    image: "🧵",
  },
  {
    id: 7,
    name: "Silk Dupatta",
    price: "₹1,299",
    image: "👗",
  },
],
},

mahesh: {
  name: "Mahesh Oraon",
  role: "Bamboo Craftsman",
  location: "Khunti, Jharkhand",
  experience: "10+ Years",
  products: "1500+",
  rating: "4.7",
  photo: maheshImg,
  about:
    "Mahesh Oraon produces eco-friendly bamboo furniture, baskets, home decor and utility products using sustainable resources.",

  productsList: [
  {
    id: 3,
    name: "Bamboo Basket",
    price: "₹799",
    image: "🧺",
  },
  {
    id: 6,
    name: "Bamboo Chair",
    price: "₹2,499",
    image: "🪑",
  },
  {
    id: 6,
    name: "Bamboo Decor",
    price: "₹1,199",
    image: "🏡",
  },
],
},
};

  const artisan = artisans[id];

  if (!artisan) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <p className="text-center text-xl text-[#8B3A2A]">Artisan not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div>
  <img
    src={artisan.photo}
    alt={artisan.name}
    className="w-44 h-44 object-cover rounded-3xl shadow-xl border-4 border-[#D4A24C]"
  />
</div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">

  <h1 className="text-4xl font-bold text-[#8B3A2A]">
    {artisan.name}
  </h1>

  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
    ✓ Verified Artisan
  </span>

</div>

            <p className="text-xl text-[#D4A24C] mt-2">
              {artisan.role}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 bg-[#FBF7F2] px-4 py-2 rounded-full border border-[#D4A24C]">
  <span>🏅</span>
  <span className="text-sm font-medium text-[#8B3A2A]">
    Government Marketplace Certified
  </span>
</div>

            <p className="mt-4 text-gray-600">
              📍 {artisan.location}
            </p>

            <p className="text-gray-600">
              ⭐ {artisan.rating} Rating
            </p>
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-xl font-bold text-[#8B3A2A] mb-4">
            About Artisan
          </h2>

          <p className="text-gray-600 leading-8">
            {artisan.about}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-[#8B3A2A]">
              {artisan.experience}
            </h3>

            <p>Experience</p>
          </div>

          <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-[#8B3A2A]">
              {artisan.products}
            </h3>

            <p>Products Created</p>
          </div>

          <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-[#8B3A2A]">
              {artisan.rating}
            </h3>

            <p>Customer Rating</p>
          </div>

        </div>

        <div className="mt-10">

  <h2 className="text-3xl font-bold text-[#8B3A2A] mb-6">
    Why Customers Trust This Artisan
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="bg-[#FBF7F2] p-4 rounded-xl">
      ✓ Verified Identity
    </div>

    <div className="bg-[#FBF7F2] p-4 rounded-xl">
      ✓ Government Certified
    </div>

    <div className="bg-[#FBF7F2] p-4 rounded-xl">
      ✓ 1200+ Products Delivered
    </div>

    <div className="bg-[#FBF7F2] p-4 rounded-xl">
      ✓ 4.8 Customer Rating
    </div>

  </div>

</div>

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-[#8B3A2A] mb-4">
            Specializations
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Handcrafted Products</li>
            <li>✔ Traditional Tribal Art</li>
            <li>✔ Heritage Craft Techniques</li>
            <li>✔ Export Quality Products</li>
          </ul>

        </div>

        <div className="mt-12">

  <h2 className="text-3xl font-bold text-[#8B3A2A] mb-6">
    Featured Products
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {artisan.productsList.map((product, index) => (
      <div
        key={index}
        className="bg-[#FBF7F2] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
      >

        <div className="text-6xl text-center">
          {product.image}
        </div>

        <h3 className="text-xl font-semibold text-center text-[#8B3A2A] mt-4">
          {product.name}
        </h3>

        <p className="text-center text-[#D4A24C] font-bold mt-2">
          {product.price}
        </p>

        <Link to={`/product-details/${product.id}`}>
        <button className="w-full mt-4 bg-[#8B3A2A] text-white py-2 rounded-xl hover:bg-[#6D2D22] transition">
          View Product
        </button>
        </Link>
       
      </div>

      
    ))}

    </div>
    </div>

    <div className="mt-14">

  <h2 className="text-3xl font-bold text-[#8B3A2A] mb-6">
    Awards & Recognition
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center shadow-md">
      <div className="text-4xl">🏆</div>
      <h3 className="font-semibold text-lg mt-3">
        State Artisan Award
      </h3>
    </div>

    <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center shadow-md">
      <div className="text-4xl">🌍</div>
      <h3 className="font-semibold text-lg mt-3">
        Export Excellence
      </h3>
    </div>

    <div className="bg-[#FBF7F2] p-6 rounded-2xl text-center shadow-md">
      <div className="text-4xl">⭐</div>
      <h3 className="font-semibold text-lg mt-3">
        Top Rated Creator
      </h3>
    </div>

  </div>


<div className="mt-14">

  <h2 className="text-3xl font-bold text-[#8B3A2A] mb-6">
    Contact Artisan
  </h2>

  <div className="bg-[#FBF7F2] p-6 rounded-2xl shadow-md max-w-md">

  <p className="mb-3 text-gray-500">
  📧 Login Required to View Email Address
</p>
  <p className="mb-3 text-gray-500">
  📞 Login Required to View Contact Number
</p>
  <p className="mb-6">📍 Jharkhand, India</p>

  <button
  onClick={handleAuthRedirect}
  className="bg-[#8B3A2A] text-white px-8 py-3 rounded-xl hover:bg-[#6D2D22] transition"
>
  Login to Contact Artisan
</button>

</div>

</div>

{/* Customer Reviews */}
<div className="mt-14">

  <h2 className="text-3xl font-bold text-[#8B3A2A] mb-6">
    Customer Reviews
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white p-8 rounded-2xl shadow-md">
      <p className="text-gray-700 text-lg italic">
        "Amazing craftsmanship and authentic tribal art."
      </p>

      <p className="mt-4 font-semibold">
        ★★★★★ - Priya S.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md">
      <p className="text-gray-700 text-lg italic">
        "Excellent quality and timely delivery."
      </p>

      <p className="mt-4 font-semibold">
        ★★★★★ - Rahul K.
      </p>
    </div>

  </div>

</div>

</div>

  </div>

</div>

  );
}

export default ArtisanProfile;