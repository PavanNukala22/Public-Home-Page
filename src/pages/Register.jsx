import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [activeTab, setActiveTab] = useState("customer");
return ( <div className="min-h-screen bg-[#FBF7F2] flex items-center justify-center px-6">

```
  <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">

    <h2 className="heading-font text-2xl text-center text-[#8B3A2A] mb-2">
      Create Account
    </h2>

    <p className="text-center text-gray-500 mb-3">
  Join Jharcraft Global Mart
</p>

<div className="flex border-b mb-3">

  <button
    type="button"
    onClick={() => setActiveTab("customer")}
    className={`w-1/2 pb-3 font-semibold transition ${
      activeTab === "customer"
        ? "border-b-4 border-[#8B3A2A] text-[#8B3A2A]"
        : "text-gray-500"
    }`}
  >
    Customer
  </button>

  <button
    type="button"
    onClick={() => setActiveTab("seller")}
    className={`w-1/2 pb-3 font-semibold transition ${
      activeTab === "seller"
        ? "border-b-4 border-[#8B3A2A] text-[#8B3A2A]"
        : "text-gray-500"
    }`}
  >
    Seller
  </button>

</div>

    <input
      type="text"
      placeholder="Full Name"
      required
      className="w-full border px-4 py-2.5 rounded-xl mb-2.5"
    />

    <input
      type="email"
      placeholder="Email Address"
      required
      className="w-full border p-3 rounded-xl mb-3"
    />

    <input
      type="tel"
      placeholder="Mobile Number"
      required
      className="w-full border p-3 rounded-xl mb-3"
    />

    <input
      type="password"
      placeholder="Password"
      required
      minLength="8"
      className="w-full border p-3 rounded-xl mb-3"
    />

    <input
      type="password"
      placeholder="Confirm Password"
      required
      minLength="8"
      className="w-full border p-3 rounded-xl mb-3"
    />

    {activeTab === "seller" && (
  <>
    <input
      type="text"
      placeholder="Shop Name"
      className="w-full border p-3 rounded-xl mb-3"
    />

    <input
      type="text"
      placeholder="GST Number"
      className="w-full border p-3 rounded-xl mb-3"
    />
  </>
)}

    <div className="flex items-center gap-2 mb-5">
      <input type="checkbox" required />

      <label className="text-sm text-gray-600">
        I agree to Terms & Conditions
      </label>
    </div>

    <button className="w-full bg-[#8B3A2A] text-white py-2.5 rounded-xl hover:bg-[#6d2d22] transition">
      Register
    </button>

    <p className="text-center mt-6">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-[#8B3A2A] font-semibold hover:text-[#D4A24C]"
      >
        Login
      </Link>
    </p>

  </div>

</div>

);
}

export default Register;
