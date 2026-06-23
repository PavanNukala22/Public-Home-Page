import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [activeTab, setActiveTab] = useState("customer");
  return (
    <div className="min-h-screen bg-[#FBF7F2] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

        <h2 className="heading-font text-4xl text-center text-[#8B3A2A] mb-2">
  Welcome Back
</h2>

<p className="text-center text-gray-500 mb-6">
  Login to your account
</p>

<div className="flex border-b mb-6">

  <button
    type="button"
    onClick={() => setActiveTab("customer")}
    className={`w-1/2 pb-3 font-semibold ${
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
    className={`w-1/2 pb-3 font-semibold ${
      activeTab === "seller"
        ? "border-b-4 border-[#8B3A2A] text-[#8B3A2A]"
        : "text-gray-500"
    }`}
  >
    Seller
  </button>

</div>

        <input
          type="email"
          required
          placeholder="Email Address"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          required
          minLength="8"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <div className="flex justify-between text-sm mb-6">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>

          <span className="text-[#8B3A2A] cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button className="w-full bg-[#8B3A2A] text-white py-3 rounded-xl hover:bg-[#6D2D22]">
          Login
        </button>

        <p className="text-center mt-6">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="text-[#8B3A2A] font-semibold hover:text-[#D4A24C]"
  >
    Register
  </Link>
</p>

      </div>

    </div>
  );
}

export default Login;