function Footer() {
  return (
    <footer
  id="contact"
  className="bg-[#2B140D] text-white py-12 mt-10 scroll-mt-32"
>

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#D4A24C] mb-4">
          JHARCRAFT
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-10 text-center">

  <div>
    <h3 className="text-[#D4A24C] font-semibold text-xl mb-3">
      📍 Address
    </h3>
    <p className="text-gray-300">
      Udyog Bhawan, Dhurwa,
      <br />
      Ranchi - 834004, Jharkhand
    </p>
  </div>

  <div>
    <h3 className="text-[#D4A24C] font-semibold text-xl mb-3">
      📞 Contact Number
    </h3>
    <p className="text-gray-300">
      +91 98765 43210
    </p>
  </div>

  <div>
    <h3 className="text-[#D4A24C] font-semibold text-xl mb-3">
      ✉ Email
    </h3>
    <p className="text-gray-300">
      support@jharcraftmart.in
    </p>
  </div>

  <div>
    <h3 className="text-[#D4A24C] font-semibold text-xl mb-3">
      🌐 Website
    </h3>
    <p className="text-gray-300">
      www.jharcraftmart.in
    </p>
  </div>

</div>

        <div className="bg-[#8B3A2A] text-white py-4 rounded-xl mt-10 max-w-4xl mx-auto">
  <span className="mx-6">
    👥 Total Visitors : 21,878
  </span>

  <span className="mx-6">
    🟢 Live Visitors : 5
  </span>
</div>

        <p className="text-gray-400">
          © 2026 Jharcraft Global Mart | Government of Jharkhand
        </p>

      </div>

    </footer>
  );
}

export default Footer;