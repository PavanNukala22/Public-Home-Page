import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-[#FBF7F2] border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">

    {/* Logo */}
    <Link
  to="/"
  className="flex flex-col leading-none shrink-0"
>
  <h1 className="heading-font text-2xl sm:text-3xl lg:text-4xl text-[#8B3A2A] font-bold">
    JHARCRAFT
  </h1>

  <span className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">
    Global Art Marketplace
  </span>
</Link>

    {/* Search */}
    <div className="flex order-3 md:order-0 w-full md:w-auto items-center flex-1 max-w-xl">
      <input
        type="text"
        placeholder="Search handcrafted products..."
        className="w-full px-5 py-3 border border-gray-300 rounded-l-full"
      />

      <button className="bg-[#8B3A2A] px-6 py-3 rounded-r-full text-white">
        🔍
      </button>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-2">

      <Link to="/login" className="hidden md:block">
        <button className="border border-[#8B3A2A] text-[#8B3A2A] px-6 py-2 rounded-xl">
          Login
        </button>
      </Link>

      <Link to="/register" className="hidden md:block">
        <button className="border border-[#8B3A2A] text-[#8B3A2A] px-6 py-2 rounded-xl">
          Register
        </button>
      </Link>

      <Link to="/login">
        <button className="bg-[#D4A24C] text-black px-4 md:px-6 py-2 rounded-xl">
          🛒 Cart (0)
        </button>
      </Link>

    </div>

  </div>
</div>

      <div className="bg-[#1E1612] text-white">
        <div className="max-w-7xl mx-auto">

  {/* Desktop Menu */}
  <div className="hidden md:flex justify-center gap-10 py-3 text-base">

    <a href="#top" className="hover:text-[#D4A24C] transition">
      Home
    </a>

    <a href="#crafts" className="hover:text-[#D4A24C] transition">
      All Categories
    </a>

    <a href="#products" className="hover:text-[#D4A24C] transition">
      Export Collection
    </a>

    <a href="#products" className="hover:text-[#D4A24C] transition">
      New Arrivals
    </a>

    <a href="#products" className="hover:text-[#D4A24C] transition">
      Great Deals
    </a>

    <a href="#artisans" className="hover:text-[#D4A24C] transition">
      Blogs
    </a>

    <Link to="/about" className="hover:text-[#D4A24C] transition">
      About
    </Link>

    <Link to="/contact" className="hover:text-[#D4A24C] transition">
      Contact
    </Link>

  </div>

  {/* Mobile Menu */}
  <div className="md:hidden overflow-x-auto whitespace-nowrap py-3 px-4">
    <div className="flex gap-6 text-sm min-w-max">

      <a href="#top">Home</a>

      <a href="#crafts">Categories</a>

      <a href="#products">Export</a>

      <a href="#products">New</a>

      <a href="#products">Deals</a>

      <a href="#artisans">Blogs</a>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

    </div>
  </div>

</div>
      </div>
    </nav>
  );
}

export default Navbar;