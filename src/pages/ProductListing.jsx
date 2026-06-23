import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dokraImg from "../assets/products/dokra.png";
import tussarImg from "../assets/products/tussar.png";
import bambooImg from "../assets/products/bamboo.png";
import paintingImg from "../assets/products/painting.png";

function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");
const [maxPrice, setMaxPrice] = useState(3000);
const [sortOption, setSortOption] = useState("Popular");
  const products = [
    {
      id: 1,
      name: "Dokra Elephant",
      price: "₹1,499",
      image: dokraImg,
      category: "Handicraft",
    },
    {
      id: 2,
      name: "Tussar Silk Saree",
      price: "₹2,999",
      image: tussarImg,
      category: "Handloom",
    },
    {
      id: 3,
      name: "Bamboo Basket",
      price: "₹799",
      image: bambooImg,
      category: "Natural Craft",
    },
    {
      id: 4,
      name: "Tribal Painting",
      price: "₹1,299",
      image: paintingImg,
      category: "Tribal Art",
    },
    {
  id: 5,
  name: "Wooden Mask",
  price: "₹899",
  image: paintingImg,
  category: "Tribal Art",
},
{
  id: 6,
  name: "Bamboo Lamp",
  price: "₹699",
  image: bambooImg,
  category: "Handicraft",
},
{
  id: 7,
  name: "Silk Dupatta",
  price: "₹1499",
  image: tussarImg,
  category: "Handloom",
},
{
  id: 8,
  name: "Dokra Horse",
  price: "₹1899",
  image: dokraImg,
  category: "Handicraft",
},
  ];

  let filteredProducts = products.filter((product) => {
  const productPrice = Number(
    product.price.replace(/[₹,]/g, "")
  );

  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "" ||
    product.category === selectedCategory;

  const matchesPrice =
    productPrice <= maxPrice;

  return (
    matchesSearch &&
    matchesCategory &&
    matchesPrice
  );
});

if (sortOption === "Price Low to High") {
  filteredProducts.sort(
    (a, b) =>
      Number(a.price.replace(/[₹,]/g, "")) -
      Number(b.price.replace(/[₹,]/g, ""))
  );
}

if (sortOption === "Price High to Low") {
  filteredProducts.sort(
    (a, b) =>
      Number(b.price.replace(/[₹,]/g, "")) -
      Number(a.price.replace(/[₹,]/g, ""))
  );
}

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-2 pb-8">

        {/* Breadcrumb */}
        <p className="text-gray-500 mb-1">
          Home / Products
        </p>

        <h1 className="text-3xl font-bold text-[#8B3A2A] mb-6">
  Product Listing
</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-5">

          {/* Sidebar */}
          <div
            className="
            bg-white
            rounded-xl
            shadow-lg
            p-3
            h-fit
            hover:shadow-2xl
            hover:-translate-y-2
            hover:border-[#D4A24C]
            border
            border-gray-100
            transition-all
            duration-300
            "
          >
            <h2 className="text-lg font-bold text-[#8B3A2A] mb-3">
              Filters
            </h2>

            {/* Category */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-2">
                Category
              </h3>

              <div className="space-y-3">

  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      checked={selectedCategory === "Handicraft"}
      onChange={() =>
        setSelectedCategory(
          selectedCategory === "Handicraft"
            ? ""
            : "Handicraft"
        )
      }
    />
    <span className="w-24">Handicraft</span>
  </label>

  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      checked={selectedCategory === "Handloom"}
      onChange={() =>
        setSelectedCategory(
          selectedCategory === "Handloom"
            ? ""
            : "Handloom"
        )
      }
    />
    <span className="w-24">Handloom</span>
  </label>

  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      checked={selectedCategory === "Tribal Art"}
      onChange={() =>
        setSelectedCategory(
          selectedCategory === "Tribal Art"
            ? ""
            : "Tribal Art"
        )
      }
    />
    <span className="w-24">Tribal</span>
  </label>

  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      checked={selectedCategory === ""}
      onChange={() => setSelectedCategory("")}
    />
    <span className="w-24">All</span>
  </label>

</div>
            </div>

            {/* Price */}
            <div className="mb-5">
              <h3 className="font-semibold text-lg mb-2">
                Price Range
              </h3>

              <input
  type="range"
  min="500"
  max="3000"
  value={maxPrice}
  onChange={(e) => setMaxPrice(Number(e.target.value))}
  className="w-full"
/>

<p className="text-sm text-gray-500 mt-2">
  Up to ₹{maxPrice}
</p>
            </div>

            {/* Seller Type */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Seller Type
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm">
  <input
    type="checkbox"
    checked={selectedCategory === "Handicraft"}
    onChange={() =>
      setSelectedCategory(
        selectedCategory === "Handicraft"
          ? ""
          : "Handicraft"
      )
    }
  />
  <span>Artisan</span>
</label>

                <label className="flex gap-3">
                  <input type="checkbox" />
                  SHG
                </label>

                <label className="flex gap-3">
                  <input type="checkbox" />
                  Cooperative
                </label>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="-mt-2">

            <p className="text-lg font-medium text-gray-600 mb-5">
  Showing <span className="text-[#8B3A2A] font-bold">
  {filteredProducts.length}
</span> Products
</p>

            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">

              <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="border border-gray-300 px-4 py-3 rounded-xl w-full md:w-125"
/>

              <select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
  className="border border-gray-300 px-4 py-3 rounded-xl w-full md:w-44"
>
                <option>Popular</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>

            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

              {filteredProducts.map((product) => (

                <div
                  key={product.id}
                  className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-3
                  text-center
                  min-h-82.5
                  flex
                  flex-col
                  justify-between
                  hover:shadow-2xl
                  hover:-translate-y-2
                  hover:border-[#D4A24C]
                  border
                  border-gray-100
                  transition-all
                  duration-300
                  "
                >

                  <img
  src={product.image}
  alt={product.name}
  className="w-20 h-20 object-contain mx-auto mb-3"
/>

                  <h3 className="text-xl font-semibold text-[#8B3A2A]">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {product.category}
                  </p>

                  <div className="text-yellow-500 mt-2">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-[#D4A24C] font-bold text-xl mt-3">
                    {product.price}
                  </p>

                  <Link to={`/product-details/${product.id}`}>
                    <button
                      className="
                      mt-6
                      bg-[#8B3A2A]
                      text-white
                      px-6
                      py-2
                      rounded-xl
                      hover:bg-[#6d2d22]
                      transition
                      cursor-pointer
                      "
                    >
                      View Details
                    </button>
                  </Link>

                </div>

              ))}

            </div>

            {/* Pagination */}
<div className="w-full flex flex-col items-center mt-12">

  <div className="flex gap-3">

    <button className="w-10 h-10 rounded-lg bg-[#8B3A2A] text-white">
      1
    </button>

    <button className="w-10 h-10 rounded-lg border border-gray-400">
      2
    </button>

    <button className="w-10 h-10 rounded-lg border border-gray-400">
      3
    </button>

  </div>

  <p className="text-gray-500 mt-4">
    Page 1 of 3
  </p>

</div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductListing;