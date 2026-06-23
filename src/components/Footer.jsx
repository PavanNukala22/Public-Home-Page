import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#2B140D] text-white pt-10 pb-6 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#D4A24C] mb-3">
              JHARCRAFT
            </h2>

            <p className="text-gray-300 text-sm leading-7">
              Government Marketplace promoting authentic
              handicrafts, handlooms and rural enterprises
              across Jharkhand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4A24C] font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Categories</li>
              <li>Artisans</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4A24C] font-semibold text-lg mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📍 Ranchi, Jharkhand</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ support@jharcraftmart.in</li>
              <li>🌐 www.jharcraftmart.in</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#D4A24C] font-semibold text-lg mb-4">
              Support
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>FAQ</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Customer Support</li>
            </ul>
          </div>

        </div>

        {/* Visitor Counter */}
        <div className="bg-[#8B3A2A] rounded-xl py-3 px-6 mt-8 flex flex-wrap justify-center gap-8">
          <span>👥 Total Visitors : 21,878</span>
          <span>🟢 Live Visitors : 5</span>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 JHARCRAFT Government Marketplace |
            Government of Jharkhand | Empowering Rural Artisans
          </p>
        </div>
      </div>

      {/* Scroll Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-6
          right-6
          w-14
          h-14
          rounded-full
          bg-[#8B3A2A]
          text-white
          text-2xl
          shadow-lg
          hover:bg-[#6d2d22]
          hover:scale-110
          cursor-pointer
          transition
          z-50
        "
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;