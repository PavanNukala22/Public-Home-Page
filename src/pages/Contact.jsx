import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#D4A24C] uppercase tracking-[4px]">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#8B3A2A] mt-2">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out for product inquiries,
            artisan partnerships, bulk orders and support.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <div className="bg-white px-5 py-3 rounded-full shadow-md text-sm">
            📍 Ranchi, Jharkhand
          </div>

          <div className="bg-white px-5 py-3 rounded-full shadow-md text-sm">
            📞 +91 98765 43210
          </div>

          <div className="bg-white px-5 py-3 rounded-full shadow-md text-sm">
            ✉ support@jharcraftmart.in
          </div>

        </div>

        {/* Form + Details */}
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-5">

          {/* Contact Form */}
          <div className="bg-white p-5 rounded-2xl shadow-md h-fit">

            <h2 className="text-2xl font-bold text-[#8B3A2A] mb-5">
              Send Message
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#D4A24C]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#D4A24C]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#D4A24C]"
            />

            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-[#D4A24C]"
            ></textarea>

            <button
              className="
              w-full
              bg-[#8B3A2A]
              text-white
              py-2
              rounded-xl
              font-semibold
              hover:bg-[#6D2D22]
              transition
              "
            >
              Send Message →
            </button>

          </div>

          {/* Contact Information */}
          <div className="bg-white p-5 rounded-2xl shadow-md h-fit">

            <h2 className="text-2xl font-bold text-[#8B3A2A] mb-5">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-700">

              <div>
                <p className="font-semibold text-[#8B3A2A]">
                  📍 Address
                </p>
                <p>
                  Udyog Bhawan, Dhurwa,<br />
                  Ranchi, Jharkhand - 834004
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#8B3A2A]">
                  📞 Phone
                </p>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <p className="font-semibold text-[#8B3A2A]">
                  ✉ Email
                </p>
                <p>support@jharcraftmart.in</p>
              </div>

              <div>
                <p className="font-semibold text-[#8B3A2A]">
                  🌐 Website
                </p>
                <p>www.jharcraftmart.in</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;