import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-[#FBF7F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8B3A2A] rounded-xl flex items-center justify-center text-2xl">
              🏺
            </div>

            <div>
              <h1 className="font-bold text-2xl text-[#8B3A2A]">
                JHARCRAFT
              </h1>

              <p className="text-xs text-gray-500">
                Government Marketplace
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Search handcrafted products..."
              className="border border-gray-300 px-4 py-3 rounded-l-xl w-96 outline-none"
            />

            <button className="bg-[#8B3A2A] text-white px-6 py-3 rounded-r-xl">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-3">

            <Link to="/login">
  <button className="border border-[#8B3A2A] text-[#8B3A2A] px-8 py-3 rounded-xl font-medium hover:bg-[#8B3A2A] hover:text-white transition duration-300 shadow-sm">
    Login
  </button>
</Link>

            <Link to="/register">
  <button className="border border-[#8B3A2A] text-[#8B3A2A] px-8 py-3 rounded-xl font-medium hover:bg-[#8B3A2A] hover:text-white transition duration-300-md">
    Register
  </button>
</Link>

            <Link to="/login">
  <button className="bg-[#D4A24C] text-black px-8 py-3 rounded-xl font-medium hover:bg-[#c79234] hover:scale-105 transition duration-300 shadow-md">
    🛒 Cart (0)
  </button>
</Link>

          </div>

        </div>
      </div>

      <div className="bg-[#1E1612] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-10 py-3">

            <Link to="/" className="hover:text-[#D4A24C] transition duration-300">
              Home
            </Link>

            <a href="#crafts"className="hover:text-[#D4A24C] transition duration-300">All Categories</a>

            <a href="#products"className="hover:text-[#D4A24C] transition duration-300">Export Collection</a>

            <a href="#products"className="hover:text-[#D4A24C] transition duration-300">New Arrivals</a>

            <a href="#products"className="hover:text-[#D4A24C] transition duration-300">Great Deals</a>

            <a href="#artisans"className="hover:text-[#D4A24C] transition duration-300">Blogs</a>

            <a href="#about"className="hover:text-[#D4A24C] transition duration-300">About</a>

            <a href="#contact"className="hover:text-[#D4A24C] transition duration-300">Contact</a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;