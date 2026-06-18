import { Link } from "react-router-dom";

function Register() {
return ( <div className="min-h-screen bg-[#FBF7F2] flex items-center justify-center px-6">

```
  <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-xl">

    <h2 className="heading-font text-4xl text-center text-[#8B3A2A] mb-2">
      Create Account
    </h2>

    <p className="text-center text-gray-500 mb-8">
      Join Jharcraft Global Mart
    </p>

    <input
      type="text"
      placeholder="Full Name"
      required
      className="w-full border p-3 rounded-xl mb-4"
    />

    <input
      type="email"
      placeholder="Email Address"
      required
      className="w-full border p-3 rounded-xl mb-4"
    />

    <input
      type="tel"
      placeholder="Mobile Number"
      required
      className="w-full border p-3 rounded-xl mb-4"
    />

    <input
      type="password"
      placeholder="Password"
      required
      minLength="8"
      className="w-full border p-3 rounded-xl mb-4"
    />

    <input
      type="password"
      placeholder="Confirm Password"
      required
      minLength="8"
      className="w-full border p-3 rounded-xl mb-4"
    />

    <div className="flex items-center gap-2 mb-5">
      <input type="checkbox" required />

      <label className="text-sm text-gray-600">
        I agree to Terms & Conditions
      </label>
    </div>

    <button className="w-full bg-[#8B3A2A] text-white py-3 rounded-xl hover:bg-[#6d2d22] transition">
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
